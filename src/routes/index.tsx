import { createFileRoute } from "@tanstack/react-router";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const PHONE_NUMBER = "+1 (555) 012-3456";
const PHONE_HREF = "tel:+15550123456";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Julian Vane | Nephrologist & Hypertension Specialist" },
      {
        name: "description",
        content:
          "Book a consultation with Dr. Julian Vane, a board-certified nephrologist specializing in kidney health, chronic kidney disease, and hypertension.",
      },
      {
        property: "og:title",
        content: "Dr. Julian Vane | Nephrologist & Hypertension Specialist",
      },
      {
        property: "og:description",
        content:
          "Book a consultation with Dr. Julian Vane, a board-certified nephrologist specializing in kidney health, chronic kidney disease, and hypertension.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-medical-surface text-medical-deep font-sans selection:bg-medical-accent/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-medical-deep/5 px-6 py-4 flex justify-between items-center">
        <span className="font-serif italic font-semibold text-lg tracking-tight">
          Dr. Julian Vane
        </span>
        <a
          href={PHONE_HREF}
          className="bg-medical-deep text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-transform active:scale-95"
        >
          Book Now
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-8 pb-12">
        <div className="mb-8">
          <div className="w-full aspect-[4/5] bg-slate-200 outline-1 -outline-offset-1 outline-black/5 rounded-2xl overflow-hidden">
            <img
              src={doctorPortrait}
              alt="Dr. Julian Vane, board-certified nephrologist"
              className="w-full h-full object-cover"
              width={800}
              height={1008}
              loading="eager"
            />
          </div>
        </div>
        <h1 className="font-serif text-4xl leading-tight mb-4">
          Specialist in <span className="italic text-medical-accent">Nephrology</span>{" "}
          & Hypertension.
        </h1>
        <p className="text-medical-deep/70 leading-relaxed text-lg">
          Dedicated to the preservation of kidney health through advanced clinical
          diagnostics and personalized patient care.
        </p>
      </header>

      {/* Resume / Quick Info */}
      <section className="px-6 py-12 bg-white border-y border-medical-deep/5">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-medical-accent mb-8">
          Professional Background
        </h2>

        <div className="space-y-10">
          <div className="flex gap-4">
            <div className="text-xs font-mono pt-1 text-medical-deep/40 italic">01</div>
            <div>
              <h3 className="font-serif text-xl mb-2">Clinical Expertise</h3>
              <p className="text-sm text-medical-deep/70 leading-relaxed">
                Over 15 years specializing in chronic kidney disease, electrolyte
                disorders, and home dialysis management. Lead consultant at the
                Metropolitan Renal Institute.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-xs font-mono pt-1 text-medical-deep/40 italic">02</div>
            <div>
              <h3 className="font-serif text-xl mb-2">Education</h3>
              <ul className="text-sm text-medical-deep/70 space-y-2">
                <li>• Fellowship in Nephrology, Johns Hopkins</li>
                <li>• MD, Stanford University School of Medicine</li>
                <li>• Board Certified in Internal Medicine</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-xs font-mono pt-1 text-medical-deep/40 italic">03</div>
            <div>
              <h3 className="font-serif text-xl mb-2">Philosophy</h3>
              <p className="text-sm text-medical-deep/70 leading-relaxed">
                Medicine is as much about listening as it is about treating. My goal is
                to empower patients with the knowledge to manage their renal health
                proactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-xs mx-auto">
          <h2 className="font-serif text-3xl mb-6 italic">Ready to discuss your health?</h2>
          <p className="text-sm text-medical-deep/60 mb-10">
            Please note that appointments are scheduled exclusively via telephone to
            ensure personalized attention.
          </p>

          <a
            href={PHONE_HREF}
            className="block w-full bg-medical-accent text-white py-5 rounded-2xl shadow-xl shadow-medical-accent/20 flex flex-col items-center gap-1 transition-transform active:scale-98"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">
              Call to Schedule
            </span>
            <span className="text-xl font-semibold tracking-tight">{PHONE_NUMBER}</span>
          </a>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-medical-deep/40 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            Lines open: Mon–Fri, 8am–5pm
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-medical-deep/5 flex flex-col items-center gap-6">
        <div className="font-serif italic font-semibold text-sm opacity-50">
          Dr. Julian Vane
        </div>
        <div className="text-[10px] uppercase tracking-widest text-medical-deep/30">
          &copy; 2024 Nephrology Associates
        </div>
      </footer>
    </div>
  );
}
