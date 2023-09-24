import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/donation">Donation</NavLink>
           <NavLink to="/statistics">Statistics</NavLink>
        </nav>
    );
};

export default Header;