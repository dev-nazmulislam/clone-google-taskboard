import React, { useState } from "react";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl">Pricing section comming soon</h1>
          {open ? (
            <h1>
              <input type="text" />
              <button onClick={() => setOpen(!open)}>add</button>
            </h1>
          ) : (
            <h1 onClick={() => setOpen(!open)}>Bye</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
