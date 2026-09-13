export type Lang = "el" | "en";

// TODO: replace with the doctor's real phone number(s).
// To add another phone, add another entry to this list; the call link is built from `number`.
export const PHONES: { label: Record<Lang, string>; number: string }[] = [
  { label: { el: "Τηλέφωνο", en: "Phone" }, number: "+30 210 000 0000" },
];

export function phoneHref(number: string) {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

// TODO: put the certificate image in public/certificates/ and set its path here,
// e.g. "/certificates/ai-in-healthcare.jpg". The thumbnail is hidden while this is null.
export const AI_CERTIFICATE_IMAGE: string | null = null;

// Prefixes a root-relative path with the deploy base path, so plain hrefs keep working when
// the site is served from a sub-path (e.g. GitHub Pages). Router <Link>s handle this themselves.
export function withBase(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}

type TimelineItem = { title: string; period: string; place: string; note?: string };

export type DoctorContent = {
  name: string;
  specialty: string;
  intro: { before: string; highlight: string; after: string };
  portraitAlt: string;
  meta: { title: string; description: string };
  nav: { contact: string; switchLabel: string };
  headings: {
    experience: string;
    education: string;
    skills: string;
    certifications: string;
    memberships: string;
    languages: string;
  };
  experience: TimelineItem[];
  education: TimelineItem[];
  certificate: { title: string; issuer: string; date: string; alt: string };
  memberships: string[];
  languages: { name: string; level: string }[];
  contact: { heading: string; text: string };
};

const el: DoctorContent = {
  name: "Νικόλαος Βόλης",
  specialty: "Νεφρολογία",
  intro: {
    before: "Ιατρός με ειδίκευση στη Νεφρολογία και μετεκπαίδευση στην ",
    highlight: "Επεμβατική Νεφρολογία",
    after: ".",
  },
  portraitAlt: "Νικόλαος Βόλης, ιατρός νεφρολογίας",
  meta: {
    title: "Νικόλαος Βόλης | Νεφρολογία",
    description:
      "Νικόλαος Βόλης, ιατρός με εξειδίκευση στη Νεφρολογία. Εργασιακή εμπειρία, εκπαίδευση, πιστοποιήσεις και στοιχεία επικοινωνίας.",
  },
  nav: { contact: "Επικοινωνία", switchLabel: "Switch to English" },
  headings: {
    experience: "Εργασιακή Εμπειρία",
    education: "Εκπαίδευση",
    skills: "Δεξιότητες & Πιστοποιήσεις",
    certifications: "Πιστοποιήσεις",
    memberships: "Μέλος",
    languages: "Γλώσσες",
  },
  experience: [
    {
      title: "Υποτροφία Μετεκπαίδευσης στην Επεμβατική Νεφρολογία",
      period: "03/2026 – 05/2026",
      place: "Uniwersytecki Szpital Kliniczny im. Jana Mikulicza-Radeckiego, Βρότσλαβ, Πολωνία",
    },
    {
      title: "Ειδικευόμενος Ιατρός Νεφρολογίας",
      period: "01/2022 – 01/2026",
      place:
        "Νεφρολογικό Κέντρο «Γ. Παπαδάκης», Γενικό Κρατικό Νοσοκομείο Νίκαιας - Πειραιά «Αγ. Παντελεήμων»",
    },
    {
      title: "Ιατρός Υπηρεσίας Υπαίθρου",
      period: "09/2021 – 11/2021",
      place: "Κέντρο Υγείας Σητείας, Γενικό Νοσοκομείο Σητείας",
    },
    {
      title: "Ναυτικός Δίοπος Ιατρός",
      period: "09/2020 – 06/2021",
      place: "Θεραπευτήριο Σχολής Ναυτικών Δοκίμων - Ν.Ν. Σαλαμίνας - Κ.Ε. Πόρος",
    },
    {
      title: "Ειδικευόμενος Ιατρός Παθολογίας",
      period: "09/2018 – 03/2020",
      place: "Γ' Παθολογική Κλινική, Γενικό Κρατικό Νοσοκομείο Νίκαιας - Πειραιά «Αγ. Παντελεήμων»",
    },
    {
      title: "Ειδικευόμενος Ιατρός Παθολογίας",
      period: "11/2017 – 06/2018",
      place: "Α' Παθολογική Κλινική, Γενικό Νοσοκομείο Πειραιά «Τζάνειο»",
    },
  ],
  education: [
    {
      title: "ΠΜΣ «Διοίκηση Μονάδων Υγείας και Κοινωνικής Φροντίδας»",
      period: "2025 – 2026",
      place: "Τμήμα Ιατρικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης",
    },
    {
      title: "Πτυχίο Ιατρικής",
      period: "2011 – 2017",
      place: "Τμήμα Ιατρικής, Σχολή Επιστημών Υγείας, Δημοκρίτειο Πανεπιστήμιο Θράκης",
      note: "Βαθμός: 7.69/10 (Λίαν Καλώς)",
    },
  ],
  certificate: {
    title: "Artificial Intelligence in Healthcare",
    issuer: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
    date: "Απρίλιος 2026",
    alt: "Πιστοποιητικό επιμόρφωσης: Artificial Intelligence in Healthcare",
  },
  memberships: ["Ελληνική Νεφρολογική Εταιρεία", "Ευρωπαϊκή Νεφρολογική Εταιρεία (ERA)"],
  languages: [
    { name: "Ελληνικά", level: "Μητρική" },
    { name: "Αγγλικά", level: "Άριστη Γνώση (C2)" },
    { name: "Γερμανικά", level: "Καλή Γνώση (B2)" },
    { name: "Γαλλικά", level: "Καλή Γνώση (B2)" },
    { name: "Ιταλικά", level: "Βασική Γνώση" },
  ],
  contact: {
    heading: "Επικοινωνία",
    text: "Για ραντεβού ή πληροφορίες, επικοινωνήστε τηλεφωνικά.",
  },
};

const en: DoctorContent = {
  name: "Nikolaos Volis",
  specialty: "Nephrology",
  intro: {
    before: "Physician specialised in Nephrology, with fellowship training in ",
    highlight: "Interventional Nephrology",
    after: ".",
  },
  portraitAlt: "Nikolaos Volis, nephrology physician",
  meta: {
    title: "Nikolaos Volis | Nephrology",
    description:
      "Nikolaos Volis, physician specialised in Nephrology. Work experience, education, certifications and contact details.",
  },
  nav: { contact: "Contact", switchLabel: "Αλλαγή στα Ελληνικά" },
  headings: {
    experience: "Work Experience",
    education: "Education",
    skills: "Skills & Certifications",
    certifications: "Certifications",
    memberships: "Memberships",
    languages: "Languages",
  },
  experience: [
    {
      title: "Fellowship in Interventional Nephrology",
      period: "03/2026 – 05/2026",
      place: "Jan Mikulicz-Radecki University Clinical Hospital, Wrocław, Poland",
    },
    {
      title: "Nephrology Resident",
      period: "01/2022 – 01/2026",
      place:
        "“G. Papadakis” Nephrology Center, General State Hospital of Nikaia-Piraeus “Agios Panteleimon”",
    },
    {
      title: "Rural Service Physician",
      period: "09/2021 – 11/2021",
      place: "Sitia Health Center, General Hospital of Sitia",
    },
    {
      title: "Physician, Hellenic Navy (Military Service)",
      period: "09/2020 – 06/2021",
      place: "Hellenic Naval Academy Infirmary – Salamis Naval Base – Poros Training Center",
    },
    {
      title: "Internal Medicine Resident",
      period: "09/2018 – 03/2020",
      place:
        "3rd Department of Internal Medicine, General State Hospital of Nikaia-Piraeus “Agios Panteleimon”",
    },
    {
      title: "Internal Medicine Resident",
      period: "11/2017 – 06/2018",
      place: "1st Department of Internal Medicine, “Tzaneio” General Hospital of Piraeus",
    },
  ],
  education: [
    {
      title: "MSc in Health and Social Care Unit Management",
      period: "2025 – 2026",
      place: "School of Medicine, Aristotle University of Thessaloniki",
    },
    {
      title: "Degree in Medicine (MD)",
      period: "2011 – 2017",
      place: "School of Medicine, Faculty of Health Sciences, Democritus University of Thrace",
      note: "Grade: 7.69/10 (Very Good)",
    },
  ],
  certificate: {
    title: "Artificial Intelligence in Healthcare",
    issuer: "National and Kapodistrian University of Athens",
    date: "April 2026",
    alt: "Continuing education certificate: Artificial Intelligence in Healthcare",
  },
  memberships: ["Hellenic Society of Nephrology", "European Renal Association (ERA)"],
  languages: [
    { name: "Greek", level: "Native" },
    { name: "English", level: "Proficient (C2)" },
    { name: "German", level: "Upper intermediate (B2)" },
    { name: "French", level: "Upper intermediate (B2)" },
    { name: "Italian", level: "Basic" },
  ],
  contact: {
    heading: "Contact",
    text: "For appointments or information, please get in touch by phone.",
  },
};

export const CONTENT: Record<Lang, DoctorContent> = { el, en };

export const LANG_PATHS: Record<Lang, "/" | "/en"> = { el: "/", en: "/en" };

export function pageHead(lang: Lang) {
  const { meta } = CONTENT[lang];
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:locale", content: lang === "el" ? "el_GR" : "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "alternate", hrefLang: "el", href: withBase(LANG_PATHS.el) },
      { rel: "alternate", hrefLang: "en", href: withBase(LANG_PATHS.en) },
      { rel: "alternate", hrefLang: "x-default", href: withBase(LANG_PATHS.el) },
    ],
  };
}
