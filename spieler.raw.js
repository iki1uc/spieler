// ================================================================
// IKI1UC · SPIELER · RAW
// ================================================================

export const SpielerRAW = {
    name: "IKI1UC-PLAYER",
    mode: "RUN3",
    slienergie: 0,
    slienergiePower: 3,   // Energie pro Zug
    cplus: 1.2,           // RUN 3 = mittlere Energie
    axles: 3,             // 3 Achsen aktiv
    fair: true,           // FAIR-ON aktiv
    auto: false,          // kein Auto-Modus
    mood: "anime",        // Anime-Atmosphäre
};

// Energie erhöhen
export function applySliPower() {
    SpielerRAW.slienergie = Math.min(100, SpielerRAW.slienergie + SpielerRAW.slienergiePower);
    return SpielerRAW.slienergie;
}
