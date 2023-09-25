import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Donation from '../Components/Donation/Donation';
import Home from '../Components/Home/Home';
import Statistics from '../Components/Statisticks/Statistics';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch('data.json'),
                element:<Home></Home>
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            }
        ]
        
    }
])

export default router;