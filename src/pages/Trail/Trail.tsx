import { TrailInfo } from "../../types/Trail";
import './styles.css'


export function Trail({ title, hours, levels, topics, carrerInfo, salaryRange, opportunities }: TrailInfo) {

    return (
        <main id="trail-page">

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

            <div id="carrer">
                <div className="carrer-box">
                    <h1 className="carrer-title">Conheça a carreira</h1>
                    <p id="carrer-about-text">{carrerInfo}</p>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Faixa salarial da carreira:</h1>
                    <b id="carrer-salary-box-text">Salários entre R${salaryRange[0]} - R${salaryRange[1]}</b>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Vagas na área:</h1>
                    {opportunities.map(opportunities => {
                        return (
                        <div>
                            <h3>{opportunities.title}</h3>
                            <p className="carrer-opportunity-text">{opportunities.location}</p>
                            <p  className="carrer-opportunity-text">{opportunities.type}</p>
                            <p  className="carrer-opportunity-text">{opportunities.seniority}</p>
                        </div>
                    ) })}
                </div>

            </div>

        </main>
    )
}