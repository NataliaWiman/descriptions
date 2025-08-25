import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Card } from "@/types";

const fetchCards = async (): Promise<Card[]> => {
  const querySnapshot = await getDocs(collection(db, "tarotCards"));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      suit: data.suit,
    } as Card;
  });
};

export { fetchCards };
