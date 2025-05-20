import React from 'react'
import './intro.css';
import my2 from '../../assets/my2.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">chanuka.</span> <br/> Fullstack Developer.</span>
            <p className="introPara">I'm 4th-year undergraduate at the University <br/> of Kelaniya, studying Electronics and Computer Science. </p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={my2} alt="" className="bg" />
    </section>
  )
}

export default intro

