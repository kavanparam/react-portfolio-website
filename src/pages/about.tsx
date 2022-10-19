import React from "react";

const about = () => {
  return (
    <div className="text-center">
      <h1>about</h1>

      <h3>grid testing</h3>
      <section className="relative grid grid-cols-none grid-rows-3 gap-10 border">
        <div className="absolute w-full row-start-1 row-end-2">1</div>
        <div className="row-start-2 row-end-3">2</div>
        <div className="row-start-3 row-end-4">3</div>
      </section>
    </div>
  );
};

export default about;
