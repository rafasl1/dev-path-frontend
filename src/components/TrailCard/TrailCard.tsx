import { Link } from 'react-router-dom'
import './styles.css'
import { TrailAPI } from '../../types/TrailAPI';
import { getSlugFromName } from '../../utils/slug';


export function TrailCard(trail: TrailAPI) {
    return (
        <Link to={"/find-your-path/" + trail.id.toString()} itemProp=''>
        
            <div id="trail-card">
                <h3 id='card-title'>{trail.name}</h3>
                <b>O que você vai aprender?</b>
                <div id='trail-learn-list'>
                    <ul>
                        {trail.topics.slice(0,3).map((topic, index) => {
                            return (<li key={index}>{topic.name.substring(0,30)}</li>)
                        })}
                    </ul>
                </div>
            </div>
        
        </Link>


    )
}