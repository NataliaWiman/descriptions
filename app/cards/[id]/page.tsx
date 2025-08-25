import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import CardEditor from "@/components/CardEditor";
import Sidebar from "@/components/Sidebar";

interface CardPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

const CardPage = async ({ params }: CardPageProps) => {
  const { id } = await params;

  // Fetch data on the server
  const fetchCard = async (id: string) => {
    try {
      const cardDoc = await getDoc(doc(db, "tarotCards", id));
      if (cardDoc.exists()) {
        const cardData = cardDoc.data();
        return {
          name: cardData?.name || "Unknown Card",
          description: cardData?.description || "",
          suit: cardData?.suit || "",
        };
      } else {
        throw new Error("Card not found");
      }
    } catch (error) {
      console.error("Error fetching card:", error);
      return { name: "Unknown Card", description: "" };
    }
  };

  const { name, suit, description } = await fetchCard(id);

  return (
    <main className="grid lg:grid-cols-[264px_1fr] pb-20 lg:pb-0 bg-peach-100">
      <Sidebar />
      <CardEditor
        cardId={id}
        initialContent={description}
        title={name}
        suit={suit}
      />
    </main>
  );
};

export default CardPage;
