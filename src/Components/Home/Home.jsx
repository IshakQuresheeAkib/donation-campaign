import { useLoaderData, useNavigate } from "react-router-dom";
import Hero from "./Hero/Hero";
import { useEffect, useState } from "react";
import { MdFeedback } from 'react-icons/md';


const Home = () => {

    const [programs,setPrograms] = useState([]); 
    const cards = useLoaderData();
    
    const navigate = useNavigate();
    const [searchValue,setSearchValue] = useState('')


    
    useEffect(()=>{
    
    if (searchValue) {
        const filteredCards = cards.filter(card => card.categoryName.toLowerCase() === searchValue.toLowerCase());
       return setPrograms(filteredCards);
    }
    setPrograms(cards);
    },[searchValue,cards])

    

    return (
        <div>
            <Hero setSearchValue={setSearchValue} searchValue={searchValue}></Hero>
            
            { programs.length ?
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-28 xl:px-36 mx-auto gap-y-7">
                   { 
                   programs.map(program=>  
                   <div key={program.id} className="xl:w-[260px] place-self-center cursor-pointer active:scale-95 duration-500" onClick={()=>navigate(`/donationDetails/${program.id}`)}>
                        <img src={program.categoryImage} alt="" className="h-40 xl:w-[260px] w-[250px] rounded-t-lg"/>
                        <div className="p-3 xl:w-[260px] w-[250px] rounded-b-lg" style={{backgroundColor:program.categoryNameBackgroundColor}}>
                            <h5 style={{color:program.titleTextColor,backgroundColor:program.cardBackgroundColor}} className="text-xs p-1 my-1 w-fit rounded">{program.categoryName}</h5>
                            <h3 style={{color:program.titleTextColor}} className="font-semibold">{program.title}</h3>
                        </div>
                    </div>) 
                    }
                </div>: 
                <div className="flex flex-col justify-center h-screen items-center">
                    <MdFeedback className="text-9xl text-[#FF444A]"></MdFeedback>
                    <h1 className="text-2xl shadow p-4 rounded-2xl font-serif">There is no campaign available in `{searchValue}` category!</h1>
                </div>
            }
            
            
        </div>

    );
};

export default Home;