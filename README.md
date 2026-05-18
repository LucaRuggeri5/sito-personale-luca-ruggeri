# Portfolio Professionale - React Junior Developer

Un portfolio web moderno, reattivo e ad alte prestazioni, sviluppato in **React** e ottimizzato con una rigorosa architettura CSS basata su variabili globali per supportare un sistema di **Dark Mode** fluido e automatico (guidato sia dalle preferenze dell'utente che dall'orario locale).

---

## 🚀 Funzionalità Principali

* **Tema Dinamico Intelligente (Light / Dark Mode):**
* Sincronizzazione automatica con l'orario biologico locale dell'utente (passaggio autonomo alla modalità scura nelle ore serali).
* Rilevamento delle preferenze di sistema tramite `prefers-color-scheme`.
* Switcher manuale persistente tramite `localStorage` per rispettare la scelta dell'utente.


* **Architettura CSS a Variabili Centralizzate:** Nessun colore statico nei moduli; ogni componente eredita i colori da un tema globale, garantendo transizioni fluide (`transition: all 0.3s ease`) e manutenzione immediata.
* **Layout Geometrico Sincronizzato:** Griglie responsive bloccate in rapporti strutturati per evitare scompaginamenti visivi su qualsiasi dimensione di schermo.
* **Sfondo Interattivo Canvas:** Un sistema a particelle geometriche leggero integrato nella Hero per enfatizzare l'impronta tecnologica senza impattare sulle performance di caricamento.
* **Performance & Prevenzione Memory Leak:** Pulizia totale degli eventi globali (`window.addEventListener`) all'interno del ciclo di vita dei componenti React (`useEffect`).
* **Reset Intelligente dello Scroll:** Gestione dello scroll asincrono integrata per forzare il posizionamento all'inizio della pagina al refresh, azzerando gli hash dell'URL per evitare salti visivi disordinati.

---

## 📂 Struttura dell'Architettura dei File (Moduli Ottimizzati)

Il progetto è suddiviso in componenti moduli auto-contenuti, ognuno accoppiato al rispettivo file di stile CSS atomico:

```text
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx         # Navigazione hi-tech con controllo del tema e menu mobile
│   │   └── Navbar.css         # Stile della barra superiore, sfocature backdrop-filter
│   ├── Hero/
│   │   ├── Hero.jsx           # Sezione d'impatto con Canvas interattivo e Call to Action
│   │   └── Hero.css           # Gestione tipografica clamp() e posizionamenti assoluti
│   ├── About/
│   │   ├── About.jsx          # Presentazione e griglia delle Competenze Core
│   │   └── About.css          # Box geometrici con micro-interazioni all'hover
│   ├── Projects/
│   │   ├── Projects.jsx       # Vetrina dei progetti con filtraggio dinamico
│   │   └── Projects.css       # Griglie responsive (3xN, 2xN, 1xN) e card squadrate
│   ├── Contact/
│   │   ├── Contact.jsx        # Hub di contatto con link ai canali social personali
│   │   └── Contact.css        # Trama tech mesh di sfondo e indicatori angolari attivi
│   ├── Footer/
│   │   ├── Footer.jsx         # Chiusura del sito con info rapide e copyright
│   │   └── Footer.css         # Layout ardesia invertibile ad alto contrasto
│   └── ScrollToTop/
│       ├── ScrollToTop.jsx    # Pulsante back-to-top con reset dello scroll globale
│       └── ScrollToTop.css    # Posizionamento fisso e ottimizzazione touch mobile
├── index.css                  # Definizione dei temi (:root e [data-theme="dark"])
└── App.jsx                    # Punto di ingresso, coordinamento stati e logica orario

```

---

## 🛠️ Stack Tecnologico

* **Core:** React (Functional Components, Hooks)
* **Styling:** CSS3 Puro (Custom Properties, Flexbox, CSS Grid, Media Queries avanzate, `@support`)
* **Animations:** Transizioni cubiche native (`cubic-bezier(0.16, 1, 0.3, 1)`)
* **Icons:** SVG Vettoriali nativi ad alto contrasto

---

## 🎨 Sistema di Colorazione Dinamico (Variabili CSS)

I fogli di stile estraggono i valori cromatici direttamente dal file `index.css`, che mappa i seguenti token sia in modalità chiara che scura:

* `var(--bg-color)`: Sfondo primario dell'applicazione.
* `var(--text-color)`: Colore del testo principale e dei titoli ad alto contrasto.
* `var(--panel-bg)`: Sfondo dei blocchi alternati per spezzare il ritmo visivo.
* `var(--border-color)`: Linee di separazione e contorni geometrici delle card.
* `var(--text-muted)`: Testo secondario, descrizioni e sottotitoli.

---

## 🔧 Installazione e Sviluppo Locale

Per clonare il repository ed eseguire il progetto in locale, segui questi passaggi:

1. **Clona il repository:**
```bash
git clone https://github.com/LucaRuggeri5/portfolio.git
cd portfolio

```


2. **Installa le dipendenze:**
```bash
npm install

```


3. **Avvia il server di sviluppo:**
```bash
npm run dev

```


*Il sito sarà accessibile localmente all'indirizzo mostrato nel terminale (solitamente `http://localhost:5173`).*
4. **Compila il progetto per la produzione:**
```bash
npm run build

```


*Genera la cartella di build ottimizzata pronta per l'hosting (Vercel, Netlify, GitHub Pages).*

---

## 📝 Note di Rilascio & Ottimizzazione

Tutti i componenti forniti in questa versione finale sono stati ripuliti da codice ridondante e refactorizzati per supportare l'estensione dei temi senza richiedere modifiche ai file `.jsx`. Le interfacce responsive sono strutturate su 4 step di breakpoint dedicati per garantire una stabilità visiva totale sia su monitor UltraWide che su smartphone compatti da 320px.