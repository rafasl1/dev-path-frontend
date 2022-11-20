import axios from 'axios'
import { useEffect, useState } from 'react'
import Woman2 from '../../assets/woman(2)1.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard'
import { TrailAPI } from '../../types/TrailAPI'
import { UserAPI } from '../../types/User';
import './styles.css'

export function Profile() {
    const [trailsData, setTrailsData] = useState<Array<TrailAPI>>([])
    const [userData, setUserData] = useState<UserAPI>()

    useEffect(() => {
        const user = localStorage.getItem("loged-user")
        if (user) {
            setUserData(JSON.parse(user))
        }

        getTrailsData()
    }, [])
    
    const getTrailsData = async () => {
        const data = (await axios.get("https://dev-path.herokuapp.com/trail/all")).data;
        setTrailsData(data.slice(0,6))
    }
    
    return (
        <main id='profile-page'>

            <div id='profile-user-info-div'>
                <img id='user-avatar' src={Woman2} /><br/>
                <button id='user-tag'>#Aluno</button>
                <h1 id='profile-user-name'>{userData?.name}</h1>
                <button id='profile-user-became-mentor-button' onClick={() => alert("Nosso time está avaliando seu perfil!\nEntraremos em contato se acharmos que você pode ser um mentor na DevPath!")}>
                    Quero ser um mentor
                </button>
            </div>

            <div id='profile-user-trails-div'>
                <h1 id='profile-user-trail-title'>Trilhas em andamento:</h1>
                <div id='trails-div-list'>
                    {trailsData.map((trail, index) => (
                        <TrailCard key={index} {...trail}/>
                    ))}
                </div>

                <h1 id='profile-user-trail-title'>Trilhas concluídas:</h1>
                <h3 id='profile-user-trail-subtitle'>Ainda não foi concluída nenhuma trilha</h3>

            </div>

        </main>
    )
}