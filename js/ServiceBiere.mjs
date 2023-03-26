/**
 * Module de gestion des données et des requêtes des bieres
 *
 * @module ServiceBiere
 */
export default class ServiceBiere {
    /**
     * URL de base du service Web utilisé pour les appels de l'API.
     * @static
     * @memberof Biere
     */
    static api_url = "http://127.0.0.1:8000/webservice/php/";
    
    /**
     * Récupérer l'ensemble des biere sur le service Web
     *
     * @static
     * @returns void
     * @memberof Biere
     */
    static getListeBieres (fctRappel){
        fetch(this.api_url + "biere")
            .then(data=>data.json())
            .then(data=>{
                fctRappel(data);
            })
    }

    static getListeDesMeilleuresBieres(fctRappel){
        fetch(this.api_url + "biere")
        .then(data=>data.json())
        .then(data=>{
            
            fctRappel(data);
        })
    }

    static getUneBiere(id, fctRappel){
       
    }

    static getCommentaires(id, fctRappel){
       
    }

    static ajouterCommentaires(id, commentaire, fctRappel){
        const monCommentaire = {
            'courriel' : "toto@toto",
            'commentaire' : "Lorem ipsum"
        }
        const entetes = new Headers();
        entetes.append("Authorization", "Basic " + btoa('biero:biero'));
        
        const options  = {
            method : 'PUT',
            mode: "cors",
            body : JSON.stringify(monCommentaire),
            headers : entetes
        }
        fetch(this.api_url + "biere/6/commentaire", options);


    }

}
