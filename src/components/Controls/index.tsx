import React, { useEffect, useState } from "react";

import Button from "./Button";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  currentGene: string;
  onSelect: (allele: string) => void;
};

function Controls(props: Props) {
  const { className, currentGene, onSelect } = props;

  const [isInFirstPair, setIsInFirstPair] = useState(true);

  useEffect(() => {
    if (currentGene.length < 2) {
      setIsInFirstPair(true);
    } else {
      setIsInFirstPair(false);
    }
  }, [currentGene]);

  return (
    <div className={className}>
      <div className="flex items-center">
        <Button disabled={!isInFirstPair} onClick={() => onSelect("A")}>
          A
        </Button>
        <Button
          disabled={!isInFirstPair}
          className="ml-4"
          onClick={() => onSelect("a")}
        >
          a
        </Button>
        {isInFirstPair && <div className="flex-1 ml-6 text-base">Pick 2</div>}
      </div>
      <div className="flex items-center mt-4">
        <Button disabled={isInFirstPair} onClick={() => onSelect("B")}>
          B
        </Button>
        <Button
          disabled={isInFirstPair}
          className="ml-4"
          onClick={() => onSelect("b")}
        >
          b
        </Button>
        {!isInFirstPair && <div className="flex-1 ml-6 text-base">Pick 2</div>}
      </div>
    </div>
  );
}

export default Controls;
