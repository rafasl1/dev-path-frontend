import { TrailCard } from '../../components/TrailCard/TrailCard';
import { TrailCardInfo } from '../../types/TrailCardInfo';

import Lupa from '../../assets/lupa.svg'
import Trail from '../../assets/trail.svg'
import Education from '../../assets/education.svg'


import './styles.css'
import { useEffect, useState } from 'react';
import { TrailAPI } from '../../types/TrailAPI';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export function FindYourPath() {
    const [trailsData, setTrailsData] = useState<Array<TrailAPI>>([])
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        getTrailsData()
    }, [])
    
    const getTrailsData = async () => {
        const data = (await axios.get("https://dev-path.herokuapp.com/trail/all")).data;
        setTrailsData(data.slice(0,6))
    }

    const getSearchedTrailBySubstring = async (substring: string) => {
        const data = (await axios.get("https://dev-path.herokuapp.com/trail/search/" + substring)).data;
        setTrailsData(data.slice(0,6))
    }

    const getSearchedTrails = (formData: any) => {
        if(
            formData.searchTrailSubstring == undefined || 
            formData.searchTrailSubstring == "" || 
            formData.searchTrailSubstring == " " 
        ) {
            getTrailsData()
        } else {
            getSearchedTrailBySubstring(formData.searchTrailSubstring)
        }
    }

    return (
        <main id='trails-page'>

            <div id='trails-div'>

                <h1 className='list-title'>Trilhas:</h1>

                <div id='searchTrail'>
                    <form>
                        <img id='lupa' src={Lupa} onClick={handleSubmit(getSearchedTrails)}/>
                        <input id='searchInput' type="text" placeholder='Busque sua trilha ideal aqui' {...register("searchTrailSubstring")}/>
                    </form>
                </div>

                <div id='trails-div-list'>
                    {trailsData.map((trail, index) => (
                        <TrailCard key={index} {...trail}/>
                    ))}
                </div>
            </div>


            <div id='trails-infos'>
                <h1 id='title'>O que ?? uma trilha?</h1>
                <p id='titleLegend'>Aqui no DevPath uma trilha ?? uma jornada de aprendizado onde voc?? encontra os melhor conte??dos para aprender do in??cio o assunto escolhido. Garantimos que os conte??dos indicados s??o confi??veis e ver??dicos para que voc?? possa se preocupar somente com o seu aprendizado.</p>

                <div id='paragraph1'>
                    <p className='paragraph'>Ao escolher uma trilha, navegue pelos conte??dos selecionando os grandes marcadores de cada n??vel e ap??s concluir todos os passos compartilhe com todos os seus amigos seu certificado.</p>
                    <img src={Trail} />
                </div>
                
                <div id='paragraph2'>
                    <img src={Education} />
                    <p className='paragraph'>Estamos sempre em busca de novos conte??dos. Fique a vontade para nos enviar sugest??es de novas trilhas ou novos conte??dos para uma de nossas trilhas!</p>
                </div>
            </div>

        </main>
    )
}