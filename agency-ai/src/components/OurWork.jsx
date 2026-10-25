import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: "Mobile App Marketing",
            description: "Boost app downloads and engagement with targeted marketing strategies.",
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard Management",
            description: "Simplify data tracking with intuitive and powerful dashboards.",
            image: assets.work_dashboard_management
        },
        {
            title: "Fitness App Promotion",
            description: "Grow your fitness app with smart campaigns that inspire action.",
            image: assets.work_fitness_app
        },
    ]

    return (
        <div 
            id="our-work" 
            className='flex flex-col items-center gap-7 px-4 sm:px-24 xl:px-24 pt-30 text-gray-700 dark:text-white'
        >
            <Title
                title="Our latest work"
                desc="Discover our recent projects showcasing creative ideas, innovative solutions, and measurable business impact."
            />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    workData.map((work,index)=>(
                        <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={work.image} className='w-full rounded-xl' alt="Work images" />
                            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default OurWork
