import heroImg from '../assets/images/Hero.png';
import prithviImg from '../assets/images/Prithvi/Prithvi.png';
import vanamImg from '../assets/images/VANAM/VANAM.png';
import suryaImg from '../assets/images/Surya/Surya.png';
import jalaImg from '../assets/images/jala/JALA.png';
import vayuImg from '../assets/images/VAYU/Vayu.png';
import akashImg from '../assets/images/AKASH/AKASH.png';
import prithviGal1 from '../assets/images/Prithvi/Picture5.png';
import prithviGal2 from '../assets/images/Prithvi/Picture11.png';
import prithviGal3 from '../assets/images/Prithvi/Picture13.png';
import prithviGal4 from '../assets/images/Prithvi/Picture15.png';
import vanamGal1 from '../assets/images/VANAM/Picture16.png';
import vanamGal2 from '../assets/images/VANAM/Picture21.png';
import vanamGal3 from '../assets/images/VANAM/Picture27.png';
import vanamGal4 from '../assets/images/VANAM/Picture33.png';
import suryaGal1 from '../assets/images/Surya/Picture35.png';
import suryaGal2 from '../assets/images/Surya/Picture38.png';
import suryaGal3 from '../assets/images/Surya/Picture42.png';
import suryaGal4 from '../assets/images/Surya/Picture44.png';
import jalaGal1 from '../assets/images/jala/Picture45.png';
import jalaGal2 from '../assets/images/jala/Picture50.png';
import jalaGal3 from '../assets/images/jala/Picture55.png';
import jalaGal4 from '../assets/images/jala/Picture58.png';
import vayuGal1 from '../assets/images/VAYU/Picture60.png';
import vayuGal2 from '../assets/images/VAYU/Picture64.png';
import vayuGal3 from '../assets/images/VAYU/Picture66.png';
import vayuGal4 from '../assets/images/VAYU/Picture68.png';
import akashGal1 from '../assets/images/AKASH/Picture70.png';
import akashGal2 from '../assets/images/AKASH/Picture73.png';
import akashGal3 from '../assets/images/AKASH/Picture77.png';
import akashGal4 from '../assets/images/AKASH/Picture79.png';
import floorPlan1 from '../assets/images/floor-plan-1.svg';
import floorPlan2 from '../assets/images/floor-plan-2.svg';
import floorPlan3 from '../assets/images/floor-plan-3.svg';
import floorPlan4 from '../assets/images/floor-plan-4.svg';

export const hero = {
  image: heroImg,
  alt: 'PRANA Residences architectural exterior with lush greenery and natural stone facade',
};

export const studio = {
  eyebrow: 'THE STUDIO',
  headline: 'Architecture shaped by context, material and time.',
  description:
    'PRANA Residences is a design-led architecture studio creating thoughtful, enduring spaces. We draw from the fundamental energies of nature to design homes that breathe, adapt and inspire — spaces where material honesty, climate sensitivity and spatial clarity converge into architecture that lasts.',
  philosophyLeft:
    'We believe architecture is not decoration — it is the distillation of context, climate and human experience into spaces that endure.',
  philosophyImageAlt:
    'Architectural detail showcasing natural materials and light',
};

export const energies = [
  {
    id: 'prithvi',
    number: '01',
    name: 'PRITHVI',
    meaning: 'Earth',
    heroImage: prithviImg,
    heroAlt: 'PRITHVI residence rooted in the earth with natural stone and dark timber finishes',
    statement: 'Architecture begins with an understanding of the ground beneath it.',
    intro:
      'PRITHVI is the energy of earth — the ground, material, terrain and permanence from which architecture is drawn. It speaks to mass, texture and foundations, to spaces that feel rooted and enduring.',
    label: 'Ground — Material — Place',
    principles: [
      {
        label: '01',
        title: 'Material',
        text: 'Natural stone, rammed earth and raw timber anchor PRITHVI spaces to the landscape. Materials are chosen for how they age, warm and weather — carrying the memory of the land into the interior.',
      },
      {
        label: '02',
        title: 'Ground',
        text: 'The plan is organised around a sense of gravity and stability. Solid walls, deep thresholds and grounded proportions create interiors that feel composed, calm and connected to the earth.',
      },
    ],
    principleImages: [prithviGal1, prithviGal2],
    gallery: [prithviGal3, prithviImg, prithviGal4, prithviGal1],
    related: ['house-no-04'],
  },
  {
    id: 'vanam',
    number: '02',
    name: 'VANAM',
    meaning: 'Forest',
    heroImage: vanamImg,
    heroAlt: 'VANAM residence framed by lush vegetation and natural light',
    statement: 'The built form is softened by the life that surrounds it.',
    intro:
      'VANAM is the energy of the forest — vegetation, shade and organic growth. It explores the relationship between built form and living landscape, where architecture recedes and nature leads.',
    label: 'Vegetation — Landscape',
    principles: [
      {
        label: '01',
        title: 'Canopy',
        text: 'Deep overhangs, planted screens and layered greenery draw the forest into the architecture, creating shaded and temperate spaces that respond to their living surroundings.',
      },
      {
        label: '02',
        title: 'Growth',
        text: 'Interiors open outward to the landscape, blurring the threshold between inside and out. Natural materials and verdant light make each room feel part of the wider canopy.',
      },
    ],
    principleImages: [vanamGal1, vanamGal2],
    gallery: [vanamGal3, vanamImg, vanamGal4, vanamGal1],
    related: ['verde-tower'],
  },
  {
    id: 'surya',
    number: '03',
    name: 'SURYA',
    meaning: 'Sun',
    heroImage: suryaImg,
    heroAlt: 'SURYA residence filled with warm directional light and shadow',
    statement: 'Light is the primary material of the interior.',
    intro:
      'SURYA is the energy of the sun — light, shadow and warmth. It studies how daylight moves through the day and the year, shaping atmosphere, orientation and the experience of space.',
    label: 'Light — Shadow',
    principles: [
      {
        label: '01',
        title: 'Daylight',
        text: 'Calibrated openings direct sunlight deep into the plan, painting rooms with the changing character of the sky. Each space is oriented around the quality of light it receives.',
      },
      {
        label: '02',
        title: 'Shadow',
        text: 'Light is balanced by shadow — recesses, reveals and layered screens create depth and rhythm, giving the interior an atmosphere that shifts through the day.',
      },
    ],
    principleImages: [suryaGal1, suryaGal2],
    gallery: [suryaGal3, suryaImg, suryaGal4, suryaGal1],
    related: ['solaris-pavilion'],
  },
  {
    id: 'jala',
    number: '04',
    name: 'JALA',
    meaning: 'Water',
    heroImage: jalaImg,
    heroAlt: 'JALA residence with a reflecting pool and smooth natural surfaces',
    statement: 'Stillness, clarity and the quiet rhythm of flow.',
    intro:
      'JALA is the energy of water — reflection, flow and calm. It shapes spaces of quiet contemplation, where smooth surfaces and mirrored planes create an atmosphere of serenity.',
    label: 'Flow — Reflection',
    principles: [
      {
        label: '01',
        title: 'Reflection',
        text: 'Water and polished surfaces mirror the sky and surrounding landscape, extending the interior and introducing a sense of calm to every space.',
      },
      {
        label: '02',
        title: 'Flow',
        text: 'Spaces move seamlessly from one to another, guided by sightlines and thresholds that echo the gentle path of water. The plan breathes with a quiet, continuous rhythm.',
      },
    ],
    principleImages: [jalaGal1, jalaGal2],
    gallery: [jalaGal3, jalaImg, jalaGal4, jalaGal1],
    related: ['jala-house'],
  },
  {
    id: 'vayu',
    number: '05',
    name: 'VAYU',
    meaning: 'Air',
    heroImage: vayuImg,
    heroAlt: 'VAYU residence with open layers and natural cross-ventilation',
    statement: 'Spaces are designed to let air move and architecture breathe.',
    intro:
      'VAYU is the energy of air — wind, ventilation and openness. It is expressed through lightweight forms, deep shelter and plans that channel the breeze through the home.',
    label: 'Movement — Ventilation',
    principles: [
      {
        label: '01',
        title: 'Breeze',
        text: 'Cross-ventilation pathways draw prevailing winds through the interior, coupling every room with the outdoors and providing natural cooling throughout the year.',
      },
      {
        label: '02',
        title: 'Openness',
        text: 'Generous openings, operable screens and airy volumes dissolve boundaries, connecting interior life to the movement of the air around it.',
      },
    ],
    principleImages: [vayuGal1, vayuGal2],
    gallery: [vayuGal3, vayuImg, vayuGal4, vayuGal1],
    related: ['vayu-heights'],
  },
  {
    id: 'akash',
    number: '06',
    name: 'AKASH',
    meaning: 'Space',
    heroImage: akashImg,
    heroAlt: 'AKASH residence with soaring volumes and expansive natural light',
    statement: 'Expansiveness is the quietest form of luxury.',
    intro:
      'AKASH is the energy of space — sky, void and expansion. It celebrates height, volume and the horizon, creating interiors that feel boundless and open to the light above.',
    label: 'Void — Sky',
    principles: [
      {
        label: '01',
        title: 'Volume',
        text: 'Soaring ceilings and generous floor plates give the interior a sense of scale and freedom. Height is used to draw the eye upward and expand the experience of everyday space.',
      },
      {
        label: '02',
        title: 'Horizon',
        text: 'Openings frame long views and introduce the sky, connecting the interior to a wider sense of place. The architecture becomes a canvas for light and the passage of time.',
      },
    ],
    principleImages: [akashGal1, akashGal2],
    gallery: [akashGal3, akashImg, akashGal4, akashGal1],
    related: ['akash-studios'],
  },
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

export const projects = [
  {
    id: 'house-no-04',
    name: 'House No. 04',
    location: 'Brisbane, QLD',
    year: '2025',
    category: 'Residential',
    status: 'Completed',
    architect: 'Arjun Mehta',
    client: 'Private',
    statement: 'A considered response to light, material and landscape.',
    description:
      'House No. 04 emerges from its hillside site as a quiet dialogue between solid and void. Rammed earth walls anchor the structure to the terrain while expansive glazing frames curated views of the surrounding bushland. The plan is organised around a central courtyard that draws light deep into the plan and creates a sheltered outdoor room for all seasons.',
    image: prithviImg,
    imageAlt: 'House No. 04 exterior with rammed earth walls and landscape integration',
    gallery: [prithviImg, suryaImg, heroImg],
  },
  {
    id: 'verde-tower',
    name: 'Verde Tower',
    location: 'Melbourne, VIC',
    year: '2024',
    category: 'Commercial',
    status: 'Completed',
    architect: 'Priya Vasan',
    client: 'Greenfield Developments',
    statement: 'Vertical landscape redefining the commercial tower.',
    description:
      'Verde Tower integrates living greenery into every floor plate, creating a vertical landscape that softens the urban edge. The double-skin facade operates as a thermal buffer while supporting cascading planting that changes with the seasons. Shared terrace levels provide communal garden spaces that foster connection among occupants.',
    image: vanamImg,
    imageAlt: 'Verde Tower with integrated vertical gardens and modern facade',
    gallery: [vanamImg, jalaImg, heroImg],
  },
  {
    id: 'solaris-pavilion',
    name: 'Solaris Pavilion',
    location: 'Gold Coast, QLD',
    year: '2024',
    category: 'Cultural',
    status: 'Completed',
    architect: 'Arjun Mehta',
    client: 'Gold Coast Cultural Trust',
    statement: 'Where light becomes the primary material.',
    description:
      'Solaris Pavilion is a public gallery and event space designed to celebrate the subtropical light of the Gold Coast. A faceted timber roof structure filters sunlight through calibrated openings, casting shifting patterns across the polished concrete floor. The pavilion dissolves the boundary between interior exhibition space and the surrounding parkland.',
    image: suryaImg,
    imageAlt: 'Solaris Pavilion with faceted timber roof and filtered natural light',
    gallery: [suryaImg, prithviImg, heroImg],
  },
  {
    id: 'jala-house',
    name: 'Jala House',
    location: 'Byron Bay, NSW',
    year: '2023',
    category: 'Residential',
    status: 'Completed',
    architect: 'Priya Vasan',
    client: 'Private',
    statement: 'Stillness and reflection in architectural form.',
    description:
      'Jala House takes its name from the Sanskrit word for water. The home is organised around a reflecting pool that extends from the entry sequence through to the main living area, creating a continuous plane of water that mirrors the sky. Natural stone, timber screens and considered planting create a sanctuary of calm within walking distance of the coast.',
    image: jalaImg,
    imageAlt: 'Jala House with reflecting pool and natural stone finishes',
    gallery: [jalaImg, vanamImg, heroImg],
  },
  {
    id: 'vayu-heights',
    name: 'Vayu Heights',
    location: 'Noosa, QLD',
    year: '2023',
    category: 'Residential',
    status: 'Completed',
    architect: 'Rahul Iyer',
    client: 'Private',
    statement: 'Architecture that breathes with the breeze.',
    description:
      'Perched on a ridgeline overlooking the Noosa hinterland, Vayu Heights is designed to capture and channel the prevailing breezes. Deep verandahs, operable screens and cross-ventilated planning ensure natural cooling throughout the year. The material palette of recycled hardwood, zinc and stone weathers gracefully, embedding the home into its hillside context.',
    image: vayuImg,
    imageAlt: 'Vayu Heights with deep verandahs and panoramic hinterland views',
    gallery: [vayuImg, akashImg, heroImg],
  },
  {
    id: 'akash-studios',
    name: 'Akash Studios',
    location: 'Sydney, NSW',
    year: '2022',
    category: 'Commercial',
    status: 'Completed',
    architect: 'Arjun Mehta',
    client: 'Akash Creative Group',
    statement: 'Limitless workspace for limitless thinking.',
    description:
      'Akash Studios transforms a former warehouse into a light-filled creative campus. Soaring ceilings and generous floor plates provide flexible workspace, while a new mezzanine level creates intimate meeting rooms suspended within the volume. A central atrium brings daylight to the heart of the plan and connects all levels visually and spatially.',
    image: akashImg,
    imageAlt: 'Akash Studios interior with soaring ceilings and central atrium',
    gallery: [akashImg, suryaImg, heroImg],
  },
];

export const categories = ['All', 'Residential', 'Commercial', 'Cultural'];

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

export const team = [
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Founding Principal',
    description:
      'With over two decades of practice, Arjun leads the studio\'s vision for architecture rooted in place, materiality and the natural world.',
  },
  {
    id: 'priya-vasan',
    name: 'Priya Vasan',
    role: 'Design Director',
    description:
      'Priya shapes the studio\'s design language, weaving together landscape, light and material into cohesive spatial narratives.',
  },
  {
    id: 'rahul-iyer',
    name: 'Rahul Iyer',
    role: 'Head of Interiors',
    description:
      'Rahul brings a refined sensibility to interior spaces, selecting materials and finishes that honour the architectural intent of each project.',
  },
  {
    id: 'meera-nair',
    name: 'Meera Nair',
    role: 'Sustainability Lead',
    description:
      'Meera ensures every project achieves environmental performance without compromising on spatial or material quality.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home', src: heroImg },
  { label: 'Studio', href: '#concept', src: heroImg },
  { label: 'Projects', href: '#projects', src: suryaImg },
  { label: 'Floor Plans', href: '#floor-plans', src: floorPlan1 },
  { label: 'Enquire', href: '#enquire', src: akashImg },
];
