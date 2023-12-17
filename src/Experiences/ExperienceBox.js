import './Experiences.css'
export const ExperienceBox = ({title, img, description, alt}) => {
    
    return (
        <div className='borderBox'>
            <div className='container1'>
                <div className='title'>{title}</div>
            </div>
            <div className='container2'>
                <img className='experienceImage' src={img} alt={alt}></img>
            </div>
            <div className='containerText'>
                <div className='description'>{description}</div>
            </div>
        </div>
    )
}