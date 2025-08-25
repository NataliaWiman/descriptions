import CardsList from "@/components/CardsList";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <main>
      <div className="relative lg:py-2">
        <QuickLinks />
        <CardsList />
      </div>
    </main>
  );
}
