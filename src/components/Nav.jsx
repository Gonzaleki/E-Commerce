import { NavData } from "../data/NavData"
import '../styles/header.css'

function Nav() {

    return (
       <>
       <h1 className='logo'>
          My Store<i className="fab fa-react"></i>
        </h1>
        <ul className='header-items'>
          {NavData.map((item, index) => (
            <li key={index}>
              <a href={item.url}
                className={item.class}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <h1 className='logo'>
          My Store<i className="fab fa-react"></i>
        </h1>
       </>
    )
}

export default Nav;