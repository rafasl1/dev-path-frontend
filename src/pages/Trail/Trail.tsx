import { TrailInfo } from "../../types/Trail";
import './styles.css'


export function Trail({ title, hours, levels, topics, carrerInfo, salaryRange, opportunities }: TrailInfo) {

    return (
        <main>

            <div id="main-trail">

                <h1 id="main-trail-title">Trilha{" " + title}</h1>

                <div id="main-trail-subtitle">
                    <b id="main-trail-subtitle-time">Tempo estimado: {hours}</b>
                    <b>Níveis: {levels}</b>
                </div>

                <div id="main-trail-topics">
                    <ul id="main-trail-topics-list">
                        {topics.map((topic, index) => { 
                            return (
                                <div id="main-trail-topic-list-item">
                                    <div id="main-trail-topic-ball"><p>{index + 1}</p></div>
                                    <li id="main-trail-topic-text">{topic}</li>
                                </div>
                            )}
                        )}
                    </ul>
                </div>

            </div>

            <div>
                <h1>Conheça a carreira</h1>
                <p>{carrerInfo}</p>

                <h1>Faixa salarial da carreira:</h1>
                <p>Salários entre R${salaryRange[0]} - R${salaryRange[1]}</p>

                <h1>Vagas na área:</h1>
                {opportunities.map(opportunities => {
                    return (
                    <div>
                        <h3>{opportunities.title}</h3>
                        <p>{opportunities.location}</p>
                        <p>{opportunities.type}</p>
                        <p>{opportunities.seniority}</p>
                    </div>
                ) })}

            </div>

        </main>
    )
}