import {Link } from 'react-router-dom';

export default function MyWork(){
    return(
      <>
        <div className='services'>
          <div className='service-title'>
            <h3>My <strong style={{color:'var(--dark-rose--)'}}>services</strong></h3>
            <h1>What I Do</h1>
          </div>
            <div className='all-services'>
              <Link to='/ui'>
              <div className='work-on ui'>
                <i className="bi bi-eye"></i>
                <div className='job'>
                  <h2>UI/UX Designer</h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis veniam quisquam dolorum expedita? 
                    cum nemo eius quam in error dolor sed debitis.
                  </p>
                </div>
              </div>
              </Link>
              <Link to='/web'>
              <div className='work-on web-desing'>
                <i className="bi bi-grid"></i>
                <div className='job'>
                  <h2>Web designer</h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis veniam quisquam dolorum expedita? 
                    cum nemo eius quam in error dolor sed debitis.
                  </p>
                </div>
              </div>
              </Link>
              <Link to='/developper'>
              <div className='work-on web-developper'>
                <i className="bi bi-file-code"></i>
                <div className='job'>
                  <h2>Web developper</h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis veniam quisquam dolorum expedita? 
                    cum nemo eius quam in error dolor sed debitis.
                  </p>
                </div>
              </div>
              </Link>
            </div>
        </div>
      </>
    )
  }