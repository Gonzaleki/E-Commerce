import { NavOptions } from "../data/NavData"
import SubMenu from './SubMenu'
import '../styles/header.css'

function Menu() {

    return (
        <ul className='menu-items'>
            {NavOptions.map((item, index) => (
                <li key={index}
                    className={item.class}>
                    <button>{item.title}<i className='fa-solid fa-chevron-down'></i></button>
                    <SubMenu items={item.children} />
                </li>
            ))}
        </ul>
    )
}

export default Menu;