import { Link } from "react-router-dom";
//import { FaTrash } from 'react-icons/fa';


const ArticleCard = () => {
    return (
        <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Link to={"/article/:id"}>
                    <img className="w-full" src="::TODO article image src" alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">TODO:: article title</div>
                        <p className="text-gray-700 text-base">TODO:: article content</p>
                    </div>
                </Link>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {/* 
                    TODO:: Add Action Delete to ArticleCard and make it available to the parent component
                    Decomment Line 2 to allaow React to use FaTrash component
                    <button class="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full" onClick={}>
                        <FaTrash />
                    </button> */}
                </div>
            </div>
        </div>
    )
}
export default ArticleCard;