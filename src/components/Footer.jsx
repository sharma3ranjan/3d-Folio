import React from 'react'
import { SectionWrapper } from '../hoc'


const Footer = () => {
    return (
        <div>
            <p className='text-center pb-2 text-xs text-white'>Suggest Any Changes by Filling Above Form❤️</p>
            <p className='text-center text-sm text-white'>
                Built with lots of motivation using React and 3JS by <a className='text-green-600' href="mailto:just.think2003@gmail.com">Ranjan Sharma</a> 💛
            </p>
        </div>
    )
}

export default SectionWrapper(Footer)