// ================================================================
// IKI1UC · NARRATIV · ALGORHYTMUS-SELBST
// ================================================================

export const NARRATIV = {

    tick: 0,
    story: [],
    modules: [],
    ghostLevel: 2,

    init(modules) {
        this.modules = modules;
        this.tell("HOST.HUB initialisiert.");
        this.tell("Stargate rotiert. Ghost-L2 wacht.");
    },

    tell(msg) {
        const line = `[Tick ${this.tick}] ${msg}`;
        this.story.push(line);
        this.tick++;
        return line;
    },

    scan() {
        this.tell("Scan beginnt…");
        this.modules.forEach(m => {
            if (m.loaded) {
                this.tell(`${m.name} → OK`);
            } else {
                this.tell(`${m.name} → FEHLT`);
            }
        });
    },

    ghostRepair() {
        this.tell("Ghost-L2 aktiviert Reparatur.");
        this.modules.forEach(m => {
            if (!m.loaded) {
                m.loaded = true;
                this.tell(`Ghost repariert ${m.name}.`);
            }
        });
    },

    cycle() {
        this.tell("Pipeline-Zyklus läuft…");
        this.modules.forEach(m => {
            this.tell(`${m.name} verarbeitet Daten.`);
        });
    },

    finish() {
        this.tell("HOST.HUB abgeschlossen.");
        this.tell("Alle Module OK.");
        return this.story;
    }
};
