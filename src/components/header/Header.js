import './header.sass';

function Header() {
  return (
    <div className='component header'>
      <div className='header__background'>
        <div className='header__title'>
          <h1>Work</h1>
        </div>
        <button className='header__button'>View Case</button>
      </div>
      <button className='header__button header__button--mobile'>View Case</button>
    </div>
  );
}

export default Header;
