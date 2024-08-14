import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
        <div>
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link href="/"><img src="logo.png" alt="" className="img-fluid logo-footer"/></Link>
                      <div className="footer-about">
                          <p>Explore our bestselling romance novels, where passion meets storytelling. Find your next favorite love story among our top picks!  </p>
                      </div>

          </div>
          <div className="col-md-3">
            <div className="useful-link">
              <h2>Useful Links</h2>
              <img src="./Linkssets/images/Linkbout/home_line.png" alt="" className="img-fluid"/>
              <div className="use-links">
                <li><Link href="/"><i className="fa-solid fa-angles-right"></i> Home</Link></li>
                <li><Link href="#"><i className="fa-solid fa-angles-right"></i> About Us</Link></li>
                <li><Link href="#"><i className="fa-solid fa-angles-right"></i> Contact</Link></li>
              </div>
            </div>

          </div>
                    <div className="col-md-3">
                        <div className="social-links">
              <h2>Follow Us</h2>
              <img src="./Linkssets/images/Linkbout/home_line.png" alt=""/>
              <div className="social-icons">
                <li><Link href="#"><i className="fa-brands fa-facebook-f"></i> Facebook</Link></li>
                <li><Link href="#"><i className="fa-brands fa-instagram"></i> Instagram</Link></li>
                <li><Link href="#"><i className="fa-brands fa-whatsapp"></i>Whatsapp</Link></li>
              </div>
            </div>
             </div>
          <div className="col-md-3">
            <div className="address">
              <h2>Address</h2>
              <img src="./Linkssets/images/Linkbout/home_line.png" alt="" className="img-fluid"/>
              <div className="address-links">
                <li className="address1"><i className="fa-solid fa-location-dot"></i>Shop no. 12 Daryaganj 110035</li>
                   <li><Link href="#"><i className="fa-solid fa-phone"></i> +91 8448157381</Link></li>
                   <li><Link href="#"><i className="fa-solid fa-envelope"></i> bookiy@gmail.com</Link></li>
              </div>
            </div>
          </div>
                  
        </div>
      </div>

    </footer>
        </div>
    </>
  )
}

export default Footer
