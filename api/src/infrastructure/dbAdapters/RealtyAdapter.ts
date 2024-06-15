import { collection, doc, setDoc } from "@firebase/firestore";
import { Realty } from "../../domain/models/Realty";
import { db } from "./firebaseConfig";
import { IRealtyDbAdapter } from "./interfaces/IRealtyDbAdapter";

export class RealtyDbAdapter implements IRealtyDbAdapter {
  realties: Realty[];

  constructor() {
    this.realties = [];
  }

  async createRealty(realty: Realty) {
    const realtiesRef = collection(db, "property-collection");
    try {
      await setDoc(doc(realtiesRef, `${realty.name}`), {
        name: realty.name,
        link: realty.link,
      });
    } catch {
      throw new Error("Erro ao adicionar imobiliária");
    }
  }
}
