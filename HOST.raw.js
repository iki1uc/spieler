// ================================================================
// NARRATIV-ALGORITHMUS · HOST HUB · FUSSBALL · GHOST-L2
// ================================================================

export const Narrativ = {

    modules: [
        { name: "TriAxiom", role: "Stürmer", loaded: false },
        { name: "RESPO", role: "Verteidiger", loaded: false },
        { name: "AXI", role: "Mittelfeld", loaded: false },
        { name: "TEM", role: "Torwart", loaded: false },
        { name: "RUN8 Kernel", role: "Trainer", loaded: false }
    ],

    story: [],

    narrate(msg) {
        this.story.push(msg);
        return msg;
    },

    kickoff() {
        return this.narrate("Anpfiff im Host Hub Stadion.");
    },

    scan() {
        return this.modules.map(m => {
            const status = m.loaded ? "OK" : "FEHLT";
            this.narrate(`${m.role} ${m.name} → ${status}`);
            return status;
        });
    },

    ghostRepair() {
        this.narrate("Ghost-L2 betritt das Spielfeld.");
        this.modules.forEach(m => {
            if (!m.loaded) {
                m.loaded = true;
                this.narrate(`Ghost-L2 repariert ${m.name}. TOR!`);
            }
        });
    },

    halftime() {
        return this.narrate("Halbzeit. Alle Module sind geladen.");
    },

    finish() {
        return this.narrate("Abpfiff. Host Hub gewinnt 5:0.");
    }
};
