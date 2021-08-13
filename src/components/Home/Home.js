import React from 'react'
import './home.css'
import Contact from '../Contact/Contact'
function Home() {
    return (
        <div>
        <section id="sec-1">
            <h1>Hello World</h1>
            <a href="#sec-2" className="home-btn">Read More</a>
         
        </section>
        <section id="sec-2">
            <Contact />
        </section>
        
        </div>

    )
}

export default Home
