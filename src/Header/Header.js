import './Header.css' 
import linkedin from './Images/linkedinIcon.png'
import github from './Images/githubicon.png'
import instagram from './Images/Instagram.png'

function Header() {
    return (
        <div className="header">
            <div className='leftside'>
                <div className='pfp'></div>
                <div className='PersonalInfo'>
                    <div>Zachary Walnock</div>
                    <div>The Pennsylvania State University</div>
                </div>
            </div>
            <div className='rightside'>
                <a href='https://www.linkedin.com/in/zachary-walnock-93594b24b/'><img src = {linkedin} className='linkedin' alt = 'LinkedIn'></img></a>
                <a href = 'https://github.com/ZachWalnock'><img src = {github} className='linkedin' alt = 'GitHub'></img></a>
                <a href = 'https://www.instagram.com/zach.wal45/'><img src = {instagram} className='linkedin' alt = 'GitHub'></img></a>
            </div>
        </div>
    )
    
}

export default Header