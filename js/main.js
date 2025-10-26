const btnDarkMode = document.querySelector(".dark-mode-btn");

// якщо кнопки немає — вийти, щоб не було помилок
if (!btnDarkMode) {
    console.warn('Кнопка .dark-mode-btn не знайдена');
    throw new Error('Кнопка .dark-mode-btn не знайдена');
}

// helper — застосувати темний режим
function enableDark() {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
}

function disableDark() {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
}

// 1) Перевірка збереженого вибору в localStorage (першочергово)
const saved = localStorage.getItem("darkMode");
if (saved === "dark") {
    enableDark();
} else if (saved === "light") {
    disableDark();
} else {
    // 2) Якщо збереження немає — беремо системні налаштування (якщо доступні)
    if (window.matchMedia) {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        if (mq.matches) {
            enableDark();
        } else {
            disableDark();
        }

        // 3) Слухаємо зміни системної теми і оновлюємо (якщо користувач не зберіг свій вибір)
        mq.addEventListener('change', (event) => {
            // тільки якщо користувач не зберіг вручну (тобто saved === null)
            if (localStorage.getItem("darkMode") == null) {
                if (event.matches) {
                    enableDark();
                } else {
                    disableDark();
                }
            }
        });
    }
}

// 4) Перемикання по кнопці
btnDarkMode.onclick = function () {
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        btnDarkMode.classList.add("dark-mode-btn--active");
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        localStorage.setItem('darkMode', 'light');
    }
};










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







