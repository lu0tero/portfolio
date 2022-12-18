/* React */
import { useState } from 'react';

/* DataProjects */
import data from '../../dataProjects';
import skills from '../../skills';

/* Assets */
import avatar from '../assets/img/avatar/avatar.png'
import avatarS from '../assets/img/avatar/avatarS.png'
import arrow from '../assets/img/icons/arrow.gif'
import pc from '../assets/img/avatar/pc.webp'
import CV from '../components/CV/CV'

/* AOS */
import Aos from 'aos';
import 'aos/dist/aos.css'

/* Css */
import './Home.css';

const Home = () => {

  Aos.init()

  const [isActive, setIsActive] = useState();
  const [arrayText, setArrayText] = useState(0);

  const arrInfo = ["📃 My name is Lucas, I'm 23 years old, nice to meet you!", "🎮 My passion for video-games has let me to desing this retro-style portfolio","🎸 Also in my free time I play volleyball and guitar.", "📍 I moved to Spain hoping to improve my life-style.", "I hope that you like my portfolio as much as I do 😉"];
  const lastInfo = arrInfo.length - 1;

  const selectedItem = arrInfo[arrayText]
  
  const handleClick = e => {
    setIsActive(current => !current)

    setArrayText((currentIndex) => {
      if (currentIndex === lastInfo) {
        return 0;
      }

      return currentIndex + 1;
    });
  
  };


  return (
    <div className='home-container'>
      <main className='introduction-container'>
          <section className='introduction'>
                  <h1 className='name-title'>Lucas Ayrton Otero</h1>
                  <span className='subtitle'>Frontend Developer</span>
             <a  href="#aboutMe">
                <button className='project-btn'>
                  <img className='arrow-img' src={arrow} alt="avatar" />
                </button>
              </a>
          </section>
      </main>

      <section className='about-myself'>
          <h2 id='aboutMe' className='aboutMe-title' >About me</h2> 

            <div className='aboutMe-info'>
                <div  data-aos='fade-up' data-aos-duration='2500'className="aboutMe-first">
                  <div className="avatar-img-container">
                    <img onClick={handleClick} className={isActive ? 'hidden' : 'avatar-img'} src={avatar} alt="avatar" />
                    <img onClick={handleClick} className={!isActive ? 'hidden': 'avatar-img'} src={avatarS} alt="avatar-speaking" />
                    <span className='push-span'>PUSH ME</span>
                  </div>

                    <div className='ul-container'>
                      <ul className='personal-info-list'>
                        <li className='lucas'>LUCAS:</li>
                        <li className='personal-li'>{selectedItem}</li>
                      </ul>
                    </div>

                  </div>

                <div  data-aos='fade-up' data-aos-duration='2500' className='aboutMe-second'>
                    <img className='pc-img' src={pc} alt="pc-img" />
                    <p className='pc-text'>I'm a front-end developer looking forward to improving my skills every day. At the beginning of 2022, I started my programming studies, and also did some academic projects with different technologies. I think it's important to keep the practice on for better learning.</p>
                </div>
            </div>

      </section>

      <section  className='about-skills'>
        <h2 className='aboutSkills-title'>Skills</h2>
        <div className='line-container'>
          <div className='line'></div>
        </div>
          <div className='skills-container'>
              {
                skills.map((oneSkill, idx) => {
                  return (
                    <div data-aos='fade-up' data-aos-duration='2500' className='skill-card-container'>
                        <div className='skill-card'> 
                          <img key={idx} className='skill-img' src={oneSkill.skill} alt="skill" />
                          <span className='skill-name'>{oneSkill.name}</span>
                        </div>
                    </div>
                  )
                })
              }
          </div>
      </section>

      <section className='about-projects'>
        <h2 className='aboutProject-title' id='projects'>Projects</h2>
        <div className='line-container'>
          <div className='line'></div>
        </div>
        <div className='project-container'>
          {
            data.map((project, idx) => {
              return(
                <a className='project-link' target='_blank' href={project.link}>
                  <div data-aos='fade-up' data-aos-duration='3000' className='project-card' key={idx}>
                    <img className='project-img' src={project.img} alt="project-img" />
                    <div className='project-info'>
                      <h3 className='project-title'>{project.title}</h3>
                      <span className='project-tecno'>
                        <div className='icon-container'>
                          {
                            project.tecnologies.map((icon, idx) => {
                             return <img className='icon' src={icon} key={idx}/>
                            })
                          }
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </section>

        <section className='home-cv-container' id='cv'>
          <h2 className='resume-title' >Resume</h2> 
          <div className='line-container'>
            <div className='line'></div>
          </div>
           <div data-aos='fade-up' data-aos-duration='2500'>
              <CV/>
           </div>
        </section>
    </div>
  )
}

export default Home;