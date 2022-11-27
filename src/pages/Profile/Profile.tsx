import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Woman2 from '../../assets/woman(2)1.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard'
import { TrailAPI } from '../../types/TrailAPI'
import { UserAPI } from '../../types/User';
import './styles.css'

export function Profile() {
    const [trailsData, setTrailsData] = useState<Array<TrailAPI>>([])
    const [userData, setUserData] = useState<UserAPI>()
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("loged-user")
        if (user) {
            const email = JSON.parse(user).email
            updateUserData(email)
        } else {
            navigate("/login")
        }

    }, [])

    const updateUserData = async (email: string) => {
        const data: UserAPI = (await axios.get("https://dev-path.herokuapp.com/user/" + email)).data;
        setUserData(data)
        setTrailsData(data.trails)
    }

    if(!userData || !trailsData) {
        return <h1>Carregando dados...</h1>
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
                
                { trailsData.length != 0 ? (
                    <div id='trails-div-list'>
                        {trailsData.map((trail, index) => (
                            <TrailCard key={index} {...trail}/>
                        ))}
                    </div>
                ) : (
                    <h3 id='profile-user-trail-subtitle'>Você ainda não começou nenhuma trilha. Escolha uma em <Link to={"/find-your-path"}>Trilhas</Link></h3>
                )}

                <h1 id='profile-user-trail-title'>Trilhas concluídas:</h1>
                <h3 id='profile-user-trail-subtitle'>Ainda não foi concluída nenhuma trilha</h3>

            </div>

        </main>
    )
}