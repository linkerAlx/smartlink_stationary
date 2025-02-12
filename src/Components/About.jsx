import React from "react";
import { companyValues, expertiseAreas, TeamMember, teamMembers } from "../Constants";
// About Component
const About = () => {
  return (
    <div>
        <div  className="w-full relative">
        <img src="https://images.pexels.com/photos/8250982/pexels-photo-8250982.jpeg" alt="contactimage" className="h-96 w-full object-cover" />
      </div>
      <div className="w-full max-w-4xl mb-2  rounded-lg overflow-hidden -mt-60 mx-auto p-6 relative z-10">
      <h1 className="text-center text-xl font-extrabold ">
      <span className="text-[#A68868]">SmartLink</span> Station
      </h1>
      <h2 className="text-center text-xl font-semibold text-gray-800">
        Your go-to source for work essentials, custom invitations, and expert web development
      </h2>

      {/* Vision, Mission, Goals Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {companyValues.map((item, index) => (
        <div key={index} className="bg-[#071739] border-2 border-[#A68868]  p-6 rounded-2xl shadow-md text-center">
          {item.icon} {/* Displays an icon above each title */}
          <div className="text-xl flex flex-row   justify-center gap-2 font-semibold text-gray-100"><span className="w-16 h-1 bg-[#A68868] mt-4 "></span> {item.title} </div>
                   <ul className="text-gray-500 mt-2 text-left list-disc list-inside">
            {item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
      </div>

      {/* Expertise Section */}
      <h2 className="text-xl font-semibold flex flex-col  items-center   text-gray-800 text-center mt-6">Our Expertise <span className="w-16 h-1 bg-[#A68868] mt-4 "></span> </h2>
      <p className="text-center text-gray-600">Innovative solutions in stationery, invitations, and digital development.</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-center">
        {expertiseAreas.map((category, index) => (
          <div key={index} className="relative bg-[#071739] m-4 text-white rounded-lg p-4 text-center">
            <h3 className="font-semibold">{category.title}</h3>
            <button className="absolute left-1/2 top-[40px] w-50 transform -translate-x-1/2 bg-[#CDD5DB] text-black text-sm rounded-md px-3 py-1 hover:bg-[#A4B5C4]">
              {category.description}
            </button>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <h2 className="text-xl flex flex-col  items-center font-semibold text-gray-800 text-center mt-8">Our Team <span className="w-16 h-1 bg-[#A68868] mt-4 "></span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

export default About;