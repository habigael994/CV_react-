import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">JOHN DOE</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" href="#">ACCUEIL</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SERVICES</a>
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

      <main className='App-main'>
        <article className='main-presentation'>
          <h1>Bonjour,je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button>En savoir plus</button>
        </article>

        <article className='main-about'>

          

        </article>


      </main>









    </div>
  );
}

export default App;
