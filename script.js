const translations = {
  en: {
    siteName: "Johnny Chen",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    heroGreeting: "Hello, I'm Johnny Chen",
    heroSubtitle: "Web Developer • Designer • Creator",
    aboutTitle: "About Me",
    aboutText: "This is a short introduction about myself.",
    projectsTitle: "Projects",
    projectTitle: "Project Title",
    projectDesc: "Short project description here.",
    contactTitle: "Contact",
    githubLink: "GitHub: github.com/yourhandle",
    footerText: "© 2026 Johnny Chen. All rights reserved.",
  },
  zh: {
    siteName: "陈胜韬",
    navAbout: "关于",
    navProjects: "项目",
    navContact: "联系",
    heroGreeting: "你好，我是 陈胜韬",
    heroSubtitle: "网页开发者 • 设计师 • 创作者",
    aboutTitle: "关于我",
    aboutText: "这是我的简短介绍。",
    projectsTitle: "项目展示",
    projectTitle: "项目标题",
    projectDesc: "这里是项目简介。",
    contactTitle: "联系我",
    githubLink: "GitHub：github.com/yourhandle",
    footerText: "© 2026 陈胜韬。保留所有权利。",
  }
};

let currentLang = localStorage.getItem("lang") || 'en';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.getElementById("lang-toggle").textContent =
    lang === "en" ? "🇨🇳 中文" : "🇺🇸 English";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = currentLang === "en" ? "zh" : "en";
  updateLanguage(newLang);
});

window.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
});
