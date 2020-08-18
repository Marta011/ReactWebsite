import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import imageFox from '../assets/lis.jpg';
import imageCat from '../assets/kot.jpg';
import imageDog from '../assets/pies.jpg';

class ImgCarousel extends React.Component {
   render() {
      return (
        <Carousel>
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageFox}
                        alt="Lis"
                    />
                    <Carousel.Caption>
                        <h3>Natura1</h3>
                        <p>Photo by Scott Walsh on Unsplash</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageCat}
                        alt="Kot"
                    />
                    <Carousel.Caption>
                        <h3>Natura2</h3>
                        <p>Photo by Scott Walsh on Unsplash</p>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imageDog}
                        alt="Pies"
                    />
                    <Carousel.Caption>
                        <h3>Natura3</h3>
                        <p>Photo by Scott Walsh on Unsplash</p>
                    </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
      );
   }
}

export default ImgCarousel;