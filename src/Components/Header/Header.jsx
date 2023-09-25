import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav className="flex md:flex-row flex-col gap-5 items-center justify-between lg:px-36 md:px-4 py-6">
            <div className="h-14">
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