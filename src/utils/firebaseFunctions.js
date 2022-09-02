import { doc, setDoc } from "firebase/firestore"
import { fireStore } from "../firebase/firebase.config"

export const saveItem = async (data) => {
    await setDoc(doc(fireStore, "foodItems", `${Date.now()}`), data, { merge: true });
}