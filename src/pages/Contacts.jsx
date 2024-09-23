import React from 'react'

function Contacts() {

    const sections = [
        { id: 1, title: "Section 1", bg: "bg-red-500" },
        { id: 2, title: "Section 2", bg: "bg-green-500" },
        { id: 3, title: "Section 3", bg: "bg-blue-500" },
        { id: 4, title: "Section 4", bg: "bg-yellow-500" },
      ];


  return (
    <div>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {sections.map(section => (
        <div
          key={section.id}
          className={`${section.bg} snap-start h-screen flex items-center justify-center text-white text-4xl`}
        >
          {section.title}
        </div>
      ))}
    </div>

    </div>
  )
}

export default Contacts