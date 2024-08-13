import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsapi';
import Navbar from './navbar';

const News_feed = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState('cricket');

    useEffect(() => {
        fetchNews(currentCategory, currentPage)
            .then(setArticles)
            .catch((error) => alert("Failed to fetch news: " + error.message));
    }, [currentCategory, currentPage]);

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setCurrentPage(1);
    };

    const displayNews = () => {
        return articles.map((article, index) => (
            <div className="card my-4 mx-2" style={{ width: '18rem', backgroundColor: 'gold', color: 'black' }} key={index}>
                <img src={article.urlToImage || 'placeholder.jpg'} className="card-img-top" alt={article.title} />
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description || 'No description available.'}</p>
                    <a href={article.url} className="btn" style={{ backgroundColor: 'black', color: 'gold' }} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>
            </div>
        ));
    };

    return (
        <div>
        <Navbar />
        <div className="container mt-4">
            <div className="d-flex justify-content-around mb-4" style={{paddingTop:'56px'}}>
                <button className="btn btn-primary"
                    style={{backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('cricket')}
                >
                    Cricket
                </button>
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('football')}
                >
                    Football
                </button>
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('volleyball')}
                >
                    Volleyball
                </button>
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('hockey')}
                >
                    Hockey
                </button>
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('kabadi')}
                >
                    Kabadi
                </button>
                <button
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('basketball')}
                >
                    Basketball
                </button>
                <button
                    className="btn btn-primary"
                    style={{backgroundColor: 'black', color: 'gold' }}
                    onClick={() => handleCategoryChange('shooting')}
                >
                    Shooting
                </button>
            </div>
            <h1>Sports News Feed</h1>
            <div className="row" id="newsContainer">
                {displayNews()}
            </div>
            <div className="d-flex justify-content-around my-4">
                <button 
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }} 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous page
                </button>
                <button 
                    className="btn btn-primary"
                    style={{ backgroundColor: 'black', color: 'gold' }} 
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next page
                </button>
            </div>
        </div>
        </div>
    );
};

export default News_feed;
