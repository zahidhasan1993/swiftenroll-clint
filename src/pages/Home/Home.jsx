import React from 'react';
import Banner from './Banner';
import BestColleges from './BestColleges';
import Gallery from './Gallery';
import Research from './Research';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BestColleges></BestColleges>
            <h1 className="text-2xl font-bold text-gray-700 mt-20 ml-6">Graduation <span className='text-red-700'>Gallery</span></h1>
            <Gallery></Gallery>
            <h1 className="text-2xl font-bold text-gray-700 mt-20 ml-6">Research <span className='text-red-700'>Paper</span></h1>
            <Research></Research>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;