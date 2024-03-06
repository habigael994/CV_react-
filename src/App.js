import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Services from './pages/Services';
import Acc from './pages/Acc';
import Realisations from './pages/Realisations';
import React, { createContext, useState, useContext } from "react";
 








function Info({isVisible,isVisible1,isVisible2}) {

  
  


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

















 </div>
  );
}














function App() {


  const [isVisibleApp, setIsVisibleApp] = useState(true);
  const [isVisibleApp1, setIsVisibleApp1] = useState(false);
  const [isVisibleApp2, setIsVisibleApp2] = useState(false);
  

  


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
              <button className='nav-button  nav-link' onClick={event=>{ setIsVisibleApp(true);  setIsVisibleApp1(false);setIsVisibleApp2(false);}}>
                  ACCUEIL
                </button>
              </li>
              <li class="nav-item">
                <button className='nav-button  nav-link' onClick={event=>{ setIsVisibleApp(false);  setIsVisibleApp1(true);setIsVisibleApp2(false);}}>
                  SERVICES
                </button>
                  
              </li>
              <li class="nav-item">
                <button className='nav-button  nav-link' onClick={event=>{ setIsVisibleApp(false); setIsVisibleApp1(false);  setIsVisibleApp2(true);  }}>
                  RÉALISATIONS 
                </button>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">BLOG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ME CONTACTER</a>
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





        <Routes>
          
          <Route path='/Services' element = {<Services/>}></Route>
          <Route path='/Realisations' element = {<Realisations/>}></Route>
        </Routes>
      </div>
       
<footer class="bg-body-tertiary text-lg-start position-bottom">
  
  <div class="container-fluid p-4">
    
    <div class=" footerElement row   justify-content-around  n ">
      <div className='row '>
        <div class="col-sm ">
          <h5 class="text-uppercase">John Doe</h5>

          <ul class="list-unstyled mb-0">  
            <li >
              <p >40 Rue Laura Diebold<br/>69009 Lyon, France<br/>Téléphone : 06 20 30 40 50</p>
            </li>
          </ul>
          <div className="logoDiv d-flex justify-content-around"> 
            <a href=''><img className='linkLogo' src='../github.png' alt='nnn'></img></a>
            <a href=''><img className='linkLogo' src='../twitter.png' alt='nnn'></img></a>
            <a href=''><img className='linkLogo' src='../linkedin.png' alt='nnn'></img></a>
          </div>
        </div>
        
        <div class="col-sm">
          <h5 class="text-uppercase">Liens utiles</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <span class="badge">></span><Link to="/" class="text-body">Acceuil</Link>
            </li>
            <li>
              <span class="badge">></span><a href="#!" class="text-body">À propos</a>
            </li>
            <li>
              <span class="badge">></span><Link to="/Services" class="text-body">Services</Link>
            </li>
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Me contacter</a>
            </li>
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Mentions légales</a>
            </li>
          </ul>
        </div>
      </div>
       
      <div className='row '>
        <div class="col-sm">
          <h5 class="text-uppercase">Mes derniéres réalisations</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Fresh food</a>
            </li>
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Restaurant Akira</a>
            </li>
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Espace bien-être</a>
            </li>
          </ul>
        </div>
      
        <div class="col-sm">
          <h5 class="text-uppercase  ">Mes derniers articles</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Coder son site en HTML/CSS</a>
            </li>
            <li>
              <span class="badge">></span><a href="#!" class="text-body">Vendre ses produits sur le web</a>
            </li>
            <li>
            <span class="badge">></span><a href="#!" class="text-body">Se positionner sur Google</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  </div>
 


  <div class="Foot text-center p-3"  >
   
    <a class="middlefoot text-body" href="https://mdbootstrap.com/">© Designed by John Doe</a>
  </div>
   
</footer>
 
     









    </div>
  );
}

export default App;
 