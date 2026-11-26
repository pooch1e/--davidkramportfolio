/**
 * profile — single source of David Kram's portfolio content: identity,
 * contact details, downloads, images, current projects, positions and
 * repertoire. Drawn from the concise biography (24 Dec 2025).
 */

export const person = {
  name: "David Kram",
  fullTitle: "Dr David Kram",
  postNominals: "AM",
  credentials: "PhD · ARCM · FRSA",
  roles: ["Conductor", "Artistic Director", "Pianist", "Composer"],
  affiliation: "Senior Fellow, The University of Melbourne",
  location: "Melbourne, Australia",
  email: "davidkram@bigpond.com",
  phone: "+61 412 114 725",
  phoneHref: "tel:+61412114725",
};

export const welcome = [
  "David Kram here. Welcome to my web site. It’s focussed on my long professional musical experience, mostly as an international conductor.",
  "When I moved to Australia I branched out into tertiary education, arts management and composition. For the last ten years I have been head-hunted for leadership roles in three areas of community service, so my life is a rich tapestry, ever embarking on new avenues.",
];

export const biography = [
  "Dr David Kram AM is a conductor, artistic director, academic, composer and pianist working in Australia, Europe and Asia. He is Artistic Director of the MTO German-Australian Opera Grant and of Concertori Recordings (USA), and Senior Fellow at The University of Melbourne.",
  "He has conducted for Deutsche Oper and Komische Oper Berlin, Braunschweig, Deutsche Oper am Rhein, Frankfurt, Karlsruhe, Köln, Nantes and Wiesbaden, including its May Festival, as well as ZDF-TV and the Mexican and Malaysian national symphony orchestras.",
  "His PhD from Monash University focused on Erich Wolfgang Korngold. He lectures internationally and leads tours for Hayllar Music Tours.",
];

export const honour = {
  title: "Member of the Order of Australia",
  citation:
    "Significant service to the performing arts, to opera and chamber choirs, education.",
};

export const downloads = [
  { label: "Curriculum vitae", href: "/pdf/CV-Repo.pdf", format: "PDF" },
  { label: "Biography", href: "/pdf/2025-12-24 concise_bio.pdf", format: "PDF" },
];

export const images = {
  conducting: {
    src: "/dkMain.jpg",
    alt: "David Kram laughing as he conducts an outdoor crowd, in white tie and a red bow tie",
    width: 4237,
    height: 2818,
  },
  portrait: {
    src: "/gallery/2025-11-15 Dr David Kram AM.jpg",
    alt: "Dr David Kram in a green velvet jacket, studio portrait",
    width: 3606,
    height: 5420,
  },
};

export const current = [
  {
    period: "2025–26",
    title: "Brunnhailde",
    italic: true,
    role: "Creator, artistic director, conductor",
    body: "The first multimedia opera to combine live performance with AI-assisted animated film: a 100-minute adaptation of Wagner’s Ring for narrator, three singers, saxophone quintet and piano. Concert premiere June 2025; international festival touring from 2026.",
    href: "https://www.brunnhailde.com",
    linkLabel: "brunnhailde.com",
  },
  {
    period: "2024–26",
    title: "Berlin Opera Academy",
    role: "Conductor",
    body: "Recent productions include Hänsel und Gretel and L’incoronazione di Poppea.",
  },
  {
    period: "2025–26",
    title: "Hayllar Music Tours",
    role: "Lecturer and tour leader",
    body: "International music tours in Vienna and Milan.",
  },
];

export const positions = [
  { city: "Basel", role: "Kapellmeister", institution: "Stadttheater Basel" },
  { city: "Mannheim", role: "Erster Kapellmeister", institution: "Nationaltheater Mannheim" },
  { city: "Sydney", role: "Resident Conductor", institution: "The Australian Opera" },
  { city: "Adelaide", role: "Music Director", institution: "State Opera of South Australia" },
  { city: "Melbourne", role: "Head of Opera", institution: "Victorian College of the Arts" },
  { city: "Melbourne", role: "Senior Fellow", institution: "The University of Melbourne" },
];

export const works = [
  { title: "Hänsel und Gretel", composer: "Humperdinck", company: "Berlin Opera Academy" },
  { title: "L’incoronazione di Poppea", composer: "Monteverdi", company: "Berlin Opera Academy" },
  { title: "Der Ring des Nibelungen", composer: "Wagner", company: "Melbourne Opera" },
  { title: "Der Rosenkavalier", composer: "R. Strauss", company: "Melbourne Opera" },
  { title: "Tannhäuser", composer: "Wagner", company: "Melbourne Opera" },
  { title: "Lohengrin", composer: "Wagner", company: "Melbourne Opera" },
  { title: "Pecan Summer", composer: "Deborah Cheetham Fraillon", company: "Short Black Opera", note: "World premiere" },
  { title: "Eumeralla", composer: "Deborah Cheetham Fraillon", company: "Short Black Opera", note: "World premiere" },
];

export const recording = {
  title: "CD with the Prague Radio Symphony Orchestra",
};

export const houses = [
  "Deutsche Oper Berlin",
  "Komische Oper Berlin",
  "Braunschweig",
  "Deutsche Oper am Rhein",
  "Frankfurt",
  "Karlsruhe",
  "Köln",
  "Nantes",
  "Wiesbaden May Festival",
  "ZDF-TV",
  "Prague Radio Symphony Orchestra",
  "Mexican National Symphony Orchestra",
  "Malaysian National Symphony Orchestra",
];
