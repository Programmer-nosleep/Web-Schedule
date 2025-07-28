import React from "react";

const GridBox: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="grid grid-cols-8 grid-rows-5 gap-0 w-full max-w-[768px] aspect-[8/5]">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="border border-gray-100/50" />
        ))}
      </div>
    </div>
  )
}

export default GridBox