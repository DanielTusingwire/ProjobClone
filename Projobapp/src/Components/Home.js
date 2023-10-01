import React from 'react'
import HeroArrow from "../Assets/Arrow.svg"
import Elips from "../Assets/Ellipse.svg"
import "./HomeStyle.css";

export const Home = () => {
    return (
        <>

            <div className='hero'>
                <div className='hero-para'>
                <p>Career Launchpad Workshop. It’s Free </p>
                </div>

                <div className='hero-arrow'>
                    <img src={HeroArrow} />
                </div>

                <div className='hero-button'>
                    <button>Click Here to Join</button>
                </div>

                <div className='hero-elips'>
                 <img src={Elips}/>
                </div>
                    



                </div>

                <div className='middleSection'>
                    

                </div>

        </>
    );
}
