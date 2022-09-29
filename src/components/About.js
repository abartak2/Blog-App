import React from 'react';
import SocialFollow from './SocialFollow';



function About() {
    return (
        <center>
            {/* create a header and paragraph for the About page */}
            <div>
                <h1 className="tbTitle">Travel Blog</h1>
                <p className="para">Enjoy my Travel blog! I can't wait to see all of the wonderful places everyone has visited!</p> 
                <p className="para">Happy Blogging!</p>
            </div>
            {/* add three images to the page and  */}
            <div className="travel">
            <img className="one" style={{width:"260px", height:"260px"}}
                 src="https://expertvagabond.com/wp-content/uploads/travel-photography-tips-guide-1-768x512.jpg.webp"
                 />
            <img className="two" style={{width:"260px", height:"260px"}}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKzOeyIkFoYLpP9fdoQKSA6-Twv7br4qdCA&usqp=CAU"
                 />
            <img className="three" style={{width:"260px", height:"260px"}}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRCRLBxUL9rDx8zIl8_MTWIEHWjIGWtNPNA&usqp=CAU"
                 />
                 {/* add SocialFollow component to page */}
                 <SocialFollow />
            </div>
            {/* <Footer /> */}
        </center>
    )
}

export default About;