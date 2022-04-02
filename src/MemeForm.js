import React from 'react';
import memeData from './memeData';

export default function MemeForm() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memeData);
    function getMemeImage() {
        let memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    return (
        <section>
            <div className="row justify-content-center align-items-center py-4">
                <div className="col-6 mb-3">
                    <input
                        type="text"
                        className="generator-input"
                        placeholder="top-text"
                    />
                </div>
                <div className="col-6 mb-3">
                    <input
                        type="text"
                        className="generator-input"
                        placeholder="bottom-text"
                    />
                </div>
                <div className="col-12 row">
                    <button
                        className="col-12 generator-btn"
                        onClick={getMemeImage}>
                        Get a new meme image 🖼
                    </button>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <img src={meme.randomImage} className="col-lg-6 px-0 img-fluid rounded" />
            </div>
        </section>
    );
}