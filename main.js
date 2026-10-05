//Pour l'API il faut regarder ce site intéressant qui propose un essai gratuit de 30 jours (éventuellement utiliser des fausses adresses pour récupérer une clé tout les 30 jours) url : https://marketplace.sportradar.com/products/652fcdeb8805049528df13b5 

//L'api SportRadar en trial semble limitée a 1000 requêtes par jour partagé entre tout les utilisateurs de l'API, autant dire que c'est mort.
// async function chargerDonnees() {
//     try {
//         const reponse = await fetch('https://api.sportradar.com/rugby-union/trial/v3/en/competitions/sr%3Acompetition%3A302/info.json', options)
//         const donnees = await reponse.json();
//         console.log(donnees);
//     }
//     catch (erreur){
//         console.log(`Une erreur est survenue : + ${erreur}`);
//     }
// }


// ---- Menu burger (mobile) ----
function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav1');

    // Si la page n'a pas de burger (ou si on est en desktop), on ne fait rien
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
    });

    // Ferme le menu quand on clique sur un lien
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    // Bonus : ferme le menu si on repasse en desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) {
            nav.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
      initBurger();
});