import { db } from "./firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

async function getUserInfo(userId) {
    const colRef = collection(db, "users");
    const q = query(colRef, where("uid", "==", userId));
    var data = ''
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    data = doc.data()
    return data
    });
}

export { getUserInfo };