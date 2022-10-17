import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { backendTrail } from "../../mocks/backendTrail";
import { cloudTrail } from "../../mocks/cloudTrail";
import { dataAnalystTrail } from "../../mocks/dataAnalystTrail";
import { dataBaseTrail } from "../../mocks/dataBaseTrail";
import { frontendTrail } from "../../mocks/frontendTrail";
import { qaTrail } from "../../mocks/qaTrail";
import { TrailInfo } from "../../types/Trail";
import './styles.css'


export function Trail() {

    const { trail } = useParams()
    const [pageTrail, setPageTrail] = useState<TrailInfo>(backendTrail)

    useEffect(() => {
        const trailsMap = new Map()
        trailsMap.set("desenvolvedor-backend", backendTrail)
        trailsMap.set("desenvolvedor-frontend", frontendTrail)
        trailsMap.set("cloud-engineer", cloudTrail)
        trailsMap.set("analista-de-dados", dataAnalystTrail)
        trailsMap.set("banco-de-dados", dataBaseTrail)
        trailsMap.set("qa", qaTrail)

        const trailToShow = trailsMap.get(trail)
        setPageTrail(trailToShow)

        console.log("Trilha: " + trail)
    }, [pageTrail, trail])

    useEffect(() => {

    }, [])

    return (
        <main id="trail-page">

            <div id="main-trail">

                <h1 id="main-trail-title">Trilha{" " + pageTrail.title}</h1>

                <div id="main-trail-subtitle">
                    <b id="main-trail-subtitle-time">Tempo estimado: {pageTrail.hours}</b>
                    <b>Níveis: {pageTrail.levels}</b>
                </div>

                <div id="main-trail-topics">
                    <ul id="main-trail-topics-list">
                        {pageTrail.topics.map((topic, index) => { 
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
                    <p id="carrer-about-text">{pageTrail.carrerInfo}</p>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Faixa salarial da carreira:</h1>
                    <b id="carrer-salary-box-text">Salários entre R${pageTrail.salaryRange[0]} - R${pageTrail.salaryRange[1]}</b>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Vagas na área:</h1>
                    {pageTrail.opportunities.map(opportunities => {
                        return (
                        <div id="carrer-opportunity-card">
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