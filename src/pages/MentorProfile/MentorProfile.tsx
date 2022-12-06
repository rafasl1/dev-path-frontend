import axios from 'axios'
import { useEffect, useState } from 'react'
import dateFormat from "dateformat";
import { useNavigate } from 'react-router'
import Modal from 'react-modal';
import Man1 from '../../assets/man1.svg'
import XIcon from '../../assets/x-icon.svg'
import './styles.css'
import { MentorAPI } from '../../types/MentorAPI';
import { useForm } from "react-hook-form";

export function MentorProfile() {
    const [userData, setUserData] = useState<MentorAPI>()
    const [dictionary, setDictionary] = useState<Map<String, String>>()
    const [statusStyle, setStatusStyle] = useState<Map<String, String>>()
    const [modalOpened, setModalOpened] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("loged-user")
        if (user) {
            const id = JSON.parse(user).id
            updateUserData(id)
            createDictionary()
            createStatusStyleMap()

        } else {
            navigate("/login")
        }

    }, [])

    const updateUserData = async (id: number) => {
        const data: MentorAPI = (await axios.get("https://dev-path.herokuapp.com/mentor/" + id)).data;
        console.log(data)
        setUserData(data)
    }


    const createDictionary = () => {
        const scheduleStatusDictionary = new Map<String, String>()
        scheduleStatusDictionary.set("PENDING", "Pendente")
        scheduleStatusDictionary.set("AVAILABLE", "Disponível")
        scheduleStatusDictionary.set("RESERVED", "Reservado")
        scheduleStatusDictionary.set("CANCELLED", "Cancelado")
        setDictionary(scheduleStatusDictionary)
    }

    const createStatusStyleMap = () => {
        const styleMap = new Map<String, String>()
        styleMap.set("PENDING", "pending")
        styleMap.set("AVAILABLE", "available")
        styleMap.set("RESERVED", "confirmed")
        styleMap.set("CANCELLED", "pending")
        setStatusStyle(styleMap)
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

    const onSubmit = (formData: any) => {
        console.log(formData)
        registerNewDate(formData.date)
    }

    const registerNewDate = async (date: string) => {
        try {
            await axios.post(`https://dev-path.herokuapp.com/mentor/create-schedule/${userData?.id}/${date}`);
            alert("Horário registrado com sucesso!")
            navigate(0)
        } catch(e) {
            alert("Houve um erro ao cadastrar um horário")
        }
    }

    if(!userData) {
        return <h1>Carregando dados...</h1>
    }
    
    return (
        <main id='profile-page'>

            {modalOpened && (
                <Modal 
                    isOpen={modalOpened == true} 
                    style={getModalStyle()}
                >
                        <div id="modal-div-x-icon">
                            <img src={XIcon} id="x-icon" onClick={() => setModalOpened(false)}/>
                        </div>
                        <h1 id="modal-title">Cadastre um horário</h1>
                        <h3>Ex: 2022-12-01 15:00</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <input id='register-date' type={"text"} {...register("date")} />
                            </label>
                        <button type="submit" id="modal-submit-button" >Registrar</button>
                        </form>
                </Modal>
            )}

            <div id='profile-mentor-info-div'>
                <img id='user-avatar' src={Man1} /><br/>
                <button id='mentor-tag'>#Mentor</button>
                <h1 id='profile-user-name'>{userData?.user.name}</h1>

                <br />
                <button id='profile-mentor-button' onClick={() => navigate(-1)}>
                    Voltar para o perfil
                </button>
                <button id='profile-mentor-button' onClick={() => setModalOpened(true)}>
                    Cadastrar um horário
                </button>

            </div>

            <div id='profile-mentor-trails-div'>
                <h1 id='profile-mentor-trail-title'>Agendamentos em andamento:</h1>
                {userData.schedules.length == 0 && (<h3 id='scheduled-mentorings-subtitle'>Não há agendamentos feitos ainda</h3>)}

                <div id='mentor-scheduled-mentorings-list'>
                        {(
                            userData.schedules.map(schedule => (
                                <div className='mentor-scheduled-mentoring-item'>
                                    <h3 className='mentor-scheduled-mentoring-item-title-date'>{dateFormat(new Date(schedule.date + ""), "dd/MM/yyyy - HH:MM")}</h3>
                                    <h4 className='mentor-scheduled-mentoring-item-content'>Usuário mentorado: </h4>
                                    <h4 className='mentor-scheduled-mentoring-item-content'>{schedule.userEmail || "Sem usuário"}</h4>
                                    <h4 className={`mentor-scheduled-mentoring-item-content status ${statusStyle?.get(schedule.status)}`}>{dictionary?.get(schedule.status)}</h4>
                                </div>
                            ))
                        )}
                </div>

            </div>

        </main>
    )
}