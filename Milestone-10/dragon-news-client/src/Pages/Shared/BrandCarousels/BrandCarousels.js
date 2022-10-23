import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/Brand1.png'
import Brand2 from '../../../assets/brands/Brand2.png'

const BrandCarousels = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="Brand-1"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Brand-2"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    );
};

export default BrandCarousels;