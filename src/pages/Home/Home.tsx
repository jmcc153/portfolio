import { Fragment, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import imageProfile from '../../assets/imageProfile.jpg'
import { useTranslation } from "react-i18next"
import styles from './Home.module.scss'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import portafolio from '../../assets/portafolio.jpg'
import trueka from '../../assets/La_Trueka.png'
import pokedex from '../../assets/Pokedex.png'
import weatherReport from '../../assets/weatherReport.png'
import { BsArrowUpRightCircle } from "react-icons/bs"


export const Home = () => {
  const { t } = useTranslation(['home'])
  const date = new Date().getFullYear()
  const [isProjectsWork, setIsProjectsWork] = useState('work')
  const projectsWork = [
    {
      "icon":"",
      "company":t('experience.projects.eol.company'),
      "date":t('experience.projects.eol.date'),
      "jobTitle":t('experience.projects.eol.job'),
      "description":t('experience.projects.eol.description'),
      "image": trueka,
      "url": "https://www.latrueka.org"
    },
    {
      "icon":"",
      "company":t('experience.projects.tp.company'),
      "date":t('experience.projects.tp.date'),
      "jobTitle":t('experience.projects.tp.job'),
      "description":t('experience.projects.tp.description')
    },
    {
      "icon":"",
      "company":t('experience.projects.somos.company'),
      "date":t('experience.projects.somos.date'),
      "jobTitle":t('experience.projects.somos.job'),
      "description":t('experience.projects.somos.description')
    },
  ]
  const projectsIndependent = [
    {
      name: t('experience.independentProjects.jorge.title'),
      image: portafolio,
      description: t('experience.independentProjects.jorge.description'),
      url: "https://jmcc153.github.io/My_Portfolio/",
    },
    {
      name: t('experience.independentProjects.weather.title'),
      image: weatherReport,
      description: t('experience.independentProjects.weather.description'),
      url: "https://jmcc153.github.io/Weather-report/",
    },
    {
      name: t('experience.independentProjects.pokedex.title'),
      image: pokedex,
      description: t('experience.independentProjects.pokedex.description'),
      url: "https://github.com/jmcc153/React-Native-Pokedex",
    }
  ]


  return (
    <Fragment>
      <Navbar/>
      <div className={styles.container}>
        <section id="aboutMe" className={styles.containerAboutMe}>
          <h1>{t('aboutMe.title')}</h1>
          <div className={styles.aboutMe}>
            <img src={imageProfile}></img>
            <div>
              <h1>{t('title')}</h1>
              <p>{t('description')}</p>
            </div>
          </div>
        </section>
        <section id="experience" className={styles.containerProjects}>
          <h1>{t('experience.title')}</h1>
          <div className={styles.containerBtns}>
            <button id={isProjectsWork === 'work' ? styles.active : ''} onClick={() => setIsProjectsWork('work')}>{t('experience.work')}</button>
            <button id={isProjectsWork === 'independent' ? styles.active : ''} onClick={() => setIsProjectsWork('independent')}>{t('experience.independent')}</button>
          </div>
          <div id={isProjectsWork === 'independent' ? styles.hidden : styles.visible} className={styles.containerCards}>
            {projectsWork.map((project, index) => (
              <div key={index} className={styles.project}>
                <i>{project.icon}</i>
                <h1>{project.company}</h1>
                <p>{project.date}</p>
                <h2>{project.jobTitle}</h2>
                {project.image && <a href={project.url} target="_blank">
                  <div className={styles.overlay}>
                    <BsArrowUpRightCircle/>
                    <h3>See project</h3>
                  </div>
                  <img src={project.image}></img>
                  </a>}
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div id={isProjectsWork === 'work' ? styles.hidden : styles.visible} className={styles.containerCards}>
            {projectsIndependent.map((project, index) => (
              <div key={index} className={styles.project}>
                <a href={project.url} target="_blank">
                  <div className={styles.overlay}>
                    <BsArrowUpRightCircle/>
                    <h3>See project</h3>
                  </div>
                  <img src={project.image}></img>
                </a>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className={styles.containerContact}>
          <h1>{t('contact')}</h1>
          <div className={styles.socialMedia}>
            <a href="https://github.com/jmcc153" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jorge-manuel-castillo-camargo-46a2731b9/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/jmcastillo_153/" target="_blank"><FaInstagram /></a>
            <a href="mailto:jmcastillo9915@gmail.com"><BiLogoGmail /></a>
          </div>
        </section>
        <footer>
          <p>{t('footer', {date})}</p>
        </footer>
      </div>
    </Fragment>
  )
}
