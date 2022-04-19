import React from "react";

import Button from "./Button";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isFirstPairEnabled: boolean;
  isSecondPairEnabled: boolean;
  onSelect: (allele: string) => void;
};

function Controls(props: Props) {
  const { className, isFirstPairEnabled, isSecondPairEnabled, onSelect } =
    props;

  return (
    <div className={className}>
      <div className="flex items-center">
        <Button disabled={!isFirstPairEnabled} onClick={() => onSelect("A")}>
          A
        </Button>
        <Button
          disabled={!isFirstPairEnabled}
          className="ml-4"
          onClick={() => onSelect("a")}
        >
          a
        </Button>
        {isFirstPairEnabled && (
          <div className="flex-1 ml-6 text-base">Pick 1</div>
        )}
      </div>
      <div className="flex items-center mt-4">
        <Button disabled={!isSecondPairEnabled} onClick={() => onSelect("B")}>
          B
        </Button>
        <Button
          disabled={!isSecondPairEnabled}
          className="ml-4"
          onClick={() => onSelect("b")}
        >
          b
        </Button>
        {isSecondPairEnabled && (
          <div className="flex-1 ml-6 text-base">Pick 1</div>
        )}
      </div>
    </div>
  );
}

export default Controls;
