import instaLogo from "../../images/insta.png";
import linkedinLogo from "../../images/linkedin.png";
import "./Footer.css";

export default function Footer() {

    return (
        <footer id="footer">
            <div id="networks__bloc">
                <h2 id="follow__message">
                    Retrouvez-moi ici !
                </h2>
                <ul id="networks">
                    <li>
                        <a className="network__link" href="https://www.instagram.com/studio.rehdac/" target="_blank">
                            <img id="insta__logo" src={instaLogo} />
                        </a>
                    </li>

                    <li>
                        <a className="network__link" href="https://www.linkedin.com/in/rehane-draghi/?originalSubdomain=fr" target="_blank">
                            <img id="linkedin__logo" src={linkedinLogo} />
                        </a>
                    </li>
                </ul>
            </div>

            <div id="logo">
                <h1>
                    LOGO
                </h1>
            </div>

            <div id="particulars__bloc">
                <ul id="particulars">
                    <li>
                        CGV
                    </li>

                    <li>
                        Mentions légales
                    </li>

                    <li>
                        Politique de confidentialité
                    </li>
                </ul>
            </div>
        </footer>
    )
}