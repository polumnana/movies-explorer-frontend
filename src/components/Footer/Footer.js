import React from "react";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__subscription footer__line">
                <p className="footer__text footer__text_transparent">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className="footer__container">
                <p className="footer__text footer__text_time">© {new Date().getFullYear()}</p>
                <div className="footer__copyright">
                    <p className="footer__text footer__text_copyright">Яндекс. Практикум</p>
                    <p className="footer__text footer__text_copyright">Github</p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;