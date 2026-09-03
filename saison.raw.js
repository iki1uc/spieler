// ================================================================
// IKI1UC · SAISON · RAW
// ================================================================

export const SAISON = {
    spieltag: 1,
    tore: 0,
    punkte: 0,
    spiele: [],

    neuerSpieltag() {
        this.spieltag++;
        return this.spieltag;
    },

    tor() {
        this.tore++;
        return this.tore;
    },

    punkt() {
        this.punkte++;
        return this.punkte;
    },

    logSpiel(name, ergebnis) {
        this.spiele.push({ name, ergebnis });
        return this.spiele;
    }
};
