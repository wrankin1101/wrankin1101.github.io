import './App.css';
import triangle from './assets/images/trianglecropped.png'
import spinTriangle from './assets/images/triangle of justice_skinny.png'
import headshot from './assets/images/notriangle.png'
import commentWriter from './assets/images/recent_work/commentwriter_color.png'
import funway from './assets/images/recent_work/funway_color.png'
import funwayCity from './assets/images/recent_work/funwaycity_color.png'
import oem from './assets/images/recent_work/oemheaters_color.png'
import call from './assets/images/call.png'
import linkedIn from './assets/images/linkedin.svg'
import mail from './assets/images/gmail.png'
import github from './assets/images/square-github.svg'
import logo from './assets/images/icon192.png'

function App() {
  return (
    <div className="App">
      <header>
      {/*  header inner  */}
      <div class="header">
         <div class="container-fluid">
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div class="full">
                     <div class="center-desk">
                        <div class="logo">
                           <a href="index.html"><img src={logo} alt="#"
                                 style={{width: '64px'}} /></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav class="navigation navbar navbar-expand-md navbar-dark ">
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                        aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto">
                           <li class="nav-item">
                              <a class="nav-link" href="#work"> My Work</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#footer">Contact </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   </header>
   {/*  end header inner  */}
   {/*  end header  */}
   {/*  banner  */}
   <section class="banner_main">
      <div id="cylinder1" class="cylinder">
      </div>
      <div id="cylinder2" class="cylinder">
      </div>
      <div id="cylinder3" class="cylinder">
      </div>
      <div id="back-to-top" style={{display: 'none'}}>
         <img alt="back to top" src={triangle}/>
      </div>
      <div class="container-fluid">
         <div class="row d_flex">
            <div class="col-md-7">
               <div class="text-bg">
                  <div class="padding_lert titlepage" style={{textAlign: "left", padding:'10px'}} >
                     <h1 class="typeIt">
                        Will Rankin 
                     </h1>
                     <h2 class="typeItLoop" style={{color:"white", marginBottom: "30px", minHeight: "110px"}}>
                        Full-Stack Developer, Teacher, Explorer
                     </h2>
                     <div class="multipurpose">
                        <p>
                           Software developer turned traveler, eager to return to development. <br/>
                           If you'd like to collaborate, please send me an email or reach out via <a class="work_link" href="mailto:wrankin1101@gmail.com">email</a> or socials!
                        </p>
                     </div>
                     
                     <br/>
                     <div class="col-3" style={{display: 'none'}}>
                        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="#ffffff">
                           <path stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                           <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                           <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                           <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                       </svg>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                        <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>

                     </div>
                     <a target="_blank" class="big-button"
                        href="https://drive.google.com/file/d/155HY4my4mZl1IAD_-V7XuTdNIjqKEVki/view?usp=sharing" rel="noreferrer">
                        <i class="fas fa-file-pdf fa-sm"></i>
                        &nbsp;
                        Resume</a>
                  </div>
               </div>
            </div>
            <div class="col-md-4 m-5 bah">
               <div class="bann_img">
                  <div class="triangle">
                     <img src={spinTriangle} alt="#" />   
                  </div>
                  <figure>
                     <img src={headshot} alt="#" />
                  </figure>
                  
               </div>
            </div>
            
         </div>
      </div>
   </section>
   {/*  end banner  */}
   {/*  service  */}
   <div id="services" class="service" style={{display: 'none'}}>
      <div class="container-fluid">
         <div class="row d_flex">
            <div class="col-md-5">
               <div class="service_img">
                  <figure><img src="images/pc.png" alt="#" /></figure>
               </div>
            </div>
            <div class="col-md-7">
               <div class="titlepage">
                  <h2>Full service digital capbilities From end to end workflow</h2>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                     type and scrambled it to make a type specimen book. It has survived not only five</span>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/*  end service  */}
   {/*  solutions  */}
   <div class="solutions" style={{display: 'none'}}>
      <div class="container">
         <div class="row d_flex">
            <div class="col-md-7">
               <div class="titlepage">
                  <h2>Solutions for every <br/>Specific need</h2>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                     type and scrambled it to make a type specimen book. It has survived not only five</span>
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
               </div>
            </div>
            <div class="col-md-5">
               <div class="solutions_img">
                  <figure><img src="images/solusan.png" alt="#" /></figure>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/*  end solutions  */}
   {/*  work  */}
   <div id="work" class="work">

      <div class="container">
         <div class="row spacer">
            
         </div>
         <div class="titlepage">
            <h3>Apps</h3>
         </div>
         <div class="row">
            <div class="col-md-6">
               <div class="our_work">
                  <figure>
                     <a href="https://storage.googleapis.com/commentwriter/index.html" target="_blank" rel="noreferrer">
                        <img src={commentWriter} alt="#" />
                     </a>
                  </figure>
               </div>
               <a href="https://storage.googleapis.com/commentwriter/index.html" target="_blank" class="work_link" rel="noreferrer">
                  <h3>Student Comment Writer - 2021</h3>
               </a>
               <p>Created an intuitive comment writing application to increase quarterly reporting speed
                  for teachers by up to 50%</p>
               <br/>
               <h2>Technology Used</h2>
               <p>
                  jQuery | Bootstrap | <a href="https://cloud.google.com" target="_blank" class="work_link" rel="noreferrer">Google Cloud</a> | HTML | CSS
               </p>
               <br/>
               <br/>
            </div>
            <div class="col-md-6">
               <div class="our_work">
                  <figure>
                     <a href="https://www.oemheaters.com/configurators/sr/config.aspx" target="_blank" rel="noreferrer">
                        <img src={oem} alt="#" /></a>
                  </figure>
               </div>
               <a href="https://www.oemheaters.com/configurators/sr/config.aspx" target="_blank" class="work_link" rel="noreferrer">
                  <h3>Custom Product Creator App - 2015</h3>
               </a>
               <p>Created jQuery apps that allowed users to create custom products, which increased sales and created
                  leads.</p>
               <br/>
               <h2>Technology Used</h2>
               <p>
                  jQuery | jQueryUI | HTML | CSS
               </p>
               <br/>
               <br/>
            </div>
         </div>
         <div class="titlepage">
            <h3>Websites</h3>
         </div>
         <div class="row">
            <div class="col-md-6">
               <div class="our_work">
                  <figure>
                     <a href="https://funway.co.kr" target="_blank" rel="noreferrer">
                        <img src={funway} alt="#" /></a>
                  </figure>
               </div>
               <a href="https://funway.co.kr" target="_blank" class="work_link" rel="noreferrer">
                  <h3>English Academy Website - 2022</h3>
               </a>
               <p>
                  Worked with business owner to design and create a website using a full-service builder. This led to an
                  increase in recruitment.
               </p>
               <br/>
               <h2>Technology Used</h2>
               <p>
                  <a href="https://creatorlink.com" target="_blank" class="work_link" rel="noreferrer">CreatorLink</a> | HTML | CSS
               </p>
               <br/>
               <br/>
            </div>
            <div class="col-md-6">
               <div class="our_work">
                  <figure>
                     <a href="https://www.funwaycity.com/" target="_blank" rel="noreferrer">
                        <img src={funwayCity} alt="#" /></a>
                  </figure>
               </div>
               <a href="https://www.funwaycity.com/" target="_blank" class="work_link" rel="noreferrer">
                  <h3>English Academy Student Dashboard - 2023</h3>
               </a>

               <p>Utilized Wix and Wix Velo to create a dashboard for students and parents to track progress in an
                  intuitive responsive design.</p>
               <br/>
               <p>Login: <b>wrankin1101@gmail.com</b> <br/> PW: <b>funway1!</b></p>
               <br/>
               <h2>Technology Used</h2>
               <p>
                  <a href="https://wix.com" target="_blank" class="work_link" rel="noreferrer">Wix</a> | Wix Velo | Javascript | HTML | CSS
               </p>
               <br/>
               <br/>
            </div>
         </div>
      </div>
   </div>
   {/*  end work  */}
   {/*   footer  */}
   <footer>
      <div id="footer" class="footer">
         <div class="container">
            <div class="row spacer">
            
            </div>
            <div class="row">
               <div class="col-md-6">
                  
               </div>
               <div class="col-md-6">
                  
               </div>
            </div>
            <div class="row">
               <div class="col-md-6">
                  <div class="titlepage">
                     <h3>Let’s Talk </h3>
                  </div>
                  <div class="contac_detel">
                     <ul>
                        <li><img src={call} alt="#" />+1 952 454 2310</li>
                        <li><img src={call} alt="#" />+82 010 2892 3398</li>
                        <li><a href="mailto:wrankin1101@gmail.com"> <img src={mail}
                                 alt="#" />wrankin1101@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/will-rankn"> <img src={linkedIn}
                                 alt="#" />linkedin.com/in/will-rankn</a></li>
                        <li><a href="https://github.com/wrankin1101"> <img src={github}
                                 alt="#" />github.com/wrankin1101</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="titlepage">
                     <h3>Quick Contact </h3>
                  </div>
                  <form method="post" id="contact-form">
                     <div class="row">
                        <div class="col-6 col-12-xsmall">
                           <div class="form-group">
                              <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                           </div>
                        </div>
                        <div class="col-6 col-12-xsmall">
                           <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                           </div>
                        </div>
                        <div class="col-12">
                           <div class="form-group">
                              <textarea class="form-control" name="message" id="message" placeholder="Message"
                                 rows="4"></textarea>
                           </div>
                        </div>
                     </div>
                     <br/>
                     <div class="row">
                        <div class="col-12">
                           <ul class="actions text-bg">
                              <li>
                                 <input id="submit-button" type="submit" class="big-button" value="Send" />
                              </li>
                           </ul>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="copyright" style={{display: 'none'}}>
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <p>Copyright 2020 All Right Reserved By<a href="https://html.design/"> Free Html Templates</a></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
    </div>
  );
}

export default App;