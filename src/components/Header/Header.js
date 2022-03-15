import { Link } from "react-router-dom"
import "./Header.css"

export default function BannerHome() {

    return (
        <div>
            <div className="hero">
                <nav id="navigation">
                    <ul id="navigation__buttons">
                        <Link style={{textDecoration: "none"}} to="/">
                            <li className="navigation__button">
                                Accueil
                            </li>
                        </Link>

                        <Link style={{textDecoration: "none"}} to="/presentation">
                            <li className="navigation__button">
                                Qui suis-je ?
                            </li>
                        </Link>
                        
                        <Link style={{ textDecoration: "none" }} to="/engagements">
                            <li className="navigation__button">
                                Engagements
                            </li>
                        </Link>

                        <Link style={{textDecoration: "none"}} to="/prestations">
                            <li className="navigation__button">
                                Prestations
                            </li>
                        </Link>

                        <Link style={{textDecoration: "none"}} to="/blog">
                            <li className="navigation__button">
                                Blog
                            </li>
                        </Link>

                        <Link style={{textDecoration: "none"}} to="/contact">
                            <li className="navigation__button">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </nav>
                
                <section className="hero-content">
                    <h2 id="hero__title">Studio Réhdac</h2>
                    <p className="hero__subtitle">Rédactrice Web</p>
                    <p className="hero__subtitle">Pour les personnes engagées</p>
                </section>
            </div>

        </div>
    )
}