import React from 'react';
import './Article.css';

function Article() {
    return (
        <div>
            <div className="featured-articles">Featured Articles</div>
            <div className="article-list">
                <div className="article1">
                    <a href="#"><img src="https://picsum.photos/400" alt="Thumbnail"/></a>
                    <div className="article-content">
                        <div className="article-name">Data structures</div>
                        <div className="article-description">"A data structure is a storage that is used to  organize data."</div>
                        <div className="article-author">
                            <span className="rating">⭐ 5 </span>Author's Name: Rakesh Sharma
                        </div>
                    </div>
                </div>
                <div className="article2">
                    <a href="#"><img src="https://picsum.photos/400/400" alt="Thumbnail"/></a>
                    <div className="article-content">
                        <div className="article-name">Operating system</div>
                        <div className="article-description">"Operating System lies in the category of system software."</div>
                        <div className="article-author">
                            <span className="rating">⭐ 5 </span>Author's Name: Rajesh Sharma
                        </div>
                    </div>
                </div>  
                <div className="article3">
                    <a href="#"><img src="https://picsum.photos/400" alt="Thumbnail"/></a>
                    <div className="article-content">
                        <div className="article-name">Algorithms</div>
                        <div className="article-description">“A set of rules to be followed in  problem-solving operations."</div>
                        <div className="article-author">
                            <span className="rating">⭐5 </span>Author's Name: Aditya Rao
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-all-articles">
                <a href="#">See all articles</a>
            </div>
        </div>
    );
}

export default Article;