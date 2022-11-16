import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Modal from 'react-modal';

import { TopicAPI, TrailAPI } from "../../types/TrailAPI";
import './styles.css'


export function Trail() {

    const [trail, setTrail] = useState<TrailAPI>()
    const [topicOpened, setTopicOpened] = useState<TopicAPI>()
    let { trailId } = useParams();

    useEffect(() => {
        getTrailData(trailId || "")
    }, [])
    
    const getTrailData = async (trailId: string) => {
        const data = (await axios.get("https://dev-path.herokuapp.com/trail/" + trailId)).data;
        setTrail(data)
    }

    const getModalStyle = () => {
        let style = Modal.defaultStyles
        if (style.content) {
            style.content.width = '240px'
            style.content.height = '240px'
            style.content.textAlign = 'center'
            style.content.marginLeft = '45%'
            style.content.marginTop = '15%'
        }
        return style
    }

    if(!trail) {
        return <h1>Carregando dados...</h1>
    }


    return (
        <main id="trail-page">

            <div id="main-trail">

                <h1 id="main-trail-title">Trilha{" " + trail.name}</h1>

                <div id="main-trail-subtitle">
                    <b id="main-trail-subtitle-time">Tempo estimado: {trail.duration}</b>
                    <b>Níveis: {trail.topics.length}</b>
                </div>

                <div id="main-trail-topics">
                    <ul id="main-trail-topics-list">
                        {trail.topics.reverse().map((topic, index) => { 
                            return (
                                <div key={index} id="main-trail-topic-list-item" onClick={() => setTopicOpened(topic)}>
                                    <div id="main-trail-topic-ball"><p>{index + 1}</p></div>
                                    <li id="main-trail-topic-text">{topic.name}</li>
                                </div>
                            )}
                        )}
                    </ul>
                </div>

                {topicOpened && (
                    <Modal 
                        isOpen={true} 
                        style={getModalStyle()}
                    >
                    {topicOpened.subTopics.map(subTopic => {
                        return (
                            <div>
                                <label>
                                    <input type="checkbox" />
                                    {subTopic.name}
                                </label>
                            </div>
                        )
                    })}
                </Modal>
                )}

            </div>

            <div id="carrer">
                <div className="carrer-box">
                    <h1 className="carrer-title">Conheça a carreira</h1>
                    <p id="carrer-about-text">{trail.description}</p>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Faixa salarial da carreira:</h1>
                    <b id="carrer-salary-box-text">Salários entre R${trail.averageSalary}</b>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Vagas na área:</h1>
                    {trail.jobs.map((opportunities, index) => {
                        return (
                        <div key={index} id="carrer-opportunity-card">
                            <h3>{opportunities.title}</h3>
                            <p className="carrer-opportunity-text">{opportunities.location}</p>
                            <p  className="carrer-opportunity-text">{opportunities.period}</p>
                            <p  className="carrer-opportunity-text">{opportunities.role}</p>
                        </div>
                    ) })}
                </div>

            </div>

        </main>
    )
}