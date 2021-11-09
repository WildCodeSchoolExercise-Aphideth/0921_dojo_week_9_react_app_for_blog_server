import { Link } from "react-router-dom";
import { FaPen, FaTrash } from 'react-icons/fa';


const ArticleCard = ({ article, deleteAction }) => {
    return (
        <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Link to={"/article/" + article.id}>
                    <img className="w-full" src={article.image} alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{article.title}</div>
                        <p className="text-gray-700 text-base">{article.content}</p>
                    </div>
                </Link>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <div className="flex justify-center px-6 pt-4 pb-2">
                    <button class="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 mx-2 rounded-full" onClick={() => deleteAction(article.id)}>
                        <FaTrash />
                    </button>
                    <Link class="bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 mx-2 rounded-full" to={"/edit-article/" + article.id}>
                        <FaPen />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ArticleCard;