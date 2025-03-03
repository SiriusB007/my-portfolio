import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111518]">
        {/* Replaced SVG with logo192.png from public folder */}
        <div className="size-11">
          <img src= "Images/WM1.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">Laus Deo </h2>
      </div>
      <div className="flex items-center gap-9">
        <a className="text-[#111518] text-sm font-medium" href="https://youtu.be/WRgYauvo9us?si=Q0jAetHunWhXGgqY">Blog</a>
        <a className="text-[#111518] text-sm font-medium" href="https://youtu.be/WRgYauvo9us?si=Q0jAetHunWhXGgqY">Resources</a>
        <a className="text-[#111518] text-sm font-medium" href="https://youtu.be/WRgYauvo9us?si=Q0jAetHunWhXGgqY">Contact</a>
      </div>
    </header>
  );
};

export default Header;
