import './contact-us.sass';

function ContactUs() {
  return (
    <div className='component contact-us'>
      <div className='contact-us__title-container'>
        <h1 className='title'>Questions? We are here to help!</h1>
      </div>
 
      <form className='contact-us__form'>
        <div className='form-row'>
          <div className='form-field'>
            <label className='label'>Name</label><br />
            <input type='text' />
          </div>
          <div className='form-field required'>
            <label className='label'>Email</label><br />
            <input type='email' required/>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-field'>
            <label className='label'>Message</label><br />
            <textarea rows='4'/> 
          </div>
        </div>
        <button className='button' type='submit'>Send</button>
      </form>

    </div>
  );
}

export default ContactUs;
