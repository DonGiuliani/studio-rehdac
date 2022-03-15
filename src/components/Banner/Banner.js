import { Link } from "react-router-dom"
import "./Banner.css"

export default function Banner() {

    return (
        <div>
            <nav id="navigation">
                <ul id="navigation__buttons">
                    <Link style={{ textDecoration: "none" }} to="/">
                        <li className="navigation__button">
                            Accueil
                        </li>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/presentation">
                        <li className="navigation__button">
                            Qui suis-je ?
                        </li>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/engagements">
                        <div id="menu-deroulant">
                            <ul className="navigation__button engagement__menu">
                                Engagements
                                <li className="engagement__button">
                                    Écologique
                                </li>

                                <li className="engagement__button">
                                    Éthique
                                </li>
                            </ul>
                        </div>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/prestations">
                        <li className="navigation__button">
                            Prestations
                        </li>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/blog">
                        <li className="navigation__button">
                            Blog
                        </li>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/contact">
                        <li className="navigation__button">
                            Contact
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}