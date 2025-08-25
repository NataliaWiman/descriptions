import SpreadsList from "@/components/SpreadsList";
import getSpreads from "@/utils/getSpreads";
import React from "react";

const SpreadsPage = () => {
  const spreads = getSpreads();

  return (
    <main className="p-4 max-lg:pb-20 lg:p-10">
      <SpreadsList spreads={spreads} />
    </main>
  );
};

export default SpreadsPage;
