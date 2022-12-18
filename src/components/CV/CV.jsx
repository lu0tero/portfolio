/* Assets */
import englishCV from '../../assets/cv/english-frontend-cv.pdf'
import spanishCV from '../../assets/cv/cv-frontend.pdf'
import profilePhoto from '../../assets/img/avatar/profile-photo.jpg'

/* Css */
import './CV.css';

const CV = () => {
  return (
    <main className="cv-container">
       <div className='cv-card'>
           <div className='profile-img-container'>
                <img className='profile-img' src={profilePhoto} alt="profile-img" />
           </div>
            <div className='profile-text-container'>
                <div className="cv-text-info">
                    <h2 className='profile-name-cv'>Lucas Ayrton Otero</h2>
                    <span className='cv-span'>FRONTEND DEVELOPER</span>
                </div>
                <div className='cv-btn-container'>
                    <div className="en-cv-container">
                        <span className='es-cv-title'>Resume (EN)</span>
                        <a href={englishCV} download='English-CV-Lucas-Otero'>
                            <button className='download-btn'><i className="fa-solid fa-arrow-down"></i></button>
                        </a>
                    </div>
                    <div className="es-cv-container">
                        <span className='en-cv-title'>Curriculum Vitae (ES)</span>
                        <a href={spanishCV} download='CV-Lucas-Otero'>
                            <button className='download-btn'><i className="fa-solid fa-arrow-down"></i></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CV;