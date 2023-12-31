import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

    <div className="container-fluid">
      <div className="row bg-dark text-white">
        <div className="col-md-3 text-center"><Link className="navbar-brand fs-3 fw-bold" to="#">Navbar</Link></div>
        <div className="col-md-6 py-1"> 
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
        <div className="col-md-3 fs-3 d-flex justify-content-evenly">
            <Link to = {''}>
              <i className="bi bi-box-arrow-in-right text-white"></i>
            </Link>
            <Link to = {'/register'}>
              <i className="bi bi-person-circle text-white"></i>
            </Link>
            <Link to = {'/login'}>
              <i className="bi bi-cart text-white"></i>
            </Link>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-body-secondary">
    <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/test'}>Test</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/deals'}>Deals</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/faq'}>FAQs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/cart'}>Cart</Link>
          <Link className="nav-link" to={'/hooks'}>Hooks</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header