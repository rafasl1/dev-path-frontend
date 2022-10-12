import { TrailInfo } from "../../types/Trail";

export function Trail({ title, hours, levels, topics, carrerInfo, salaryRange, opportunities }: TrailInfo) {
    return (
        <main>

            <div id="main-trail">

                <h1>Trilha{" " + title}</h1>

                <div>
                    <p>Tempo estimado: {hours}</p>
                    <p>Níveis: {levels}</p>
                </div>

                <div id="main-trail-topics">
                    <ul>
                        {topics.map(topic => (<li>{topic}</li>))}
                    </ul>
                </div>

            </div>

            <div>
                <h1>Conheça a carreira</h1>
                <p>{carrerInfo}</p>

                <h1>Faixa salarial da carreira:</h1>
                <p>Salários entre R${salaryRange[0]} - R${salaryRange[1]}</p>

                <h1>Vagas na área:</h1>
                {opportunities.map(opportunities => (
                    <div>
                        <h3>{opportunities.title}</h3>
                        <p>{opportunities.location}</p>
                        <p>{opportunities.type}</p>
                        <p>{opportunities.seniority}</p>
                    </div>
                ))}

            </div>

        </main>
    )
}