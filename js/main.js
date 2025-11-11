document.addEventListener("DOMContentLoaded", () => {
  if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver не підтримується браузером');
      return;
  }

  const aboutSections = document.querySelectorAll('.fade-in');
  if (!aboutSections.length) {
      console.warn('Елементи .fade-in не знайдено');
      return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }, delay);
      }
    });
  }, {threshold: 0.2});
  
  aboutSections.forEach(section => observer.observe(section));
});
  

  /* ===== Dark Mode ===== */
  const btnDarkMode = document.querySelector(".dark-mode-btn");

  if (btnDarkMode) {

    const enableDark = () => {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    };

    const disableDark = () => {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    };

    // Перевірка localStorage
    const saved = localStorage.getItem("darkMode");
    if (saved === "dark") enableDark();
    else if (saved === "light") disableDark();
    else if (window.matchMedia) {
      // Беремо системні налаштування
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.matches) enableDark();
      else disableDark();

      // Слухаємо зміни системної теми
      mq.addEventListener('change', (event) => {
        if (localStorage.getItem("darkMode") == null) {
          if (event.matches) enableDark();
          else disableDark();
        }
      });
    }

    // Перемикання кнопкою
    btnDarkMode.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      if (isDark) btnDarkMode.classList.add("dark-mode-btn--active");
      else btnDarkMode.classList.remove("dark-mode-btn--active");
      localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
    });

  }

;



const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

projects.forEach(project => {
    observer.observe(project);
});




                    // Початковий код

/*const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Перевірка темної теми на системному рівні
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}
// 2. Перевірка темної теми в localStorad
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "liht") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}
// 3. Якщо міняються системні налаштування то міняємо тему
    window.matchMedia("(prefers-color-scheme: dark").addEventListener('change', (event) => {
    const newColorScheme= event.matches ? "dark" :'liht';


    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark"); 
    }
})

// 4. Включення нічного налаштування по кнопці 
    btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');


    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "light");
    }
}
    */







