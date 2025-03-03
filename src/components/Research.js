import React from 'react';
import './App.css'; // Make sure you have a corresponding stylesheet for this component

const Research = () => {
  const projects = [
    { name: "Developer", img: "Images/PM1.jpg" },
    { name: "Project Manager", img: "Images/Laptop1.jpg" },
    { name: "Mindfulness Guide", img: "Images/zen1.jpg" }
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: `url(${project.img})`, width: '300px', height: '300px' }}
          ></div>
          <p className="text-[#111518] text-base font-medium leading-normal">{project.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Research;
