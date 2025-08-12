        const JSON_SERVER_URL = 'http://localhost:4000';

 
        document.getElementById('addProgrammeForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const newProgramme = {
                id: Date.now(), 
                titre: formData.get('titre'),
                sousTitre: formData.get('sousTitre'),
                description: formData.get('description'),
                duree: formData.get('duree'),
                competences: formData.get('competences').split(',').map(skill => skill.trim()).filter(skill => skill)
            };

            try {
                await axios.post(`${JSON_SERVER_URL}/programmes`, newProgramme);
                alert('Programme ajouté avec succès !');
                e.target.reset();
                loadProgrammes(); 
            } catch (error) {
                console.error('Error adding programme:', error);
                alert('Erreur lors de l\'ajout du programme !');
            }
        });

   
        function displayProgrammes(programmes) {
            const container = document.getElementById('programmesContainer');
            if (!container) return;
            
            container.innerHTML = programmes.map(p => `
                <div class="programme-card">
                    <div class="programme-header">
                        <div class="programme-icon">${getIconForProgramme(p.titre)}</div>
                        <div class="programme-title">
                            <h3>${p.titre}</h3>
                            <div class="programme-subtitle">${p.sousTitre || 'Formation professionnelle'}</div>
                        </div>
                    </div>
                    <p class="programme-description">${p.description}</p>
                    <div class="programme-duration">⏱️ Durée: ${p.duree}</div>
                    <div class="programme-skills">
                        <h4>Compétences acquises:</h4>
                        <div class="skills-list">${(p.competences || []).map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
                    </div>
                </div>
            `).join('');
        }


        async function loadProgrammes() {
            try {
                const response = await axios.get(`${JSON_SERVER_URL}/programmes`);
                displayProgrammes(response.data);
            } catch (error) {
                console.error('Error loading programmes:', error);
                document.getElementById('programmesContainer').innerHTML = '<p>Erreur lors du chargement des programmes.</p>';
            }
        }

        function getIconForProgramme(titre) {
            const lowerTitre = titre.toLowerCase();
            if (lowerTitre.includes('web') || lowerTitre.includes('développement')) return '💻';
            if (lowerTitre.includes('cyber') || lowerTitre.includes('sécurité')) return '🔐';
            if (lowerTitre.includes('ia') || lowerTitre.includes('intelligence')) return '🤖';
            if (lowerTitre.includes('mobile')) return '📱';
            if (lowerTitre.includes('devops')) return '⚙️';
            return '🚀';
        }


        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });


        document.addEventListener('DOMContentLoaded', loadProgrammes);

       
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