const Services = () => {
    return (
            <div className="Services">
                <div className="Banner"></div>
                <div className="J-ai-oublié-pourquoi-ce-div-existe">
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

                
            </div>

    )
}
export default Services;