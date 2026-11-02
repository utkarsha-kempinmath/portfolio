import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import Services from '../components/Services';
import Process from '../components/Process';
import Tools from '../components/Tools';
import Contact from '../components/Contact';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Utkarsha Kempinmath — Full-Stack Mobile & Web Developer';

    // Handle scroll to hash if user came back with #hash
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="home-main">
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <Tools />
      <Contact />
    </main>
  );
}
