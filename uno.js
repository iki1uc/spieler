// ================================================================
// IKI1UC · UNO · 3hit90-Matrix (81 → 243 → 729)
// ================================================================

export const UNO = {
    // Grundmatrix
    base: 3,

    // Ebenen
    levels: {
        atom: 81,   // 3^4
        uni: 243,   // 3^5
        run: 729    // 3^6
    },

    // 3hit90 Grundformel
    hitFormula(input) {
        const hits = Math.floor(input / 6);   // Dashboard-Hits
        return 3 * hits * 90;                 // 3hit90
    },

    // ATOM-Ebene (81)
    atomLevel(input) {
        const f = this.hitFormula(input);
        return {
            level: this.levels.atom,
            value: f * this.levels.atom,
            mode: "ATOM"
        };
    },

    // UNI-Ebene (243)
    uniLevel(input) {
        const f = this.hitFormula(input);
        return {
            level: this.levels.uni,
            value: f * this.levels.uni,
            mode: "UNI.spier"
        };
    },

    // RUN-Ebene (729)
    runLevel(input) {
        const f = this.hitFormula(input);
        return {
            level: this.levels.run,
            value: f * this.levels.run,
            mode: "RUN"
        };
    },

    // Vollständige Matrix (81 → 243 → 729)
    fullMatrix(input) {
        return {
            atom: this.atomLevel(input),
            uni: this.uniLevel(input),
            run: this.runLevel(input)
        };
    }
};
