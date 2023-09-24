
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error) ;
    return (
        <div>
            <h1 className='text-6xl'> 404 {error.statusText}</h1>
        </div>
    );
};

export default ErrorPage;