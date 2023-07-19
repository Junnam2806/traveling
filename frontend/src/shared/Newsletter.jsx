import React from 'react'
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subcribe noew to get traveling info</h2>

                    <div className='newsletter__input'>
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn newsletter__btn'>Subcribe</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad obcaecati ut tempore minus aliquid iusto vitae, nemo aut numquam quod nesciunt tempora voluptatibus cumque laboriosam voluptates possimus. Aspernatur, ex!</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter