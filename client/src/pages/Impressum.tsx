import { Link } from "wouter";
import { ArrowLeft, MapPin, Building2, FileText, Globe } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-sm text-warm-gray hover:text-forest transition-colors">
              <ArrowLeft size={16} />
              Zurück zur Startseite
            </button>
          </Link>
        </div>
      </header>

      <main className="container py-12 max-w-3xl">
        {/* Title */}
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-forest mb-2">Impressum</h1>
          <p className="text-sm text-warm-gray">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>
        </div>

        {/* Diensteanbieter */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center">
              <Building2 size={16} className="text-forest" />
            </div>
            <h2 className="font-display font-semibold text-lg text-forest">Diensteanbieter</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-1.5">Unternehmen</p>
              <p className="text-sm text-foreground leading-relaxed font-medium">PROLEA FZCO</p>
              <p className="text-xs text-warm-gray mt-1">Betreiberin von leihnah.de</p>
            </div>
            <div>
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-1.5">Adresse</p>
              <p className="text-sm text-foreground leading-relaxed">
                IFZA Business Park, DDP<br />
                Dubai Silicon Oasis<br />
                PO Box 342001<br />
                Dubai, UAE
              </p>
            </div>
          </div>
        </section>

        {/* Registrierung */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center">
              <FileText size={16} className="text-forest" />
            </div>
            <h2 className="font-display font-semibold text-lg text-forest">Registrierung</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-1.5">Handelsregister</p>
              <p className="text-sm text-foreground leading-relaxed">
                DIEZA – Lizenznr. 5810<br />
                Rechtsform: Free Zone Company (FZCO)
              </p>
            </div>
            <div>
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-1.5">Anwendbares Recht</p>
              <p className="text-sm text-foreground leading-relaxed">
                Freiwillige Einhaltung von § 5 DDG und EU-DSGVO.<br />
                Zusätzlich UAE PDPL (Federal Decree-Law No. 45/2021).<br />
                Verbraucherschutzvorschriften des Wohnsitzlandes gelten (Art. 6 Abs. 1 Rom I-VO).
              </p>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center">
              <Globe size={16} className="text-forest" />
            </div>
            <h2 className="font-display font-semibold text-lg text-forest">Kontakt</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-1.5">E-Mail</p>
              <a
                href="mailto:hallo@leihnah.de"
                className="text-sm text-forest hover:underline"
              >
                hallo@leihnah.de
              </a>
            </div>
            <div>
              <p className="text-xs text-warm-gray uppercase tracking-wider mb-1.5">Website</p>
              <a
                href="https://www.leihnah.de"
                className="text-sm text-forest hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.leihnah.de
              </a>
            </div>
          </div>
        </section>

        {/* Unternehmensgegenstand */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-border">
          <h2 className="font-display font-semibold text-lg text-forest mb-3">Unternehmensgegenstand</h2>
          <p className="text-sm text-foreground leading-relaxed">
            <strong>PROLEA FZCO</strong> ist ein Softwareunternehmen mit Sitz in Dubai, UAE. Das Unternehmen entwickelt und betreibt digitale Plattformen, darunter <strong>leihnah.de</strong> – eine P2P-Leihbörse, die Privatpersonen in Deutschland ermöglicht, Gegenstände nachhaltig untereinander zu verleihen. Die Plattform dient ausschließlich der Vermittlung und Informationsbereitstellung. PROLEA FZCO nimmt keine Aufträge an und ist kein Vertragspartner bei Leihvorgängen zwischen Nutzern.
          </p>
        </section>

        {/* Internationaler Standort */}
        <section className="bg-sand rounded-2xl p-6 mb-6 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-forest" />
            <h2 className="font-display font-semibold text-base text-forest">Internationaler Standort</h2>
          </div>
          <p className="text-sm text-warm-gray leading-relaxed mb-3">
            Wie Unternehmen wie Google, Booking oder mobile.de operieren wir von einem internationalen Technologie-Hub aus für den deutschen Markt. Alle Nutzerdaten werden auf EU-Servern verarbeitet.
          </p>
          <p className="text-xs text-warm-gray leading-relaxed">
            Die Dubai Silicon Oasis (DSO) ist eine staatlich geförderte Free Zone mit über 4.500 Unternehmen aus 75 Ländern. Die IFZA bietet moderne Infrastruktur, schnelle Gründungsprozesse und ein internationales Geschäftsumfeld.
          </p>
        </section>

        {/* Rechtliche Hinweise */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-border">
          <h2 className="font-display font-semibold text-lg text-forest mb-4">Rechtliche Hinweise</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">EU-Streitschlichtung</h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-foreground mb-1">Haftungsausschluss – Inhalte</h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen. Als Diensteanbieter nach § 7 Abs. 1 DDG sind wir für eigene Inhalte verantwortlich. Nach §§ 8–10 DDG besteht keine Pflicht zur Überwachung fremder Informationen.
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-foreground mb-1">Haftungsausschluss – Links</h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Für Inhalte verlinkter externer Seiten ist der jeweilige Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-foreground mb-1">Urheberrecht</h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Autors. Downloads und Kopien sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <p className="text-xs text-warm-gray text-center">
          Stand: März 2026 · leihnah.de ist ein Service von PROLEA FZCO
        </p>
      </main>
    </div>
  );
}
