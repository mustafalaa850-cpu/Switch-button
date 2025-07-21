const toggle = document.getElementById('mode-toggle');

// شغالة من أول ما الصفحة تفتح
document.body.classList.toggle('dark-mode', !toggle.checked);

// كل مرة يتغير الزر
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', !toggle.checked);
});
