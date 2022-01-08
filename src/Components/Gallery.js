/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import StyledGallery from './Gallery.styled';

const SimpleSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const galleryContent = images.map((image) => {
    return (
      <div>
        <img src={image.url} alt={image.alt} />
      </div>
    );
  });
  return (
    <div>
      <Slider {...settings}>{galleryContent}</Slider>
    </div>
  );
};

const Gallery = ({ images }) => {
  return (
    <StyledGallery>
      <SimpleSlider images={images} />
    </StyledGallery>
  );
};

export default Gallery;
