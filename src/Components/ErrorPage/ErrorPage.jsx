import { TbError404Off } from 'react-icons/tb';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error) ;
    return (
            <div className="flex flex-col justify-center h-[80vh] items-center text-slate-600 font-serif">
                <TbError404Off className="text-9xl "></TbError404Off>
                <h1 className="text-6xl shadow p-5 rounded-2xl mb-10">Not Found!</h1>
                <button className="btn btn-error bg-[#FF444A] border-none text-white normal-case" onClick={()=>navigate(`/`)}>Back to Home</button>
            </div>
    );
};

export default ErrorPage;