import {Link} from "react-router";



function Navbar(){
    return(
        <nav>

            <Link to="/">
            <button>Home</button>
            </Link>
            <Link to="/add">
            <button>➕ Add Launcher</button>
            </Link>
        </nav>
    )

}

export default Navbar