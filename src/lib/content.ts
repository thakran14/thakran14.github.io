/**
 * Single source of truth for site content.
 * Edit here to update copy across the site.
 */

export const site = {
  name: "Priyanka Thakran",
  role: "Product · Data · Writing",
  email: "priyankathakran.2@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1caOHtbyKwmjRzv-E75-JpBqBBIt5ftUG/view?usp=sharing",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Making", href: "#making" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "Priyanka Thakran",
  headline: "A computer scientist building a career in product.",
  subhead:
    "I like working at the intersection of technology, data, and management — and, outside of that, I write, take photographs, and pay attention to small things.",
  image: {
    src: "/images/my2.png",
    alt: "Portrait of Priyanka Thakran",
  },
} as const;

export const about = {
  paragraphs: [
    "I'm a multipotentialite and bibliophile with a soft spot for modern rock. I graduated in 2020 with a Computer Science degree from Indraprastha College for Women, University of Delhi.",
    "I want to use data to solve real problems, and I'm drawn to startups and the business side of building things. That pull toward tech and data plus management is what led me to product — the niche where all of it meets.",
  ],
} as const;

export const experience = {
  intro:
    "After my degree in Computer Science, I've worked across operations, market analysis, and the non-profit world.",
  roles: [
    {
      company: "Airbnb",
      title: "Market Intern, Supply Operations",
      note: "Supply operations for a growing marketplace.",
    },
    {
      company: "Qrius",
      title: "Market Analyst Intern",
      note: "Built marketing strategies and grew their news platform.",
    },
    {
      company: "Echo India",
      title: "Volunteer",
      note: "Supported hospitals facing a shortage of healthcare professionals across India during COVID.",
    },
  ],
} as const;

export type Project = {
  title: string;
  blurb: string;
  href: string;
  cta: string;
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    title: "ReeLife Photography",
    blurb:
      "A phone-photography page trying to capture the lost essence of everyday life. Started in high school on my first Samsung and never really stopped. There are free wallpapers on there too.",
    href: "https://www.instagram.com/reelifephotography/?hl=en",
    cta: "Instagram portfolio",
    image: { src: "/images/reelife3.jpeg", alt: "ReeLife Photography" },
  },
  {
    title: "The Adventures of Naanu & Her Dog Family",
    blurb:
      "A short story about the family of strays living outside my house — their follies and feuds — and a small case for accepting stray dogs. Don't buy, adopt.",
    href: "https://www.amazon.in/Adventures-Naanu-Her-Dog-Family-ebook/dp/B08XZDC9RX",
    cta: "Buy the eBook",
    image: { src: "/images/book2.jpg", alt: "Book cover" },
  },
  {
    title: "Soulo Says",
    blurb:
      "Where I post poems and short stories — the magical little things my subconscious hands me. Quotes, stories, and the occasional intriguing incident.",
    href: "https://soulosays.wordpress.com/",
    cta: "Read the blog",
    image: { src: "/images/p5.png", alt: "Soulo Says" },
  },
];

export const skills = [
  "R",
  "SQL",
  "Data Analysis",
  "Java",
  "Tableau",
  "Excel",
  "Google Suite",
  "Content Creation",
  "Relationship Management",
] as const;

export const socials = [
  { label: "Email", href: "mailto:priyankathakran.2@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyankathakran14/" },
  { label: "Twitter", href: "https://twitter.com/pthakran5?s=20" },
  { label: "Instagram", href: "https://www.instagram.com/reelifephotography/?hl=en" },
] as const;
