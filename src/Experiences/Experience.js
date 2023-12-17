import './Experiences.css'
import machineLearning from './Images/MachineLearningBootCamp.png'
import groupCheck from './Images/GroupCheck.png'
import redCross from './Images/RedCross.png'
import walkerAward from './Images/PresidentWalkerAward.jpeg'
import { ExperienceBox } from './ExperienceBox';

const Experience = () => {

    const data = [
        {
            id: 1,
            img: machineLearning,
            title: "Machine Learning Bootcamp Lead",
            description:
            `Leading the Machine Learning Bootcamp, I engaged with a diverse audience of about 140 students every Thursday, unraveling the intricacies of AI concepts. Through hands-on presentations, I explained the core ideas of various AI techinques, and how students could apply this for their future projects and endeavors.
            `,
            alt: "Machine Learning"
        },
        {
            id: 2,
            title: "Team Lead on TutorAi",
            description: `As the project manager for TutorAi, an award-winning educational tool, I led a team of 7 to win the Nittany Ai Challenge and secure $7,000 of funding. TutorAi is an ongoing project that allows teachers to upload class lectures and trusted materials, and provides students with a lightning quick method of accessing information.`,
            img: groupCheck,
            alt: 'TutorAi'
        },
        {
            id: 3,
            img: redCross,
            title: "Machine Learning Project Manager",
            description: "I am the project manager and machine learning engineer on a team of 6 people, focused on leveraging artificial intelligence to predict young donors for the Red Cross. This is an ongoing project, and we hope to deliver a relaible and innovative model by May 2024.",
            alt: 'Red Cross Project',
        },
        {
            id: 4,
            img: walkerAward,
            title: "4.0 GPA",
            description: "I care a lot about my academics, so I put in the extra effort to maintain a flawless 4.0 GPA. I found that I do the best work when I'm doing something I'm truly interested in, which is why I feel I can perform so well in Math and Computer Science.",
            alt: "Academics"
        }
    ]


    return (
        <div id = 'slider' className="parentContainer">
        <div id = 'scroller' className='scrollContainer'>
        {data.map(item => {
            return (
                <ExperienceBox 
                title = {item.title}
                img={item.img}
                description={item.description}
                alt={item.alt}
                key={item.id}/>
            )
        })}
        </div>
        </div>
    )
}

export default Experience