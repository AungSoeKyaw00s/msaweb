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

const years = ["2025", "2024"];

interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
  shouldAnimate: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay, shouldAnimate }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div 
      className={`flex flex-col items-center p-4 space-y-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500
      ${shouldAnimate ? (isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0') : 'translate-y-0 opacity-100'}`}
      style={{ transitionDelay: `${shouldAnimate ? delay * 50 : 0}ms` }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.role}</p>
    </div>
  );
};

export default function Team() {
  // This state should be initialized to true during server-side rendering
  // and then set to the correct value on client-side
  const [isMounted, setIsMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);

  // Add useEffect to handle client-side initialization
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run intersection observer logic when component is mounted on client
    if (!isMounted) return;
    
    // Animation is only shown on the first load
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          // Set hasAnimated to true after the first animation
          setTimeout(() => {
            setHasAnimated(true);
          }, 1000); // Adjust timing as needed
        }
      },
      {
        threshold: 0.1,
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
  }, [hasAnimated, isMounted]);

  // Different animation for mobile vs desktop
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    // Different animation based on screen size
    return `opacity-100 transition-all duration-700 ease-out`;
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative flex min-h-screen bg-white px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div
        className={`flex-1 w-full ${isMounted ? getAnimationClass() : 'opacity-100'}`}
        style={{ 
          transform: isMounted && isVisible ? 'translateY(0)' : isMounted ? 'translateY(40px)' : 'translateY(0)',
        }}
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
                <TeamMemberCard 
                  key={index} 
                  member={member} 
                  delay={index}
                  shouldAnimate={isMounted && !hasAnimated}
                />
              ))}
            </div>
          </section>

          {/* General Committee Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Sub-Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {teamData[selectedYear].committee.map((member, index) => (
                <TeamMemberCard 
                  key={index} 
                  member={member} 
                  delay={index}
                  shouldAnimate={isMounted && !hasAnimated}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}