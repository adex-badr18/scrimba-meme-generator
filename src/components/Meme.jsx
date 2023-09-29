export default function Meme() {
    return (
        <main className="meme">
            <section>
                <form action="#" className="meme--form">
                    <input type="text" className="meme--input" aria-label="top-text" placeholder="Top text" />
                    <input type="text" className="meme--input" aria-label="bottom-text" placeholder="Bottom text" />
                    <button className="meme-btn">Get a new meme image 🖼️</button>
                </form>
            </section>
        </main>

    )
}