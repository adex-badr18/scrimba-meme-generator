import memesData from "../memesData";

export default function Meme() {
    let imageUrl;

    function getImageUrl() {
        const memesArray = memesData.data.memes; 
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        imageUrl = memesArray[randomNumber].url;
        console.log(imageUrl);
    }

    return (
        <main className="meme">
            <section>
                <div action="#" className="meme--form">
                    <input type="text" className="meme--input" aria-label="top-text" placeholder="Top text" />
                    <input type="text" className="meme--input" aria-label="bottom-text" placeholder="Bottom text" />
                    <button className="meme-btn" onClick={getImageUrl}>Get a new meme image 🖼️</button>
                </div>
            </section>
        </main>

    )
}