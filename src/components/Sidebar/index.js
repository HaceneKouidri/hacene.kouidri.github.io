import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogWeb3 from '../../assets/images/web3.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faIdCard
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="web3-logo" src={LogWeb3} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hac%C3%A8ne-kouidri/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/HaceneKouidri">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
{/*       <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1Ss3gY8pgbPCu8T5OpPl0GMWA2KJaT8pRV1hc7MRnuWY/edit?usp=sharing"
        >
          <FontAwesomeIcon icon={faIdCard} color="#4d4d4e" />
        </a>
      </li> */}
    </ul>
  </div>
)

export default Sidebar
