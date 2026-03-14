
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('mobile-menu').classList.toggle('open');
}

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobile-menu').classList.remove('open');
    const map = { 'page-catalog': 'catalog', 'page-sobre': 'sobre', 'page-contato': 'contato' };
    const key = map[id];
    ['catalog', 'sobre', 'contato'].forEach(k => {
        document.getElementById('link-' + k)?.classList.toggle('active', k === key);
        document.getElementById('mob-' + k)?.classList.toggle('active', k === key);
    });
}

function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const orig = btn.textContent;
    btn.textContent = 'Mensagem enviada ✓';
    btn.style.borderColor = 'var(--gold)';
    btn.style.color = 'var(--gold)';
    setTimeout(() => {
        btn.textContent = orig;
        btn.style.borderColor = '';
        btn.style.color = '';
        e.target.reset();
    }, 3000);
}