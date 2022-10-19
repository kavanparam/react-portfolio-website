import React from "react";

const about = () => {
  return (
    <div className="text-center">
      <h1>about</h1>

      <h3>grid testing</h3>
      <main className="relative grid grid-rows-3 gap-10 border">
        {/* can't set a height on this or it overflows */}
        <div className="absolute w-full h-full row-start-1 row-end-2 bg-red-400">
          <section className="h-screen">1</section>
        </div>
        <div className="absolute w-full row-start-2 row-end-3">2</div>
        <div className="w-full row-start-3 row-end-4 ">3</div>
      </main>

      {/* might want to use absolute elements and calculated margins instead like KP tutorial */}
    </div>
  );
};

export default about;
