import { MentorCardContent } from "../../types/MentorCardContent";
import './styles.css'

export function MentorCard (props: MentorCardContent) {
    return (
        <div id="card">
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <p>{props.role}</p>
            <p>{props.experienceTime}</p>
            <b>{"Valor por hora: R$" + props.hourValue + ",00"}</b>
        </div>
    )
}