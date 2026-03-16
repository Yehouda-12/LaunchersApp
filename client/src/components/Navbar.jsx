import {Link} from "react-router";


function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">➕ Add Launcher</Link>
        </nav>
    )

}

export default Navbar