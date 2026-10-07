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




/*3. Synchronisation de flux de calendrier iCal / ICSUne alternative légère et gratuite consiste à importer le flux de calendrier au format .ics puis à le parser côté backend ou frontend.Méthode : La LNR (Ligue Nationale de Rugby) ainsi que des services tiers (comme RugbyFixture) proposent des flux .ics synchronisés pour l'agenda des matchs.   Comment l'exploiter :Récupère le lien du fichier .ics de la saison.Utilise une librairie JavaScript (ex. ical.js) ou PHP (icalparser) pour extraire les événements (date, heure, affiches).Affiche les données sous forme de calendrier sur ton site.Inconvénients : Ne fournit que les dates/heures et les intitulés des matchs, sans le suivi des scores en direct ni les statistiques détaillées.


1. Comment fonctionne un flux iCal / ICS ?

Un fichier .ics est un format standardisé de calendrier (RFC 5545). Il contient une suite de blocs de texte décrivant des événements (VEVENT) :
Plaintext

BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rugby Fixtures//Top 14 2025-2026//FR
BEGIN:VEVENT
SUMMARY:Stade Toulousain vs RC Toulon
DTSTART:20251018T190500Z
DTEND:20251018T210000Z
LOCATION:Stade Ernest-Wallon, Toulouse
DESCRIPTION:Journée 7 - Top 14
END:VEVENT
END:VCALENDAR

2. Le workflow technique de A à Z

[ Flux .ics externe ] ──(1. Fetch / Cache)──> [ Ton serveur Backend ]
                                                       │
                                              (2. Parsing ICS)
                                                       │
                                              (3. Format JSON)
                                                       │
[ Page Web (Frontend) ] <──(4. API Interne)────────────┘

Étape 1 : Obtenir le lien du flux ICS

    Les clubs, la LNR ou des services spécialisés (comme RugbyFixture ou calfeed) proposent des liens publics d'abonnement au calendrier Top 14.

    Ce lien ne télécharge pas un fichier statique une seule fois : c'est un lien URL actif mis à jour par l'émetteur si une rencontre est décalée (ex: reprogrammation TV du samedi au dimanche).

Étape 2 : Récupérer et mettre en cache (Backend recommandé)

    ⚠️ Attention aux requêtes directes côté navigateur (CORS) : La plupart des fournisseurs d'ICS bloquent les appels direct du navigateur (fetch depuis le JS client). Il vaut mieux faire la requête depuis ton propre serveur / backend (Node.js, PHP, Python...).

    Tu télécharges le fichier texte ICS à intervalles réguliers (ex: 1 fois par jour ou toutes me 6 heures).

    Ne fais pas un fetch du fichier .ics à chaque visiteur : cela ralentirait ton site et risquerait de te faire bannir par l'hébergeur du flux.

Étape 3 : Parser le contenu texte en données exploitables

Une fois le texte brut téléchargé, il faut le transformer en objet utilisable (JSON / Array).

    En JavaScript / Node.js : librairies node-ical ou ical.js.

    En PHP : librairies Sabre\VObject ou ical-parser.

Étape 4 : Afficher dans l'interface (Frontend)

Une fois converti en JSON, tu peux afficher tes matchs sous forme de :

    Liste chronologique des prochaines rencontres.

    Calendrier interactif (avec une librairie UI comme FullCalendar).

3. Exemple de code minimal (Node.js)

Voici comment parser un fichier ICS en Node.js pour le transformer en JSON propre :
JavaScript

import ical from 'node-ical';

async function getTop14Matches(icsUrl) {
  // 1. Récupération et parsing du fichier ICS
  const events = await ical.async.fromURL(icsUrl);
  
  const matches = [];

  // 2. Parcours des événements
  for (const key in events) {
    const event = events[key];
    if (event.type === 'VEVENT') {
      matches.push({
        match: event.summary,        // ex: "Toulouse - La Rochelle"
        date: event.start,          // Date au format JavaScript Date
        lieu: event.location || 'N/C',
        competition: event.description || ''
      });
    }
  }

  // 3. Tri des matchs du plus récent au plus distant
  return matches.sort((a, b) => a.date - b.date);
}

4. Bilan : Pour et Contre
Avantages 👍	Limites 👎
100 % Gratuit (pas besoin d'abonnement API payant)	Pas de scores en temps réel (seuls les horaires et affiches sont fournis)
Mises à jour automatiques des dates/heures décalées par les diffuseurs TV	Données limitées (pas de compos d'équipes, pas de classement, pas de stats)
Format standard très simple à manipuler	Nécessite souvent un petit serveur proxy pour éviter les soucis de CORS
Mêmes données intégrables dans l'agenda Google/Apple des utilisateurs	Pas d'identifiants officiels d'équipes pour afficher les logos facilement
Tu veux un exemple de code d'intégration complet avec le composant FullCalendar ?
Oui