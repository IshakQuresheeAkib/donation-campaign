import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { addToLS } from "../../Utilities/LocalStorage";


const DonationDetails = () => {
    const donation = useParams();
    const donationId = donation.donationId
    const programs = useLoaderData();
    const [data,setData] = useState([])

    useEffect(()=>{
        if (programs.length) {
            const donationData = programs.filter(program=> program.id == donationId)
            setData(donationData)
        }
    },[])
    console.log(data);
    
    const handleDonate = (id) => {
        addToLS(id);
        alert('success')
    }

    return (
        <div>
            <Header></Header>
            <div className="flex justify-center my-14 ">
                {                      
                    data.length && 
                    data.map(item=> <div key={item.id} className="w-[600px]">
                        <div className="w-[600px] h-[400px] relative bg-contain bg-no-repeat rounded-md" style={{backgroundImage:`url(${item.categoryImage})`}}>
                            <div className="w-full h-20 absolute bottom-0 bg-[#0B0B0B80] backdrop-brightness-125 rounded-md">
                                <button className="btn btn-error border-none text-white btn-sm text-xs normal-case w-28 m-5" style={{backgroundColor:item.titleTextColor}} onClick={()=>handleDonate(item.id)}>Donate {item.donationAmount}</button>
                            </div>
                        </div>
                    <h2 className="text-3xl font-bold py-5">{item.title}</h2>
                    <p>{item.description}</p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default DonationDetails;

