import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { UserAPI } from '../../types/User';
import './styles.css'

export function Registration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (formData: any) => { 
        console.log(formData) 

        const data: UserAPI = (await axios.post("https://dev-path.herokuapp.com/user/create", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            isMentor: false
        })).data;

        if(data) {
            localStorage.setItem("loged-user", JSON.stringify(data))
            navigate("/perfil");
        }


    };
    console.log(watch("example"));

    useEffect(() => {
        const user = localStorage.getItem("loged-user")
        if (user) {
            navigate("/perfil")
        }
    }, [])


    return (
        <div id="registration-div-page">
            <div id="registration-box">
                <h1 id="registration-box-title">{"Cadastre-se no <DevPath />!"}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-form">
                        <label>
                            Nome:<br/>
                            <input className="input-text" {...register("name",  { required: true })}  />    
                        </label>
                    </div>
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
                    <input id="submit-button" type="submit"  />
                </form>
            </div>
        </div>
    )
}