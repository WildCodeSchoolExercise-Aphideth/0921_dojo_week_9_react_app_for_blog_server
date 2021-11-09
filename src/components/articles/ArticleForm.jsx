import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/articles/${id}`)
                .then(res => {
                    const { title, content, image } = res.data[0];
                    setTitle(title);
                    setContent(content);
                    setImage(image);
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [id]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim() && image.trim()) {
            const article = {
                title: title,
                content: content,
                image: image
            };
            if (id) postArticle(article);
            else editArticle(article);
        } else {
            console.log('Article not submitted');
        }
    }

    const postArticle = (article) => {
        axios.post("http://localhost:5000/articles", article)
            .then(response => response.data)
            .then(data => console.log(data));
        navigate('/');
    }

    const editArticle = (article) => {
        axios.post(`http://localhost:5000/articles/${id}`, article)
            .then(response => response.data)
            .then(data => console.log(data));
        navigate('/');
    }

    return (
        <div className="flex justify-center mt-20">
            <div className="w-full">
                {id ? <h1 className="text-2xl text-center font-bold">Edit Article</h1> : <h1 className="text-2xl text-center font-bold">Add Article</h1>}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Title"
                            onChange={handleTitle} value={title ? title : ""} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="content"
                            placeholder="content"
                            onChange={handleContent} value={content ? content : ""}></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="text"
                            placeholder="image"
                            onChange={handleImage} value={image ? image : ""} />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ArticleForm;