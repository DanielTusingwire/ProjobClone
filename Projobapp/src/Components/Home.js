import React from 'react'
import HeroArrow from "../Assets/Arrow.svg"
import Elips from "../Assets/Ellipse.svg"
import image1 from '../Assets/Component.png'
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
                    <div className='textContainer'>
                        <h1>Launch Your Career with Confidence and Get Hired Faster!</h1>
                        <p>Get Personalized Coaching from Successful Professionals to Help You Acquire the Skills and Confidence You Need to Secure Your First Job</p>

                    </div>
                    <div className='imageContainer'>
                        <img src={image1}></img>
                        
                    </div>
                    

                </div>

        </>
    );
}
