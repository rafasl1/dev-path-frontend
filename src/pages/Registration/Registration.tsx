import { useForm } from "react-hook-form";
import './styles.css'

export function Registration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(watch("example"));

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