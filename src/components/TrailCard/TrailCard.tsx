import { TrailCardInfo } from '../../types/TrailCardInfo'
import { redirect } from '../../utils/redirect'
import './styles.css'

export function TrailCard(props: TrailCardInfo) {
    return (
        <div id="trail-card" onClick={() => {redirect("find-your-path/trail")}}>
            <h3 id='card-title'>{props.trailTitle}</h3>
            <b>O que você vai aprender?</b>
            <div id='trail-learn-list'>
                <ul>
                    {props.learnList.map(learnItem => {
                        return (<li>{"> " + learnItem}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}