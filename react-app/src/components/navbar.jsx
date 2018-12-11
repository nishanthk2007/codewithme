//state less component we pass props as argument and remove this

const NavBar = (props) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
        </nav>
        );
}

export default NavBar;