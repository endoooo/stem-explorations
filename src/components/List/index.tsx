import React from "react";

const arr = ["blah", "bleh", "blih"];

function List() {
  return (
    <ul className="flex-1 border-y border-white">
      {arr.map((x, i) => (
        <li
          key={x}
          className="flex items-center py-4 border-t border-white first:border-t-0"
        >
          <div>{`${i + 1}.`}</div>
          {x}
        </li>
      ))}
    </ul>
  );
}

export default List;
