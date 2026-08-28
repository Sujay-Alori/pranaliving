import Hero from '../components/Hero/Hero';
import Elements from '../components/Elements/Elements';
import ClosingSection from '../components/ClosingSection/ClosingSection';
import EnquiryForm from '../components/EnquiryForm/EnquiryForm';

export default function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Elements onNavigate={onNavigate} />
      <ClosingSection onNavigate={onNavigate} />
      <EnquiryForm />
    </>
  );
}
