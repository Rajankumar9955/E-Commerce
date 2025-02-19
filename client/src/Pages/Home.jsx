
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/mob1.jpg"
import img2 from "../Images/mob2.jpg"
import img3 from "../Images/lap1.jpg"
import ProductCard from './ProductCard';

import BASE_URL from '../config';

import { useContext, useEffect, useState } from 'react';
import { myLoginContext } from '../LoginContext';

import axios from 'axios';
const Home=()=>{
     
  const {setIsLogedIn}=useContext(myLoginContext);


  const getProfile=async()=>{
          const token=localStorage.getItem("token");
          try {
            let api=`${BASE_URL}/user/userprofile`;
            const response=await axios.post(api, null, {headers: { "Authorization": token } });
            localStorage.setItem("userid", response.data._id)
            localStorage.setItem("username", response.data.name);
            setIsLogedIn(true); 
          } catch (error) {
            console.log(error)
          }
  }

useEffect(()=>{
  if(localStorage.getItem("token"))
  {
    getProfile()
  }
},[])

    return(
        <>
         <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={img1} alt="" width="100%" height="550"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img2} alt="" width="100%" height="550"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img3} alt="" width="100%" height="550"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


{/* =====product card Here */}
    <ProductCard/>



        </>
    )
}
export default Home