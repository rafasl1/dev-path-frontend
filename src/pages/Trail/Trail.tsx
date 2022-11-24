import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from 'axios';
import Modal from 'react-modal';
import XIcon from '../../assets/x-icon.svg'
import Back from '../../assets/back.svg'

import { TopicAPI, TrailAPI } from "../../types/TrailAPI";
import './styles.css'


export function Trail() {

    const [trail, setTrail] = useState<TrailAPI>()
    const [topicOpened, setTopicOpened] = useState<TopicAPI>()
    let { trailId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getTrailData(trailId || "")
    }, [])

    useEffect(() => {
        
    }, [topicOpened])
    
    const getTrailData = async (trailId: string) => {
        const data = (await axios.get("https://dev-path.herokuapp.com/trail/" + trailId)).data;
        setTrail(data)
    }

    const getModalStyle = () => {
        let style = Modal.defaultStyles
        if (style.content) {
            style.content.margin = 'auto'
            style.content.width = 'fit-content'
            style.content.height = 'fit-content'
            style.content.textAlign = 'center'
            style.content.marginTop = '12%'
        }
        return style
    }

    const closeModal = () => {
        setTopicOpened(undefined)
    }

    if(!trail) {
        return <h1>Carregando dados...</h1>
    }


    return (
        <main id="trail-page">

            <div id="main-trail">

                <img src={Back} id="back-icon" onClick={() => navigate("/find-your-path")}/>
                <h1 id="main-trail-title">Trilha{" " + trail.name}</h1>

                <div id="main-trail-subtitle">
                    <b id="main-trail-subtitle-time">Tempo estimado: {trail.duration} horas</b>
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
                        isOpen={topicOpened != undefined} 
                        style={getModalStyle()}
                    >
                        <div id="modal-div-x-icon">
                            <img src={XIcon} id="x-icon" onClick={() => closeModal()}/>
                        </div>
                        <h1 id="modal-title">Onde você pode estudar sobre<br/>{topicOpened.name}:</h1>
                        {topicOpened.subTopics.map(subTopic => {
                            return (
                                <div id="modal-div-subtopic-item-div">
                                    <label className="modal-div-subtopic-item-input-label">
                                        <input type="checkbox" className="modal-div-subtopic-item-input" />
                                        <a href={""+subTopic.content} target="_blank" className="modal-subtopic-item-name">{subTopic.name}</a>
                                    </label>
                                </div>
                            )
                        })}
                        <button id="modal-submit-button" type="button">Atualizar</button>
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
                    <b id="carrer-salary-box-text">Salários {trail.averageSalary}</b>
                </div>

                <div className="carrer-box">
                    <h1 className="carrer-title">Vagas na área:</h1>
                    {trail.jobs.map((opportunities, index) => {
                        return (
                        <div key={index} id="carrer-opportunity-card">
                            <h3><a className="carrer-title-link" target="_blank" href={opportunities.link + ""}>{opportunities.title}</a></h3>
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