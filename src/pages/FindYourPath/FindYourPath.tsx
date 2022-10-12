import { TrailCard } from '../../components/TrailCard/TrailCard';
import { TrailCardInfo } from '../../types/TrailCardInfo';

import Lupa from '../../assets/lupa.svg'
import Trail from '../../assets/trail.svg'
import Education from '../../assets/education.svg'


import './styles.css'

export function FindYourPath() {
    return (
        <main id='trails-page'>

            <div className='mentorsDiv'>

                <div id='searchTrail'>
                    <img id='lupa' src={Lupa} />
                    <input id='searchInput' type="text" placeholder='Busque sua trilha ideal aqui'/>
                </div>


                <div id='mentors'>
                    {getAnyTrails().map(trail => (
                        <TrailCard 
                            trailTitle={trail.trailTitle} 
                            slugName={trail.slugName} 
                            learnList={trail.learnList} 
                        />
                    ))}
                </div>
            </div>


            <div id='infos'>
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

function getAnyTrails() {
    const trails: Array<TrailCardInfo> = [];

    const trail1 = {
        trailTitle: "Desenvolvedor Backend",
        slugName: "desenvolvedor-backend",
        learnList: [
            "Programação orientada a objetos",
            "Banco de dados",
            "APIs"
        ]
    }

    const trail2 = {
        trailTitle: "Desenvolvedor Frontend",
        slugName: "desenvolvedor-frontend",
        learnList: [
            "HTML + CSS",
            "JavaScript",
            "ReactJS"
        ]
    }

    const trail3 = {
        trailTitle: "Cloud Engineer",
        slugName: "cloud-engineer",
        learnList: [
            "Conceito de Cloud",
            "Arquitetura de Cloud",
            "AWS"
        ]
    }

    const trail4 = {
        trailTitle: "Banco de dados",
        slugName: "banco-de-dados",
        learnList: [
            "Princípios de banco de dados",
            "SQL",
            "Ferramentas Cloud"
        ]
    }

    const trail5 = {
        trailTitle: "QA",
        slugName: "qa",
        learnList: [
            "Ruby",
            "Cucumbuer",
            "Automação testes"
        ]
    }

    const trail6 = {
        trailTitle: "Analista de dados",
        slugName: "analista-de-dados",
        learnList: [
            "Python",
            "Estatística",
            "Mineração de dados"
        ]
    }

    trails.push(trail1)
    trails.push(trail2)
    trails.push(trail3)
    trails.push(trail4)
    trails.push(trail5)
    trails.push(trail6)

    return trails
}