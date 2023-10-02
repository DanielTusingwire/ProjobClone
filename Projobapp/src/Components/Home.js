import React from 'react'
import HeroArrow from "../Assets/Arrow.svg"
import Elips from "../Assets/Ellipse.svg"
import image1 from '../Assets/Component.svg'
import arrow8 from '../Assets/Arrow8.svg'
import btnarrow from '../Assets/buttonarrow.svg'
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
                <div className='middleSectionChild1'>
                    <div className='textContainer'>
                        <h1>Launch Your Career with <span className='greencolor'>Confidence </span> and Get Hired <span className='greencolor'>Faster! </span></h1>
                        <p>Get Personalized Coaching from Successful Professionals to Help You Acquire the Skills and Confidence You Need to Secure Your First Job</p>

                    </div>
                    <div className='imageContainer'>
                        <img src={image1}></img>
                        
                    </div>
                    </div>

                    <div className='middleSectionChild2'>
                        <div className='bigtext'>
                        <h1>Get a Powerful 
                         Resume Guide for yourself , it’s Free! </h1>
                        </div>
                       
                        <div className='arrow'>
                        <img src={arrow8}></img>
                        </div>

                        <div className='button'>
                        <h6> Click here to Get</h6>
                        <img src={btnarrow}></img>
                        </div>

                         {/* <button className='btnclick'>Click here to Get <img src={btnarrow}/></button> */}

                        
                    </div>

                    
                    

                </div>

        </>
    );
}
