import { MentorCard } from '../../components/MentorCard/MentorCard'
import { MentorCardContent } from '../../types/MentorCardContent'
import Man1 from '../../assets/man1.svg'
import Man2 from '../../assets/man(2)1.svg'
import Man3 from '../../assets/man(3)1.svg'
import Woman1 from '../../assets/woman(1)1.svg'
import Woman2 from '../../assets/woman(2)1.svg'
import Woman3 from '../../assets/woman(3)1.svg'
import Woman4 from '../../assets/woman(4)1.svg'
import Man4 from '../../assets/man(4)1.svg'
import Man5 from '../../assets/man(5)1.svg'
import Lupa from '../../assets/lupa.svg'
import './styles.css'
import { useEffect, useState } from 'react'
import { TrailAPI } from '../../types/TrailAPI'
import axios from 'axios'
import { MentorAPI } from '../../types/MentorAPI'

export function MentoringPage() {
    const [mentorsData, setMentorsData] = useState<Array<MentorAPI>>([])

    useEffect(() => {
        getMentorsData()
    }, [])
    
    const getMentorsData = async () => {
        const data = (await axios.get("https://dev-path.herokuapp.com/mentor/all")).data;
        setMentorsData(data.slice(0,8))
    }

    return (
        <main className='mentorPage'>

            <div className='mentorsDiv'>
                <h1 className='list-title'>Mentores:</h1>
                <div id='mentors'>
                    {mentorsData.map((mentor, index) => (
                        <MentorCard key={index}
                            image={Man1}
                            name={mentor.user.name} 
                            role={"Desenvolvedor Backend Senior"} 
                            experienceTime={"Experiência de 5 anos"} 
                            hourValue={mentor.hourCost} 
                        />
                    ))}
                </div>
            </div>


            <div id='mentors-infos'>
                <h1 id='title'>O que é uma mentoria?</h1>
                <p id='titleLegend'>Um mentor é alguem que já possui experiência em determinado assunto e consegue te auxliar a aprender esta habilidade, te dando dicas e auxiliando a encontrar o caminho ideal para atingir seu objetivo.</p>

                <div id='paragraph1'>
                    <p className='paragraph'>Ter um mentor acelera seu desenvolvimento com a experiência que recebe de um profissional já experiente. Além disso, é uma ótima oportunidade para conhecer uma referência na área que pretende atuar. </p>
                    <img src={Woman1} />
                </div>
                
                <div id='paragraph2'>
                    <img src={Man1} />
                    <p className='paragraph'><b>Algumas dicas...</b><br />Busque por uma pessoa com a qual você tenha afinidade e que te inspire. Isso irá facilitar a criação de uma conexão. Use as horas de mentoria com sabedorias e sempre prepare os assuntos que possui dúvidas para enriquecer as conversas.</p>
                </div>
            </div>

        </main>
    )
}