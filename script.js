const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
}

function afficherDossier(dossier) {
    console.log(dossier.nom);
}


function afficherDossierIteratif(dossier) {
  
  console.log(dossier.nom);

  if (dossier.contenu) {
    for (let element of dossier.contenu) {
      afficherDossierIteratif(element);
    }
  }
}

function afficherDossierRecursif(dossier, loopIndex) {

  if (loopIndex === dossier.contenu.length) {
    return
  }
  if (dossier.contenu[loopIndex].contenu) {
    console.log(dossier.contenu[loopIndex].nom);
    afficherDossierRecursif(dossier.contenu[loopIndex], 0);
  } else {
    console.log(dossier.contenu[loopIndex].nom);
  }
  afficherDossierRecursif(dossier, loopIndex + 1);

}

afficherDossier(dossierPrincipal);
afficherDossierIteratif(dossierPrincipal);
afficherDossierRecursif(dossierPrincipal,0);