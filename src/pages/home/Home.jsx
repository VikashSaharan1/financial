import React from 'react'
import './Home.css';
import bannerAvtar from '../../assets/images/owl-face.jpg';
import paperPenImg from '../../assets/images/paper.webp';
import itDeclaImg from '../../assets/images/tablet.svg';
import trackBannerImg from '../../assets/images/track-banner.avif';
import penFile from '../../assets/images/file-pen.png';

const Home = () => {
  return (
    <div className='home-page-main-container'>
      <div className='h-p-m-c-inner'>

        <h4>Good Afternoon</h4>
        <div className='home-page-banner-img'>
          <img src={bannerAvtar} alt='banner-avtar' />
        </div>

        <div className='home-page-charts-box'>
          <div className='h-p-c-b-inner'>

            <div className='first-chart-column'>

              <div className='f-c-c-one'>
                <p className='chart-heading'>Review</p>
                <div>
                  <div className='pen-paper-img-div'><img src={paperPenImg} alt='review-img' /></div>
                  <p className='chart-description-text'>Hurrah! You've nothing to review.</p>
                </div>
              </div>

              <div className='f-c-c-two'>
                <p className='chart-heading'>IT Declaration</p>
                <div>
                  <span className='it-decla-img-span'>
                    <img src={itDeclaImg} alt='IT-declaration-avtar' />
                  </span>
                  <p>
                    Uh oh! You have missed submitting your IT declaration. Please submit it once the window opens.
                  </p>
                </div>

              </div>

            </div>

            <div className='second-chart-column'>

              <div className='s-c-c-one'>
                <p className='chart-heading'>24 April 2024<i></i></p>
                <p>Wednesday | 14:00 - 23:00</p>
                <p>15:07:14</p>
                <div>
                  <a href='#'>View Swipes</a>
                  <button>Sign Out</button>
                </div>
              </div>

              <div className='s-c-c-two'>
                <p className='chart-heading'>Quick Access</p>
                <div>
                  <div>
                    <p>Reimbursement Payslip</p>
                    <p>IT Statement</p>
                    <p>YTD Reports</p>
                    <p>Loan Statement</p>
                  </div>
                  <div>
                    <p>Use quick access to veiw important salary details.</p>
                  </div>
                </div>
              </div>

              <div className='s-c-c-three'>
                <p className='chart-heading'>Track</p>
                <div>
                  <img src={trackBannerImg} alt='track-chart-banner' />
                </div>
              </div>

            </div>

            <div className='third-chart-column'>

              <div className='t-c-c-one'>
                <p className='chart-heading'>Upcoming Holidays<i class="fa-solid fa-arrow-right"></i></p>
                <div>
                  <div>
                    <p><span>01 May</span> Wednesday </p>
                    <p>International Worker'S Day/Labors Day</p>
                  </div>
                  <div className='two-elms-div'>
                    <span> 
                      <p><span>17 Jun </span> Monday</p>
                      <p>Bakrid</p>
                    </span> 
                    <span>
                      <a href='#'>Apply</a>
                    </span>                    
                  </div>
                  <div>
                    <p><span>15 Aug </span> Thursday</p>
                    <p>Independence Day</p>
                  </div>
                  <div>
                    <p><span>06 Sep </span> Friday </p>
                    <p>Ganesh Chaturthi/Vinayaka Chaturthi</p>
                  </div>
                </div>
              </div>

              <div className='t-c-c-two'>
                <p className='chart-heading'>POI</p>
                <div>
                  <span className='poi-img-span'>
                    <img src={penFile} alt='poi-avtar' />
                  </span>
                  <p>Hold on! You can submit your Proof of Investments (POI) once released.</p>
                </div>
              </div>

            </div>

            <div className='fourth-chart-column'>
              <div className='f-c-c-one'>
                <p className='chart-heading'>Payslip<i class="fa-solid fa-arrow-right"></i></p>
                <div className='chart-range-div'>
                  <div></div>
                  <div>
                    <p>Mar 2024</p>
                    <p>31</p>
                    <p>Paid Days</p>
                  </div>
                </div>

                <div>
                  
                  <div>
                    <div>Gross Pay</div>
                    <div>₹****</div>
                  </div>

                  <div>
                    <div>Deduction</div>
                    <div>₹****</div>
                  </div>

                  <div>
                    <div>Net Pay</div>
                    <div>₹****</div>
                  </div>

                </div>

                <div>
                  <a href='#'>Download</a>
                  <a href='#'>Show Salary</a>
                </div>
                
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home