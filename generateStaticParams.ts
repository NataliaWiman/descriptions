import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "tarotCards"));
  const ids = querySnapshot.docs.map((doc) => ({
    id: doc.id,
  }));

  return ids;
}
