import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from '../../assets/home-image.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard';
import { TrailAPI } from '../../types/TrailAPI';
import { TrailCardInfo } from '../../types/TrailCardInfo';
import { getSlugFromName } from '../../utils/slug';
import './styles.css'

export function Home() {
    const [trailsData, setTrailsData] = useState<Array<TrailAPI>>([])

    useEffect(() => {
        getTrailsData()
    }, [])
    
    const getTrailsData = async () => {
        const data = (await axios.get("https://dev-path.herokuapp.com/trail/all")).data;
        setTrailsData(data)
    }


    return (
        <main>
            
            <div id="home-info">
                <h1 id='home-info-title'>DevPath, seu guia para chegar à carreira dos sonhos!</h1>

                <div id='home-info-content'>
                    <p id='home-info-content-text'>DevPath indica quais são os passos que você deve seguir para se tornar o desenvolvedor que tanto almeja. Independente do seu nível, busque sua carreira dos sonhos e encontre tudo que precisa para elevar sua curva de aprendizado.</p>
                    <img src={Image} />
                </div>

            </div>

            <div id="trails">
                {trailsData.slice(0,3).map((trail, index) => {
                    return (
                        <div key={index} className='trail-card-in-menu'>
                            <TrailCard {...trail} />
                        </div>
                    )
                })}
            </div>

        </main>
    )
}

// function getAnyTrails() {
//     const trails: Array<TrailCardInfo> = [];

//     const trail1 = {
//         trailTitle: "Desenvolvedor Backend",
//         slugName: "desenvolvedor-backend",
//         learnList: [
//             "Programação orientada a objetos",
//             "Banco de dados",
//             "APIs"
//         ]
//     }

//     const trail2 = {
//         trailTitle: "Desenvolvedor Frontend",
//         slugName: "desenvolvedor-frontend",
//         learnList: [
//             "HTML + CSS",
//             "JavaScript",
//             "ReactJS"
//         ]
//     }

//     const trail3 = {
//         trailTitle: "Cloud Engineer",
//         slugName: "cloud-engineer",
//         learnList: [
//             "Conceito de Cloud",
//             "Arquitetura de Cloud",
//             "AWS"
//         ]
//     }

//     trails.push(trail1)
//     trails.push(trail2)
//     trails.push(trail3)

//     return trails
// }