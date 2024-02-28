import { useEffect } from 'react'
import Logo from '../assets/lipsilverhand.png'

export const Header = ({theme, setTheme}) => {

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
        <img className='logo' src={Logo} alt="" />
        <div className="themeSelector">
            <div onClick={() => setTheme("light")} className={theme === "light"}></div>
            <div onClick={() => setTheme("pink")} className={theme === "pink"}></div>
            <div onClick={() => setTheme("wheat")} className={theme === "wheat"}></div>
            <div onClick={() => setTheme("medium")} className={theme === "medium"}></div>
            <div onClick={() => setTheme("dark")} className={theme === "dark"}></div>
        </div>
    </header>
  )
}
