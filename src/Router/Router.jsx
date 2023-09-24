import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>
        
    }
])

export default router;