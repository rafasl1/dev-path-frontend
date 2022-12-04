import axios from 'axios'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Man1 from '../../assets/man1.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard'
import { MentorAPI } from '../../types/MentorAPI'
import { UserAPI } from '../../types/User';
import './styles.css'

export function Mentor() {
    const [mentorData, setMentorData] = useState<MentorAPI>()
    const [dictionary, setDictionary] = useState<Map<String, String>>()
    const navigate = useNavigate();
    let { mentorId } = useParams();
    

    useEffect(() => {
        const scheduleStatusDictionary = new Map<String, String>()
        scheduleStatusDictionary.set("PENDING", "Pendente")
        scheduleStatusDictionary.set("AVAILABLE", "Disponível")
        scheduleStatusDictionary.set("RESERVED", "Reservado")
        scheduleStatusDictionary.set("CANCELLED", "Cancelado")
        setDictionary(scheduleStatusDictionary)
        updateMentorData()
    }, [])

    const updateMentorData = async () => {
        const data: any = (await axios.get("https://dev-path.herokuapp.com/mentor/" + mentorId)).data;
        setMentorData(data)
    }


    if(!mentorData) {
        return <h1>Carregando dados...</h1>
    }
    
    return (
        <main id='profile-page'>

            <div id='profile-user-info-div'>
                <img id='user-avatar' src={Man1} /><br/>
                <button id='user-tag'>#Mentor</button>
                <h1 id='profile-mentor-name'>{mentorData?.user.name}</h1>
                <h2 className='profile-mentor-subtitle'>Apresentação</h2>
                <p>Especialista em desenvolvimento backend com 7 anos de experiência. Gosto do ambiente inovador e de rápidas mudanças oferecidas por startups e todos os desafios que esse rítimo proporcionam para o time de desenvolvimento.</p>
                <h2 className='profile-mentor-subtitle'>Experiência</h2>
                <ul>
                    <li>Desenvolvimento Java</li>
                    <li>Desenvolvimento Kotlin</li>
                    <li>AWS</li>
                </ul>
            </div>

            <div id='profile-mentor-schedules-div'>
                <h1 id='profile-user-trail-title'>Escolha seu horário:</h1>

                { mentorData.schedules.length != 0 ? (
                    <div id='trails-div-list'>
                        {mentorData.schedules.map((schedule, index) => (
                            <div className='mentor-schedule-item'>
                                <p>{schedule.date}</p>
                                <button onClick={() => alert("agendado")} className={`mentor-schedule-item-status ${schedule.status == "AVAILABLE" ? "available" : "unavailable"}`} disabled={schedule.status != "AVAILABLE"}>{dictionary?.get(schedule.status)}</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 id='profile-user-trail-subtitle'>Você não tem nenhum horário disponibilizado ainda.</h3>
                )}
                
            </div>

        </main>
    )
}