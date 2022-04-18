import React from "react";

import Button from "./Button";

function Controls() {
  return (
    <div className="flex-1">
      <div className="flex items-center">
        <Button>A</Button>
        <Button className="ml-4">a</Button>
        <div className="flex-1 ml-6 text-base">Pick 2</div>
      </div>
      <div className="flex items-center mt-4">
        <Button disabled>B</Button>
        <Button className="ml-4" disabled>
          b
        </Button>
        <div className="flex-1 ml-6 text-base">Pick 2</div>
      </div>
    </div>
  );
}

export default Controls;
