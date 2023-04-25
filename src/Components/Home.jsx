import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OutOfReach from '../Sections/OutOfReach/OutOfReach';
import Passion from '../Sections/Passion/Passion';
import YourCreativity from '../Sections/YourCreativity/YourCreativity';
import '../index.css';

const Home = () => {
    return (
        <div data-theme="luxury">
            <Carousel showStatus={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                {/* Set autoPlay prop to true, infiniteLoop prop to true, and interval prop to the desired time in milliseconds */}
                <YourCreativity />
                <OutOfReach />
                <Passion />
            </Carousel>
            
        </div>
    );
};

export default Home;
