import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const weddingDate = new Date(2019, 7, 31);
const dateNow = new Date();
const distance = weddingDate - dateNow;
const daysToWedding = Math.floor(distance / (1000 * 60 * 60 * 24));

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link className="nav__link" to="/">home</Link>
      <Link className="nav__link" to="/where-when/">where/when</Link>
      <Link className="nav__link" to="/amenities/">amenities</Link>
      <Link className="nav__link" to="/rsvp/">rsvp</Link>
    </nav>
    <div className="nav__countdown">
      Only {daysToWedding} days away!
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
