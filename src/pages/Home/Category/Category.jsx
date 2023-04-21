import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();

    const categoryNews = useLoaderData()
    console.log(id)
    return (
        <div>
            <h2>this  category has  :{categoryNews.length} news</h2>
            {
                categoryNews.map(news => <NewsCard
                
                key={news._id}
                news = {news}
                ></NewsCard> )
            }
        </div>
    );
};

export default Category;