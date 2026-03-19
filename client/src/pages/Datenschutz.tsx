import { Link } from "wouter";
import { ArrowLeft, Shield, Database, Users, Lock, Globe, FileText, Building2 } from "lucide-react";

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center">
          <Icon size={16} className="text-forest" />
        </div>
        <h2 className="font-display font-semibold text-lg text-forest">{title}</h2>
      </div>
      <div className="space-y-3 text-sm text-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export default function Datenschutz() {
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
          <h1 className="font-display text-3xl font-bold text-forest mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-warm-gray">
            Gemäß DSGVO (EU) 2016/679 und UAE PDPL (Federal Decree-Law No. 45/2021) · Stand: März 2026
          </p>
        </div>

        {/* Verantwortlicher */}
        <Section icon={Building2} title="1. Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der DSGVO für die Verarbeitung personenbezogener Daten auf dieser Website ist:
          </p>
          <div className="bg-sand rounded-xl p-4 mt-2">
            <p className="font-medium text-foreground">PROLEA FZCO</p>
            <p className="text-warm-gray mt-1">
              IFZA Business Park, DDP<br />
              Dubai Silicon Oasis, PO Box 342001<br />
              Dubai, UAE
            </p>
            <p className="mt-2">
              E-Mail:{" "}
              <a href="mailto:hallo@leihnah.de" className="text-forest hover:underline">
                hallo@leihnah.de
              </a>
            </p>
          </div>
        </Section>

        {/* Grundsätze */}
        <Section icon={Shield} title="2. Grundsätze der Datenverarbeitung">
          <p>
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Eine Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung der betroffenen Person oder wenn die Verarbeitung durch gesetzliche Vorschriften gestattet ist.
          </p>
          <p>
            Alle Nutzerdaten werden ausschließlich auf Servern innerhalb der Europäischen Union (Frankfurt, Deutschland) verarbeitet und gespeichert.
          </p>
        </Section>

        {/* Erhobene Daten */}
        <Section icon={Database} title="3. Erhobene Daten und Verarbeitungszwecke">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">3.1 Warteliste (E-Mail-Adresse)</h3>
              <p className="text-warm-gray">
                Wenn Sie sich für unsere Warteliste eintragen, erheben wir Ihre E-Mail-Adresse. Diese wird ausschließlich verwendet, um Sie über den Launch von leihnah.de zu informieren und Ihnen bei Bedarf weitere relevante Updates zuzusenden.
              </p>
              <ul className="mt-2 space-y-1 text-warm-gray list-disc list-inside">
                <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li><strong>Speicherdauer:</strong> Bis zum Widerruf Ihrer Einwilligung oder bis zum Launch der Plattform</li>
                <li><strong>Weitergabe:</strong> Keine Weitergabe an Dritte</li>
              </ul>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-foreground mb-1">3.2 Kontaktformular</h3>
              <p className="text-warm-gray">
                Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
              </p>
              <ul className="mt-2 space-y-1 text-warm-gray list-disc list-inside">
                <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                <li><strong>Speicherdauer:</strong> 3 Jahre nach Abschluss der Kommunikation</li>
                <li><strong>Weitergabe:</strong> Keine Weitergabe an Dritte</li>
              </ul>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-foreground mb-1">3.3 Server-Logfiles</h3>
              <p className="text-warm-gray">
                Beim Besuch unserer Website werden automatisch Informationen in Server-Logfiles gespeichert, die Ihr Browser übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
              </p>
              <ul className="mt-2 space-y-1 text-warm-gray list-disc list-inside">
                <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung)</li>
                <li><strong>Speicherdauer:</strong> 7 Tage</li>
                <li><strong>Zusammenführung:</strong> Diese Daten werden nicht mit anderen Datenquellen zusammengeführt</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Cookies */}
        <Section icon={FileText} title="4. Cookies und Tracking">
          <p>
            Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Wir setzen keine Tracking-Cookies, keine Marketing-Cookies und keine Analyse-Cookies ein.
          </p>
          <div className="bg-sand rounded-xl p-4 mt-2">
            <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-2">Eingesetzte Cookies</p>
            <table className="w-full text-xs text-warm-gray">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-2 font-semibold">Name</th>
                  <th className="text-left pb-2 font-semibold">Zweck</th>
                  <th className="text-left pb-2 font-semibold">Dauer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1.5">Session-Cookie</td>
                  <td className="py-1.5">Technischer Betrieb</td>
                  <td className="py-1.5">Session</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-warm-gray">
            Es werden keine Analyse-Tools (z. B. Google Analytics) eingesetzt. Wir verwenden kein Tracking und keine Profilerstellung.
          </p>
        </Section>

        {/* Hosting */}
        <Section icon={Globe} title="5. Hosting und Infrastruktur">
          <p>
            Diese Website wird über <strong>Vercel Inc.</strong> (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Vercel verarbeitet technische Zugriffsdaten im Rahmen der Bereitstellung des Hosting-Dienstes. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert.
          </p>
          <p className="text-warm-gray">
            Die Daten unserer Nutzer werden ausschließlich auf EU-Servern (Frankfurt, Deutschland) verarbeitet.
          </p>
        </Section>

        {/* Rechte der Betroffenen */}
        <Section icon={Users} title="6. Ihre Rechte als betroffene Person">
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul className="mt-2 space-y-2 text-warm-gray">
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können Auskunft über die von uns gespeicherten personenbezogenen Daten verlangen.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger oder unvollständiger Daten verlangen.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Recht auf Einschränkung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem strukturierten, gängigen Format erhalten.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-forest font-bold shrink-0">→</span>
              <span><strong className="text-foreground">Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Sie können eine erteilte Einwilligung jederzeit widerrufen.</span>
            </li>
          </ul>
          <p className="mt-3 text-warm-gray">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:hallo@leihnah.de" className="text-forest hover:underline">
              hallo@leihnah.de
            </a>
          </p>
        </Section>

        {/* Beschwerderecht */}
        <Section icon={Lock} title="7. Beschwerderecht bei der Aufsichtsbehörde">
          <p className="text-warm-gray">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Deutschland ist:
          </p>
          <div className="bg-sand rounded-xl p-4 mt-2">
            <p className="font-medium text-foreground">Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
            <p className="text-warm-gray text-sm mt-1">
              Friedrichstr. 219, 10969 Berlin<br />
              Tel.: +49 30 13889-0<br />
              E-Mail: mailbox@datenschutz-berlin.de<br />
              Web:{" "}
              <a
                href="https://www.datenschutz-berlin.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:underline"
              >
                www.datenschutz-berlin.de
              </a>
            </p>
          </div>
        </Section>

        {/* Datensicherheit */}
        <Section icon={Lock} title="8. Datensicherheit">
          <p className="text-warm-gray">
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p className="text-warm-gray">
            Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
          </p>
        </Section>

        {/* P2P-Plattform spezifisch */}
        <Section icon={Users} title="9. Besonderheiten der P2P-Leihbörse">
          <p className="text-warm-gray">
            leihnah.de ist eine Peer-to-Peer-Plattform (P2P), auf der Privatpersonen Gegenstände untereinander verleihen können. Sobald die Plattform vollständig in Betrieb ist, werden folgende zusätzliche Datenverarbeitungen stattfinden:
          </p>
          <ul className="mt-2 space-y-2 text-warm-gray list-disc list-inside">
            <li>Registrierungsdaten (Name, E-Mail, Wohnort) zur Kontoerstellung</li>
            <li>Inserat-Daten (Beschreibung, Fotos, Standort) zur Darstellung von Leihgegenständen</li>
            <li>Transaktionsdaten (Leihzeitraum, Vereinbarungen) zur Abwicklung von Leihvorgängen</li>
            <li>Bewertungsdaten zur Qualitätssicherung der Plattform</li>
          </ul>
          <p className="mt-3 text-warm-gray">
            Eine aktualisierte Datenschutzerklärung wird vor dem Launch der Plattform veröffentlicht.
          </p>
        </Section>

        {/* Aktualität */}
        <section className="bg-sand rounded-2xl p-6 mb-6 border border-border">
          <h2 className="font-display font-semibold text-base text-forest mb-2">10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p className="text-sm text-warm-gray leading-relaxed">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter{" "}
            <Link href="/datenschutz">
              <span className="text-forest hover:underline cursor-pointer">leihnah.de/datenschutz</span>
            </Link>{" "}
            abgerufen werden.
          </p>
        </section>

        {/* Footer */}
        <p className="text-xs text-warm-gray text-center">
          Stand: März 2026 · leihnah.de ist ein Service von PROLEA FZCO · Dubai, UAE
        </p>
      </main>
    </div>
  );
}


