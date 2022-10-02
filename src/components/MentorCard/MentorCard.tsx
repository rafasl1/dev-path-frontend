import { MentorCardContent } from "../../types/MentorCardContent";
import './styles.css'

export function MentorCard (props: MentorCardContent) {
    return (
        <div id="card">
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <div className="cardContent">{props.role}</div>
            <div className="cardContent">{props.experienceTime}</div>
            <b className="cardContent">{"Valor por hora: R$" + props.hourValue + ",00"}</b>
        </div>
    )
}