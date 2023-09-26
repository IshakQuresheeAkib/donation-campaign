import { useEffect, useState } from "react";
import { getStoredCard } from "../../Utilities/LocalStorage";
import Header from "../Header/Header";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdFeedback } from 'react-icons/md';

const Donation = () => {

    const [isTrue,setIsTrue] = useState(false)
    const [allData,setAllData] = useState([])
    let [donations,setDonations] = useState([])
    const card = getStoredCard();
    const programmes = useLoaderData();

    useEffect(()=>{
        if(card.length){
            let donationinfo = [];
            card.map(id=>{
               const donationData = programmes.find(programme=>programme.id == id)
               donationinfo.push(donationData)
            })
            setAllData(donationinfo);
            setDonations(donationinfo.slice(0,4))
            
            ;
            
        }
        
    },[])
    
    console.log(allData,card);
    
    const handleSeeAll = () => {
        setDonations(allData);
        setIsTrue(true)
    }
    console.log(isTrue);

    const navigate = useNavigate();

    return (
        <div className="mb-20">
            <Header></Header>
            <div>
                {!donations.length ? <div className="flex flex-col justify-center h-[60vh] items-center">
                        <MdFeedback className="text-9xl text-[#FF444A]"></MdFeedback>
                        <h1 className="text-2xl shadow p-4 rounded-2xl font-serif">You have not donated yet!</h1>
                    </div>: <p></p> }
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 xl:px-36 px-2 my-20 place-items-center">
                {
                    donations.length ?  donations.map((donation,idx)=> <div key={idx} className="flex md:h-44 h-52">
                        <img src={donation.categoryImage} alt="" className="h-full w-60 rounded-l-lg"/>
                        <div className="flex flex-col gap-2 p-2 xl:w-96 lg:w-72 w-96 rounded-r-lg" style={{backgroundColor:donation.categoryNameBackgroundColor}}>
                            <h5 style={{color:donation.titleTextColor,backgroundColor:donation.cardBackgroundColor}} className="text-xs p-1 my-1 w-fit rounded">{donation.categoryName}</h5>
                            <h3 className="font-bold text-xl">{donation.title}</h3>
                            <p className="font-semibold text-sm" style={{color:donation.titleTextColor}}>{donation.donationAmount}</p>
                            <button className="btn btn-success border-none text-white md:btn-sm btn-xs w-28 text-xs normal-case" style={{backgroundColor:donation.titleTextColor}} onClick={()=>navigate(`/donationDetails/${donation.id}`)}>View Details</button>
                        </div>
                    </div> ) : <p></p>
                }
            </div>
            <button onClick={handleSeeAll} className="btn btn-success bg-[#009444] text-white normal-case flex w-28 mx-auto" style={{display: isTrue ? 'none' : card.length > 4 ? 'block' : 'none'}}>See All</button>
        </div>
    );
};

export default Donation;