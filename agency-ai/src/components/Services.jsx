import React from 'react'
import assest from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'Reach the right audience with creative ads that drive growth.',
            icon: assest.ads_icon,
        },
        {
            title: 'Content Marketing',
            description: 'Attract and engage customers with valuable, targeted content.',
            icon: assest.marketing_icon,
        },
        {
            title: 'Content Writing',
            description: 'Tell your brand story with clear, compelling content.',
            icon: assest.content_icon,
        },
        {
            title: 'Social Media',
            description: 'Build your online presence and connect with your audience.',
            icon: assest.social_icon,
        },
    ]

    return (
        <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
            <img src={assest.bgImage2} alt="Services background image" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title
                title="How can we help?"
                desc="Explore our digital services designed to strengthen your brand, engage your audience, and grow your business."
            />

            <div className='flex flex-col md:grid grid-cols-2 gap-4 sm:gap-8'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

        </div>
    )
}

export default Services