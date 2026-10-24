(() => {
  const menuToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const closeMenu = () => {
    if (!nav || !menuToggle) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menüyü aç");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const rows = [
        "Merhaba, Mersin Transfer VIP için rezervasyon talebim var.",
        "Ad: " + (form.get("name") || "Belirtilmedi"),
        "Tarih: " + form.get("date"),
        "Saat: " + form.get("time"),
        "Araç tercihi: " + (form.get("vehicle") || "Henüz emin değilim"),
        "Kalkış: " + form.get("from"),
        "Varış: " + form.get("to"),
        "Not: " + (form.get("note") || "Yok")
      ];
      const url = "https://wa.me/905462604432?text=" + encodeURIComponent(rows.join("\n"));
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();