import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import {
  AI_CERTIFICATE_IMAGE,
  CONTENT,
  LANG_PATHS,
  PHONES,
  phoneHref,
  withBase,
  type Lang,
} from "@/lib/doctor-content";

function SectionHeading({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="text-xs font-mono text-medical-deep/40 italic">{number}</span>
      <h2 className="font-serif text-2xl">{children}</h2>
    </div>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-accent mb-4">
      {children}
    </h3>
  );
}

function LanguageSwitch({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  return (
    <div
      role="group"
      className="flex items-center rounded-full border border-medical-deep/10 p-0.5 text-xs font-semibold"
      aria-label={t.nav.switchLabel}
    >
      {(["el", "en"] as const).map((option) => (
        <Link
          key={option}
          to={LANG_PATHS[option]}
          hrefLang={option}
          aria-current={option === lang ? "page" : undefined}
          className={
            option === lang
              ? "px-2.5 py-1 rounded-full bg-medical-deep text-white"
              : "px-2.5 py-1 rounded-full text-medical-deep/60 hover:text-medical-deep"
          }
        >
          {option === "el" ? "ΕΛ" : "EN"}
        </Link>
      ))}
    </div>
  );
}

export function DoctorProfile({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];

  return (
    <div
      lang={lang}
      className="min-h-screen bg-medical-surface text-medical-deep font-sans selection:bg-medical-accent/20"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-medical-deep/5 px-6 py-4 flex justify-between items-center gap-4">
        <span className="font-serif italic font-semibold text-lg tracking-tight">{t.name}</span>
        <div className="flex items-center gap-3">
          <LanguageSwitch lang={lang} />
          <a
            href="#contact"
            className="bg-medical-deep text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-transform active:scale-95"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <header className="px-6 pt-8 pb-12 md:grid md:grid-cols-[2fr_3fr] md:gap-10 md:items-center">
          <div className="mb-8 md:mb-0">
            <div className="w-full aspect-[4/5] bg-slate-200 outline-1 -outline-offset-1 outline-black/5 rounded-2xl overflow-hidden">
              <img
                src={doctorPortrait}
                alt={t.portraitAlt}
                className="w-full h-full object-cover"
                width={800}
                height={1008}
                loading="eager"
              />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-accent mb-4">
              {t.specialty}
            </p>
            <h1 className="font-serif text-4xl leading-tight mb-4">{t.name}</h1>
            <p className="text-medical-deep/70 leading-relaxed text-lg">
              {t.intro.before}
              <span className="italic text-medical-accent">{t.intro.highlight}</span>
              {t.intro.after}
            </p>
          </div>
        </header>

        {/* Experience */}
        <section className="px-6 py-12 bg-white border-y border-medical-deep/5 md:rounded-2xl md:border">
          <SectionHeading number="01">{t.headings.experience}</SectionHeading>
          <ol className="space-y-8 border-l border-medical-deep/10 pl-6">
            {t.experience.map((item) => (
              <li key={`${item.title}-${item.period}`} className="relative">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-medical-accent" />
                <p className="text-xs font-mono text-medical-deep/50 mb-1">{item.period}</p>
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-medical-deep/70 leading-relaxed">{item.place}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section className="px-6 py-12">
          <SectionHeading number="02">{t.headings.education}</SectionHeading>
          <ul className="space-y-8">
            {t.education.map((item) => (
              <li key={item.title}>
                <p className="text-xs font-mono text-medical-deep/50 mb-1">{item.period}</p>
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-medical-deep/70 leading-relaxed">{item.place}</p>
                {item.note && <p className="text-sm text-medical-deep/50 mt-1">{item.note}</p>}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills & Certifications */}
        <section className="px-6 py-12 bg-white border-y border-medical-deep/5 md:rounded-2xl md:border">
          <SectionHeading number="03">{t.headings.skills}</SectionHeading>

          <div className="space-y-10">
            <div>
              <SubHeading>{t.headings.certifications}</SubHeading>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center rounded-2xl border border-medical-deep/10 p-4">
                {AI_CERTIFICATE_IMAGE && (
                  <a
                    href={withBase(AI_CERTIFICATE_IMAGE)}
                    target="_blank"
                    rel="noreferrer"
                    className="block sm:w-48 shrink-0 rounded-lg overflow-hidden outline-1 -outline-offset-1 outline-black/10"
                  >
                    <img
                      src={withBase(AI_CERTIFICATE_IMAGE)}
                      alt={t.certificate.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </a>
                )}
                <div>
                  <h4 className="font-serif text-lg mb-1">{t.certificate.title}</h4>
                  <p className="text-sm text-medical-deep/70">{t.certificate.issuer}</p>
                  <p className="text-xs text-medical-deep/50 mt-1">{t.certificate.date}</p>
                </div>
              </div>
            </div>

            <div>
              <SubHeading>{t.headings.memberships}</SubHeading>
              <ul className="text-sm text-medical-deep/70 space-y-2">
                {t.memberships.map((membership) => (
                  <li key={membership}>• {membership}</li>
                ))}
              </ul>
            </div>

            <div>
              <SubHeading>{t.headings.languages}</SubHeading>
              <ul className="grid sm:grid-cols-2 gap-3">
                {t.languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex justify-between gap-4 text-sm border-b border-medical-deep/5 pb-2"
                  >
                    <span>{language.name}</span>
                    <span className="text-medical-deep/50">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-16 text-center scroll-mt-16">
          <div className="max-w-xs mx-auto">
            <h2 className="font-serif text-3xl mb-6 italic">{t.contact.heading}</h2>
            <p className="text-sm text-medical-deep/60 mb-10">{t.contact.text}</p>

            <ul className="space-y-4">
              {PHONES.map((phone) => (
                <li key={phone.number}>
                  <a
                    href={phoneHref(phone.number)}
                    className="w-full bg-medical-accent text-white py-5 rounded-2xl shadow-xl shadow-medical-accent/20 flex flex-col items-center gap-1 transition-transform active:scale-98"
                  >
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">
                      {phone.label[lang]}
                    </span>
                    <span className="text-xl font-semibold tracking-tight">{phone.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-medical-deep/5 flex flex-col items-center gap-6">
        <div className="font-serif italic font-semibold text-sm opacity-50">{t.name}</div>
        <div className="text-[10px] uppercase tracking-widest text-medical-deep/30">
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
