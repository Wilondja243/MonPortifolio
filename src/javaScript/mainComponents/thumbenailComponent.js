export default function Thumbenail(){
    return (
       <div className='thumbenail'>
         <div className="what-i-do-desc">
           <div className='desc'>
             <span>Hello, 
               <strong style={{
                 color:'var(--dark-rose--)',
                 fontSize:'20px',margin:'0 6px'
                 }}> I'am
               </strong>
             </span>
             <h2 className='my-name'>Wilondja Ebuela Wildor</h2>
             <h2 className="work-on">UI/UX Designer And Web Developper</h2>
             <p style={{color:'var(--white-middle-smoke-color)',marginTop:'10px'}}>
             I’m a graphic designer, UI/UX Designer and Web Developper passionate about creating unique visual experiences,
             curious to see how we can bring your vision to life.
             </p>
           </div>  
           <div className="get-now">
             <button>Let's Talk</button>
             <div className="position">
               <i className="fa fa-map-marker"></i>
               <b>My location</b>
             </div>
           </div>
           <div>
             <div className='social-media'>
               <h3>Check Out My</h3>
               <div className='media'>
                 <a><i className='bi bi-facebook'></i></a>
                 <a><i className='bi bi-instagram'></i></a>
                 <a><i className='bi bi-youtube'></i></a>
                 <a href='mailto:wilondjaebuela2001@gmail.com'><i className='bi bi-envelope'></i></a>
               </div>
             </div>
           </div>
         </div>
         <div className="thumbenail-img-content">
             <div className="images">
               <img src="../images/young-black-female-student-with-books.png" alt="" />
             </div>
         </div>
       </div>
    );
 }
 