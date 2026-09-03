// ================================================================
// IKI1UC · UNI.spier · RAW
// ================================================================

export const UNIspier = {
    id: "UNI.spier",
    state: "BEN",          // benachbart zum System
    value: null,           // unbekannte gesuchte Zahl
    ghostLevel: 2,         // Ghost-L2 kompatibel
    pipelines: ["TriAxiom", "RESPO", "AXI", "TEM", "RUN8"],
    loaded: false,

    // Stargate-Scan
    scan() {
        return {
            id: this.id,
            pipelines: this.pipelines,
            ghost: this.ghostLevel,
            state: this.state,
            value: this.value
        };
    },

    // Aktivierung
    activate() {
        this.state = "DRIN";
        this.loaded = true;
        this.value = Math.floor(Math.random() * 999999);
        return this.value;
    },

    // Reparatur durch Ghost-L2
    repair() {
        if (!this.loaded) {
            this.state = "NA";
            this.value = Math.floor(Math.random() * 1000);
        }
        return this.value;
    }
};
