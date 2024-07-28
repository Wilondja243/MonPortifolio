export default function WhatIDo(){
    return (
        <>
          <div className=" contact-description">
            <div className='desc'>
                <span>Contact</span>
                <h2 className='my-name'>Get in touch</h2>
                <p style={{color:'var(--white-middle-smoke-color)',marginTop:'10px'}}>
                Use our contact form for all information requests or contact us directly using the conact information bellow.
                All information is treated with complete confidentialy and in according with our data protection statement.
                </p>
            </div>  
            <div className="contact-us">
                <h3>You can also contact us via email or phone number.</h3>
                <div className="position">
                <a href='mailto:wilondjaebuela2001@gmail.com'>email contact</a>
                <b>+257 62109522</b>
                </div>
            </div>
         </div>
        </>
    )
}