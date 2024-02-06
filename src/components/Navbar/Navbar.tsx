import i18next from "i18next"
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next"
import styles from './Navbar.module.scss'
import { useState } from "react";

function Navbar() {

  const { t } = useTranslation(['navbar'])
  const language = {en: 'English', es: 'Español'}
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleChangeLanguage = (lang: string) => {
    if(lang === 'English') lang = 'en'
    if(lang === 'Español') lang = 'es'
    i18next.changeLanguage(lang)
  }
  return (
    <div className={styles.container}>
      <i>
        JC
      </i>
      <ul>
        <li><a href="#aboutMe">{t('list.about')}</a></li>
        <li><a href="#experience">{t('list.projects')}</a></li>
        <li><a href="#contact">{t('list.contact')}</a></li>
      </ul>
      <i>
        <GrLanguage onClick={() => setIsOpen(!isOpen)}/>
        <div id={isOpen ? styles.open : styles.hidden}>
          {Object.values(language).map((lang, index) => (
            <div className={styles.btnLanguage}  key={index} onClick={() => handleChangeLanguage(lang)}>{lang == 'English' ? t('language.en') : t('language.es')}</div>
          ))}
        </div>
      </i>
    </div>
  )
}

export default Navbar