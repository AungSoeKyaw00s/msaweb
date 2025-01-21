'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Tab, TabGroup, TabList } from '@headlessui/react';
import members from './data/members.json';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface YearData {
  executives: TeamMember[];
  committee: TeamMember[];
}

interface TeamDataType {
  [key: string]: YearData;
}

const teamData: TeamDataType = members as TeamDataType;

const years = ["2024", "2023"];

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="flex flex-col items-center p-4 space-y-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img
      src={member.image}
      alt={member.name}
      className="w-32 h-32 rounded-full object-cover"
    />
    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
    <p className="text-sm text-gray-600">{member.role}</p>
  </div>
);

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    }
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative flex min-h-screen bg-white px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div
        className={`flex-1 transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
      >
        <div className="mx-auto max-w-7xl w-full space-y-12 m-20">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600">
              The dedicated individuals behind UTS Myanmar Students Association
            </p>
          </div>

          {/* Year selection tabs */}
          <TabGroup>
            <TabList className="flex p-1 space-x-1 bg-red-600 rounded-xl max-w-md mx-auto">
              {years.map((year) => (
                <Tab
                  key={year}
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm font-medium leading-5 text-black rounded-lg
                    ${
                      selected
                        ? 'bg-white shadow'
                        : 'hover:bg-white/[0.12] text-white'
                    }`
                  }
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Tab>
              ))}
            </TabList>
          </TabGroup>

          {/* Executives Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Executive Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamData[selectedYear].executives.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </section>

          {/* General Committee Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              General Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {teamData[selectedYear].committee.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}