import axios from 'axios'
import { useEffect, useState } from 'react'
import dateFormat from "dateformat";
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Woman2 from '../../assets/woman(2)1.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard'
import { TrailAPI } from '../../types/TrailAPI'
import { MentorStatus, UserAPI } from '../../types/User';
import './styles.css'

export function Profile() {
    const [trailsData, setTrailsData] = useState<Array<TrailAPI>>([])
    const [finishedTrails, setFinishedTrails] = useState<Array<TrailAPI>>([])
    const [userData, setUserData] = useState<UserAPI>()
    const [dictionary, setDictionary] = useState<Map<String, String>>()
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("loged-user")
        if (user) {
            const email = JSON.parse(user).email
            updateUserData(email)
            createDictionary()

        } else {
            navigate("/login")
        }

    }, [])

    const updateUserData = async (email: string) => {
        const data: UserAPI = (await axios.get("https://dev-path.herokuapp.com/user/" + email)).data;
        setUserData(data)
        setTrailsInProgressToShow(data.trails)
        setFinishedTrailsToShow(data.trails)
    }

    const setTrailsInProgressToShow = (trails: Array<TrailAPI>) => {
        const finishedTrailsToShow = trails.filter(trail => !trail.topics.every(topic => 
            topic.subTopics.every(subTopic => subTopic.active )
        ))

        setTrailsData(finishedTrailsToShow)
    }

    const setFinishedTrailsToShow = (trails: Array<TrailAPI>) => {
        const finishedTrailsToShow = trails.filter(trail => trail.topics.every(topic => 
            topic.subTopics.every(subTopic => subTopic.active )
        ))

        setFinishedTrails(finishedTrailsToShow)
    }

    const logOff = () => {
        localStorage.removeItem("loged-user")
        navigate('/login')
    }

    const applyToBeMentor = async () => {
        await axios.post(`https://dev-path.herokuapp.com/mentor/become-mentor/${userData?.id}`);
        alert("Nosso time está avaliando seu perfil!\nEntraremos em contato se acharmos que você pode ser um mentor na DevPath!")
        navigate(0)
    }

    const createDictionary = () => {
        const scheduleStatusDictionary = new Map<String, String>()
        scheduleStatusDictionary.set("PENDING", "Pendente")
        scheduleStatusDictionary.set("AVAILABLE", "Disponível")
        scheduleStatusDictionary.set("RESERVED", "Reservado")
        scheduleStatusDictionary.set("CANCELLED", "Cancelado")
        setDictionary(scheduleStatusDictionary)
    }

    if(!userData || !trailsData) {
        return <h1>Carregando dados...</h1>
    }
    
    return (
        <main id='profile-page'>

            <div id='profile-user-info-div'>
                <img id='user-avatar' src={Woman2} /><br/>
                <button id='user-tag'>{userData.mentorStatus == MentorStatus.ACTIVE ? "#Mentor" : "#Aluno"}</button>
                <h1 id='profile-user-name'>{userData?.name}</h1>
                <h2 id='profile-user-name'>{userData?.email}</h2>

                {userData.mentorStatus == MentorStatus.INACTIVE ? 
                    (<button id='profile-user-became-mentor-button' onClick={applyToBeMentor}>
                        Quero ser um mentor
                    </button>) 
                : 
                userData.mentorStatus == MentorStatus.PENDING ?
                    (<button id='profile-user-became-mentor-button-in-progress' disabled>
                        Perfil em análise
                    </button>)
                : 
                (<button id='profile-user-became-mentor-button' onClick={() => navigate("/perfil/mentor")}>
                    Ver sua mentoria
                </button>)
                }

                <br />
                <button id='profile-user-logof-button' onClick={logOff}>
                    Sair da conta
                </button>

                <div id='scheduled-mentorings-div'>
                    <h2 id='scheduled-mentorings-title'>Mentorias agendadas</h2>
                    {userData.schedules.length == 0 && (<h3 id='scheduled-mentorings-subtitle'>Não há agendamentos feitos ainda</h3>)}
                    <div id='scheduled-mentorings-list'>
                        {userData.schedules.map(schedule => (
                                <div className='scheduled-mentoring-item'>
                                    <h3 className='scheduled-mentoring-item-title-date'>{dateFormat(new Date(schedule.date + ""), "dd/MM/yyyy - HH:MM")}</h3>
                                    <h4 className='scheduled-mentoring-item-content'>{"Email do mentor: " + schedule.mentorEmail}</h4>
                                    <h4 className={`scheduled-mentoring-item-content status ${schedule.status == "RESERVED" ? "confirmed" : "pending"}`}>{dictionary?.get(schedule.status)}</h4>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div id='profile-user-trails-div'>
                <h1 id='profile-user-trail-title'>Trilhas em andamento:</h1>
                
                { trailsData.length != 0 ? (
                    <div id='trails-div-list'>
                        {trailsData.map((trail, index) => (
                            <TrailCard key={index} {...trail}/>
                        ))}
                    </div>
                ) : (
                    <h3 id='profile-user-trail-subtitle'>Você ainda não começou nenhuma trilha. <br/>Comece uma na página <Link to={"/find-your-path"}>{`'Encontre seu caminho'`}</Link>!</h3>
                )}

                <h1 id='profile-user-trail-title'>Trilhas concluídas:</h1>
                
                { finishedTrails.length != 0 ? (
                    <div id='trails-div-list'>
                        {finishedTrails.map((trail, index) => (
                            <TrailCard key={index} {...trail}/>
                        ))}
                    </div>
                ) : (
                    <h3 id='profile-user-trail-subtitle'>Você ainda não finalizou nenhuma trilha.</h3>
                )}

            </div>

        </main>
    )
}