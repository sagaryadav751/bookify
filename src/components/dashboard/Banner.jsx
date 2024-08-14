import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
  return (
    <>
        
        <OwlCarousel className='owl-theme' loop margin={3} autoplay={true} items={1} nav >
            <div className='item'>
                <img src="2.jpg" alt="" style={{height:"65vh"}}  />
            </div>
            <div className='item'>
            <img src="3.jpg" alt="" style={{height:"65vh"}}  />
            </div>
            <div className='item'>
            <img src="4.jpg" alt="" style={{height:"65vh"}}  />
            </div>
        </OwlCarousel>;
        
    </>
  )
}

export default Banner
