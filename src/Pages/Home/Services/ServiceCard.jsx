import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id,title, img, price } = service;
    return (

        <div class=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg h-80" src={img} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <div >
                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>

                <div class="flex items-center justify-between">
                    <span class="text-2xl font-medium text-orange-600 dark:text-orange-600">Price: ${price}</span>
                    <Link to={`/checkout/${_id}`}>
                        <button class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:hover:bg-orange-200 dark:focus:ring-orange-200"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};
export default ServiceCard;