import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

import { PieChart, Pie,  Cell } from 'recharts';
import { useEffect, useState } from "react";
import { getStoredCard } from "../../Utilities/LocalStorage";




const COLORS = [ '#FF444A','#0088FE'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {` ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const Statistics = () => {

  const [data,setData] = useState([])
  const programmes = useLoaderData();

  const totalAmount = programmes.length;

  useEffect(()=>{
    const cards = getStoredCard();
    if (cards.length) {
      const donatedAmount = cards.length;
      setData([
        {value:totalAmount},
        {value:donatedAmount}
      ])
      
    }
    
  },[totalAmount])
  console.log(data);



    return (
        <div>
            <Header></Header>

            <div className="flex justify-center">
            <PieChart width={400} height={400}>
          <Pie
            data={data.length ? data: [{value:totalAmount},{value:0}]}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            
            fill="#FF444A"
            dataKey="value"
          >
            {data.length && data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
            </div>
          <div className="flex items-center gap-7 mb-10 justify-center">
                <div className="flex items-center gap-2">
                  <span>Your Donation</span>
                  <div className="w-16 h-2 bg-[#0088FE] rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span>Total Donation</span>
                  <div className="w-16 h-2 bg-[#FF444A] rounded-sm"></div>
                </div>
          </div>

        </div>
    );
};

export default Statistics;