import Hero from '../components/Hero/Hero';
import Concept from '../components/Concept/Concept';
import Elements from '../components/Elements/Elements';
import FloorPlans from '../components/FloorPlans/FloorPlans';
import ClosingSection from '../components/ClosingSection/ClosingSection';
import EnquiryForm from '../components/EnquiryForm/EnquiryForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <Elements />
      <FloorPlans />
      <ClosingSection />
      <EnquiryForm />
    </>
  );
}
