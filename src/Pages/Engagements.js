import Banner from "../components/Banner/Banner";
import ecoresponsable from "../images/ecoresponsable.png";
import ethique from "../images/ethique.jpg";
import { Link } from "react-router-dom";

export default function Engagements() {
    return (
        <section>
            <Banner />
            <h1 className="page__title">
                Engagements
            </h1>
            <nav>
                <p>
                    Il est important pour moi de mettre du sens dans mon travail de rédactrice web SEO.
                    J’ai donc décidé de mettre en place des engagements dans mon activité de freelance afin de participer à une volonté globale de rendre le monde meilleur.<br />
                    Je suis convaincue que chacun à son échelle, nous pouvons agir contre les inégalités et faire bouger les choses.<br />
                    En faisant appel à mes services, vous soutiendrez également de belles causes.<br /> 
                    Voici les engagements que j’applique au quotidien :
                </p>

                <ul id="engagement__bloc">
                    <div>
                        <Link className="engagement__article" style={{ textDecoration: "none" }} to={"/engagements/ecoresponsable"}>
                            <li>
                                <img className="engagement__image" src={ecoresponsable} />
                                <h1 className="engagement__title">
                                    Rédaction web écoresponsable
                                </h1>
                            </li>
                        </Link>
                    </div>

                    <Link className="engagement__article" style={{ textDecoration: "none" }} to={"/engagements/ethique"}>
                        <li>
                            <img className="engagement__image" src={ethique} />
                            <h1 className="engagement__title">
                                Rédaction web éthique
                            </h1>
                        </li>
                    </Link>
                </ul>
            </nav>
        </section>
    )
}