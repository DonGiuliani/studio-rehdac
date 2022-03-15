import Form from "../components/Form/Form";
import Banner from "../components/Banner/Banner";
import "./Pages.css";

export default function Contact() {
    return (
        <section>
            <Banner />
            <h1 className="page__title">
                Contact
            </h1>
            <Form />
        </section>
    )
}