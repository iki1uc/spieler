// ================================================================
// IKI1UC · ATOM · RAW
// Basis-Modul für alle Spieler (inkl. UNI.spier)
// ================================================================

export const ATOM = {
    id: "IKI1UC.ATOM",
    version: "1.0.0",

    // Grundzustand
    state: {
        value: null,          // unbekannte gesuchte Zahl
        charge: 0,            // Atom-Ladung
        spin: 0,              // Atom-Spin (0–360)
        ghostLevel: 2,        // kompatibel mit Ghost-L2
        pipeline: "TriAxiom", // Standard-Pipeline
        active: false
    },

    // Atom aktivieren
    activate() {
        this.state.active = true;
        this.state.value = Math.floor(Math.random() * 999999);
        this.state.spin = Math.floor(Math.random() * 360);
        return this.state;
    },

    // Atom-Ladung erhöhen
    charge(amount = 1) {
        this.state.charge = Math.min(100, this.state.charge + amount);
        return this.state.charge;
    },

    // Atom-Scan (für Host Hub Stargate)
    scan() {
        return {
            id: this.id,
            active: this.state.active,
            value: this.state.value,
            charge: this.state.charge,
            spin: this.state.spin,
            ghostLevel: this.state.ghostLevel,
            pipeline: this.state.pipeline
        };
    },

    // Atom reparieren (Ghost-L2)
    repair() {
        if (!this.state.active) {
            this.state.active = true;
            this.state.value = Math.floor(Math.random() * 1000);
        }
        return this.state;
    }
};
