import React, { useEffect, useState } from "react";

import Controls from "./components/Controls";
import List from "./components/List";

function App() {
  const [geneList, setGeneList] = useState<string[]>([]);
  const [currentGene, setCurrentGene] = useState<string>("");

  useEffect(() => {
    if (currentGene.length === 4) {
      let [a1, a2, ...b] = currentGene.split("");
      setGeneList((currentGeneList) => [
        ...currentGeneList,
        [a1, a2, b.sort().join("")].join(""),
      ]);
      setCurrentGene("");
    } else if (currentGene.length === 2) {
      setCurrentGene((cur) => cur.split("").sort().join(""));
    }
  }, [currentGene]);

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex items-start max-w-2xl h-full px-4 py-10 mx-auto">
        <div className="flex-1 sticky top-10">
          <Controls
            isFirstPairEnabled={currentGene.length === 0}
            isSecondPairEnabled={currentGene.length === 2}
            onSelect={(allele) => setCurrentGene(`${currentGene}${allele}`)}
          />
          <Controls
            className="mt-10"
            isFirstPairEnabled={currentGene.length === 1}
            isSecondPairEnabled={currentGene.length === 3}
            onSelect={(allele) => setCurrentGene(`${currentGene}${allele}`)}
          />
        </div>
        <List
          className="flex-1"
          currentGene={currentGene}
          geneList={geneList}
        />
      </div>
    </div>
  );
}

export default App;
