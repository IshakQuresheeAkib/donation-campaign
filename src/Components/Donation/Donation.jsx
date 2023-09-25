import { useEffect, useState } from "react";
import { getStoredCard } from "../../Utilities/LocalStorage";
import Header from "../Header/Header";
import { useLoaderData, useNavigate } from "react-router-dom";


const Donation = () => {

    const [donations,setDonations] = useState([])
    const card = getStoredCard();
    const programmes = useLoaderData();

    useEffect(()=>{
        if(card.length){
            let donationinfo = [];
            card.map(id=>{
               const donationData = programmes.find(programme=>programme.id == id)
               donationinfo.push(donationData)
            })
            setDonations(donationinfo)
        }
    },[])
    
    console.log(donations);

    const navigate = useNavigate();

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-2 gap-6 px-36 my-20">
                {
                    donations.length && 
                    donations.map((donation,idx)=> <div key={idx} className="flex h-40">
                        <img src={donation.categoryImage} alt="" className="h-full w-60 rounded-l-lg"/>
                        <div className="flex flex-col gap-2 p-2 w-96 rounded-r-lg" style={{backgroundColor:donation.categoryNameBackgroundColor}}>
                            <h5 style={{color:donation.titleTextColor,backgroundColor:donation.cardBackgroundColor}} className="text-xs p-1 my-1 w-fit rounded">{donation.categoryName}</h5>
                            <h3 className="font-bold text-xl">{donation.title}</h3>
                            <p className="font-semibold text-sm">{donation.donationAmount}</p>
                            <button className="btn btn-error border-none text-white btn-sm w-28 text-xs normal-case" style={{backgroundColor:donation.titleTextColor}} onClick={()=>navigate(`/donationDetails/${donation.id}`)}>View Details</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Donation;