import logo from '/images/troll-face.png';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Troll face logo" className="header--logo" />
                <h3 className="header--logo-text">Meme Generator</h3>
                <h4 className="header--course-title">React Course - Project 3</h4>
            </nav>
        </header>
    )
}