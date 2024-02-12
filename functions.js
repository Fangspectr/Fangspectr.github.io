
document.getElementById('modeToggle').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        this.textContent = '💡';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        this.textContent = '🌙';
    }
});