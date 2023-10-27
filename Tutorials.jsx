import React from 'react';
import './Tutorials.css';

function Tutorial() {
    return (
        <div>
            <div className="featured-tutorials">Featured Tutorials</div>
            <div className="tutorial-list">
                <div className="tutorial1">
                    <a href="#"><img src="https://picsum.photos/400/400" alt="Thumbnail"/></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">Data structures</div>
                        <div className="tutorial-description">"Learn about data structures."</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author's Name: Rohit Sharma
                        </div>
                    </div>
                </div>
                <div className="tutorial2">
                    <a href="#"><img src="https://picsum.photos/400" alt="Thumbnail"/></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">Operating system</div>
                        <div className="tutorial-description">"Operating System lies in the category of system software."</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 4 </span>  Author's Name: Virat Kohli
                        </div>
                    </div>
                </div>  
                <div className="tutorial3">
                    <a href="#"><img src="https://picsum.photos/400/400" alt="Thumbnail"/></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">Algorithms</div>
                        <div className="tutorial-description">“A set of rules to be followed in problem-solving operations."</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 4.5</span>Author's Name: Aditya chopra
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-all-tutorials">
                <a href="#">See all tutorials</a>
            </div>
        </div>
    );
}

export default Tutorial;