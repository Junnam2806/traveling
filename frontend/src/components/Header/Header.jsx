import React, {useRef, useEffect} from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'

import logo1 from '../../assets/images/logo1.png'

import './header.css'

const nav__links = [
  {
    path: '/home',
    display: 'Trang chủ'
  },
  {
    path: '/about',
    display: 'Giới thiệu'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {

const headerRef = useRef(null)

const stickytHeaderFunc = () => {
  window.addEventListener('scroll', ()=> {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky__header')
    } else {
      headerRef.current.classList.remove('sticky__header')
    }
  })
}

useEffect(() => {
  stickytHeaderFunc()

  return window.removeEventListener('scroll', stickytHeaderFunc)
})
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo1} alt="" />
            </div>
            {/* Logo */}

            {/* menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((item, index)=> (
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* menu end */}

            {/* right menu */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className='btn secondary__btn'>
                  <Link to='/login'>Đăng nhập</Link>
                </Button>
                <Button className='btn primary__btn'>
                  <Link to='/register'>Đăng ký</Link>
                </Button>
              </div>

              <span className='mobile__menu'>
                <i class="ri-menu-line"></i>
              </span>  
            </div>
            {/* right menu end */}
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header