/**
 * Fichier principal, il contient la logique de l'application. 
 * 
 * De manière générale, cette application permet d'afficher la liste des bières, le détail d'une bière et de laisser des commentaires
 * @done Ajouter l'affichage de la page d'accueil (les 5 meilleures bières, avec les informations de base [nom, brasserie, moyenne, nombre de note])
 * @done Compléter la page /produit. Faire fonctionner les tris (nom, brasserie et note [ASC et DESC])
 * @todo Ajouter une page Détail. Une route supplémentaire /produit/:id qui affiche les détails d'une bière ([nom, brasserie, moyenne, nombre de note, description]) 
 * ainsi que les commentaires reçus 
 * @todo Un utilisateur ayant un courriel valide (a@a)peut ajouter un commentaire sur une bière
 * @todo (Bonus mais juste pour des points virtuels) Utiliser les partials (mustache) pour gérer les affichages (accueil et liste)
 * @todo (Bonus mais juste pour des points virtuels) Remplacer mustache.js par handlebar.js
 * @todo (Bonus mais juste pour des points virtuels) Utiliser page.js pour faire les tris (Donc l'url avec les queryString)
 * @todo (Bonus mais juste pour des points virtuels) Séparer le composant Biere en deux composants (Detail et Commentaire)
 *
 */

import ServiceBiere from './ServiceBiere.mjs';
import Affichage from './Affichage.mjs';
import page from "//unpkg.com/page/page.mjs";
import ListeComposant from './Composant/Liste/ListeComposant.mjs';
import AccueilComposant from './Composant/Accueil/AccueilComposant.mjs';
import BiereComposant from './Composant/Biere/BiereComposant.mjs';
import Composant from './Composant/Composant.mjs';
import DetailComposant from './Composant/Detail/DetailComposant.mjs';


export default class App {
    constructor(){       
        this.domParent = document.querySelector(".app");

        page("/", this.accueil.bind(this));
        page("/accueil", this.accueil.bind(this));
        page("/produit", this.produit.bind(this));
        page("/produit/:id", this.unProduit.bind(this));

        page({hashbang : true});
    }

    accueil(){
        this.domParent.innerHTML = "<h1>Accueil</h1>";
        if(!this.oTop5){
            this.oTop5 = new AccueilComposant(this.domParent);
        }
        else{
            this.oTop5.miseAJour();
        }
       
    }
    produit(){
        if(!this.oListe){
            this.oListe = new ListeComposant(this.domParent);
        }
        else{
            this.oListe.miseAJour();
        }



    }
    unProduit(ctx){
        if(!this.oBiere){
            this.oBiere = new DetailComposant(this.domParent, ctx.params.id);
        }
        else{
            this.oBiere.miseAJour(ctx.params.id);
        }


        console.log(ctx)
        console.log(ctx.params.id)
        console.log("mes produits")
        
        ServiceBiere.ajouterCommentaires();
    }
}





