import React from "react";
import clsx from "clsx";

import AB from "./orange-square.svg";
import Ab from "./orange-circle.svg";
import aB from "./teal-square.svg";
import ab from "./teal-circle.svg";

function renderShape(genes: string) {
  if (genes.length < 4) return null;

  const isOrange = /A/.test(genes);
  const isSquare = /B/.test(genes);

  let img;
  if (isOrange && isSquare) img = AB;
  else if (isOrange && !isSquare) img = Ab;
  else if (!isOrange && isSquare) img = aB;
  else img = ab;

  return <img src={img} alt="Shape" />;
}

type Props = React.AllHTMLAttributes<HTMLUListElement> & {
  currentGene: string;
  geneList: string[];
};

function List(props: Props) {
  const { className, currentGene, geneList } = props;
  return (
    <ul className={clsx("border-y border-white", className)}>
      {geneList.map((gene, i) => (
        <li
          key={`${i}${gene}`}
          className="flex items-center py-4 border-b border-white text-2xl"
        >
          <div className="w-16">{`${i + 1}.`}</div>
          <div className="flex-1">
            {gene.split("").map((allele, i) => (
              <span
                key={`${i}${allele}`}
                className="inline-flex items-center justify-center w-8 h-12 mr-2 rounded-sm bg-white"
              >
                {allele}
              </span>
            ))}
          </div>
          {renderShape(gene)}
        </li>
      ))}
      <li className="flex items-center py-4 text-2xl">
        <div className="w-16 text-base">Next</div>
        <div className="flex-1">
          {currentGene.split("").map((allele, i) => (
            <span
              key={`${i}${allele}`}
              className="inline-flex items-center justify-center w-8 h-12 mr-2 rounded-sm bg-white"
            >
              {allele}
            </span>
          ))}
          <span className="inline-flex items-center justify-center w-8 h-12 mr-2 rounded-sm bg-cyan-400 shadow-xl shadow-cyan-200">
            _
          </span>
        </div>
      </li>
    </ul>
  );
}

export default List;
