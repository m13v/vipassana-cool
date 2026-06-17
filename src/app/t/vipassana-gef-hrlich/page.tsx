import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  AnimatedChecklist,
  RelatedPostsGrid,
  ProofBanner,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@seo/components";
import { PageComments } from "@/components/comments";

const PAGE_URL = "https://vipassana.cool/t/vipassana-gef-hrlich";
const PUBLISHED = "2026-06-17";
const BOOKING = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Ist Vipassana gefährlich? Die echten Zahlen, die Risikogruppe und der Tag, an dem es kippt",
  description:
    "Ist Vipassana gefährlich? Für gesunde Teilnehmer selten. In einer Studie von 2021 (Britton et al., n=96) berichteten 58 Prozent eine negativ erlebte Wirkung und 37 Prozent eine vorübergehende Beeinträchtigung; anhaltende negative Effekte traten bei 6 bis 14 Prozent auf. Schwere psychiatrische Krisen sind selten und konzentrieren sich auf eine klar benennbare Risikogruppe. Eine ehrliche Einordnung mit den Zahlen, die deutsche Seiten weglassen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ist Vipassana gefährlich? Eine ehrliche Einordnung mit echten Zahlen",
    description:
      "Die Risiken eines 10-Tage-Kurses nach Häufigkeit und Schwere sortiert, jeweils dem Kurs-Mechanismus zugeordnet, der sie erzeugt, plus die Frage, was der Anmeldebogen abfragt und was nicht.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ist Vipassana gefährlich? Eine ehrliche Einordnung",
    description:
      "Prävalenzzahlen, Risikogruppe, der strukturelle Tag-4-Punkt und der Unterschied zwischen dunkler Nacht und Psychose.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Ist Vipassana gefährlich?",
    a: "Für die meisten gesunden Teilnehmer ist ein 10-Tage-Kurs nicht gefährlich. Vorübergehende schwierige Erfahrungen sind häufig: In der Studie von Britton und Kolleginnen (2021, n=96 in achtsamkeitsbasierten Programmen) berichteten 58 Prozent mindestens eine negativ erlebte meditationsbezogene Wirkung und 37 Prozent eine vorübergehende Beeinträchtigung der Funktionsfähigkeit. Anhaltende negative Effekte traten bei 6 bis 14 Prozent auf. Diese Raten liegen in der Größenordnung der Nebenwirkungsraten von Psychotherapie. Schwere und dauerhafte psychiatrische Schäden sind selten und konzentrieren sich auf eine identifizierbare Risikogruppe: frühere psychotische Episode, Schizophrenie oder bipolare Störung in der nahen Verwandtschaft, kürzlicher starker Cannabis- oder Psychedelika-Konsum, unbehandelte Traumafolgestörung oder Alter unter 25 ohne Vorerfahrung.",
  },
  {
    q: "Warum nennen deutsche Seiten keine konkreten Zahlen?",
    a: "Weil die Goenka-Tradition selbst keine Ergebnis- oder Nebenwirkungsstatistiken veröffentlicht. Die belastbaren Zahlen stammen aus der unabhängigen Forschung der Arbeitsgruppe um Willoughby Britton und Jared Lindahl an der Brown University, deren Daten in PLOS ONE (2017) und in Clinical Psychological Science (2021) erschienen sind. Die meisten deutschsprachigen Artikel zitieren diese Primärquellen nicht und bleiben deshalb bei vagen Formulierungen wie 'in seltenen Fällen' oder 'manche fühlen sich überwältigt'. Die Quellenlage ist das eigentlich Wissenswerte: Die Zahlen existieren, sie kommen nur nicht von den Zentren selbst.",
  },
  {
    q: "Wann während eines Kurses wird es am wahrscheinlichsten kritisch?",
    a: "In der zweiten Hälfte, oft ab Tag vier bis sechs. Die ersten Tage sind eine konzentrationsaufbauende, eher stabilisierende Phase. Ab Tag vier verdichten sich drei Belastungen auf denselben Morgen: Die Praxis wird aktivierender, die ersten Adhitthana-Sitzungen (Sitzungen der starken Entschlossenheit, in denen man gebeten wird, nicht die Position zu wechseln) beginnen, und das kumulierte Schlafdefizit bei fünf bis sechs Stunden pro Nacht hat sich aufgebaut. Bei längeren 20- oder 30-Tage-Kursen verschiebt sich der heikle Punkt entsprechend in die hintere Hälfte. Das ist eine strukturelle Beobachtung über den Kursaufbau, keine Anleitung.",
  },
  {
    q: "Wer ist tatsächlich gefährdet?",
    a: "Die Risikofaktoren in der Literatur sind konsistent: eine frühere psychotische Episode gleich welcher Ursache; ein Verwandter ersten Grades mit Schizophrenie, schizoaffektiver Störung oder bipolarer Störung mit psychotischen Merkmalen; starker Cannabis-Konsum in den vergangenen sechs Monaten; klassische Psychedelika im letzten Monat; eine aktive unbehandelte Schlafstörung; ein kürzlicher akuter Belastungsfaktor wie Trauerfall, Trennung oder Jobverlust in den letzten 90 Tagen; Alter unter 25. Treffen keine dieser Punkte zu, ist die Grundrate eines schweren Vorfalls sehr niedrig. Treffen zwei oder mehr zu, ist ein Gespräch mit der eigenen Ärztin oder dem Therapeuten vor der Anmeldung der angemessene Schritt.",
  },
  {
    q: "Kann Vipassana eine Psychose auslösen?",
    a: "In einer kleinen Minderheit der Übenden ja. Die Fachliteratur dokumentiert einzelne Fallberichte akuter, meist vorübergehender Psychosen während oder nach intensiver Praxis. Über die veröffentlichten Fälle hinweg ist das Muster stabil: Fast jeder Fall hat entweder eine frühere psychotische Episode, einen Verwandten ersten Grades mit psychotischer Erkrankung, gleichzeitigen Schlafentzug oder Cannabis- bzw. Psychedelika-Konsum in den Vormonaten. Fälle bei Menschen ganz ohne Risikofaktoren sind wirklich selten. Das Risiko ist nicht null und es ist nicht zufällig; es konzentriert sich auf eine erkennbare Gruppe.",
  },
  {
    q: "Was ist der Unterschied zwischen der dunklen Nacht und einer Psychose?",
    a: "Die Dukkha-Nanas, die 'Einsichten ins Leiden', sind eine kartierte Abfolge schwieriger Einsichtsstadien in der Theravada-Meditationstheorie. Sie sind unangenehm, manchmal über Wochen, aber nicht psychotisch. Wer eine dunkle Nacht durchläuft, ist zur Realität orientiert, kann Fragen beantworten, weiß, wo er ist und welcher Tag ist, und kann die Erfahrung kohärent beschreiben. Eine Psychose dagegen bedeutet einen Bruch mit der geteilten Realität: fixierte falsche Überzeugungen, Halluzinationen, die als real erlebt werden, und Desorganisation, die ein normales Gespräch erschwert. Die beiden werden vor allem bei geringer Intensität verwechselt, weshalb ein frühes Gespräch mit einer autorisierten Lehrkraft wichtig ist.",
  },
  {
    q: "Muss ich meine Psychopharmaka für den Kurs absetzen?",
    a: "Nein. Die Goenka-Tradition rät ausdrücklich dazu, verschriebene Psychopharmaka während des Kurses weiter einzunehmen. Antidepressiva, Stimmungsstabilisierer oder Antipsychotika für den Kurs abzusetzen ist ein dokumentiertes Negativmuster, das mehrfach zu Zwischenfällen geführt hat. Der Anmeldebogen fragt nach aktueller Behandlung, damit das Zentrum planen kann. Wer über ein Absetzen nachdenkt, sollte das mit der verschreibenden Ärztin vor oder nach dem Kurs tun, nicht währenddessen. Operative Detailfragen dazu gehören an das Zentrum und an dhamma.org, nicht auf diese Seite.",
  },
  {
    q: "Was sollte ich tun, wenn es mir oder jemandem im Kurs schlecht geht?",
    a: "Sprich zuerst die Kursleitung (course manager) an, nicht erst die Lehrkraft zur nächsten Sprechzeit. Die Kursleitung ist die operative Anlaufstelle und genau dafür da. Bitte sie und die autorisierte Lehrkraft darum, für die nächste Sitzung etwas anzupassen; die Zentren haben dafür ein Vorgehen. Beschreibe das Symptom wörtlich, nicht in Pali oder in Technik-Vokabular. Den Kurs zu verlassen ist kein Versagen; Kurse laufen fortlaufend, man kann einen weiteren sitzen. Im akuten Notfall die örtliche Krisennummer (in Deutschland 112, Telefonseelsorge 0800 111 0 111) vom Zentrumstelefon anrufen. Nach dem Kurs bietet Cheetah House (cheetahhouse.org) gezielte Unterstützung für Meditierende mit belastenden Erfahrungen.",
  },
  {
    q: "Screent der Anmeldebogen auf diese Risiken?",
    a: "Teilweise. Der aktuelle Goenka-Anmeldebogen fragt nach Angst, Panikattacken, manischer Depression, Schizophrenie und ähnlichen Zuständen, mit Folgefragen zu Daten, Symptomen, Krankenhausaufenthalten, Behandlung und aktuellem Zustand. Er fragt derzeit nicht systematisch nach familiärer Vorbelastung mit psychotischen Erkrankungen, nach kürzlichem Cannabis- oder Psychedelika-Konsum, nach unverarbeitetem Trauma oder nach akuten Belastungen der letzten 90 Tage. Der Bogen beruht auf Selbstauskunft. Die wirksamste einzelne Schutzhandlung ist, Risikofaktoren ehrlich anzugeben, auch dort, wo der Bogen nicht ausdrücklich danach fragt.",
  },
  {
    q: "Ich bin kein Lehrer, sondern teile Erfahrung: Wie ehrlich ist das hier?",
    a: "Ich habe sechs 10-Tage-Kurse an drei Zentren gesessen und über 40 Tage als Helfer gedient. Ich bin keine Lehrkraft und gebe hier keine Technik-Anleitung. Diese Seite ordnet öffentlich verfügbare Forschung und den Kursaufbau ein. Für jede Frage dazu, wie man sitzt, wie man mit einer Empfindung umgeht oder wie man eine Schwierigkeit auf dem Kissen handhabt, ist dhamma.org und eine autorisierte Lehrkraft im 10-Tage-Kurs die richtige Adresse, nicht diese Seite.",
  },
];

const riskFactorItems = [
  { text: "Frühere psychotische Episode gleich welcher Ursache", checked: true },
  { text: "Verwandter ersten Grades mit Schizophrenie oder bipolarer Störung mit psychotischen Merkmalen", checked: true },
  { text: "Starker Cannabis-Konsum in den letzten sechs Monaten", checked: true },
  { text: "Klassische Psychedelika im letzten Monat", checked: true },
  { text: "Aktive, unbehandelte Schlafstörung", checked: true },
  { text: "Akuter Belastungsfaktor in den letzten 90 Tagen (Trauer, Trennung, Jobverlust)", checked: true },
  { text: "Alter unter 25 ohne nennenswerte Vorerfahrung", checked: true },
];

const distinctionRows = [
  {
    feature: "Orientierung zur Realität",
    competitor: "Bruch mit der geteilten Realität, weiß oft nicht Ort oder Tag",
    ours: "Voll orientiert, weiß Ort, Tag und Lage",
  },
  {
    feature: "Beschreibbarkeit der Erfahrung",
    competitor: "Desorganisiert, normales Gespräch wird schwer",
    ours: "Kann die Erfahrung kohärent in Worte fassen",
  },
  {
    feature: "Falsche Überzeugungen / Halluzinationen",
    competitor: "Fixierte falsche Überzeugungen, als real erlebte Halluzinationen",
    ours: "Unangenehme Stimmungen und Empfindungen, aber kein Realitätsverlust",
  },
  {
    feature: "Status in der Lehre",
    competitor: "Nicht Teil des Modells, klares Warnsignal",
    ours: "Kartierte, erwartbare Einsichtsstadien (Dukkha-Nanas)",
  },
  {
    feature: "Angemessene Reaktion",
    competitor: "Sofort Kursleitung, ggf. Kurs beenden, im Notfall Krisendienst",
    ours: "Orientiert bleiben, Gespräch mit autorisierter Lehrkraft, Praxis nicht impulsiv abbrechen",
  },
];

// Triage of the danger categories, each mapped to the course mechanic that produces it
const dangerCategories = [
  {
    name: "Akute psychotische Vorfälle",
    haeufigkeit: "Selten, konzentriert auf die Risikogruppe",
    tone: "hoch",
    mechanismus:
      "In der zweiten Kurshälfte verdichten sich aktivierende Praxis, bewegungsarme Sitzungen und kumuliertes Schlafdefizit. Für eine kleine Minderheit mit Vorbelastung wirkt diese Kombination destabilisierend.",
    screening: "teilweise",
  },
  {
    name: "Dunkle Nacht / Dukkha-Nana",
    haeufigkeit: "Mittel, viele ernsthaft Übende erleben mindestens eine Phase",
    tone: "mittel",
    mechanismus:
      "Die Theravada-Einsichtskarten beschreiben eine Folge schwieriger, aber erwartbarer Stadien. Sie können über Wochen unangenehm sein und werden manchmal mit psychiatrischem Schaden verwechselt.",
    screening: "fehlt",
  },
  {
    name: "Wiederauftauchendes Trauma",
    haeufigkeit: "Bei unverarbeiteter Traumafolgestörung erhöht",
    tone: "hoch",
    mechanismus:
      "Lange Stille und Reizreduktion können unverarbeitetes Material an die Oberfläche bringen. Bei stabilisierter, behandelter Vorgeschichte handhabbar; bei aktiver, unbehandelter PTBS ein falscher Kontext.",
    screening: "fehlt",
  },
  {
    name: "Knie-, Rücken- und Hüftbeschwerden",
    haeufigkeit: "Hoch, geringe Schwere",
    tone: "niedrig",
    mechanismus:
      "Der Tagesplan sieht rund zehn Stunden Sitzen vor. Die meisten Erstteilnehmer entwickeln Beschwerden. Die Zentren stellen auf Anfrage Stühle, Rückenstützen, zusätzliche Kissen und Bänke bereit.",
    screening: "nicht relevant",
  },
  {
    name: "Schlafentzug und Nahrungsumstellung",
    haeufigkeit: "Häufig, vorübergehend",
    tone: "niedrig",
    mechanismus:
      "Früher Tagesbeginn, fünf bis sechs Stunden Schlaf und die Essenspause am Nachmittag fordern den Körper. Für die meisten unangenehm, aber selbstbegrenzend.",
    screening: "nicht relevant",
  },
  {
    name: "Wiedereinstieg nach dem Kurs",
    haeufigkeit: "Häufig in der ersten Woche danach",
    tone: "niedrig",
    mechanismus:
      "Der Kontrast zwischen Stille und Alltag kann die erste Woche nach dem Kurs anstrengend machen. Klingt in der Regel mit Zeit und stetiger Praxis ab.",
    screening: "nicht relevant",
  },
];

const toneStyle: Record<string, string> = {
  hoch: "bg-zinc-900 text-white",
  mittel: "bg-teal-50 text-teal-700 border border-teal-200",
  niedrig: "bg-zinc-100 text-zinc-600 border border-zinc-200",
};

const relatedPosts = [
  {
    title: "Vipassana Psychose: Warum sich Fälle um Tag 4 häufen",
    href: "/t/vipassana-psychosis",
    excerpt:
      "Der strukturelle Blick auf den einen Risikobereich, der in der Fallliteratur als schwer gilt, und wann er im Kursaufbau auftaucht.",
    tag: "Vertiefung",
  },
  {
    title: "Vipassana Danger: die vollständige Triage aller Risikokategorien",
    href: "/t/vipassana-danger",
    excerpt:
      "Die englischsprachige Schwesterseite mit sieben Gefahrenkategorien, jeweils dem Kurs-Mechanismus und dem Screening-Status zugeordnet.",
    tag: "English",
  },
  {
    title: "Risiken und Sicherheit: der ausführliche Leitfaden",
    href: "/guide/risks-and-safety",
    excerpt:
      "Die ganze Bandbreite belastender Meditationserfahrungen, Prävalenzdaten und Krisenressourcen in einem Leitfaden.",
    tag: "Leitfaden",
  },
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Themen", url: "https://vipassana.cool/t/vipassana-danger" },
    { name: "Ist Vipassana gefährlich?", url: PAGE_URL },
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Ist Vipassana gefährlich? Die echten Zahlen, die Risikogruppe und der Tag, an dem es kippt",
              description:
                "Eine ehrliche, datengestützte deutschsprachige Einordnung der Risiken eines 10-Tage-Vipassana-Kurses, mit Prävalenzzahlen, Risikogruppe, dem strukturellen Tag-4-Punkt und der Unterscheidung von dunkler Nacht und Psychose.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs, PAGE_URL + "#faq")),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Themen", href: "/t/vipassana-danger" },
            { label: "Ist Vipassana gefährlich?" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-6">
        <p className="text-sm font-medium text-teal-600 mb-3">
          Ehrliche Einordnung · keine Anleitung · keine Lehrmeinung
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Ist Vipassana gefährlich?
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Jede deutschsprachige Seite zu dieser Frage sagt im Kern dasselbe:
          {" "}
          <span className="text-zinc-700">
            kann gefährlich sein, wenn du psychisch labil bist oder Drogen nimmst.
          </span>{" "}
          Das stimmt, ist aber zu vage, um eine Entscheidung darauf zu stützen.
          Diese Seite nennt die Zahlen, die sonst fehlen, benennt die Gruppe, in
          der das Risiko wirklich liegt, und zeigt, an welchem Punkt im Kurs es
          für diese Gruppe kippt.
        </p>
      </header>

      <div className="mt-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 Minuten"
        />
      </div>

      {/* Direct answer */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direkte Antwort · geprüft am 17. Juni 2026
          </p>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-900 leading-snug">
            Für die meisten gesunden Teilnehmer ist ein 10-Tage-Kurs nicht
            gefährlich. Schwere psychiatrische Krisen sind selten und
            konzentrieren sich auf eine klar benennbare Risikogruppe.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Vorübergehende schwierige Erfahrungen sind dagegen häufig. In einer
            Studie aus dem Jahr 2021 (Britton und Kolleginnen, 96 Teilnehmer in
            achtsamkeitsbasierten Programmen) berichteten{" "}
            <strong className="text-zinc-900">58 Prozent</strong> mindestens
            eine negativ erlebte meditationsbezogene Wirkung,{" "}
            <strong className="text-zinc-900">37 Prozent</strong> eine
            vorübergehende Beeinträchtigung der Funktionsfähigkeit, und{" "}
            <strong className="text-zinc-900">6 bis 14 Prozent</strong> einen
            anhaltenden negativen Effekt. Das liegt in der Größenordnung der
            Nebenwirkungsraten von Psychotherapie. Quelle:{" "}
            <a
              href="https://journals.sagepub.com/doi/10.1177/2167702621996340"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Britton et al., Clinical Psychological Science 2021
            </a>
            .
          </p>
        </div>
      </section>

      {/* Why no numbers */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-zinc-900">
          Warum sonst keine Zahl genannt wird
        </h2>
        <div className="mt-5 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Wer auf Deutsch nach den Gefahren sucht, findet überall dieselbe
            qualitative Sprache: in seltenen Fällen, manche fühlen sich
            überwältigt, kann zu viel sein. Keine dieser Seiten nennt eine
            Prävalenzzahl. Der Grund ist einfach und selbst eine Antwort wert:
            Die Goenka-Tradition selbst veröffentlicht keine Ergebnis- oder
            Nebenwirkungsstatistik. Es gibt keine offizielle Zahl von den
            Zentren, weil die Organisation keine erhebt.
          </p>
          <p>
            Die belastbaren Daten kommen von außerhalb der Tradition, aus der
            unabhängigen Forschung der Arbeitsgruppe um{" "}
            <a
              href="https://sites.brown.edu/britton/research/the-varieties-of-contemplative-experience/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Willoughby Britton und Jared Lindahl an der Brown University
            </a>
            . Ihre qualitative Studie{" "}
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0176239"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Varieties of Contemplative Experience (PLOS ONE, 2017)
            </a>{" "}
            hat über mehr als zehn Jahre die Kategorien schwieriger
            Meditationserfahrungen kartiert. Die Prozentwerte oben stammen aus
            der quantitativen Anschlussarbeit von 2021. Beides zusammen ist die
            beste öffentlich verfügbare Datenlage, und genau das ist der Punkt:
            Die Zahlen existieren, sie kommen nur nicht von der Tradition selbst.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-10">
        <ProofBanner
          metric="6 bis 14 %"
          quote="Anteil der Teilnehmer mit einem anhaltenden negativen Effekt; vorübergehende schwierige Erfahrungen sind deutlich häufiger, schwere Krisen deutlich seltener."
          source="Britton et al., Clinical Psychological Science 2021 (n=96)"
        />
      </section>

      {/* Who is at risk */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-zinc-900">
          Wo das Risiko wirklich liegt
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          Das Entscheidende an der Forschung ist nicht der Durchschnitt, sondern
          die Verteilung. Schwere Vorfälle treffen nicht zufällig irgendeinen
          Teilnehmer. Sie konzentrieren sich auf eine Gruppe, deren Merkmale in
          fast jeder Fallserie wiederkehren. Treffen keine dieser Punkte zu, ist
          die Grundrate sehr niedrig. Treffen zwei oder mehr zu, ist ein
          ärztliches oder therapeutisches Gespräch vor der Anmeldung der
          angemessene Schritt.
        </p>
        <div className="mt-8">
          <AnimatedChecklist
            title="Risikofaktoren aus der Literatur"
            items={riskFactorItems}
          />
        </div>
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          Das ist eine Einordnung, keine Diagnose. Ob ein 10-Tage-Kurs in deiner
          Situation eine gute Idee ist, beantwortet am ehesten deine behandelnde
          Ärztin oder Therapeutin, zusammen mit einer ehrlichen Angabe im
          Anmeldebogen.
        </p>
      </section>

      {/* Triage */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-zinc-900">
          Die Risiken, sortiert und dem Kurs-Mechanismus zugeordnet
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          Gefahr ist kein einzelner Block. Die Suche bündelt sehr
          unterschiedliche Dinge: ein gereiztes Knie und eine psychotische
          Episode landen unter demselben Wort. Sie nach Häufigkeit und Schwere
          zu trennen und jeweils dem Teil des Kursaufbaus zuzuordnen, der sie
          erzeugt, macht die Frage erst beantwortbar.
        </p>
        <div className="mt-8 space-y-4">
          {dangerCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {cat.name}
                </h3>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${toneStyle[cat.tone]}`}
                >
                  {cat.haeufigkeit}
                </span>
              </div>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                {cat.mechanismus}
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                Anmeldebogen:{" "}
                <span className="font-medium text-zinc-700">
                  {cat.screening}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The structural day-4 point */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-zinc-900">
          Der Punkt, an dem es strukturell kippt
        </h2>
        <div className="mt-5 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Wenn etwas Schweres passiert, dann selten am Anfang. Die ersten Tage
            eines Kurses sind eine konzentrationsaufbauende Phase, die eher
            stabilisierend wirkt. Häufig ab Tag vier verdichten sich drei
            Belastungen auf denselben Morgen: Die Praxis wird aktivierender, die
            ersten Adhitthana-Sitzungen (Sitzungen der starken Entschlossenheit,
            in denen man gebeten wird, die Position nicht zu wechseln) beginnen,
            und das kumulierte Schlafdefizit bei fünf bis sechs Stunden pro Nacht
            hat sich aufgebaut.
          </p>
          <p>
            Bei den längeren 20- und 30-Tage-Kursen verschiebt sich der heikle
            Punkt entsprechend in die hintere Hälfte. Das ist eine strukturelle
            Beobachtung über den Aufbau des Kurses, keine Anweisung und keine
            Beschreibung der Technik. Sie ist nützlich, weil sie erklärt, warum
            ein Aussteigen genau in dieser Phase so verbreitet ist und warum es
            sinnvoll ist, bei den ersten Anzeichen mit der Kursleitung zu
            sprechen statt abzuwarten, ob der nächste Tag anders wird.
          </p>
        </div>
      </section>

      {/* Dark night vs psychosis */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-3xl font-bold text-zinc-900">
          Dunkle Nacht ist nicht gleich Psychose
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          Die häufigste Verwechslung in dieser Diskussion: schwierige
          Einsichtsstadien (die Dukkha-Nanas, die dunkle Nacht) mit einer
          psychiatrischen Krise gleichzusetzen. Bei geringer Intensität lesen
          sich die Symptome ähnlich, die angemessene Reaktion ist aber jeweils
          eine andere. Diese Tabelle stellt die Unterscheidung nebeneinander.
        </p>
        <div className="mt-8">
          <ComparisonTable
            productName="Dunkle Nacht (Dukkha-Nana)"
            competitorName="Psychose"
            rows={distinctionRows}
            caveat="Im Zweifel und bei Überschneidung ist ein frühes Gespräch mit einer autorisierten Lehrkraft der richtige Schritt, nicht die Selbstdiagnose."
          />
        </div>
        <p className="mt-6 text-zinc-700 leading-relaxed">
          Cheetah House, gegründet von Dr. Willoughby Britton, dokumentiert diese
          Unterscheidung im Detail und bietet Unterstützung für Meditierende mit
          belastenden Erfahrungen:{" "}
          <a
            href="https://www.cheetahhouse.org/"
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            cheetahhouse.org
          </a>
          .
        </p>
      </section>

      {/* Where operational questions go */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Wofür diese Seite nicht zuständig ist
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Ich habe sechs 10-Tage-Kurse an drei Zentren gesessen und über 40
            Tage als Helfer gedient. Ich bin keine Lehrkraft, und diese Seite ist
            keine Anleitung. Für jede Frage dazu, wie man sitzt, wie man mit einer
            Empfindung umgeht oder wie man eine konkrete Schwierigkeit auf dem
            Kissen handhabt, ist die offizielle Quelle{" "}
            <a
              href="https://www.dhamma.org/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>{" "}
            und eine autorisierte Lehrkraft im 10-Tage-Kurs. Auch Detailfragen zur
            Anmeldung, zu Terminen, Unterkunft oder Verpflegung gehören dorthin,
            nicht hierher.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Unsicher, ob ein Kurs für deine Situation passt?"
          description="Ein kurzes Gespräch von Praktizierendem zu Praktizierendem, kein Coaching und keine Lehre, nur ehrlicher Austausch über Vorbereitung und tägliche Praxis."
        />
      </section>

      <FaqSection items={faqs} heading="Häufige Fragen" />

      <section className="max-w-5xl mx-auto px-6 mt-10">
        <RelatedPostsGrid
          title="Weiterlesen"
          posts={relatedPosts}
        />
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <PageComments pageId="vipassana-gef-hrlich" />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Fragen zur Vorbereitung? Sprich mit einem Praktizierenden."
      />
    </article>
  );
}
