import './PageNotFound.css';
import { N404 } from '../../components';
import { Header } from '../../template';
import { pageNotFoundBanner } from '../../assets/images/404pageimg';



function PageNotFound({ isLoggedIn }) {
  return (
    <div className='page-not-found-container'>
      {!isLoggedIn && <Header />}
      <div className='p-n-f-c-content'><N404 isLoggedIn={isLoggedIn} /></div>
      {!isLoggedIn &&
        <div className='p-n-f-c-img'>
          <img src={  pageNotFoundBanner } alt="banner-img" />
        </div>
      }
    </div>
  )
}

export default PageNotFound;