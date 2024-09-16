new Typewriter('#typewriter', {
    strings: ['Vos documents', 'Notre Metier', 'Votre partenaire pour la gestion d\'information', 'Ce site est opimise pour Ordinateurs'],
    autoStart: true,
    loop: true,
    cursor: '|*'
});
console.log('Marche Aussi');

// COPYRIGHT
const year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year