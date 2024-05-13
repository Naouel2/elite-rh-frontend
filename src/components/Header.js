import { Link} from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {

    return (
        <div className="header-container container">  
        <Link to="/home">
          <img src={logo} alt="logo" className="logo-header" />
        </Link>
          <Link to="/home">Accueil</Link>
          <Link to="#">À propos</Link>
          <Link to="/contact">Nous contacter</Link>
          <Link to="/compte">Mon compte</Link>
        </div>
    )

}

export default Header;