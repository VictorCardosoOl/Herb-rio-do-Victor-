/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import KnowledgePanel from '@/components/layout/KnowledgePanel';
import BottomNav from '@/components/layout/BottomNav';
import SmoothScrollWrapper from '@/components/layout/SmoothScrollWrapper';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SmoothScrollWrapper>
        <ScrollToTop />
        <ScrollProgress />
        <BackToTop />
        <div className="min-h-screen bg-paper text-petrol font-sans selection:bg-petrol selection:text-paper flex flex-col md:flex-row">
          {/* Left Sidebar - Navigation (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0 relative z-50">
            <div className="sticky top-0 h-screen">
              <Header />
            </div>
          </div>

          {/* Mobile Header Placeholder */}
          <div className="md:hidden p-4 border-b border-petrol bg-paper z-40 sticky top-0 flex justify-between items-center">
             <span className="font-serif font-bold text-xl">Herbário.</span>
             <span className="text-xs font-mono text-petrol/60">V.01</span>
          </div>

          {/* Main Content - Scrollable Stage */}
          {/* Removed overflow-y-auto to let the window scroll, enabling Lenis */}
          <main className="flex-1 relative z-10 w-full min-h-screen pb-24 md:pb-0 border-r border-petrol/10">
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Right Sidebar - Knowledge Panel (Desktop) */}
          <div className="hidden xl:block w-96 flex-shrink-0 relative z-40">
            <div className="sticky top-0 h-screen border-l border-petrol">
              <KnowledgePanel />
            </div>
          </div>

          {/* Bottom Navigation (Mobile) */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            <BottomNav />
          </div>
        </div>
      </SmoothScrollWrapper>
    </Router>
  );
}
