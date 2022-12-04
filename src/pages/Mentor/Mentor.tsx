import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Man1 from '../../assets/man1.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard'
import { TrailAPI } from '../../types/TrailAPI'
import { UserAPI } from '../../types/User';
import './styles.css'

export function Mentor() {
    const [mentorData, setMentorData] = useState<any>()
    const navigate = useNavigate();
    let { mentorId } = useParams();


    useEffect(() => {
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

            <div id='profile-user-trails-div'>
                <h1 id='profile-user-trail-title'>Escolha seu horário:</h1>
                
            </div>

        </main>
    )
}