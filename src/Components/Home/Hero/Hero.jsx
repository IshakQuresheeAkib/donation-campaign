import Header from "../../Header/Header";
import '../../Header/Header.css'

const Hero = () => {
    return (
        <div>
            <div className="h-screen">
            <div
                className="w-full h-screen bg-[url('./background.jpg')] bg-cover bg-center">
                <div className="w-full h-full bg-[#FFFFFFDB] backdrop-blur-sm backdrop-brightness-150">
                        <Header></Header>
                        <div className="flex flex-col items-center justify-end h-96 text-[#0B0B0B]">
                            <h1 className="text-5xl font-bold pb-10">I Grow By Helping People In Need</h1>
                            <div className="join">
                            <input type="text" className="input input-bordered join-item md:w-80 focus:outline-none focus:border focus:border-error" placeholder="Search here...."/>
                            <button className="btn btn-error join-item normal-case text-white font-normal">Search</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;