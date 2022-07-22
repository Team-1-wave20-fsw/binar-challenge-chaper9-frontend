import React from 'react'
import NavBar from '../Navbar/NavBar'
import "./LandingPage.css"
import aaron from "./images/aaron.png"
import evan from "./images/evan.png"
import jada from "./images/jada.png"
import rockpaperstrategy from "./images/rockpaperstrategy-1600.jpg"
import skull from "./images/skull.webp"
import twitter from "./images/twitter.svg"


const LandingPage = () => {

      return (
      <>
      <NavBar/>
        {/* <div className="nav">
          <div className="logo">
              <a href="#">logo</a>
          </div>
          <div className="navmid">
              <a href="#">home</a>
              <a href="#">Game List</a>
              <a href="#">profile</a>
          </div>
          <div className="userarea">
              <a href="#">sign up</a>
              <a href="#">login</a>
          </div>
      </div> */}

      <div className="mainpage">
          <div className="maincontent">
              <h1>play traditional game</h1>
          </div>
          <div className="tagline">
              <p>Experience new traditional game play</p>
          </div>
          <div className="btn">

          </div>
          <div></div>
          <div className="text-white">THE STORY</div>
      </div>

      <div id="container-fluid-games" className="container-fluid">
          {/* <div className=" "> */}
              <div className="row align-items-center">
                  <div className="col">
                      <h3 >What's so special ?</h3>
                      <br/>
                      <h1>The Games</h1>
                  </div>
                  <div className="col">
                  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={rockpaperstrategy} alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={rockpaperstrategy} alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src={rockpaperstrategy} alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  </div>
              </div>
          {/* </div> */}
      </div>


      <div id="container-fluid-features" className="container-fluid">
              <div className="row align-items-center">
                  <div className="col"></div>
                  <div id="col-features" className="col">
                      <h1>Features</h1>
                      <h6>What's so special ?</h6>
                      <div className="tl-item">
                          <div className="tl-dot b-warning"></div>
                          <div>
                              <h4>Traditional Games</h4>
                              <p>If you miss your childhood, we provide many traditional games here</p>
                          </div>
                      </div>
                      <div className="tl-item2">
                          <div className="tl-dot2"></div>
                          <div className="tl-right">
                              <h4>Game Suit</h4>
                          </div>
                      </div>
                      <div className="tl-item2">
                          <div className="tl-dot2"></div>
                          <div className="tl-right">
                              <h4>TBD</h4>
                          </div>
                      </div>
                  </div>
              </div>
      </div>


      <div id="container-fluid-systemRequirements" className="container-fluid">
          {/* <div className=" "> */}
              <div className="row">
                  <div className="col-sm-8">
                      <h1>System<br />Requirements</h1>
                      <h6>Can my computer run this game ?</h6>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-8">
                      <table className="table table-bordered">
                          <thead>
                              <tr>
                              <th scope="col">OS : <br />
                                  <p>Windows 7 64-bit only (No OSX support at this time)</p>
                              </th>
                              <th scope="col">PROCESSOR : <br />
                                  <p>Intel Core 2 Duo @2.4 GHZ or AMD Athlon X2 @2.8 GHZ</p>
                              </th>
                              </tr>
                              <tr>
                              <th scope="col">MEMORY : <br />
                                  <p>4 GB RAM</p>
                              </th>
                              <th scope="col">STORAGE : <br />
                                  <p>8 GB available space</p>
                              </th>
                              </tr>
                              <tr>
                              <th scope="col" colSpan="2">GRAPHICS : <br />
                                  <p>NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
                              </th>
                              </tr>
                          </thead>
                      </table>
                  </div>
              </div>
          {/* </div> */}
      </div>


      <div id="topscore" className="container-fluid topScore">
          {/* <div className=" ">  */}
              <div className="row">
                  <div className="col-sm-4">
                      <h1 >Top Scores</h1>
                      <h6 >This top scores from various games provided on this platform</h6>

                      <a href='#'>
                          <button type="button" className="btn btn-warning col-6 fw-bold" >See More</button>
                      </a>
                  </div>

                  <div className="scorekanan offset-1 col-7 ">
                      <div className="cards">
                          <div className="cardEvan">
                              <div className="cardCon">
                                  <div className="userRow row">
                                      <div className="userpicPad col-3"><img className="userPic" src={evan} alt="evan" />
                                      </div>
                                      <div className="namecard col-7">
                                          <h3 className="text-warning">Evan Lahti</h3>
                                          <h6>PC Gamer</h6>
                                      </div>
                                      <div className="twitter col-2">
                                          <img src={twitter} alt="twitter" />
                                      </div>
                                  </div>
                                  <div className="testiRow row">
                                      <div className="testiPad col-12">
                                          <span className="testiTxt">“One of my gaming highlights of the year.”</span>
                                          <h6 className="cardDate">June 18, 2021</h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <br/>
                          <div className="cardJada">
                              <div className="cardCon ">
                                  <div className="userRow row">
                                      <div className="userpicPad col-3"><img className="userPic" src={jada} alt="Jada" />
                                      </div>
                                      <div className="namecard col-7">
                                          <h3 className="text-warning">Jada Griffin </h3>
                                          <h6>Nerdreactor</h6>
                                      </div>
                                      <div className="twitter col-2">
                                          <img src={twitter} alt="twitter" />
                                      </div>
                                  </div>
                                  <div className="testiRow row">
                                      <div className="testiPad col-12">
                                          <span className="testiTxt">“The next big thing in the world of streaming and survival games.”</span>
                                          <h6 className="cardDate">July 10, 2021</h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <br/>
                          <div className="cardAaron">
                              <div className="cardCon">
                                  <div className="userRow row">
                                      <div className="userpicPad col-3"><img className="userPic" src={aaron} alt="Aaron" />
                                      </div>
                                      <div className="namecard col-7">
                                          <h3 className="text-warning">Aaron Will</h3>
                                          <h6> Uproxx</h6>
                                      </div>
                                      <div className="twitter col-2">
                                          <img src={twitter} alt="twitter" />
                                      </div>
                                  </div>
                                  <div className="testiRow row">
                                      <div className="testiPad col-12">
                                          <span className="testiTxt">“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ is Ridiculous.”</span>
                                          <h6 className=" cardDate">December 24, 2018</h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          {/* </div> */}
      </div>


      <div id="container-fluid-newsletter" className="container-fluid-newsletter">
          {/* <div className=" "> */}
              <div className="row">
                  <div className="col-sm-4">
                      <img src={skull} className="img-fluid" alt="skull" />
                  </div>

                  <div className="col-sm-8">                    
                      <h1>Newsletter<br/>Subscribe</h1>
                      <h6>Want to stay in touch ?</h6>

                      <p>In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don't spam</p>
                      <form>
                          <div className="row align-items-center g-3">
                              <div className="col-auto">
                                  <label className="visually-hidden" htmlFor="inputEmail"></label>
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Input your email address" />
                              </div>
                              <div className="col-auto">
                                  <a href="#">
                                      <button type="submit" className="btn btn-lg btn-warning col-12">Subscribe Now</button>
                                  </a>    
                              </div>
                          </div>
                      </form>
                  </div>
              </div>


              <footer>
                  <div className=" footer containner  border-bottom">
                      <div className="row upper">
                          <div className="col-12"></div>
                          <div className="col-2"></div>
                          <div className="col-6">
                              <ul className="text-center">
                                  <li><a id="font1" href="#utama">Main </a></li>
                                  <li><a id="font1" href="#whspc">About </a></li>
                                  <li><a id="font1" href="#fitur">Game Features </a></li>
                                  <li><a id="font1" href="#sysreq">System Requirements </a></li>
                                  <li><a id="font1" href="#topscore">Quotes </a></li>
                              </ul>
                          </div>
                          <div className="col-4 ">
                              <ul className="text-right">
                                  <a href="#" className="me-4 text-reset">
                                      <i id="facebook" className="fab fa-facebook fa-2x"></i>
                                  </a>
                                  <a href="#" className="me-4 text-reset">
                                      <i id="twitter" className="fab fa-twitter fa-2x"></i>
                                  </a>
                                  <a href="#" className="me-4 text-reset">
                                      <i id="youtube" className="fab fa-youtube fa-2x"></i>
                                  </a>
                                  <a href="#" className="me-4 text-reset">
                                      <i id="twitch" className="fab fa-twitch fa-2x"></i>
                                  </a>
                              </ul>
                          </div>
      
                      </div>
                  </div>
                  <div className="container-fluid-newsletter ">
                      <div className="row bottom">
                          <div className="btm-left col-8">
                              <p>© 2022 Binar Academy, Inc. All Rights Reserved</p>
                          </div>
                          <div className="col-md-4 text-right">
                              <ul>
                                  <li><a href="#">Privacy Policy |</a></li>
                                  <li><a href="#">Terms of services |</a></li>
                                  <li><a href="#">Code of conduct</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </footer>
          {/* </div>   */}
      </div>
        
      </>
    )                                                             
}

export default LandingPage;