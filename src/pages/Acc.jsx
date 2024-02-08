const Acc = () => {
    return (

            <main className='App-main'>
            <article className='main-presentation'>
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button type="button" class="btn btn-primary">En savoir plus</button>
            </article>

            <article className='about-layout'>

            <div className=' aboutContent container'>
                <div className='row'>
                <div className='col-sm'>
                    <h2>À propos</h2>
                    <p>Passioné par l'informatique et les nouvelles<br/> 
                    technologies, j'ai suivi une formation d'<strong>ntégrateur-<br/>
                    développeur web</strong> au CEF. Au cours de cette formation,<br/>
                    j'ai pu acquérir des bases solides pour travailler dans le<br/>domaine du <strong>développement web</strong>.<br/> 
                    </p>
                    <p>
                    Basé à Lyon, je suis en recherche d'une alternance au<br/>
                    seins d'une agence digital pour consolider ma formation<br/>
                    de <strong>développeur full stack</strong>.<br/> 
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
            </main>
  )
}
export default Acc;