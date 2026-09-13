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


//Constante ou je garde les logos des équipes.
const logosShort = [
    {
        team: 'Stade Rochelais',
        short: 'SR',
        Logo: 'Images/Logos/Logo-SR.png'
    },
    {
        team: 'Aviron Bayonnais',
        short: 'AB',
        Logo: 'Images/Logos/Logo-AB.svg'
    },
    {
        team: 'ASM Clermont',
        short: 'ASM',
        Logo: 'Images/Logos/Logo-ASM.png'
    },
    {
        team: 'Castres Olympique',
        short: 'CO',
        Logo: 'Images/Logos/Logo-CO.webp'
    },
    {
        team: 'LOU Rugby',
        short: 'LOU',
        Logo: 'Images/Logos/Logo-LOU.webp'
    },
    {
        team: 'Montpellier Hérault Rugby',
        short: 'MHR',
        Logo: 'Images/Logos/Logo-MHR.png'
    },
    {
        team: 'Racing 92',
        short: 'R92',
        Logo: 'Images/Logos/Logo-R92.png'
    },
    {
        team: 'RC Toulon',
        short: 'RCT',
        Logo: 'Images/Logos/Logo-RCT.png'
    },
    {
        team: 'RC Vannes',
        short: 'RCV',
        Logo: 'Images/Logos/Logo-RCV.svg'
    },
    {
        team: 'Stade Français Paris',
        short: 'SF',
        Logo: 'Images/Logos/Logo-SF.png'
    },
    {
        team: 'Section Paloise',
        short: 'SP',
        Logo: 'Images/Logos/Logo-SP.png'
    },
    {
        team: 'Stade Toulousain',
        short: 'ST',
        Logo: 'Images/Logos/Logo-ST.png'
    },
    {
        team: 'Union Bordeaux-Bègles',
        short: 'UBB',
        Logo: 'Images/Logos/Logo-UBB.png'
    },
    {
        team: 'USA Perpignan',
        short: 'USAP',
        Logo: 'Images/Logos/Logo-USAP.png'
    }
];

//Fonction pour récupérer le logo d'une équipe
function getLogo(teamName) {
    const logo = logosShort.find(logo => logo.team === teamName);
    //Ligne d'en deçous me pertmet d'afficher un logo générique top 14 au cas ou le logo de l'équipe ne marche pas.
    return logo ? logo.Logo : 'Images/Logos/Logo-top14.webp';
}

//Fonction pour récupérer l'abréviation d'une équipe
function getShort(teamName) {
    const short = logosShort.find(short => short.team === teamName);
    return short ? short.short : 'N/A';
}


const matchesJ3 = [
  {
    date: 'Samedi 19/09',
    time: '14h30',
    homeTeam: getShort('Castres Olympique'),
    awayTeam: getShort('RC Toulon'),
    homeLogo: getLogo('Castres Olympique'),
    awayLogo: getLogo('RC Toulon')
  },
  {
    date: 'Samedi 19/09',
    time: '16h35',
    homeTeam: getShort('Aviron Bayonnais'),
    awayTeam: getShort('ASM Clermont'),
    homeLogo: getLogo('Aviron Bayonnais'),
    awayLogo: getLogo('ASM Clermont')
  },
  {
    date: 'Samedi 19/09',
    time: '16h35',
    homeTeam: getShort('Stade Rochelais'),
    awayTeam: getShort('Racing 92'),
    homeLogo: getLogo('Stade Rochelais'),
    awayLogo: getLogo('Racing 92')
  },
  {
    date: 'Samedi 19/09',
    time: '16h35',
    homeTeam: getShort('LOU Rugby'),
    awayTeam: getShort('Section Paloise'),
    homeLogo: getLogo('LOU Rugby'),
    awayLogo: getLogo('Section Paloise')
  },
  {
    date: 'Samedi 19/09',
    time: '16h35',
    homeTeam: getShort('Montpellier Hérault Rugby'),
    awayTeam: getShort('USA Perpignan'),
    homeLogo: getLogo('Montpellier Hérault Rugby'),
    awayLogo: getLogo('USA Perpignan')
  },
  {
    date: 'Samedi 19/09',
    time: '21h00',
    homeTeam: getShort('RC Vannes'),
    awayTeam: getShort('Stade Toulousain'),
    homeLogo: getLogo('RC Vannes'),
    awayLogo: getLogo('Stade Toulousain')
  },
  {
    date: 'Dimanche 20/09',
    time: '21h05',
    homeTeam: getShort('Union Bordeaux-Bègles'),
    awayTeam: getShort('Stade Français Paris'),
    homeLogo: getLogo('Union Bordeaux-Bègles'),
    awayLogo: getLogo('Stade Français Paris')
  },

];

//J'utilise une fonction avec un tableau en paramètre pour afficher les matchs avec la structure de carte imaginée en HTML.
function displayMatches(dayDatab) {
  const container = document.getElementById('matchCards');

  // Vide le conteneur de ce qui pourrait déjà être présent.
  container.innerHTML = '';

  // Pour chaque match, crée une carte
  dayDatab.forEach(match => {
    const card = document.createElement('div');
    card.className = 'cards';

    card.innerHTML = `
      <div class="topCard">
        <h4>${match.date}</h4>
      </div>
      <div class="bodyCard">
        <div class="home-date-away">
          <i class="bi bi-house"></i>
          <h5>${match.time}</h5>
          <i class="bi bi-airplane"></i>
        </div>
        <div class="match-teams">
          <div class="home-team">
            <h6>${match.homeTeam}</h6>
            <img src="${match.homeLogo}" alt="Logo ${match.homeTeam}">
          </div>
          <div class="away-team">
            <h6>${match.awayTeam}</h6>
            <img src="${match.awayLogo}" alt="Logo ${match.awayTeam}">
          </div>
        </div>
      </div>
    `;

    // Ajoute la carte au conteneur
    container.appendChild(card);
  });
}

// ===== CHARGEMENT INITIAL =====
// Affiche les matchs quand la page est chargée
document.addEventListener('DOMContentLoaded', displayMatches(matchesJ3));
