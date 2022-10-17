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

export function MentoringPage() {
    return (
        <main className='mentorPage'>

            <div className='mentorsDiv'>

                <div id='searchMentor'>
                    <img id='lupa' src={Lupa} />
                    <input id='searchInput' type="text" placeholder='Busque seu mentor ideal aqui'/>
                </div>


                <div id='mentors'>
                    {getMentors().map(mentor => (
                        <MentorCard 
                            image={mentor.image}
                            name={mentor.name} 
                            role={mentor.role} 
                            experienceTime={mentor.experienceTime} 
                            hourValue={mentor.hourValue} 
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

export function getMentors(): Array<MentorCardContent> {
    const mentorsArray: Array<MentorCardContent> = []

    const mentor1 = {
        image: Man1,
        name: "Davi Lucas",
        role: "Desenvolvedor Backend Senior",
        experienceTime: "5 anos de experiência",
        hourValue: 80.00
    }

    const mentor2 = {
        image: Man2,
        name: "Pietro Barbosa",
        role: "Especialista em Backend",
        experienceTime: "10 anos de experiência",
        hourValue: 180.00
    }

    const mentor3 = {
        image: Man3,
        name: "Rodrigo Freitas",
        role: "Cloud Engineer Senior",
        experienceTime: "6 anos de experiência",
        hourValue: 200.00
    }

    const mentor4 = {
        image: Woman1,
        name: "Ana Sophia Azevedo",
        role: "Especialista desenvolvimento mobile",
        experienceTime: "8 anos de experiência",
        hourValue: 150.00
    }

    const mentor5 = {
        image: Woman2,
        name: "Rafaela Pereira",
        role: "Especialista em Frontend",
        experienceTime: "7 anos de experiência",
        hourValue: 140.00
    }

    const mentor6 = {
        image: Woman3,
        name: "Vitoria Lima",
        role: "Desenvolvedora Backend Senior",
        experienceTime: "5 anos de experiência",
        hourValue: 100.00
    }

    const mentor7 = {
        image: Man5,
        name: "João Melo",
        role: "Especialista em Redes",
        experienceTime: "10 anos de experiência",
        hourValue: 190.00
    }

    const mentor8 = {
        image: Man4,
        name: "Vitoria Lima",
        role: "QA Senior",
        experienceTime: "6 anos de experiência",
        hourValue: 120.00
    }

    mentorsArray.push(mentor1);
    mentorsArray.push(mentor2);
    mentorsArray.push(mentor3);
    mentorsArray.push(mentor4);
    mentorsArray.push(mentor5);
    mentorsArray.push(mentor6);
    mentorsArray.push(mentor7);
    mentorsArray.push(mentor8);

    return mentorsArray
}