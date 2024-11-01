let id = 1 ;

/*    event listener   hide formulaire affiche et desafficher */
document.getElementById("btnOpenAjoutForm").addEventListener("click", function(){ document.getElementById("modalFormAjout").classList.remove("hidden");} );
document.getElementById("closeFormAjout").addEventListener("click", function(){document.getElementById("modalFormAjout").classList.add("hidden");});
document.getElementById("closeFormEdit").addEventListener("click", function(){document.getElementById("modalFormEdit").classList.add("hidden");});
/* icon */
let iconDeletedUpdate = `   <span  onclick="SupprimerTache(this)" class="material-symbols-outlined cursor-pointer text-red-500 hover:text-red-400"> delete </span> 
                             <span   onclick="showformEdit(this)"  class="material-symbols-outlined  cursor-pointer  text-yellow-300">border_color</span>`

/*    Recupere les elements  */

let titre = document.getElementById("titre") ; 
let description = document.getElementById("description"); 
let priorite= document.getElementById("priorite") ; 
let statut = document.querySelector('input[name="statut"]:checked');


let titre1 = document.getElementById("titre1") ; 
let description1 = document.getElementById("description1"); 
let priorite1= document.getElementById("priorite1") ; 
let statut1 = document.querySelector('input[name="statut1"]:checked');



let ulTodo = document.getElementById("ulTodo"); 
let ulDoing = document.getElementById("ulDoing"); 
let ulDone = document.getElementById("ulDone"); 



/*    event listener  button Ajout  */
document.getElementById("btnAjoutTache").addEventListener("click" , AjouterTache);



/* Réinitialiser form */
function initForm(){
        titre.value = '';
        description.value = '';
        statut.value = '';
        date.value = '';
        priorite.value = '';
}


/*    function : ajout Tache     */

function AjouterTache(event){
    event.preventDefault();
    id++ ; 

    /*  declaration Objet  */
    const tache = new Object() ;  //  const tache = {}    les deux ecriture sont correcte 
    tache.id = id ; 
    tache.titre = titre.value ; 
    tache.description = description.value  ;
    tache.statut = statut.value ; 
    tache.date = date.value ; 
    tache.priorite = priorite.value ; 

    let li = document.createElement('li'); 
    
        li.setAttribute("id_data" , tache.id)
        li.setAttribute("data_titre", titre.value);
        li.setAttribute("data_description", description.value);
        li.setAttribute("data_statut", statut.value);
        li.setAttribute("data_date", date.value);
        li.setAttribute("data_priorite", priorite.value);


        ulTodo.appendChild(li);
        li.innerHTML=`titre : ${tache.titre} - description :${tache.description} -     <span  onclick="SupprimerTache(this)" class="material-symbols-outlined cursor-pointer text-red-500 hover:text-red-400"> delete </span> 
                             <span   onclick="showformEdit(this)"  class="material-symbols-outlined  cursor-pointer  text-yellow-300">border_color</span>`
 ; 
    
        initForm(); 
}


/*    function : Supprime Tache     */

function SupprimerTache(element){
    let li = element.parentNode;
    li.remove();
}

/*    function : modifier Tache     */
function showformEdit(element){
    let li = element.parentNode;
    document.getElementById("modalFormEdit").classList.remove("hidden");

    console.log(li.getAttribute("data_titre"));
    titre1.value = li.getAttribute("data_titre");
    description1.value= li.getAttribute("data_description")
    priorite1.value= li.getAttribute("data_priorite")
    statut1.value= li.getAttribute("data_statut")

    document.getElementById("btnEditTache").onclick = function(event) {
        event.preventDefault();
        console.log( li)    // m affiche   log fuction : [object HTMLLIElement]
        ModifierTache(li);
    };
}

function ModifierTache(li){

    li.setAttribute("data_titre", titre1.value);
    li.setAttribute("data_description", description1.value);
    li.setAttribute("data_statut", statut1.value);
    li.setAttribute("data_date", date1.value);
    li.setAttribute("data_priorite", priorite1.value);
    console.log("log : " + li) ; 
    li.innerHTML=`titre : ${titre1.value} - description :  ${description1.value} -     <span  onclick="SupprimerTache(this)" class="material-symbols-outlined cursor-pointer text-red-500 hover:text-red-400"> delete </span> 
                             <span   onclick="showformEdit(this)"  class="material-symbols-outlined  cursor-pointer  text-yellow-300">border_color</span>`

}
