import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const Slider = (props) =>{
    const {featuredTournaments} = props;
console.log('%csrc/components/slider/Slider.js:11 props', 'color: #007acc;', featuredTournaments);
function formatDate(dateString) {
    const date = new Date(dateString);
  
    return new Intl.DateTimeFormat('en-US', {
      month: 'long', // Full month name (e.g., "May")
      day: 'numeric', // Day number (e.g., "17")
      year: 'numeric' // Full year (e.g., "2025")
    }).format(date);
  }


    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === featuredTournaments.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? featuredTournaments.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = featuredTournaments.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        className={`position-relative slider-item slider-item-${item.id}`}
      >
        <img src={item.image} alt={item.name} />
        <div class="full-overlay"></div>
        <CarouselCaption
          captionText={`${formatDate(item.date_utc )} || ${item.purse}`}
          captionHeader={item.name}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}

    >
      <CarouselIndicators
        items={featuredTournaments}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slider;