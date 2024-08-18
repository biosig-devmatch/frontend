import React from "react";
import { cn } from "@/lib/utils";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
const OurTeamSection = () => {
  return (
    <div className="min-h-screen flex items-center bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2
          className={cn(
            orbitron.className,
            "text-3xl md:text-5xl font-bold mb-8 text-white text-center"
          )}
        >
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMemberCard name="Cheong Yee Chian" role="Developer" />
          <TeamMemberCard name="Garbriel Yong" role="Developer" />
          <TeamMemberCard name="Ng Ren Yan" role="Developer" />
          <TeamMemberCard name="Goh Wei Qi" role="Developer" />
          <TeamMemberCard name="Low Cheng Ing" role="Developer" />
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center">
      <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
  );
};

export default OurTeamSection;
