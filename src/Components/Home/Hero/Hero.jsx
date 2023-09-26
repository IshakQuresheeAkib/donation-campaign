import PropTypes from 'prop-types';
import Header from "../../Header/Header";
import '../../Header/Header.css'
import { useState } from 'react';

const Hero = ({setSearchValue}) => {

    const [value,setValue] = useState('');    

    return (
        <div>
            <div className="h-screen">
            <div
                className="w-full h-screen bg-[url('https://i.ibb.co/VmcJZgZ/background.jpg')] bg-cover bg-center">
                <div className="w-full h-full bg-[#FFFFFFDB] backdrop-blur-sm backdrop-brightness-125">
                        <Header></Header>
                        <div className="flex flex-col items-center justify-end h-96 text-[#0B0B0B] text-center">
                            <h1 className="text-5xl font-bold pb-10">I Grow By Helping People In Need</h1>
                            <div className="join">
                            <input type="text" onChange={e=>setValue(e.target.value)} className="input input-bordered join-item md:w-80 focus:outline-none focus:border focus:border-error" placeholder="Search here...."/>
                            <button className="btn btn-error bg-[#FF444A] join-item normal-case text-white font-normal" onClick={()=> setSearchValue(value)}>Search</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;

Hero.propTypes = {
    setSearchValue: PropTypes.func.isRequired,
  };