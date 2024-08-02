import './header.css';

export const Header =  () => {
    return (
        <header className="header">
            <a href="#" className="header__logo">Stelmakhova</a>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#" className="nav__link">Contacts</a>
                    </li>

                    <li className="nav__item">
                        <a href="#" className="nav__link">About us</a>
                    </li>

                    <li className="nav__item">
                        <a href="#" className="nav__link">Subscribe</a>
                    </li>
                </ul>
            </nav>
            <button className="header__button">Buy</button>
        </header>
    )
}