const JSON_SERVER_URL = 'http://localhost:4000';

async function saveInscription(inscriptionData) {
    try {
        const response = await axios.post(`${JSON_SERVER_URL}/inscriptions`, inscriptionData);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Erreur:', error);
        return { success: false, error: error.message };
    }
}

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
      let firstName =document.getElementById ("firstName")
      let lastName =document.getElementById ("lastName")
      let email =document.getElementById ("email")
      let phone =document.getElementById ("phone")
      let dateNaissance =document.getElementById ("dateNaissance")
      let genre =document.getElementById ("genre")
      let ville =document.getElementById ("ville")
      let niveauEtude =document.getElementById ("niveauEtude")
      let message =document.getElementById ("message")
        

    const inscriptionData = {
        prenom : firstName.value,
        nom: lastName.value,
        email:email.value,
        telephone: phone.value,
        dateNaissance: dateNaissance.value,
        genre: genre.value,
        ville: ville.value,
        situationActuelle: document.getElementById('situationActuelle').value,
        niveauEtude: niveauEtude.value,
        demande: document.getElementById('demande').value,
        message: message.value    
    };
    

    const result = await saveInscription(inscriptionData);
    
    if (result.success) {
        alert('Inscription sauvegardée avec succès !');
        document.getElementById('contactForm').reset();
    } else {
        alert('Erreur lors de la sauvegarde !');
    }
});

console.log('Situation actuelle:', situationActuelle.value);
console.log('Demande:', demande.value);


document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
         
            this.classList.toggle('active');
        });
    }
});