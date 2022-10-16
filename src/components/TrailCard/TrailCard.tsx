import { TrailCardInfo } from '../../types/TrailCardInfo'
import './styles.css'

export function TrailCard(props: TrailCardInfo) {
    return (
        <div id="trail-card">
            <h3 id='card-title'>{props.trailTitle}</h3>
            <b>O que você vai aprender?</b>
            <ul>
                {props.learnList.map(learnItem => {
                    return (<li>{"> " + learnItem}</li>)
                })}
            </ul>
        </div>
    )
}