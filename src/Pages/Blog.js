import Articles from "../components/Articles/Articles";
import Banner from "../components/Header/Banner";
import "./Pages.css";

export default function Blog() {
    return (
        <section>
            <Banner />
            <h1 className="page__title">
                Blog
            </h1>
            <Articles />
        </section>
    )
}