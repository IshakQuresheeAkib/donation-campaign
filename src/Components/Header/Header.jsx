import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav className="flex items-center justify-between px-36 my-1 py-5 border border-blue-600">
            <div className="h-11">
                <img src="/Logo.png" alt="" className="h-full"/>
            </div>
           <div className="nav">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/donation" className='px-20'>Donation</NavLink>
           <NavLink to="/statistics">Statistics</NavLink>
           </div>
        </nav>
    );
};

export default Header;