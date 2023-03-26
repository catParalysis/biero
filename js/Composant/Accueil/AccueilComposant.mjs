import Composant from "../Composant.mjs";
import Affichage from "../../Affichage.mjs";
import ServiceBiere from "../../ServiceBiere.mjs";

export default class AccueilComposant extends Composant{
   
    constructor(domParent) {
        super(domParent, [], true);
        this.nomGabarit = "accueil";
        
        let data = { "data": [ { "id_biere": "5", "description": "string", "nom": "string", "brasserie": "string", "image": "string", "date_ajout": "2017-03-15 09:02:16", "date_modif": "2023-03-10", "note_moyenne": "5.0000", "note_nombre": "2" }]};
        this.setData(data);
        Affichage.chargementGabarit("./js/Composant/Liste/liste.html", this.nomGabarit, () => {
            console.log("prêt à afficher")
            this.gabaritPret = true;
            this.afficher();
        });
        this.miseAJour();
        }
    miseAJour() {
        ServiceBiere.getListeDesMeilleuresBieres((mesDonnees) => {
            console.log(mesDonnees);
            this.setData(mesDonnees);  
            
        })     
           
      
    }

    
}
