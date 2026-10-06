//Constante ou je garde les logos des équipes.
const logosShort = [
    {
        team: 'Stade Rochelais',
        short: 'SR',
        Logo: './src/img/Logos/Logo-SR.png'
    },
    {
        team: 'Aviron Bayonnais',
        short: 'AB',
        Logo: './src/img/Logos/Logo-AB.svg'
    },
    {
        team: 'ASM Clermont',
        short: 'ASM',
        Logo: './src/img/Logos/Logo-ASM.png'
    },
    {
        team: 'Castres Olympique',
        short: 'CO',
        Logo: './src/img/Logos/Logo-CO.webp'
    },
    {
        team: 'LOU Rugby',
        short: 'LOU',
        Logo: './src/img/Logos/Logo-LOU.webp'
    },
    {
        team: 'Montpellier Hérault Rugby',
        short: 'MHR',
        Logo: './src/img/Logos/Logo-MHR.png'
    },
    {
        team: 'Racing 92',
        short: 'R92',
        Logo: './src/img/Logos/Logo-R92.png'
    },
    {
        team: 'RC Toulon',
        short: 'RCT',
        Logo: './src/img/Logos/Logo-RCT.png'
    },
    {
        team: 'RC Vannes',
        short: 'RCV',
        Logo: './src/img/Logos/Logo-RCV.svg'
    },
    {
        team: 'Stade Français Paris',
        short: 'SF',
        Logo: './src/img/Logos/Logo-SF.png'
    },
    {
        team: 'Section Paloise',
        short: 'SP',
        Logo: './src/img/Logos/Logo-SP.png'
    },
    {
        team: 'Stade Toulousain',
        short: 'ST',
        Logo: './src/img/Logos/Logo-ST.png'
    },
    {
        team: 'Union Bordeaux-Bègles',
        short: 'UBB',
        Logo: './src/img/Logos/Logo-UBB.png'
    },
    {
        team: 'USA Perpignan',
        short: 'USAP',
        Logo: './src/img/Logos/Logo-USAP.png'
    }
];

//Fonction pour récupérer le logo d'une équipe
function getLogo(teamName) {
    const logo = logosShort.find(logo => logo.team === teamName);
    //Ligne d'en deçous me permet d'afficher un logo générique top 14 au cas ou le logo de l'équipe ne marche pas.
    return logo ? logo.Logo : './src/img/Logos/Logo-top14.webp';
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

document.addEventListener('DOMContentLoaded', () => {
    displayMatches(matchesJ3);
});