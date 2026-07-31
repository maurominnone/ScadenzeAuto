// Auto Scadenze - logica demo

const datiDemo = {
  "bmw-x1": {
    nome: "BMW X1",
    scadenze: [
      { tipo: "Revisione", data: "2026-10-14", costo: "€ 65", stato: "In arrivo" },
      { tipo: "Bollo", data: "2026-09-01", costo: "€ 210", stato: "Da pagare" },
      { tipo: "RC Auto", data: "2027-05-07", costo: "€ 480", stato: "Attiva" }
    ]
  },
  "fiat-500e": {
    nome: "Fiat 500e",
    scadenze: [
      { tipo: "RC Auto", data: "2027-02-18", costo: "€ 390", stato: "Attiva" },
      { tipo: "Bollo", data: "2026-11-20", costo: "€ 0 (elettrica)", stato: "Esente" }
    ]
  }
};

function aggiornaPannello(autoKey) {
  const auto = datiDemo[autoKey];
  if (!auto) return;

  const scadenza = auto.scadenze[0];

  const titolo = document.querySelector("[data-detail-titolo]");
  const data = document.querySelector("[data-detail-data]");
  const costo = document.querySelector("[data-detail-costo]");
  const stato = document.querySelector("[data-detail-stato]");

  if (titolo) titolo.textContent = auto.nome + " — " + scadenza.tipo;
  if (data) data.textContent = scadenza.data;
  if (costo) costo.textContent = scadenza.costo;
  if (stato) stato.textContent = scadenza.stato;
}

document.addEventListener("DOMContentLoaded", () => {
  const bottoniAuto = document.querySelectorAll("[data-auto-select]");

  bottoniAuto.forEach((btn) => {
    btn.addEventListener("click", () => {
      bottoniAuto.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const autoKey = btn.getAttribute("data-auto-select");
      aggiornaPannello(autoKey);
    });
  });

  // Inizializza con la prima auto se presente
  if (bottoniAuto.length > 0) {
    const primaKey = bottoniAuto[0].getAttribute("data-auto-select");
    aggiornaPannello(primaKey);
  }
});
