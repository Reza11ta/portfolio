document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const contentSections = document.querySelectorAll(".content-section");

  document.documentElement.lang = "fa";
  document.documentElement.dir = "rtl";

  function showSection(sectionId) {
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");

      if (sectionId === "about-content") {
        resetSkillBars();
        setTimeout(() => {
          animateSkillBars();
        }, 300);
      }
    }
  }

  function resetSkillBars() {
    const skillFills = document.querySelectorAll(".skill-fill");
    skillFills.forEach((fill) => {
      fill.classList.remove("animate");
      fill.style.width = "0%";
    });
  }

  function animateSkillBars() {
    const skillFills = document.querySelectorAll(".skill-fill");

    skillFills.forEach((fill, index) => {
      const targetWidth = fill.getAttribute("data-width");

      if (targetWidth) {
        setTimeout(() => {
          fill.style.setProperty("--target-width", targetWidth);
          fill.classList.add("animate");
        }, index * 150);
      }
    });
  }

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");

      const sectionId = this.getAttribute("data-section");
      if (sectionId) {
        showSection(sectionId);
      }
    });
  });

  window.showContactSection = function () {
    navItems.forEach((nav) => nav.classList.remove("active"));
    const contactNav = document.querySelector(
      '[data-section="contact-content"]'
    );
    if (contactNav) {
      contactNav.classList.add("active");
    }
    showSection("contact-content");
  };
});
