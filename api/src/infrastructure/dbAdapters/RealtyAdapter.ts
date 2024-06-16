import { collection, doc, setDoc, getDocs } from "@firebase/firestore";
import { Realty } from "../../domain/models/Realty";
import { db } from "./firebaseConfig";
import { IRealtyDbAdapter } from "../../domain/adapters/IRealtyDbAdapter";
import { RealtyReturn } from "./entities/RealtyReturn";

export class RealtyDbAdapter implements IRealtyDbAdapter {
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

  async getRealties(): Promise<RealtyReturn[]> {
    const realtiesRef = collection(db, "property-collection");
    try {
      const docSnap = await getDocs(realtiesRef);
      if (docSnap.docs.length) {
        return docSnap.docs.map((doc) => doc.data() as RealtyReturn);
      } else {
        return [];
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
