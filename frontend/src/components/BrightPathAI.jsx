import React from 'react';
import Header from './Header';
import MainContent from '../roadmap/MainContent';
import RoleBasedRoadmaps from '../roadmap/RoleBasedRoadmaps';
import SkillsBasedRoadmaps from '../roadmap/SkillsBasedRoadmaps';
import Videos from './extra';
import PracticeForFree from '../roadmap/PracticeForFree';
import Footer from './Footer';


function BrightPathAI() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-6 pb-24 pl-4 bg-neutral-950">
      <Header />
      <MainContent />
      <RoleBasedRoadmaps />
      <SkillsBasedRoadmaps />
      <Videos/>
      <PracticeForFree/>
      <Footer/>
    </div>
  );
}

export default BrightPathAI;