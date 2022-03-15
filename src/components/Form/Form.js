import "./Form.css"

export default function Form() {
    return (
        <form id="form" method="post" action="mailto:studio.rehdac@gmail.com">
            <div className="input-wrapper">
                <label htmlFor="prénom">
                    Prénom
                </label>
                <input type="text" id="prénom" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">
                    E-mail
                </label>
                <input type="email" id="email" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="sujet">
                    Sujet
                </label>
                <input type="text" id="sujet" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="message">
                    Votre message
                </label>
                <input type="text" id="message" />
            </div>
            <button type="submit" className="send-button">
                J'envoie !
            </button>
        </form>
    )
}