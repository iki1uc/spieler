// ================================================================
// IKI1UC · NARRATIV HOST · ALGORHYTMUS-SELBST
// ================================================================

export const NARRATIV_HOST = {

    tick: 0,
    story: [],

    // Module aus HH
    modules: [
        { name: "TriAxiom", loaded: false },
        { name: "RESPO", loaded: false },
        { name: "AXI", loaded: false },
        { name: "TEM", loaded: false },
        { name: "RUN8 Kernel", loaded: false }
    ],

    // Dashboard-State
    dashboard: {
        input: 0,
        resultA: 0,
        resultB: 0,
        hits: 0,
        cycleStep: -1
    },

    tell(msg) {
        const line = `[Tick ${this.tick}] ${msg}`;
        this.story.push(line);
        this.tick++;
        return line;
    },

    // Host Hub Start
    init() {
        this.tell("HOST.HUB initialisiert.");
        this.tell("Stargate rotiert. Ghost-L2 wacht.");
    },

    // HH Scan
    scanModules() {
        this.tell("Scan beginnt…");
        this.modules.forEach(m => {
            this.tell(`${m.name} → ${m.loaded ? "OK" : "FEHLT"}`);
        });
    },

    // Ghost-L2 Reparatur
    ghostRepair() {
        this.tell("Ghost-L2 aktiviert Reparatur.");
        this.modules.forEach(m => {
            if (!m.loaded) {
                m.loaded = true;
                this.tell(`Ghost repariert ${m.name}.`);
            }
        });
    },

    // Dashboard Berechnung
    calculateDashboard() {
        const s = this.dashboard;
        s.result
