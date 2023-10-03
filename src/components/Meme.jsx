import { useState, useEffect } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: 'O ye who believe!', 
        bottomText: 'Fear Allah and be dutiful to Him', 
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

      /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: allMemes[randomNumber].url
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