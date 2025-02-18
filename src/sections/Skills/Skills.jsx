import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList';

function Skills() {
  const {theme, toggleTheme} = useTheme();

  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='Flutter' />
      <SkillList src={checkMarkIcon} skill='Kotlin' />
      <SkillList src={checkMarkIcon} skill='Vite' />
      <SkillList src={checkMarkIcon} skill='Git' />
      <SkillList src={checkMarkIcon} skill='C/C++' />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='Python' />
      <SkillList src={checkMarkIcon} skill='CP/DSA' />
      <SkillList src={checkMarkIcon} skill='Data-Science' />
      </div>
    </section>
  )
}

export default Skills