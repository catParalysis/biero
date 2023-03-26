import Affichage from "../../Affichage.mjs";
import ServiceBiere from "../../ServiceBiere.mjs";
import Composant from "../Composant.mjs";

export default class ListeComposant extends Composant {

    /**
     * 
     * @param {HTMLElement} domParent Point d'insertion dans le DOM
     */
    constructor(domParent) {
        super(domParent, [], true);
        this.nomGabarit = "liste";
        
        let data = { "data": [ { "id_biere": "6", "description": "string", "nom": "string", "brasserie": "string", "image": "string", "date_ajout": "2017-03-15 09:02:16", "date_modif": "2023-03-10", "note_moyenne": "5.0000", "note_nombre": "2" }]};
        this.setData(data);
        Affichage.chargementGabarit("./js/Composant/Liste/liste.html", this.nomGabarit, () => {
            console.log("prêt à afficher")
            this.gabaritPret = true;
            this.afficher();
        });
        this.miseAJour();
        }
    miseAJour() {
        ServiceBiere.getListeBieres((mesDonnees) => {
            //console.log(mesDonnees);
            this.setData(mesDonnees);  
            
        })     
           
      
    }

    ajouterListener(){
        console.log("ajouterListener");
        console.log(this);
        this.domParent.querySelectorAll(".btnTri").forEach((btnTri)=>{
            btnTri.addEventListener('click', (evt)=>{
                let btn = evt.target;
                let tri = btn.dataset.tri;
                let ordre = btn.dataset.ordre;
                this.data.data.sort((a,b)=>{
                    return a[tri].localeCompare(b[tri]);
                })
                if(ordre == 'DESC') {
                    this.data.data.reverse();
                }
                this.setData(this.data);
            })
        })
    }
    
   
}
