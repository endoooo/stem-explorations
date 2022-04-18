import React from "react";

import Controls from "./components/Controls";
import List from "./components/List";

function App() {
  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex max-w-2xl px-4 py-10 mx-auto">
        <Controls />
        <List />
      </div>
    </div>
  );
}

export default App;
