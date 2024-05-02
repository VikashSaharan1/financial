import './404.css';
import { NavLink } from 'react-router-dom';

function N404({ isLoggedIn }) {
  return (
    <div className={isLoggedIn && 'fof-main-container'}>
      <div className='fof-m-c-inner'>

        <div className='fof-m-c-i-error-code'>
          <div>404</div>
        </div>

        <div className={isLoggedIn ? 'fofmciem-loged-in' : 'fof-m-c-i-error-message'}>
          <div>Whoa, dude! Looks like you've wiped out on a nonexistent wave.</div>
        </div>

        <div className={isLoggedIn ? 'fof-m-c-i-p' :'fof-m-c-i-paragraph'}>
          <div>
            This page is missing, lost in the surf somewhere.
            Paddle back to our homepage or use the search bar to catch the right wave to your destination!
          </div>
        </div>

        <div className='fof-m-c-i-btn'>
         <NavLink to="/"> <button>Back to home</button></NavLink>
        </div>

      </div>
    </div>
  )
}

export default N404;