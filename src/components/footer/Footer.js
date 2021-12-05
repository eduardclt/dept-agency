import React from 'react';

import './footer.sass';

import { ReactComponent as DeptLogo } from '../../assets/images/icons/icon-dept.svg';
import { ReactComponent as FacebookLogo } from '../../assets/images/icons/icon-fb.svg';
import { ReactComponent as InstagramLogo } from '../../assets/images/icons/icon-instagram.svg';
import { ReactComponent as TwitterLogo } from '../../assets/images/icons/icon-twitter.svg';

function Footer() {
  return (
    <div className='component footer'>
      <div className='footer__navigation'>
        <div className='company-logo'>
          <DeptLogo className='dept-logo' />
        </div>
        <div className='links'>
          <a className='link' href='#'>Work</a>
          <a className='link' href='#'>Service</a>
          <a className='link' href='#'>Stories</a>
          <a className='link' href='#'>About</a>
          <a className='link' href='#'>Careers</a>
          <a className='link' href='#'>Contact</a>
        </div>
        <div className='social-media'>
          <a className='social-media-link' target='_blank' rel='noreferrer' href='https://www.facebook.com'><FacebookLogo className='logo' /></a>
          <a className='social-media-link' target='_blank' rel='noreferrer' href='https://www.instagram.com'><InstagramLogo className='logo' /></a>
          <a className='social-media-link' target='_blank' rel='noreferrer' href='https://www.twitter.com'><TwitterLogo className='logo' /></a>
        </div>
      </div>

      <div className='footer__company-info'>
        <div className='info-text-container'>
          <p className='footer-text'>Chamber of Commerce: 63464101 </p>
          <p className='footer-text'>VAT: NL 8552.47.502.B01 </p>
          <a className='footer-text' href='#'>Terms and conditions</a>
        </div>
        <div className='cc-container'>
          <p className='footer-text'>© 2018 Dept Agency</p>
        </div>
      </div>
    </div>
  );
}
              
export default Footer;
