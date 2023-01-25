import '../styles/header.css'

function Menu({ items }) {

    return (
        <div className="dropdown-content">
            {items.map((e, index) => (

                <a href={e.url}
                    className={e.class}
                    key={index}>
                    {e.title}
                </a>
            ))}
        </div>
    )
}

export default Menu;