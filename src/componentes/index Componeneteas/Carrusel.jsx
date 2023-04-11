import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


const StyledCarousel = styled(Slider)`
  .slick-slide {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
  }
  
  .slick-active {
    transform: scale(1.1);
    opacity: 1;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;



const slides = [
  {
    id: 1,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fasd&psig=AOvVaw1mHeeL23W2RaKwLsIh1EBa&ust=1680107356166000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCb2-KF__0CFQAAAAAdAAAAABAD+++++++++++++',
    caption: 'Slide 1',
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1016/600/400',
    caption: 'Slide 2',
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1018/600/400',
    caption: 'Slide 3',
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledCarousel {...settings}>
      
    </StyledCarousel>
  );
};
export default Carousel;