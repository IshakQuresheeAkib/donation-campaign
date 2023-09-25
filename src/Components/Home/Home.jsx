import { useLoaderData, useNavigate } from "react-router-dom";
import Hero from "./Hero/Hero";



const Home = () => {

    const programs = useLoaderData();
    const navigate = useNavigate();
    console.log(programs);


    return (
        <div>
            <Hero></Hero>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-28 xl:px-36 mx-auto gap-y-7">
                {
                    programs.map(program=> <div key={program.id} className="xl:w-[260px] place-self-center" onClick={()=>navigate(`/donation/${program.id}`)}>
                        <img src={program.categoryImage} alt="" className="h-40 w-full  rounded-t-lg"/>
                        <div className="p-3 rounded-b-lg" style={{backgroundColor:program.categoryNameBackgroundColor}}>
                            <h5 style={{color:program.titleTextColor,backgroundColor:program.cardBackgroundColor}} className="text-xs p-1 my-1 w-fit rounded">{program.categoryName}</h5>
                            <h3 style={{color:program.titleTextColor}} className="font-semibold">{program.title}</h3>
                        </div>
                    </div> )
                }
            </div>
        </div>

    );
};

export default Home;