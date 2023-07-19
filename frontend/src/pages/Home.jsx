import React, {useEffect} from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle'

import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList"
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Newsletter from '../shared/Newsletter';

import video from '../assets/images/vungtau4k.mp4';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
      Aos.init({duration: 2000})
  }, [])
  return (
    <>
    <section className='home'>
      {/* <div className="overlay"></div> */}
      <video className='video_banner' src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
                    
            <h1 data-aos="fade-up" className="homeTitle">
              Đồng hành cùng bạn trong mọi chuyến đi
            </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination: </label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here...'/>
                <i class="ri-map-pin-line icon"></i>
              </div>
            </div>

          <div className="dateInput">
            <label htmlFor="date">Chọn ngày đi:</label>
            <div className="input flex">
              <input type="date" placeholder='Nhập ngày đi'/>                        </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
                <label htmlFor="price">Chọn ngày về:</label>
            </div>
            <div className="input flex">
                <input type="date" placeholder='Nhập ngày về'/>
            </div>
          </div>

          <div className="searchOptions flex">
            <i class="ri-search-line"></i>
            <span className='book_now'>BOOK NOW</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <i class="ri-facebook-fill icon"></i>
            <i class="ri-instagram-line"></i>

          </div>
        </div>
      </div>
    </section>
    <section>
      <Container className='herocontent'>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">

                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className="highlight">
                memories</span></h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quas, dolorum quibusdam voluptatum laboriosam aliquam dicta enim laborum natus veritatis, dolorem blanditiis est nam consequuntur iusto, fugiat expedita! Rem, corrupti.
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* {========= Section start ========} */}
    <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">
                What we serve
              </h5>
              <h2 className='services__title'>
                We offer our best services
              </h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
    </section>

    {/* ==============  Tours Feature start*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className='featured__tour-title'>Our feature tour</h2>
          </Col>

          <FeaturedTourList></FeaturedTourList>
        </Row>
      </Container>
    </section>
    {/* ==============  Tours Feature end*/}
    {/* ======== Experience start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}></Subtitle>
              <h2>With our experience <br />we will serve you</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora accusamus, perspiciatis quisquam asperiores eius dolorem distinctio, saepe corporis aperiam nam consectetur itaque impedit soluta at officiis et, hic beatae?</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* Experience end ===== */}

    {/* ======== Gallery section start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ======== Gallery section end ======= */}

    {/* ======  Testimonial section start =====*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className='testimonial__title'>What our fans say about us</h2>
          </Col>

          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ======  Testimonial section end =====*/}
    <Newsletter/>
    </>

  )
}

export default Home