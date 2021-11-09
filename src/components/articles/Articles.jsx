import { useEffect, useState } from "react";
import axios from "axios";

import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllArticles()
    }, []);
    
    const getAllArticles = () => {
        axios.get("http://localhost:5000/articles")
            .then(response => response.data)
            .then(data => setArticles(data));
    }
    const deleteArticle = (id) => {
        axios.delete(`http://localhost:5000/articles/${id}`)
            .then(response => response.data)
        getAllArticles()
    }

    return (
        <div className="flex flex-wrap">
            {articles ?
                articles.map(article => (
                    <ArticleCard key={article.id} article={article} deleteAction={deleteArticle} />
                ))
                : "No data"}
        </div>
    )
}

export default Articles;