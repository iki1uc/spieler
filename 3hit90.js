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

    // Grundformel: 3hit90
    hitFormula(input) {
        const hits = Math.floor(input / 6);
        return 3 * hits * 90;
    },

    atomLevel(input) {
        const f = this.hitFormula(input);
        return { level: 81, value: f * 81, mode: "ATOM" };
    },

    uniLevel(input) {
