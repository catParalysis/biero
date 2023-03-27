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

    static async getUneBiere(id) {
        const response = await fetch(this.api_url + "biere/" + id);
        const data = await response.json();
        return data;
    }

    static async getCommentaires(id) {
        const response = await fetch(this.api_url + "biere/" + id + "/commentaire");
        const data = await response.json();
        return data;
    }

    static async getNote(id) {
        const response = await fetch(this.api_url + "biere/" + id + "/note");
        const data = await response.json();
        return data;
    }


    static ajouterCommentaires(id, commentaire, fctRappel){

        const entetes = new Headers();
        entetes.append("Authorization", "Basic " + btoa('biero:biero'));
        
        const options  = {
            method : 'PUT',
            mode: "cors",
            body : JSON.stringify(commentaire),
            headers : entetes
        }
        fetch(this.api_url + "biere/"+ id +"/commentaire", options);

    }

}
