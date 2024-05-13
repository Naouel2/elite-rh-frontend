/*components*/
import Header from "../components/Header"
import MainHeadline from "../components/MainHeadline";
import Footer from "../components/Footer";
/*images*/
import formation from "../images/formation.jpg"

const Formation= () => {

    return (
        <div className="formation">  
        <Header/>
        <MainHeadline/>
        <div className="formation-detail">
        <img
              src={formation}
              alt="formation"
            />
        <div className="formation-bord">
            <div>
                <h2>Pilotage RH</h2>
                <p>Le besoin de recrutement</p>
                <p>La qualité d'embauche</p>
                <p>Le coût d'embauche</p>
                <p>L'efficacité du recrutement</p>
            </div>
            <div>
                <h3>Date et heure</h3>
                <p>13/05/2024</p>
                <h3>Lieu</h3>
                <p>Salle 3-02</p>
                <button>S'inscrire</button>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )

}

export default Formation;