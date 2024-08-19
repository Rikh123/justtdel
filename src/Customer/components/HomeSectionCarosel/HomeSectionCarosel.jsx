import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { women_dress } from '../../../Data/women dress'; // Ensure the path is correct

const HomeSectionCarousel = ({ sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Generate carousel items
    const items = women_dress.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    const itemsLength = items.length; // Dynamically determine the number of items

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    // Move to the previous item
    const slidePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
        );
    };

    // Move to the next item
    const slideNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === itemsLength - 1 ? 0 : prevIndex + 1
        );
    };

    // Sync the active index during slide change
    const synActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className="relative px-4 sm:px-8">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5 border">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1000}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={synActiveIndex}
                    activeIndex={activeIndex}
                />
                {/* Left arrow button */}
                <Button
                    variant="contained"
                    className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2"
                    onClick={slidePrev}
                    style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer' }} // Ensure correct positioning
                >
                    <KeyboardArrowLeftIcon />
                </Button>
                {/* Right arrow button */}
                <Button
                    variant="contained"
                    className="absolute top-1/2 right-0 z-50 transform -translate-y-1/2"
                    onClick={slideNext}
                    style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer' }} // Ensure correct positioning
                >
                    <KeyboardArrowRightIcon />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
