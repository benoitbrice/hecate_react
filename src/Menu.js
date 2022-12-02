/* eslint-disable jsx-a11y/anchor-is-valid */


function Menu(props){
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link" onClick={props.testClic}>Accueil</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Catalogue</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Mon compte</a>
            </li>
        </ul>
    )
}

export default Menu;