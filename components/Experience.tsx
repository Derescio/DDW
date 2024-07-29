import React from 'react'
import BackGroundComponent from './BackGroundComponent'
import { Carousel, Card } from './ui/AppleCarousel'

const Experience = () => {
  const carouselData = [
    { 
      src: '/Screenshot2.png', 
      title: 'Project 1', 
      category: 'Web Development',
      content: <div>Detailed content for Project 1</div>
    },
    { 
      src: '/appName.svg', 
      title: 'Project 2', 
      category: 'Mobile App',
      content: <div>Detailed content for Project 2</div>
    },
    { 
      src: '/arrow.svg', 
      title: 'Project 3', 
      category: 'UI/UX Design',
      content: <div>Detailed content for Project 3</div>
    },
    // Add more items as needed
  ];

  const carouselItems = carouselData.map((item, index) => (
    <Card key={index} card={item} index={index} />
  ));

  return (
    <div>
      <BackGroundComponent>

        <Carousel items={carouselItems} autoplay={true} autoplayInterval={5000}/>
      </BackGroundComponent>
    </div>
  )
}

export default Experience
