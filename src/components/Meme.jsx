import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({topText: '', bottomText: '', randomImage: 'https://i.imgflip.com/22bdq6.jpg'});

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes; 
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            }
        ))
    }

    return (
        <main className="meme">
            <section>
                <div action="#" className="meme--form">
                    <input type="text" className="meme--input" aria-label="top-text" placeholder="Top text" />
                    <input type="text" className="meme--input" aria-label="bottom-text" placeholder="Bottom text" />
                    <button className="meme-btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
                </div>
                <div className="meme--image-container">
                    <img src={meme.randomImage} alt="" className="meme--image" />
                </div>
            </section>
        </main>

    )
}