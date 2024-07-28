export default function ContactForm(){
    return(
        <>
          <form className="contact-form">
              <div className='input-id fullname'>
                <div className='firstname'>
                  <input type='text' name='firstname' placeholder='name'/>
                </div>
                <div className='lastname'>
                  <input type='text' name='lastname' placeholder='lastname'/>
                </div>
              </div>
              <div className='input-id email'>
                <input type='email' name='email' placeholder='Email' />
              </div>
              <div className='input-id company'>
                <div className='company-name'>
                  <input type='text' name='company' placeholder='company name'/>
                </div>
                <div className='position'>
                  <input type='text' name='position' placeholder='position'/>
                </div>
              </div>
              <div className='input-id fullname'>
                <textarea rows='8' cols='40'></textarea>
              </div>
              <div className='btn'>
                <div className='section'>
                  <h2>What are you interested in?</h2>
                  <select id='section'>
                    <option value='Web Developper'>Web Developper</option>
                    <option value='UI/UX Designer'>UI/UX Designer</option>
                    <option value='Web Designer'>Web Designer</option>
                  </select>
                </div>
                <button type='submit'>submit</button>
              </div>
              <div className='privacy'>
                By submitting this form, you agree that we may use your information to respond to you.
                We are committed to protecting your privacy and will not share your data with third parties.
              </div>
            </form>
        </>
    )
}