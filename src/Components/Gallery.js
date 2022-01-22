/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import StyledGallery from './Gallery.styled';

const SimpleSlider = ({ images, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
  };
  const galleryContent = images.map((image) => {
    return (
      <div className="gradient-overlay">
        <img src={image.url} alt={image.alt} />
      </div>
    );
  });
  return (
    <div>
      <span>{title}</span>
      <Slider {...settings}>{galleryContent}</Slider>
    </div>
  );
};

const Gallery = ({ images, title }) => {
  return (
    <StyledGallery>
      <SimpleSlider images={images} title={title} />
    </StyledGallery>
  );
};

export default Gallery;
