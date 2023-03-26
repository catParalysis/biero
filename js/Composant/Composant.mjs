import Affichage from "../Affichage.mjs";

export default class Composant {
    
    /**
     * 
     * @param {HTMLElement} domParent 
     * @param {object} data 
     * @param {boolean} bAffichage - Affichage automatique ou pas (default : false)
     */
    constructor(domParent, data, bAffichage){
        this.domParent = domParent;
        this.data = data;
        this.gabaritPret = false;

        if(bAffichage){
            this.afficher();
        }
    }

    setData(data){
        //if(JSON.stringify(this.data) != JSON.stringify(data)) {
            this.data = data;
            this.afficher();
        //}
    }

    getData(){
        return this.data;
    }

    afficher(){
        let chaineHTML = "";
        // Aller chercher le gabarit
        // Mettre les données dans le gabarit
        // Insérer dans le DOM
        if(this.gabaritPret){
            console.log("rendu");
            chaineHTML = Affichage.genererHTML(this.nomGabarit, this.data);
            this.domParent.innerHTML = chaineHTML;
            if(chaineHTML){
                this.ajouterListener();
            }
        }
        
        
    }
    ajouterListener(){ }
    
}