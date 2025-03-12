
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/Motion';

export default function Index() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <HowItWorks />
          <Features />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
