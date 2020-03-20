import React from "react"

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-item">
          Built with&nbsp;♡&nbsp;
          <a href="https://www.gatsbyjs.org">Gatsby,</a>
        </div>
        <a
          className="footer__top-item"
          href="https://www.freepik.com/free-photos-vectors/business"
        >
          Business vector created by rawpixel.com - www.freepik.com
        </a>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          Breguła Ubezpieczenia © {new Date().getFullYear()}{" "}
          <span className="mobile-off">
            -&nbsp;Wszystkie&nbsp;prawa&nbsp;zastrzeżone.
          </span>
        </div>
        <div className="footer__made-by">
          Website created by&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://samuelk.pl"
            title="Check it out!"
          >
            &ndash;Samuel&nbsp;Kędziora&ndash;
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
