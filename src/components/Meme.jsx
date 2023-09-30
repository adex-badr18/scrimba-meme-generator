import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    const [imageUrl, setImageUrl] = useState('');

    function getMemeImage() {
        const memesArray = memesData.data.memes; 
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setImageUrl(memesArray[randomNumber].url);
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
                    <img src={imageUrl} alt="" className="meme--image" />
                </div>
            </section>
        </main>

    )
}