import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Articles.css";
import { getArticles } from "../../services/dataManager";
import ArticlePage from "../../Pages/ArticlePage";

export default function Articles() {

    const navigate = useNavigate();
    const [articles, setArticle] = useState(null);

    useEffect(async () => {
        if (articles !== null) return;
        setArticle(await getArticles());
    })

    function openArticle(url) {
        console.log(url);
        navigate(url);
        <ArticlePage url= {url} />
    }

    return (
        <article>
            <ul id="articles__bloc">
            {articles === null ? "loading" :
                articles.map((article) => (
                    <li className="article" key={article.titre}>
                        {/* <Link style={{ textDecoration: "none" }} to={`/article/${article.url}`}> */}
                        <a onClick={() => openArticle(article.url)}>
                            <img className="article__picture" src={article.image} alt={article.image} />
                            <h1>
                                {article.titre}
                            </h1>
                            <p>
                                {article.corps}
                            </p>
                        </a>
                        {/* </Link> */}
                    </li>
                ))
            }
            </ul>
        </article>
    )
}