document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      siteName: "My Name",
      heroTitle: "Hi, I'm [Your Name]",
      heroDesc: "I build things for the web.",
      btnProjects: "Projects",
      btnContact: "Contact",
      projectsTitle: "Projects",
      projectName: "Sample Project",
      projectDesc: "A brief description.",
      contactTitle: "Contact",
      footerText: "© 2026 Your Name"
    },
    zh: {
      siteName: "我的名字",
      heroTitle: "你好，我是 [你的名字]",
      heroDesc: "我构建网页项目。",
      btnProjects: "项目",
      btnContact: "联系",
      projectsTitle: "项目",
      projectName: "示例项目",
      projectDesc: "简短描述。",
      contactTitle: "联系我",
      footerText: "© 2026 你的名字"
    }
  };

  const btn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("lang") || "en";

  function updateLang(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = translations[lang][el.getAttribute("data-i18n")];
    });
    btn.textContent = lang === "en" ? "🇨🇳 中文" : "🇺🇸 English";
    currentLang = lang;
  }

  btn.addEventListener("click", () => {
    updateLang(currentLang === "en" ? "zh" : "en");
  });

  updateLang(currentLang);
});
