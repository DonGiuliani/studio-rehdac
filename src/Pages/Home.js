import BannerHome from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import LastArticles from "../components/Articles/LastArticles";
import Form from "../components/Form/Form";

export default function Home() {
    return (
        <section>
            <BannerHome />
            {/* <Hero /> */}
            <div id="article__header">
                <h1 id="article__bloc__title">
                    Utilisez des textes à forte valeur ajoutée pour votre business.
                </h1>
                <h2 id="article__bloc__subtitle">
                    Confiez-les à une rédactrice web !
                </h2>
            </div>

            <h1 id="last__articles">
                Les articles récents
            </h1>
            <LastArticles />
            <Form />
        </section>
    )
}