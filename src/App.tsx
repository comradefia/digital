/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [prefilledBrief, setPrefilledBrief] = useState<string>('');

  const renderActiveView = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomeView setCurrentPage={setCurrentPage} />;
      case Page.About:
        return <AboutView />;
      case Page.Services:
        return (
          <ServicesView
            setCurrentPage={setCurrentPage}
            setPrefilledBrief={setPrefilledBrief}
          />
        );
      case Page.Contact:
        return (
          <ContactView
            prefilledBrief={prefilledBrief}
            setPrefilledBrief={setPrefilledBrief}
          />
        );
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col bg-zinc-50">
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area with fluid motion-driven container */}
      <main id="app-main-content" className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Rich Studio Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
