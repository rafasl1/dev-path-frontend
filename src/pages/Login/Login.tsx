import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserAPI } from '../../types/User';
import './styles.css'

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("loged-user")
        if (user) {
            navigate("/perfil")
        }
    }, [])

    const onSubmit = async (formData: any) => { 
        console.log(formData) 

        try {
            const response = (await axios.get("https://dev-path.herokuapp.com/user/" + formData.email + "/" + formData.password));
    
            if(response.status == 200) {
                localStorage.setItem("loged-user", JSON.stringify(response.data))
                navigate("/perfil");
            } else {
                alert("Erro ao fazer login.\nVerifique se os campos email e senha estão corretos!")
            }
        } catch(e) {
            alert("Erro ao fazer login.\nVerifique se os campos email e senha estão corretos!")
        }
    };

    return (
        <div id="registration-div-page">
            <div id="registration-box">
                <h1 id="registration-box-title">{"Faça seu Login!"}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-form">
                        <label>
                            Email:<br/>
                            <input className="input-text" {...register("email",  { required: true })} />   
                        </label>
                    </div>
                    <div className="input-form">
                        <label>
                            Senha:<br/>
                            <input className="input-text" type="password" {...register("password",  { required: true })} />    
                        </label>
                    </div>
                    <input id="submit-button" type="submit"  /><br/>
                    <Link id="registration-link" to={"/cadastro"}>Não tem conta? Crie a sua!</Link>
                </form>
            </div>
        </div>
    )
}