import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link className="nav__link" to="/">home</Link>
      <Link className="nav__link" to="/where-when/">where/when</Link>
      <Link className="nav__link" to="/amenities/">amenities</Link>
      <Link className="nav__link" to="/rsvp/">rsvp</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
