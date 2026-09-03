import { X } from "./x.raw.js";
import { Y } from "./y.raw.js";
import { Z } from "./z.raw.js";
import { Q } from "./q.raw.js";
import { D } from "./d.raw.js";
import { F } from "./f.raw.js";

export const QDF = {
    result: 0,

    compute() {
        const base = D.mod(X.get(), Y.get(), Z.get());
        this.result = F.apply(base, Q.get());
        return this.result;
    }
};
