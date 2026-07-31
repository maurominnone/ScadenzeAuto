
# Auto Scadenze — web app mockup

Una web app statica pensata per avere in un unico cruscotto le scadenze ricorrenti legate alle auto (bollo, revisioni, assicurazioni, assistenza, gomme), con viste pensate per uso da mobile.

## Contenuti del pacchetto

- `index.html` — mockup completo della dashboard
  - vista principale con KPI (scadenze entro 30 giorni, spesa stimata 90 giorni, stato sincronizzazione calendario);
  - timeline puntuale a 12 mesi per più auto (marker per bollo, revisione, assicurazione, gomme);
  - pannello laterale di dettaglio evento (data, costo, stato, alert, azioni rapide);
  - sezione "Periodi di validità" tipo Gantt con barre orizzontali per le coperture (RC auto e assistenza);
  - variante mobile-first: su schermi piccoli le timeline diventano liste verticali con istogrammi orizzontali leggibili.

## Obiettivo del progetto

Questo mockup serve come base per una web app che:

- mostra in modo chiaro tutte le scadenze ricorrenti per ciascuna auto;
- permette di vedere come si incastrano nel tempo i periodi di validità delle assicurazioni e delle coperture extra;
- si integra con un calendario dedicato "Auto & Scadenze" condivisibile;
- è ottimizzata per uso da mobile (layout a colonna singola, pochi grafici per vista, testo leggibile).

## Come usare questo repo

### 1. Pubblicazione con GitHub Pages

1. Crea un nuovo repository su GitHub (ad es. `auto-scadenze`).
2. Carica i file di questo pacchetto (almeno `index.html` e `README.md`).
3. Assicurati che il branch principale sia `main` (o annota quello che usi).
4. Vai su **Settings → Pages** del repository.
5. In "Build and deployment" scegli **Deploy from a branch**.
6. Seleziona il branch (`main`) e come cartella `/root`.
7. Salva e attendi qualche minuto: il sito sarà disponibile a un URL del tipo:
   `https://<username>.github.io/auto-scadenze/`.

### 2. Utilizzo come web app mobile

- Apri l’URL GitHub Pages dal tuo smartphone.
- Aggiungi la pagina alla schermata Home (su iOS/Android) per usarla come pseudo-app.
- Sfrutta le viste già presenti:
  - KPI iniziali per capire rapidamente cosa è urgente;
  - timeline a 12 mesi per scadenze singole;
  - vista tipo Gantt per periodi di validità;
  - pannello dettaglio evento per azioni operative.

## Struttura futura suggerita del repository

Per evolvere da mockup statico a mini-app con dati reali e automazioni, si può adottare una struttura minimale:

- `index.html` — dashboard principale e UI;
- `data/` — eventuali file JSON con dati delle auto e delle scadenze;
  - `data/autos.json` — elenco auto, targhe, note;
  - `data/scadenze.json` — scadenze ricorrenti (tipo, auto, date, importo, stato, periodi di validità);
- `scripts/` — eventuali script JS per leggere da Google Sheets o altri servizi;
  - `scripts/app.js` — logica client per caricare i dati e popolare le viste;

Questa struttura rende più semplice in futuro collegare la web app a:

- Google Sheets come fonte dati (scadenze, importi, note);
- un calendario dedicato (Google Calendar / altro) per la creazione automatica di eventi;
- servizi esterni di notifiche per gli alert (push, email, ecc.).

## Naming di base per i dati (idea)

Per mantenere tutto chiaro quando aggiungerai i dati reali, un naming semplice può essere:

- Auto (esempio `autos.json`):
  - `id`: identificativo interno (es. `bmw-x1`);
  - `targa`: testo;
  - `modello`: descrizione auto;

- Scadenze (esempio `scadenze.json`):
  - `id`: identificativo scadenza (es. `bmw-x1-rc-2026`);
  - `autoId`: riferito all’`id` dell’auto;
  - `tipo`: `bollo`, `assicurazione`, `revisione`, `gomme`, `assistenza`, ecc.;
  - `data`: data di scadenza (ISO `YYYY-MM-DD`);
  - `inizioPeriodo`: inizio copertura, se rilevante;
  - `finePeriodo`: fine copertura, se rilevante;
  - `importoStimato`: numero;
  - `stato`: `attiva`, `in_scadenza`, `da_rinnovare`, `completata`.

Queste chiavi sono pensate per essere lette facilmente da script JS che popolano sia la timeline puntuale sia la vista tipo Gantt.

## Prossimi passi possibili

- Collegare la dashboard a file JSON reali (da `data/` o da un endpoint generato da Google Sheets).
- Implementare la logica di filtraggio per auto e per tipo di scadenza.
- Aggiungere pulsanti "Segna completata", "Duplica anno prossimo" e "Invia al calendario" con reale integrazione.
- Ottimizzare ulteriormente la versione mobile con bottom sheet per dettaglio evento.

Per ora il mockup è pensato per essere immediatamente pubblicabile come static site via GitHub Pages e usato come riferimento visivo per le evoluzioni successive.
