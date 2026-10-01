// Fetch and render the top demons on load
async function loadDemonlist() {
    const container = document.getElementById('demonlist-container');
    
    try {
        const response = await fetch('https://pointercrate.com/api/v2/demons/listed/?limit=10');
        if (!response.ok) throw new Error('Failed to load list');
        
        const demons = await response.json();
        
        // Clear loading message
        container.innerHTML = '';

        // Create list container
        const listElement = document.createElement('ul');
        listElement.className = 'demon-list';

        demons.forEach(demon => {
            const listItem = document.createElement('li');
            listItem.className = 'demon-item';
            
            listItem.innerHTML = `
                <span class="demon-rank">#${demon.position}</span>
                <span class="demon-name">${demon.name}</span>
                <span class="demon-publisher">by ${demon.publisher.name}</span>
            `;

            listElement.appendChild(listItem);
        });

        container.appendChild(listElement);
    } catch (error) {
        console.error('Error fetching demonlist:', error);
        container.innerHTML = '<p class="error-text">Failed to load Demonlist.</p>';
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadDemonlist);