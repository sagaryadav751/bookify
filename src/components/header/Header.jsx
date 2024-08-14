import { Link } from "react-router-dom"
import "../header/header.css"

const Header = () => {
  return (
    <>
         <div className="container-fluid " style={{backgroundColor:"#EEEEEE"}}>
              <div className="col-9 m-auto">
              <div className="d-flex m-auto justify-content-between " style={{width:"100%"}}>
                      <div className="navbox1 col main">
                            <ul className="list-style-none d-flex box1ul" style={{gap:"2em"}}>
                              <Link to="/" ><li><img src="logo.png" alt="bookify logo" /></li></Link>
                              <Link to="/" className="linkremover"><li>Home</li></Link>
                              <li>Categories</li>
                              <li>About</li>
                            </ul>
                      </div>
                      <div className="navbox2 col d-flex justify-content-end" >
                        <ul className="list-style-none d-flex justify-content-end box2ul" style={{gap:"0.5em"}}>
                          <li>Sign Up</li>
                          <li>|</li>
                          <li>Login</li>
                        </ul>
                        <ul className="list-style-none d-flex box3ul justify-content-between">
                        <li className="nav-icon"><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li><i className="fa-solid fa-cart-shopping"></i></li>
                        </ul>
                      </div>
                  </div>
              </div>
         </div>
    </>
  )
}

export default Header
