import { useLoaderData } from "react-router-dom";
import Hero from "./Hero/Hero";



const Home = () => {

    const programs = useLoaderData();
    console.log(programs);


    return (
        <div>
            <Hero></Hero>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 m-28">
                {
                    programs.map(program=> <div key={program.id} className="card card-body w-72 shadow-sm">
                        <h5>{program.categoryName}</h5>
                    </div> )
                }
            </div>
        </div>

    );
};

export default Home;