// ================================================================
// IKI1UC · UNO · 3hit90-Matrix (81 → 243 → 729)
// ================================================================

export const UNO = {
    base: 3,

    levels: {
        atom: 81,   // 3^4
        uni: 243,   // 3^5
        run: 729    // 3^6
    },

    hitFormula(input) {
        const hits = Math.floor(input / 6);
        return 3 * hits * 90;   // 3hit90
    },

    atomLevel(input) {
        const f = this.hitFormula(input);
        return { level: 81, value: f * 81, mode: "ATOM" };
    },

    uniLevel(input) {
        const f = this.hitFormula(input);
        return { level: 243, value: f * 243, mode: "UNI.spier" };
    },

    runLevel(input) {
        const f = this.hitFormula(input);
        return { level: 729, value: f * 729, mode: "RUN" };
    },

    fullMatrix(input) {
        return {
            atom: this.atomLevel(input),
            uni: this.uniLevel(input),
            run: this.runLevel(input)
        };
    }
};
