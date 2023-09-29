export default function MemeForm() {
    return (
        <section className="memeform--container">
            <form action="#" className="memeform">
                <div className="memeform--inputs">
                    <input type="text" className="memeform--input" aria-label="" placeholder="Shut up" />
                    <input type="text" className="memeform--input" aria-label="" placeholder="and take my money" />
                </div>
                <button className="memeform--get-image-btn">Get a new meme image 🖼️</button>
            </form>
        </section>
    )
}