// Auto Scadenze - logica demo (si aggancia al markup esistente in index.html)

document.addEventListener("DOMContentLoaded", () => {
  const datiDemo = {
    0: {
      nome: "BMW X1 xDrive25e",
      titolo: "Revisione BMW X1",
      badge: "Scade tra 18 giorni",
      data: "12 ottobre 2026",
      centro: "Officina autorizzata",
      costo: "€ 79",
      stato: "Da prenotare"
    },
    1: {
      nome: "Fiat 500e",
      titolo: "RC Auto Fiat 500e",
      badge: "Rinnovo il 18 febbraio",
      data: "18 febbraio 2027",
      centro: "Compagnia assicurativa",
      costo: "€ 390",
      stato: "Attiva"
    }
  };

  const carCards = document.querySelectorAll(".car-card");
  const detailPanel = document.querySelector(".detail-panel");
  if (!detailPanel) return;

  const detailTitle = detailPanel.querySelector(".section-title");
  const detailBadge = detailPanel.querySelector(".pill-urgent, .pill-soon");
  const detailFields = detailPanel.querySelectorAll(".detail-grid strong");

  function aggiornaPannello(index) {
    const info = datiDemo[index];
    if (!info) return;

    if (detailTitle) detailTitle.textContent = info.titolo;
    if (detailBadge) detailBadge.lastChild.textContent = info.badge;

    if (detailFields && detailFields.length >= 4) {
      detailFields[0].textContent = info.data;
      detailFields[1].textContent = info.centro;
      detailFields[2].textContent = info.costo;
      detailFields[3].textContent = info.stato;
    }
  }

  carCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      carCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      aggiornaPannello(index);
    });
  });

  // Toggle tema chiaro/scuro (se presente il bottone)
  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");
      html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
    });
  }

  // Navigazione tab mobile (solo visuale, evidenzia il pulsante attivo)
  const mobileTabs = document.querySelectorAll(".mobile-tabs button");
  mobileTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      mobileTabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
