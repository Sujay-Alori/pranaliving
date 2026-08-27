import Hero from '../components/Hero/Hero';
import Intro from '../components/Intro/Intro';
import Concept from '../components/Concept/Concept';
import Elements from '../components/Elements/Elements';
import FloorPlans from '../components/FloorPlans/FloorPlans';
import ClosingSection from '../components/ClosingSection/ClosingSection';
import EnquiryForm from '../components/EnquiryForm/EnquiryForm';

export default function Home({ onNavigate }) {
  return (
    <>
      <Hero />
      <Intro />
      <Concept onNavigate={onNavigate} />
      <Elements />
      <FloorPlans />
      <ClosingSection />
      <EnquiryForm />
    </>
  );
}
