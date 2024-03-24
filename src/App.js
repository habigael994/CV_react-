import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Services from './pages/Services';
import Acc from './pages/Acc';
import Realisations from './pages/Realisations';
import React, { createContext, useState, useContext } from "react";
 








function Info({isVisible,isVisible1,isVisible2,isVisible3,isVisible4,isVisible5}) {

  
  


  return (

  <div>
  
{isVisible && (
 
<main className='App-main'>
            <article className='main-presentation text-center'>
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button type="button" class="btn btn-primary">En savoir plus</button>
            </article>

            <article className='about-layout'>

            <div className=' aboutContent container'>
                <div className='row'>
                <div className='col-sm'>
                    <h2 >À propos</h2>
                    <hr className="aboutHr"/>
                    <p>Passioné par l'informatique et les nouvelles<br/> 
                    technologies, j'ai suivi une formation d'<strong>ntégrateur-<br/>
                    développeur web</strong> au CEF. Au cours de cette formation,<br/>
                    j'ai pu acquérir des bases solides pour travailler dans le<br/>domaine du <strong>développement web</strong>.<br/> 
                    </p>
                    <p>
                    Basé à Lyon, je suis en recherche d'une alternance au<br/>
                    seins d'une agence digital pour consolider ma formation<br/>
                    de <strong>développeur web full stack</strong>.<br/> 
                    </p>
                    <p>
                    J'accorde une attention particulière à la qualité du code<br/>
                    que j'écris et je respecte les bonnes pratiques du web.<br/>
                    </p>
                </div>
                <div className='col-sm'>
                    <img src="../JohnDoe.jpg" class="img-fluid" alt="Responsive image"></img>
                    <h2>Mes compétences</h2>






                    <div className="profile_record">
                    <h5 className="progress-label">HTML5 90%</h5>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="profile_record">
                    <h5 className="progress-label">CSS3 80%</h5>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                    </div>

                    <div className="profile_record">
                    <h5 className="progress-label">JAVASCRIPT 70%</h5>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                    </div>

                    <div className="profile_record">
                    <h5 className="progress-label">PHP 60%</h5>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                    </div>

                    <div className="profile_record">
                    <h5 className="progress-label">REACT 50%</h5>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            

            </article>
            </main>)}




            {isVisible1 && (

            <div className="Services">
                <div className="Banner"></div>
               
                    <div className="services-title">
                        <h1 className="text-center">MON OFFRE DE SERVICES</h1>
                        <p className="text-center">Voici les prestation sur lequelles je peux intervenir.</p>
                        <hr className="titleHr" />
                    </div>
                    <div className="services-row row justify-content-around ">
                        <div className="services-display1 col-3 text-center container no-gutters">
                            <img src="../presentation-svgrepo-com.svg" class="services-logo img-fluid" alt="..."></img>
                            <h2>UX DESIGN</h2>
                            <p>L'<strong>UX Design</strong> est une méthode de<br/>
                            conception centrée sur l'utilisateur. Son but<br />
                            est d'offrir une expérience de navigation<br/> 
                            optimale à l'internaute.
                            </p>
                        </div>
                        <div className="services-display2 col-3 text-center container no-gutters"> 
                            <img src="../code-file-svgrepo-com.svg" class="services-logo img-fluid" alt="..."></img>   
                            <h2>DÉVELOPPEMENT WEB</h2>
                            <p>Le <strong>développement de sites web</strong> repose sur<br/>
                            l'utilisation des languages HTML, CSS, <br/>
                            JavaScript et PHP.
                            </p>
                        </div>
                        <div className="services-display3 col-3 text-center container no-gutters">
                            <img src="../trend-up-svgrepo-com.svg" class="services-logo img-fluid" alt="..."></img>
                            <h2>RÉFÉRENCEMENT</h2>
                            <p>Le <strong>référencement naturel d'un site</strong>, aussi<br/>
                            appelé SEO, consiste à mettre des<br/>
                            techniques en oeuvre pour améliorer sa<br/>
                            position dans les résultats des moteurs de<br/> 
                            recherche
                            </p>
                        </div>
                    </div>           
                    
                

                
            </div>

)}

{isVisible2 && (
        
        
        <div className='realisations'>
          
          <div className="Banner"></div>
          <div className="real-title text-center">
                        <h1 className="text-center">PORTFOLIO</h1>
                        <p className="text-center">Voici Quelques-unes de mes réalisations.</p>
                        <hr className="titleHr" />
          </div>







 

          <div class="card-deck row row-cols-3 justify-content-between  ">
            <div class="card  col-3 ">
              <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Maquette et cahier des charges de la socketterie</h5>
                <p class="card-text">Realisations du CDC d'un site internet.</p>
                <button type="button" class="card-btn btn btn-outline-primary">Voir</button>
              </div>
              <div class="card-footer">
                <small class="text-muted">Projet réalisé a l'aide de Canva.</small>
              </div>
            </div>
            <div class="card  col-3 ">
              <img class="card-img-top" src="../coml.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Section commentaire</h5>
                <p class="card-text">Création d'une section commentaire fonctionnelle avec JavaScript.</p>
                <button type="button" class="card-btn  btn btn-outline-primary">Voir</button>
              </div>
              <div class="card-footer">
                <small class="text-muted">Projet réalisé a l'aide de HTML5/CSS/JAVASCRIPT</small>
              </div>
            </div>
            <div class="card  col-3 ">
              <img class="card-img-top" src="../cvimg.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Mon Cv</h5>
                <p class="card-text">Réalisations d'un CV-site internet.</p>
                <button type="button" class="card-btn btn btn-outline-primary">Voir</button>
              </div>
              <div class="card-footer">
                <small class="text-muted">Projet réalisé a l'aide de HTML5/CSS/JAVASCRIPT</small>
              </div>
            </div>
          </div>


         

</div>


)}

{isVisible3 && (

<div className='realisations'>
          
<div className="Banner"></div>
<div className="real-title text-center">
              <h1 className="text-center">BLOG</h1>
              <p className="text-center">Retrouvez ici quelques articles sur le développement web.</p>
              <hr className="titleHr" />
</div>









<div class="card-deck row row-cols-3 justify-content-between  ">
  <div class="card  col-3 ">
    <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
    <div class="card-body-blog">
      <h5 class="card-title">Coder son site en HTLM/CSS</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="card-btn-blog btn-primary btn-lg">Lire la suite</button>
    </div>
    <div class="card-footer-blog">
      <small class="text-muted">Publié le 22 août 2022</small>
    </div>
  </div>

  <div class="card  col-3 ">
    <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
    <div class="card-body-blog">
      <h5 class="card-title">Vendre ses produits sur le web</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="card-btn-blog btn-primary btn-lg">Lire la suite</button>
    </div>
    <div class="card-footer-blog">
      <small class="text-muted">Publié le 20 août 2022</small>
    </div>
  </div>

  <div class="card  col-3 ">
    <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
    <div class="card-body-blog">
      <h5 class="card-title">Se positionner sur Google</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="card-btn-blog btn-primary btn-lg">Lire la suite</button>
    </div>
    <div class="card-footer-blog">
      <small class="text-muted">Publié le 1 août 2022</small>
    </div>
  </div>

  <div class="card  col-3 ">
    <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
    <div class="card-body-blog">
      <h5 class="card-title">Coder en responsive design</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="card-btn-blog btn-primary btn-lg">Lire la suite</button>
    </div>
    <div class="card-footer-blog">
      <small class="text-muted">Publié le 31 juillet 2022</small>
    </div>
  </div>

  <div class="card  col-3 ">
    <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
    <div class="card-body-blog">
      <h5 class="card-title">Techniques de référencement</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="card-btn-blog btn-primary btn-lg">Lire la suite</button>
    </div>
    <div class="card-footer-blog">
      <small class="text-muted">Publié le 30 juillet 2022</small>
    </div>
  </div>

  <div class="card  col-3 ">
    <img class="card-img-top" src="../cdc.png" alt="Card image cap"></img>
    <div class="card-body-blog">
      <h5 class="card-title">Apprendre à coder</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button type="button" class="card-btn-blog btn-primary btn-lg">Lire la suite</button>
    </div>
    <div class="card-footer-blog">
      <small class="text-muted">Publié le 12 juillet 2022</small>
    </div>
  </div>

  
  
</div>




</div>

)}





{isVisible4 && (


 <div className='contact'>

  <div className='contact-display container  '>

   

  <div className="contact-title col text-center row ">
                        
                     <div className='col'>
                        <h1 className="text-center">PORTFOLIO</h1>
                        <p className="text-center">Voici Quelques-unes de mes réalisations.</p>
                        <hr className="titleHr" />
                     </div>

  </div>







  
  <div className='contact-row row  '>


    
    <form className='contact-form col  '>
      <div className='right'>
                        <h2>PORTFOLIO</h2>
                        <hr className="contact-titlehr"/>
                         
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1"> </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1"> </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1"> </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1"> </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1"> </label>
        <textarea className="form-input" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <div className='btn-form-div'>
        <button type="button" class="btn-form btn btn-primary">Envoyer</button>
      </div>
    </form>


   <div className='map-display col '>
                  <div className='left'>
                        <h2>PORTFOLIO</h2>
                        <hr className="contact-titlehr"/>
                        <p><img className='list-logo' src='../icons8-location-50.png'></img>14 Place la Folette , Rue Paul Eluard 97420 Le Port, La Réunion <br/> 
                         <img className='list-logo' src='../icons8-phone-24.png'></img>0692 37 38 39</p>

                  </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.4458454460473!2d55.3016497112988!3d-20.934603280610727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21828887f136fee3%3A0xa194666c14b91c2!2s14%20Pl.%20la%20Folette%2C%20Le%20Port%2097420%2C%20R%C3%A9union!5e0!3m2!1sen!2sus!4v1710502296609!5m2!1sen!2sus" className='contact-map'  ></iframe>
   
  </div>

  </div>

  </div>

</div>



)}

{isVisible5 && (


<h1>zzzzzzzzzzzzzz</h1>


)}

 </div>
  );
}














function App() {


  const [isVisibleApp, setIsVisibleApp] = useState(true);
  const [isVisibleApp1, setIsVisibleApp1] = useState(false);
  const [isVisibleApp2, setIsVisibleApp2] = useState(false);
  const [isVisibleApp3, setIsVisibleApp3] = useState(false);
  const [isVisibleApp4,setIsVisibleApp4] = useState(false);
  const [isVisibleApp5,setIsVisibleApp5] = useState(false);

  


  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-dark position-fixed ">
          <a class="navbar-brand" href="#">JOHN DOE</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="nav justify-content-end">
              <li class="nav-item">
              <button className='nav-button  nav-link' onClick={event=>{ 
                setIsVisibleApp(true);
                  setIsVisibleApp1(false);
                  setIsVisibleApp2(false);
                  setIsVisibleApp3(false);
                  setIsVisibleApp4(false); 
                  setIsVisibleApp5(false);}}>
                  ACCUEIL
                </button>
              </li>
              <li class="nav-item">
                <button className='nav-button  nav-link' onClick={event=>{ 
                  setIsVisibleApp(false);
                    setIsVisibleApp1(true);
                    setIsVisibleApp2(false);
                    setIsVisibleApp3(false);
                    setIsVisibleApp4(false);
                    setIsVisibleApp5(false); }}>
                  SERVICES
                </button>
                  
              </li>
              <li class="nav-item">
                <button className='nav-button  nav-link' onClick={event=>{ 
                  setIsVisibleApp(false);
                   setIsVisibleApp1(false);
                     setIsVisibleApp2(true);
                     setIsVisibleApp3(false);
                     setIsVisibleApp4(false); 
                     setIsVisibleApp5(false);  }}>
                  RÉALISATIONS 
                </button>
              </li>
              <li class="nav-item">
                <button className='nav-button  nav-link' onClick={event=>{ 
                  setIsVisibleApp(false);
                   setIsVisibleApp1(false);
                     setIsVisibleApp2(false);
                     setIsVisibleApp3(true);
                     setIsVisibleApp4(false);
                     setIsVisibleApp5(false);   }}>
                  BLOG
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-button nav-link" onClick={event=>{ 
                  setIsVisibleApp(false);
                   setIsVisibleApp1(false);
                     setIsVisibleApp2(false);
                     setIsVisibleApp3(false);
                     setIsVisibleApp4(true); 
                     setIsVisibleApp5(false);}}>
                  ME CONTACTER
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div>


      {isVisibleApp && (
         <Info isVisible={true}/>
         )}

      {isVisibleApp1 && (
         <Info isVisible1={true}/>
         )}
    
        


    {isVisibleApp2 && (
         <Info isVisible2={true}/>
         )}
    
    {isVisibleApp3 && (
         <Info isVisible3={true}/>
         )}

    {isVisibleApp4 && (
         <Info isVisible4={true}/>
         
        )}
    {isVisibleApp5 && (
         <Info isVisible5={true}/>
         
        )}
  

        <Routes>
          
          <Route path='/Services' element = {<Services/>}></Route>
          <Route path='/Realisations' element = {<Realisations/>}></Route>
        </Routes>
      </div>
       
<footer class="bg-body-tertiary text-lg-start position-bottom">
  
  <div class="container-fluid p-4">
    
    <div class=" footerElement    justify-content-between ">
      <div className='footer-row row '>
        <div className="col-sm footer-col ">
          <h5 className="text-uppercase">John Doe</h5>

          <ul className="list-unstyled mb-0">  
            <li >
              <p >40 Rue Laura Diebold<br/>69009 Lyon, France<br/>Téléphone : 06 20 30 40 50</p>
            </li>
          </ul>
          <div className="logoDiv d-flex justify-content-around"> 
            <a href=''><img className='linkLogo' src='../github.png' alt='Github link'></img></a>
            <a href=''><img className='linkLogo' src='../twitter.png' alt='Twitter link'></img></a>
            <a href=''><img className='linkLogo' src='../linkedin.png' alt='Linkedin link'></img></a>
          </div>
        </div>
        
        <div className="footer-col col-sm">
          <h5 className="text-uppercase">Liens utiles</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <span class="badge">></span><button class="footer-text-body" onClick={event=>{
                setIsVisibleApp(true);  
                setIsVisibleApp1(false);
                setIsVisibleApp2(false);
                setIsVisibleApp3(false);
                setIsVisibleApp4(false);
                setIsVisibleApp5(false);}}>Acceuil</button>
            </li>
            <li>
              <span class="badge">></span><button class="footer-text-body" onClick={event=>{ 
                setIsVisibleApp(true);
                setIsVisibleApp1(false);
                setIsVisibleApp2(false);
                setIsVisibleApp3(false);
                setIsVisibleApp4(false)
                setIsVisibleApp5(false);;}}>À propos</button>
            </li>
            <li>
              <span class="badge">></span><button class="footer-text-body" onClick={event=>{ 
                setIsVisibleApp(false);
                setIsVisibleApp1(false);
                setIsVisibleApp2(true);
                setIsVisibleApp3(false);
                setIsVisibleApp4(false);
                setIsVisibleApp5(false);  }}>Services</button>
            </li>
            <li>
              <span class="badge">></span><button class="footer-text-body" onClick={event=>{
                 setIsVisibleApp(false);
                 setIsVisibleApp1(false);
                 setIsVisibleApp2(false);
                 setIsVisibleApp3(false);
                 setIsVisibleApp4(true);
                 setIsVisibleApp5(false); }}>Me contacter</button>
            </li>
            <li>
              <span class="badge">></span><button class="footer-text-body" onClick={event=>{ 
                setIsVisibleApp(false);
                setIsVisibleApp1(false);
                setIsVisibleApp2(false);
                setIsVisibleApp3(false);
                setIsVisibleApp4(false);
                setIsVisibleApp5(true); }}>Mentions légales</button>
            </li>
          </ul>
        </div>
     
       
       
        <div className="footer-col col-sm ">
          <h5 className="text-uppercase">Mes derniéres réalisations</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <span className="badge">></span><a href="#!" class="text-body">Fresh food</a>
            </li>
            <li>
              <span className="badge">></span><a href="#!" class="text-body">Restaurant Akira</a>
            </li>
            <li>
              <span className="badge">></span><a href="#!" class="text-body">Espace bien-être</a>
            </li>
          </ul>
        </div>
      
        <div className="footer-col col-sm">
          <h5 className="text-uppercase  ">Mes derniers articles</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <span className="badge">></span><a href="#!" class="text-body">Coder son site en HTML/CSS</a>
            </li>
            <li>
              <span className="badge">></span><a href="#!" class="text-body">Vendre ses produits sur le web</a>
            </li>
            <li>
            <span className="badge">></span><a href="#!" class="text-body">Se positionner sur Google</a>
            </li>
          </ul>
        </div>
       
    </div>
    </div>
  </div>
 


  <div className="Foot text-center p-3"  >
   
    <a className="middlefoot text-body" href="https://mdbootstrap.com/">© Designed by John Doe</a>
  </div>
   
</footer>
 
     









    </div>
  );
}

export default App;
 