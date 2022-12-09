import axios from 'axios'
import { useEffect, useState } from 'react'
import dateFormat from "dateformat";
import { useNavigate, useParams } from 'react-router'
import Man1 from '../../assets/man1.svg'
import { CreateSchedule } from '../../types/CreateSchedule'
import { MentorAPI } from '../../types/MentorAPI'
import { UserAPI } from '../../types/User';
import './styles.css'

export function Mentor() {
    const [mentorData, setMentorData] = useState<MentorAPI>()
    const [dictionary, setDictionary] = useState<Map<String, String>>()
    const [userData, setUserData] = useState<UserAPI>()
    
    let { mentorId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {}, [])

    const updateUserData = async (email: string) => {
        const data: UserAPI = (await axios.get("https://dev-path.herokuapp.com/user/" + email)).data;
        setUserData(data)
    }
    

    useEffect(() => {
        const scheduleStatusDictionary = new Map<String, String>()
        scheduleStatusDictionary.set("PENDING", "Pendente")
        scheduleStatusDictionary.set("AVAILABLE", "Disponível")
        scheduleStatusDictionary.set("RESERVED", "Reservado")
        scheduleStatusDictionary.set("CANCELLED", "Cancelado")
        setDictionary(scheduleStatusDictionary)
        updateMentorData()
    }, [])

    const formatDate = (dateToFormat: string): string => {
        const date = new Date(dateToFormat)
        return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`  

    }

    const updateMentorData = async () => {
        const data: any = (await axios.get("https://dev-path.herokuapp.com/mentor/" + mentorId)).data;
        setMentorData(data)
    }

    const proceedWithScheduling = (scheduleDate: String, scheduleId: number) => {
        const user = localStorage.getItem("loged-user")
        if (!user) {
            navigate("/login")
        } else {
    
            const scheduleToCreate: CreateSchedule = {
                date: scheduleDate,
                mentorId: mentorData?.id || 0,
                scheduleId: scheduleId,
                userId: userData?.id || 0
            }
            localStorage.setItem("schedule-to-create", JSON.stringify(scheduleToCreate))
            navigate("/create-schedule/terms/" + mentorId)
        }

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
                <h2 id='profile-mentor-name'>{mentorData?.role}</h2>
                <h2 id='profile-mentor-name'>{"Anos de experiência: " + mentorData?.yearsOfExperience}</h2>
                <h2 id='profile-mentor-name'>{"Valor da hora: R$" + mentorData?.hourCost + ",00"}</h2>
            </div>

            <div id='profile-mentor-schedules-div'>
                <h1 id='profile-user-trail-title'>Escolha seu horário:</h1>

                { mentorData.schedules.filter(schedule => schedule.status == "AVAILABLE").length != 0 ? (
                    <div id='trails-div-list'>
                        {mentorData.schedules.filter(schedule => schedule.status == "AVAILABLE").map((schedule, index) => (
                            <div className='mentor-schedule-item'>
                                <p>{dateFormat(new Date(schedule.date + ""), "dd/mm/yyyy - HH:MM")}</p>
                                <button onClick={() => proceedWithScheduling(schedule.date, schedule.id)} className={`mentor-schedule-item-status ${schedule.status == "AVAILABLE" ? "available" : "unavailable"}`} disabled={schedule.status != "AVAILABLE"}>{dictionary?.get(schedule.status)}</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 id='profile-user-trail-subtitle'>O mentor ainda não tem nenhum horário disponibilizado ainda.</h3>
                )}
                
            </div>

        </main>
    )
}