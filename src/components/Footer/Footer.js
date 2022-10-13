import React from "react";
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation().pathname;
  const showFooter = location === '/' || location === '/movies' || location === '/saved-movies';

  return (
    <>
      {showFooter &&
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
      }
    </>
  );
}

export default Footer;