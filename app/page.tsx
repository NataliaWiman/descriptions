import CardsList from "@/components/CardsList";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <main>
      <div className="relative pb-16 lg:py-2">
        <QuickLinks />
        <CardsList />
      </div>
    </main>
  );
}
