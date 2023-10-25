import { Link } from 'react-router-dom';
import img from '../../assets/404.jpg'

const NotFound = () => {
    return (
        <div className='flex flex-col gap-10 h-screen justify-center items-center'>
            <img src={img} alt="" className='h-[500px] w-full' />
            <Link to='/'>
                <button className="btn btn-primary capitalize">Back To Home</button>
            </Link>
        </div>
    );
};
export default NotFound;