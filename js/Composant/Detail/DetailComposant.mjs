import Affichage from "../../Affichage.mjs";
import ServiceBiere from "../../ServiceBiere.mjs";
import Composant from "../Composant.mjs";

export default class DetaiComposant extends Composant {

    /**
     * 
     * @param {HTMLElement} domParent Point d'insertion dans le DOM
     */
    constructor(domParent, id) {
        super(domParent, [], true);
        this.id = id
        this.nomGabarit = "detail";
        
        let data = { "data": [ { "id_biere": "6", "description": "string", "nom": "ca", "brasserie": "marche pas", "image": "string", "date_ajout": "2017-03-15 09:02:16", "date_modif": "2023-03-10", "note_moyenne": "5.0000", "note_nombre": "2" }]};
        this.setData(data);
        Affichage.chargementGabarit("./js/Composant/Detail/detail.html", this.nomGabarit, () => {
            console.log("prêt à afficher")
            this.gabaritPret = true;
            this.afficher();
        });
        this.miseAJour(this.id);
        }
    miseAJour(id) {

        Promise.all([
            ServiceBiere.getUneBiere(id),
            ServiceBiere.getCommentaires(id),
            ServiceBiere.getNote(id)
          ])
          .then(([biere, commentaires, note]) => {
            let mesDonnees = biere;
                mesDonnees.data.commentaire = commentaires.data;
                mesDonnees.data.note_moyenne = note.data.note;
                mesDonnees.data.note_nombre = note.data.nombre;
                console.log(mesDonnees);
                this.setData(mesDonnees);
                this.ajouterListenerEnvoyer()
            });
          }

    


         ajouterListenerEnvoyer(){
        console.log("ajouterListener");
        const btn = this.domParent.querySelector("[data-js-btn]")
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                let commentaire = document.querySelector('[data-js-commentaire]').value;
                if (/^[a-zA-Z0-9._%+-]{1,}@([a-zA-Z0-9.-]{1,}){1,}$/.test(document.querySelector('[data-js-email]').value)) {
                    let courriel = document.querySelector('[data-js-email]').value, 
                    monCommentaire = {
                    courriel : courriel,
                    commentaire : commentaire
                };
                ServiceBiere.ajouterCommentaires(this.id, monCommentaire,()=>{
                    
                })
                }  
                location.reload();

            })
        } 
    
   
}
