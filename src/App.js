import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Services from './pages/Services';
import Acc from './pages/Acc';

 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-dark  ">
          <a class="navbar-brand" href="#">JOHN DOE</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link class="nav-link" to="/">ACCUEIL</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Services">SERVICES</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RÉALISATIONS</a>
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


      <Routes>
        <Route path='/' element = {<Acc/>}></Route>
        <Route path='/Services' element = {<Services/>}></Route>
        
      </Routes>

       
<footer class="bg-body-tertiary  text-lg-start">
  
  <div class="container-fluid p-4">
    
    <div class=" footerElement row">
  
      <div class="col-sm">
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
 


  <div class="text-center p-3"  >
   
    <a class="middlefoot text-body" href="https://mdbootstrap.com/">© Designed by John Doe</a>
  </div>
   
</footer>
 
     









    </div>
  );
}

export default App;
