import React from 'react'
import assest from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into  powerful digital solutions that connect, engage...',
            icon: assest.ads_icon,
        },
        {
            title: 'Content marketing ',
            description: 'We help you execute your plan and deliver results.',
            icon: assest.marketing_icon,
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assest.content_icon,
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assest.social_icon,
        },
    ]

    return (
        <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
            <img src={assest.bgImage2} alt="Services background image" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title title="How can we help?" desc="From strategy to execution, we craft digital solutions that move your business forward." />

            <div className='flex flex-col md:grid grid-cols-2 gap-4 sm:gap-8'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

        </div>
    )
}

export default Services