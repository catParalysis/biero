/**
 * Module de gestion de l'affichage
 *
 * @Module Affichage
 * @requires Mustache.js {https://unpkg.com/mustache@latest}
 */
export default class Affichage {
    /*oGabarits = {
        cle : {
            gabarit : "",
            rendu : ""
        }
    }*/
    
    static chargementGabarit(url_gabarit, nom, fctRappel){
        
        // Définition initiale
        if(!this.oGabarit){
            this.oGabarit= {};
        }
        if(!this.oGabarit[nom]){
            this.oGabarit[nom] = {};
            fetch(url_gabarit)
                .then(gabarit=>gabarit.text())
                .then(gabarit=>{
                    this.oGabarit[nom] = {gabarit : gabarit};
                    if(fctRappel){
                        fctRappel();
                    }
                })
        }else{
            if(fctRappel){
                fctRappel();
            }
        }
    }

    static genererHTML(nom, data) {
        let html = "";
        if(this.oGabarit && this.oGabarit[nom]){
            html = Mustache.render(this.oGabarit[nom].gabarit, data);
        }
        return html;
    }



}