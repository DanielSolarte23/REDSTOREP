import React from 'react'
import { MdStar } from "react-icons/md";

const Hero = () => {
  return (
    <section>
        <div>
            <h1>Digital Shopping Hub Function</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae delectus natus ut aperiam. Beatae incidunt quis explicabo libero molestiae voluptates saepe et error. Ea hic magni facilis modi perferendis ullam, alias velit?</p>
            <div>
                <div>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
            </div>
        </div>
    </section>
  )
}
// 1:09
export default Hero
