import heroImg from '../assets/images/hero.svg';
import prithviImg from '../assets/images/prithvi.svg';
import vanamImg from '../assets/images/vanam.svg';
import suryaImg from '../assets/images/surya.svg';
import jalaImg from '../assets/images/jala.svg';
import vayuImg from '../assets/images/vayu.svg';
import akashImg from '../assets/images/akash.svg';
import floorPlan1 from '../assets/images/floor-plan-1.svg';
import floorPlan2 from '../assets/images/floor-plan-2.svg';
import floorPlan3 from '../assets/images/floor-plan-3.svg';
import floorPlan4 from '../assets/images/floor-plan-4.svg';

export const hero = {
  image: heroImg,
  alt: 'PRANA Residences architectural exterior with lush greenery and natural stone facade',
};

export const energies = [
  { id: 'prithvi', number: '01', name: 'PRITHVI', meaning: 'Earth' },
  { id: 'vanam', number: '02', name: 'VANAM', meaning: 'Forest' },
  { id: 'surya', number: '03', name: 'SURYA', meaning: 'Sun' },
  { id: 'jala', number: '04', name: 'JALA', meaning: 'Water' },
  { id: 'vayu', number: '05', name: 'VAYU', meaning: 'Air' },
  { id: 'akash', number: '06', name: 'AKASH', meaning: 'Space' },
];

export const residences = [
  {
    id: 'prithvi',
    number: '01',
    name: 'PRITHVI',
    meaning: 'Earth',
    title: 'Grounded by earth.',
    description:
      'Rooted in the essence of the earth, PRITHVI homes embody strength, stability and grounding. Natural stone surfaces, warm organic textures and earthy tones create spaces that feel connected to the land. Every material choice reflects the raw beauty of nature, offering a sense of permanence and belonging.',
    image: prithviImg,
    imageAlt: 'PRITHVI residence showcasing earthy natural stone and organic textures',
    reverse: false,
  },
  {
    id: 'vanam',
    number: '02',
    name: 'VANAM',
    meaning: 'Forest',
    title: 'In harmony with nature.',
    description:
      'Inspired by the lush canopy of a forest, VANAM homes celebrate greenery, freshness and the gentle play of natural light. Living spaces open into verdant views, blurring the boundaries between indoors and outdoors. Organic textures and verdant palettes create a sense of harmony with the surrounding landscape.',
    image: vanamImg,
    imageAlt: 'VANAM residence with lush greenery and natural light flooding the interior',
    reverse: true,
  },
  {
    id: 'surya',
    number: '03',
    name: 'SURYA',
    meaning: 'Sun',
    title: 'Warmth, light, vitality.',
    description:
      'Bathed in warmth and radiance, SURYA homes channel the golden energy of the sun. Natural timber, hand-finished brass and sun-kissed terracotta create interiors that glow with warmth. Thoughtfully positioned openings capture light throughout the day, filling every room with gentle luminance.',
    image: suryaImg,
    imageAlt: 'SURYA residence bathed in warm sunlight with timber and brass accents',
    reverse: false,
  },
  {
    id: 'jala',
    number: '04',
    name: 'JALA',
    meaning: 'Water',
    title: 'Calmness in every curve.',
    description:
      'Reflecting the serenity and fluidity of water, JALA homes evoke calmness and purity. Smooth surfaces, reflective finishes and a gentle colour palette create an atmosphere of quiet elegance. Spaces flow seamlessly into one another, mirroring the natural movement of water through stillness and grace.',
    image: jalaImg,
    imageAlt: 'JALA residence with serene water-inspired design and flowing interiors',
    reverse: true,
  },
  {
    id: 'vayu',
    number: '05',
    name: 'VAYU',
    meaning: 'Air',
    title: 'Openness that breathes.',
    description:
      'Embodying the lightness and movement of air, VAYU homes are designed for openness and breathability. Expansive windows, cross-ventilation pathways and airy floor plans create a constant dialogue with the outdoors. Every room feels connected to the breeze, offering a sense of freedom and effortless flow.',
    image: vayuImg,
    imageAlt: 'VAYU residence with open airy spaces and natural cross-ventilation',
    reverse: false,
  },
  {
    id: 'akash',
    number: '06',
    name: 'AKASH',
    meaning: 'Space',
    title: 'Limitless living.',
    description:
      'Inspired by the vast expanse of the sky, AKASH homes celebrate openness and expansiveness. Soaring ceilings, generous proportions and an abundance of natural light create spaces that feel boundless. The design fosters a profound sense of freedom, where architecture becomes a canvas for limitless living.',
    image: akashImg,
    imageAlt: 'AKASH residence with soaring ceilings and expansive light-filled interiors',
    reverse: true,
  },
];

export const floorPlans = [
  {
    id: 'plan-2bhk',
    name: '2 BHK',
    size: '1,150 sq. ft.',
    image: floorPlan1,
    alt: '2 BHK Floor Plan — 1,150 sq. ft.',
  },
  {
    id: 'plan-2-5bhk',
    name: '2.5 BHK',
    size: '1,450 sq. ft.',
    image: floorPlan2,
    alt: '2.5 BHK Floor Plan — 1,450 sq. ft.',
  },
  {
    id: 'plan-3bhk',
    name: '3 BHK',
    size: '1,800 sq. ft.',
    image: floorPlan3,
    alt: '3 BHK Floor Plan — 1,800 sq. ft.',
  },
  {
    id: 'plan-3-5bhk',
    name: '3.5 BHK',
    size: '2,200 sq. ft.',
    image: floorPlan4,
    alt: '3.5 BHK Floor Plan — 2,200 sq. ft.',
  },
];

export const navLinks = [
  { label: 'Concept', href: '#concept' },
  { label: 'Elements', href: '#elements' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Enquire', href: '#enquire' },
];
