import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Donation from '../Components/Donation/Donation';
import Home from '../Components/Home/Home';
import Statistics from '../Components/Statisticks/Statistics';
import DonationDetails from '../Components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch('../data.json'),
                element:<Home></Home>
            },
            {
                path:'/donation',
                loader:()=> fetch('../data.json'),
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                loader:()=>fetch('../data.json'),
                element:<Statistics></Statistics>
            },
            {
                path:'/donationDetails/:donationId',
                loader:()=>fetch('../data.json'),
                element:<DonationDetails></DonationDetails>
            }
        ]
        
    }
])

export default router;