import logo from '/images/troll-face.png';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Troll face logo" className="header--logo" />
                <h3 className="header--logo-text">Meme Geberator</h3>
                <h5 className="header--course-title">React Course - Project 3</h5>
            </nav>
        </header>
    )
}