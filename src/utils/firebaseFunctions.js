import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { fireStore } from "../firebase/firebase.config"

export const saveItem = async (data) => {
    await setDoc(doc(fireStore, "foodItems", `${Date.now()}`), data, { merge: true });
}


export const getAllItems = async () =>{
    const items = await getDocs(query(collection(fireStore,"foodItems"),orderBy("id","desc")));
    return items.docs.map((doc)=> doc.data());
}