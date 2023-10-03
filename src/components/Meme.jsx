import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: 'O ye who believe!', 
        bottomText: 'Fear Allah and be dutiful to Him', 
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
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

    function inputChange(e) {
        const {name, value} = e.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main className="meme">
            <section>
                <div action="#" className="meme--form">
                    <input 
                        type="text" 
                        className="meme--input" 
                        aria-label="top-text" 
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={inputChange}     
                    />

                    <input 
                        type="text" 
                        className="meme--input" 
                        aria-label="bottom-text" 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={inputChange}     
                    />

                    <button className="meme-btn" onClick={getMemeImage}>Get a new meme image 🖼️</button>
                </div>
                <div className="meme--image-container">
                    <img src={meme.randomImage} alt="" className="meme--image" />
                    <h2 className="meme--image-text top">{meme.topText}</h2>
                    <h2 className="meme--image-text bottom">{meme.bottomText}</h2>
                </div>
            </section>
        </main>

    )
}