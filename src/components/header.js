import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render () {
    return (
      <div className={this.state.hasScrolled ? 'Header ScrolledHeader' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../imgs/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">9 questions</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Watch course</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
