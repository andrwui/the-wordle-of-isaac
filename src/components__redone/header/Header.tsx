import logo from '../../assets/splash/Logo.png'
import './Header.sass'

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={logo} alt="logo" />
    </div>
  )
}

export default Header
