document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-card').forEach(card => {
        card.querySelector('.faq-header').addEventListener('click', () => card.classList.toggle('open'));
    });
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            document.querySelectorAll('.faq-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(q) ? 'block' : 'none';
            });
        });
    }
});
