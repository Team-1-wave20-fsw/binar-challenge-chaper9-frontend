import React, { useEffect, useState } from 'react'
import "./LandingPage.css"
import axios from 'axios'
import { image } from './images/images'
import twitter from "./images/twitter.svg"

const LandingPage = () => {
  const [currentUser, setUser] = useState({ status: "", fullname: "" })
  const token = sessionStorage.getItem("accessToken")
  useEffect(() => {
    axios.get('http://localhost:4000/api/login', { headers: { authorization: token } }).then(res => {
      setUser({ loggedIn: res.data.authorized, fullname: res.data.fullname })
    })
  }, [])

  return (
    <>
      <section id="main-screen">
        <div class="container-fluid main-screen-container">
          <img class="main-background" src={image.mainBg} alt="" />
          <div class="main-screen">
            <div class="grid-item-container">
              <h1 class="grid-item">PLAY TRADTIONAL GAME</h1>
              <p class="grid-item">Selamat Datang {currentUser?.loggedIn ? currentUser?.fullname : ""}</p>
              <button class="grid-item" onClick={() => window.location = "/List"}>Play Now</button>
            </div>
          </div>
        </div>
      </section>
      {!token && (
        <>
          <section id="the-games">
            <div class="container-fluid the-games-container">
              <img class="the-games-background" src={image.theGames} alt="" />
              <div class="the-games-text">
                <div class="the-games-item-container">
                  <p>What's so special?</p>
                  <h1>THE GAMES</h1>
                </div>
              </div>
              <div class="the-games-carousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={image.rockPaperStrat} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={image.rockPaperStrat} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={image.rockPaperStrat} alt="Third slide" />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="features">

            <img class="features-background" src={image.features} alt="" />
            <div class="features-text">
              <div class="features-item-container">
                <div class="features-text-container">
                  <p>What's so special?</p>
                  <h1>FEATURES</h1>
                  <div class="features-desc">
                    <div class="traditional-games">
                      <h3>TRADITIONAL GAMES</h3>
                      <p>If you miss your childhood, we provide many traditional games here</p>
                    </div>
                    <div class="traditional-games">
                      <h3>GAME SUITS</h3>
                    </div>
                    <div class="traditional-games">
                      <h3>TBD</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section id="requirement">
            <img class="requirement-background" src={image.requirement} alt="" />

            <div class="requirement-container">
              <p>Can My Computer Run This Game?</p>
              <h1>System <br />Requirements</h1>
              <div class="specification">
                <div class="os">
                  <h3>OS :</h3>
                  <p>Windows 7 64-bit only</p>
                  <p>No OSX support at this time</p>
                </div>
                <div class="processor">
                  <h3>Processor:</h3>
                  <p>Inter Core Duo @ 2.4 GHZ or</p>
                  <p>AMD Athlon X2 @ 2.8 GHZ</p>
                </div>
                <div class="memory">
                  <h3>Memory:</h3>
                  <p>4GB RAM</p>
                </div>
                <div class="storage">
                  <h3>Storage:</h3>
                  <p>8GB Available Space</p>
                </div>
                <div class="graphic">
                  <h3>Graphics:</h3>
                  <p>NVIDIA GeForce GTX 660 2GB or</p>
                  <p>AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
                </div>
              </div>
            </div>
          </section>
          <section id="top-scores">
            <img class="top-scores-background" src={image.topScore} alt="" />
            <div class="top-scores-desc">
              <div>
                <h1>TOP SCORES</h1>
                <p>This top scores from various games provided in this platform</p>
                <button>See Now</button>
              </div>
            </div>
            <div class="top-scores-review">
              <div class="review-card review-1">
                <div class="info-profile">
                  <img class="profile profile-item" src={image.evan} alt="" />
                  <div class="profile-desc profile-item ">
                    <p class="profile-name">Evan Lahti</p>
                    <p class="profile-job">PC Gamer</p>
                    <div class="profile-twitter">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z" fill="white" />
                      </svg>

                    </div>
                  </div>
                </div>
                <p class="comment">"One of my gaming highlights of the year"</p>
                <p class="date">June,18 2021</p>
              </div>
              <div class="review-card review-2">
                <div class="info-profile">
                  <img class="profile profile-item" src={image.jada} alt="" />
                  <div class="profile-desc profile-item ">
                    <p class="profile-name">Jada Griffin</p>
                    <p class="profile-job">Nerdreactor</p>
                    <div class="profile-twitter">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="comment">"The next big thing in the world of streaming and survival games"</p>
                <p class="date">July,10 2021</p>
              </div>
              <div class="review-card review-3">
                <div class="info-profile">
                  <img class="profile profile-item" src={image.aaron} alt="" />
                  <div class="profile-desc profile-item ">
                    <p class="profile-name">Aaron Williams</p>
                    <p class="profile-job">Uproxx</p>
                    <div class="profile-twitter">
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="comment">"Snoop Dogg Playing The Wildly Entertaining 'SOS' Is Ridiculous"</p>
                <p class="date">December,24 2018</p>
              </div>
            </div>
          </section>

          <section id="newsletters">

            <img class="newsletter-background" src={image.topScore} alt="" />
            <div class="newsletter-text-container">
              <div>
                <p>Want to stay in touch?</p>
                <h1>NEWSLETTER <br />SUBSCRIBE</h1>
                <p>In order to start receiving our news,all you have to do is enter your email address.Everythin else will be taken care of by us.We will send you emails containing information about game.We don't spam</p>
                <div class="newsletter-input">
                  <div class="email">
                    <form class="" action="">
                      <label for="emailInput">Your Email Address</label>
                      <input class="" id="emailInput" type="email" value="" placeholder="youremail@binar.co.id" />
                    </form>

                    <button>Subscribe Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="p">
                <div class="footer-top">
                  <div class="footer-nav">
                    <a class="footer-top-item footer-nav-item" href=""><p>MAIN</p></a>
                    <a class="footer-top-item footer-nav-item" href=""><p>ABOUT</p></a>
                    <a class="footer-top-item footer-nav-item" href=""><p>GAME FEATURES</p></a>
                    <a class="footer-top-item footer-nav-item" href=""><p>SYSTEM REQUIREMENT</p></a>
                    <a class="footer-top-item footer-nav-item" href=""><p>QUOTES</p></a>
                  </div>
                  <div class="social-media">
                    <a class="footer-top-item " href="">
                      <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="facebook" fill-rule="evenodd" clip-rule="evenodd" d="M6.65382 19.1726H2.56282V9.67859H0.517822V6.40559H2.56282V4.44159C2.56282 1.77259 3.71782 0.183594 6.99582 0.183594H9.72582V3.45659H8.02082C6.74282 3.45659 6.65882 3.91459 6.65882 4.76859L6.65382 6.40559H9.74582L9.38382 9.67859H6.65382V19.1726Z" fill="white" />
                      </svg>
                    </a>
                    <a class="footer-top-item" href="">
                      <svg width="23.75" height="18.75" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="1" class="twitter" d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z" fill="white" />
                      </svg>
                    </a>
                    <a class="footer-top-item" href="">
                      <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="youtube" d="M20.61 0.183594H5.98961C3.12627 0.183594 0.799805 2.55085 0.799805 5.4644V12.8973C0.799805 15.8163 3.12627 18.1781 5.98961 18.1781H20.6046C23.4733 18.1781 25.7944 15.8108 25.7944 12.8973V5.4644C25.7998 2.55085 23.4733 0.183594 20.61 0.183594ZM17.0959 9.54779L10.2575 12.8642C10.0731 12.9524 9.86705 12.82 9.86705 12.6103V5.7679C9.86705 5.55821 10.084 5.42578 10.2629 5.51958L17.1013 9.04564C17.3074 9.15048 17.302 9.44846 17.0959 9.54779Z" fill="#FFF" />
                      </svg>
                    </a>
                    <a class="footer-top-item" href="">
                      <svg width="22.5" height="21.375" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="twitch" fill-rule="evenodd" clip-rule="evenodd" d="M19.9602 13.6252V9.5538V0.680176H2.93894L0.811279 2.97688V15.0868H6.13043V18.845H8.47085L11.024 16.1307H17.407L19.9602 13.6252ZM7.40694 13.4165H4.00268C3.76864 13.4165 3.57715 13.2286 3.57715 12.9989V2.76817C3.57715 2.5385 3.76864 2.35059 4.00268 2.35059H17.6197C17.8537 2.35059 18.0452 2.5385 18.0452 2.76817V10.7022C18.0452 10.8171 18.0027 10.9215 17.9229 10.9998L15.5825 13.2965C15.5027 13.3748 15.391 13.4165 15.2793 13.4165H11.3697L8.07183 15.6401C8.00268 15.6871 7.91757 15.7132 7.83247 15.7132C7.76332 15.7132 7.69949 15.6976 7.63566 15.6662C7.49204 15.5932 7.40694 15.4522 7.40694 15.2956V13.4165Z" fill="white" />
                        <path d="M13.79 9.76274V5.58691H12.0878V9.76274H13.79ZM9.53465 9.76274V5.58691H7.83252V9.76274H9.53465Z" fill="white" />
                      </svg></a>
                  </div>
                </div>
                <div class="footer-bottom">
                  <p class="copyright">© 2018 Your Games, Inc. All Right Reserved</p>
                  <div class="footer-info">
                    <div class="info-item">
                      <a href=""><p>PRIVACY POLICY</p></a>
                    </div>
                    <div class="info-item border-info">
                      <a href=""><p>TERM OF SERVICES</p></a>
                    </div>
                    <div class="info-item border-info">
                      <a href=""><p>CODE OF CONDUCT</p></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )
      }

    </>
  )
}

export default LandingPage;