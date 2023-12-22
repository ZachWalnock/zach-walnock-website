import './Body.css'
import selfPortrait from './Images/NittanyAiHeadShot4.JPG'
const Body = () => {
    const informationalText = `I'm a student at Penn State, double majoring in computer science and math. I built this website to help strengthen my front end development skills.
    I've had plenty of project ideas for some time now, but I found myself with no Ui/Ux experience to develop them. I find that I learn the best by doing, so what better way to learn
    than to create my own personal website? You can view the source code for this website on my github: https://github.com/ZachWalnock`
    return (
        <div className='parent'>
            <div className="LeftText">
                <div className="headerText">Hi, I'm Zach.</div>
                <div className='bodyText'>{informationalText}</div>
            </div>
            <div className='imageContainer'>
                <img className="bigImage" src={selfPortrait} alt="Self Portrait"></img>
            </div>
        </div>
    )
}

export default Body