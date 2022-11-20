import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from '../../assets/home-image.svg'
import { TrailCard } from '../../components/TrailCard/TrailCard';
import { TrailAPI } from '../../types/TrailAPI';
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
                    <p id='home-info-content-text'>DevPath indica quais são os passos que você deve seguir para se tornar o desenvolvedor que tanto almeja ser. Independente do seu nível, busque sua carreira dos sonhos e encontre tudo que precisa para elevar sua curva de aprendizado.</p>
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