import clock from "../images/clock.png" 
import localisation from "../images/localisation.png" 


const FormationCard = ({ onClick }) => {

    return (
        <div className="formation-card" onClick={onClick}>
         <div className="formation-card-bottom">  
            <h3>Titre de la formation</h3>
            <div className="date-localisation">
                <img src={clock} alt="clock"/>
                <p>Date - Heure</p>
             </div>
             <div className="date-localisation">
                <img src={localisation} alt="localisation"/>
                <p>Salle</p>
             </div>
        </div>
        <div className="formation-card-bottom">  
            <h3>Titre de la formation</h3>
            <div className="date-localisation">
                <img src={clock} alt="clock"/>
                <p>Date - Heure</p>
             </div>
             <div className="date-localisation">
                <img src={localisation} alt="localisation"/>
                <p>Salle</p>
             </div>
        </div>
        <div className="formation-card-bottom">  
            <h3>Titre de la formation</h3>
            <div className="date-localisation">
                <img src={clock} alt="clock"/>
                <p>Date - Heure</p>
             </div>
             <div className="date-localisation">
                <img src={localisation} alt="localisation"/>
                <p>Salle</p>
             </div>
        </div>
        <div className="formation-card-bottom">  
            <h3>Titre de la formation</h3>
            <div className="date-localisation">
                <img src={clock} alt="clock"/>
                <p>Date - Heure</p>
             </div>
             <div className="date-localisation">
                <img src={localisation} alt="localisation"/>
                <p>Salle</p>
             </div>
        </div>
        <div className="formation-card-bottom">  
            <h3>Titre de la formation</h3>
            <div className="date-localisation">
                <img src={clock} alt="clock"/>
                <p>Date - Heure</p>
             </div>
             <div className="date-localisation">
                <img src={localisation} alt="localisation"/>
                <p>Salle</p>
             </div>
        </div>
        <div className="formation-card-bottom">  
            <h3>Titre de la formation</h3>
            <div className="date-localisation">
                <img src={clock} alt="clock"/>
                <p>Date - Heure</p>
             </div>
             <div className="date-localisation">
                <img src={localisation} alt="localisation"/>
                <p>Salle</p>
             </div>
        </div>
        
        </div>
       
    )

}

export default FormationCard;