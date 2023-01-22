import React from "react";
import Accordion from './Accordion';

const App = () => {
  return (
    <div
      style={{ fontSize: '2rem', padding: 30 }}
    >
      <Accordion
        // Accordion에 넘겨줄 props
        title="This is a Title"
        content="This is a content"
      />
    </div>
  );
}

export default App;