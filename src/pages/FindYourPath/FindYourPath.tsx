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
                <h1 id='title'>O que é uma trilha?</h1>
                <p id='titleLegend'>Aqui no DevPath uma trilha é uma jornada de aprendizado onde você encontra os melhor conteúdos para aprender do início o assunto escolhido. Garantimos que os conteúdos indicados são confiáveis e verídicos para que você possa se preocupar somente com o seu aprendizado.</p>

                <div id='paragraph1'>
                    <p className='paragraph'>Ao escolher uma trilha, navegue pelos conteúdos selecionando os grandes marcadores de cada nível e após concluir todos os passos compartilhe com todos os seus amigos seu certificado.</p>
                    <img src={Trail} />
                </div>
                
                <div id='paragraph2'>
                    <img src={Education} />
                    <p className='paragraph'>Estamos sempre em busca de novos conteúdos. Fique a vontade para nos enviar sugestões de novas trilhas ou novos conteúdos para uma de nossas trilhas!</p>
                </div>
            </div>

        </main>
    )
}