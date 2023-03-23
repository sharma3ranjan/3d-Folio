import React from 'react'
import { SectionWrapper } from '../hoc'


const Footer = () => {
    return (
        <div>
            <p className='text-center pb-2 sm:text-sm'>Suggest Any Changes by Filling Above Form❤️</p>
            <p className='text-center'>
                Built with lots of motivation using React and 3JS by Ranjan Sharma 💛
            </p>
        </div>
    )
}

export default SectionWrapper(Footer)