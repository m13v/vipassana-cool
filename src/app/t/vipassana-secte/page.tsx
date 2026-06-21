import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  StepTimeline,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@seo/components";
import { PageComments } from "@/components/comments";

const PAGE_URL = "https://vipassana.cool/t/vipassana-secte";
const DATE_PUBLISHED = "2026-06-21";

export const metadata: Metadata = {
  title: "Vipassana, une secte ? Le test des 10 critères officiels français",
  description:
    "« Secte » n'est pas une catégorie juridique en France. Ce qui est puni, c'est la dérive sectaire (loi About-Picard, 12 juin 2001), surveillée par la MIVILUDES. On passe le cours Goenka de 10 jours au crible des 10 critères de dangerosité des Renseignements Généraux, ligne par ligne.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana, une secte ? Le test des 10 critères officiels français",
    description:
      "Le cours Goenka de 10 jours passé au crible des 10 critères de dangerosité utilisés par l'administration française, et la distinction juridique entre secte et dérive sectaire.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana, une secte ? Le test des 10 critères officiels français",
    description:
      "Pas le modèle BITE américain. Les 10 critères français de dangerosité, appliqués mécanique par mécanique au cours Goenka de 10 jours.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "La méditation Vipassana est-elle une secte ?",
    a: "En droit français, « secte » n'est pas une catégorie. La liberté de conscience est protégée et croire à quelque chose, même minoritaire, n'est pas un délit. Ce que la loi sanctionne, c'est la dérive sectaire, c'est-à-dire l'abus de faiblesse créé par la loi About-Picard du 12 juin 2001. Passé au crible des 10 critères de dangerosité utilisés historiquement par l'administration, le cours Goenka de 10 jours en écarte la quasi-totalité : cours gratuit, pas de rupture imposée avec la famille, départ libre, aucun contact après le jour 10. Les seuls critères qui ressortent en « partiel » décrivent des contraintes temporaires qui s'arrêtent le jour où vous franchissez le portail.",
  },
  {
    q: "Quelle est la différence entre une secte et une dérive sectaire ?",
    a: "Une « secte » désigne, dans le langage courant, un groupe de croyance minoritaire. Ce n'est pas illégal en France et l'État ne tient officiellement plus de liste de sectes depuis le milieu des années 2000. Une « dérive sectaire » est un concept de droit : c'est l'ensemble de comportements qui portent atteinte aux droits et libertés d'une personne par un assujettissement psychologique ou physique. C'est cela, et non la croyance elle-même, que surveille la MIVILUDES et que punit la loi About-Picard.",
  },
  {
    q: "Quels sont les 10 critères de dangerosité utilisés par l'administration française ?",
    a: "Ils proviennent des Renseignements Généraux et ont été repris par le rapport parlementaire Guyard de 1995 : la déstabilisation mentale, le caractère exorbitant des exigences financières, la rupture avec l'environnement d'origine, les atteintes à l'intégrité physique, l'embrigadement des enfants, le discours antisocial, les troubles à l'ordre public, l'importance des démêlés judiciaires, le détournement des circuits économiques traditionnels, et les tentatives d'infiltration des pouvoirs publics. La France a depuis officiellement délaissé l'approche par listes au profit d'un « faisceau d'indices » examiné au cas par cas.",
  },
  {
    q: "Le cours Vipassana coûte-t-il de l'argent ?",
    a: "Non. Le cours est entièrement gratuit : enseignement, hébergement et repas sont fournis sans frais. Un don est possible uniquement à la fin du cours, librement, et seuls les anciens élèves ayant déjà suivi un cours complet sont autorisés à donner. Aucun montant n'est vérifié, aucune cotisation n'est exigée. Le critère « exigences financières exorbitantes » est celui sur lequel le cours est le plus clairement à l'opposé du schéma sectaire.",
  },
  {
    q: "Peut-on quitter le cours avant la fin ?",
    a: "Oui. Partir est déconseillé pendant les trois premiers jours, parce que la technique ne peut pas être jugée si tôt, mais personne ne vous retient physiquement. Si vous partez, vous n'êtes ni facturé, ni mis à l'écart, ni recontacté. Vous pouvez aussi ne jamais revenir et n'avoir plus aucune nouvelle du centre.",
  },
  {
    q: "Des centres de méditation ont-ils déjà été cités dans des rapports français sur les sectes ?",
    a: "Plusieurs groupes liés au bien-être et à la méditation ont figuré dans des inventaires parlementaires des années 1990, à l'époque où la France raisonnait par listes. Cette approche a été officiellement critiquée puis abandonnée à partir de 2005, et un rapport gouvernemental de 2021 a conclu que les listes « se sont révélées peu probantes ». Apparaître dans un inventaire ancien n'est pas une condamnation : le droit français ne juge pas l'appartenance, il juge des faits d'abus.",
  },
  {
    q: "Y a-t-il un culte de la personnalité autour de S.N. Goenka ?",
    a: "Goenka est décédé en 2013 et l'organisation a continué sans lui, précisément parce qu'il a refusé de bâtir une dévotion autour de sa personne. Dans ses discours, il répète de ne rien accepter aveuglément et de vérifier par sa propre expérience. Il n'y a ni leader charismatique vivant, ni figure successeur, ni serment d'allégeance.",
  },
  {
    q: "Je ne suis pas enseignant : ce texte donne-t-il des conseils sur comment pratiquer ?",
    a: "Non, et c'est volontaire. Je partage une expérience de pratiquant, pas un enseignement. Dans cette tradition, la technique se transmet uniquement par un enseignant assistant agréé, à l'intérieur d'un cours résidentiel de 10 jours. Pour toute question sur comment pratiquer ou comment gérer une difficulté, la bonne adresse est dhamma.org et un enseignant agréé, pas une page web.",
  },
];

type Verdict = "ecarte" | "partiel";

const criteres: {
  n: number;
  titre: string;
  verdict: Verdict;
  mecanique: string;
}[] = [
  {
    n: 1,
    titre: "La déstabilisation mentale",
    verdict: "partiel",
    mecanique:
      "Le silence et l'isolement sur 10 jours sont intenses et peuvent remuer beaucoup de choses. C'est réel et c'est borné : aucune emprise n'est revendiquée sur votre esprit après le jour 10. Sur les expériences difficiles, voir la page dédiée plus bas.",
  },
  {
    n: 2,
    titre: "Le caractère exorbitant des exigences financières",
    verdict: "ecarte",
    mecanique:
      "Cours à 0 euro. Don facultatif, uniquement à la fin, et seulement de la part d'anciens élèves. Aucun montant n'est contrôlé. C'est le signal anti-secte le plus fort de la tradition.",
  },
  {
    n: 3,
    titre: "La rupture avec l'environnement d'origine",
    verdict: "ecarte",
    mecanique:
      "Vous rentrez chez vous au jour 11. Aucune injonction à couper les liens avec la famille, les amis ou le travail. L'isolement est limité aux 10 jours, sur place, pour une raison fonctionnelle.",
  },
  {
    n: 4,
    titre: "Les atteintes à l'intégrité physique",
    verdict: "ecarte",
    mecanique:
      "Repas fournis (régime végétarien), sommeil prévu, soins médicaux non interdits, départ possible. Aucune privation dangereuse n'est imposée.",
  },
  {
    n: 5,
    titre: "L'embrigadement des enfants",
    verdict: "ecarte",
    mecanique:
      "Les cours de 10 jours sont réservés aux adultes. Pas d'enfants captifs, pas d'endoctrinement de mineurs.",
  },
  {
    n: 6,
    titre: "Le discours antisocial",
    verdict: "ecarte",
    mecanique:
      "Aucun discours hostile à la société ou appelant au repli. Le cours se conclut au contraire par une réintégration explicite à la vie ordinaire.",
  },
  {
    n: 7,
    titre: "Les troubles à l'ordre public",
    verdict: "ecarte",
    mecanique:
      "Pas d'historique de troubles à l'ordre public liés aux centres. Les cours sont silencieux et fermés sur eux-mêmes pendant 10 jours, puis se vident.",
  },
  {
    n: 8,
    titre: "L'importance des démêlés judiciaires",
    verdict: "ecarte",
    mecanique:
      "Le réseau Goenka n'est pas connu pour un contentieux d'abus structurel. Ce critère cherche un schéma de procédures lié à l'exploitation des membres, qui n'est pas une caractéristique de la tradition.",
  },
  {
    n: 9,
    titre: "Le détournement des circuits économiques traditionnels",
    verdict: "ecarte",
    mecanique:
      "Modèle de dana (don volontaire). Les centres sont portés par des associations à but non lucratif. Pas de transfert d'actifs, pas de circuit économique parallèle imposé.",
  },
  {
    n: 10,
    titre: "Les tentatives d'infiltration des pouvoirs publics",
    verdict: "ecarte",
    mecanique:
      "Aucune démarche connue d'infiltration politique ou administrative. La tradition ne cherche ni reconnaissance d'État ni position d'influence.",
  },
];

const ecartes = criteres.filter((c) => c.verdict === "ecarte").length;
const partiels = criteres.filter((c) => c.verdict === "partiel").length;

const relatedPosts = [
  {
    title: "Vipassana, une secte ? L'audit par les rubriques BITE et Lifton",
    href: "/t/is-vipassana-a-cult",
    excerpt:
      "La même question, traitée avec les deux grilles académiques anglo-saxonnes : le modèle BITE de Hassan et les 8 critères de Lifton, ligne par ligne.",
    tag: "En anglais",
  },
  {
    title: "Chaque règle qui semble sectaire précède la psychologie des sectes",
    href: "/t/vipassana-cult",
    excerpt:
      "Silence, coupure du téléphone, repas avant midi : chaque règle remonte à un code monastique bouddhiste vieux de plus de 2 300 ans.",
    tag: "En anglais",
  },
  {
    title: "Vipassana et psychose : ce que disent les données",
    href: "/t/vipassana-psychosis",
    excerpt:
      "Sur le critère le plus sérieux, la déstabilisation mentale : les risques réels, les rares cas documentés, et ce qu'il faut savoir avant de s'inscrire.",
    tag: "Sécurité",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen" lang="fr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana, une secte ? Le test des 10 critères officiels français",
              description:
                "Le cours Goenka de 10 jours passé au crible des 10 critères de dangerosité de l'administration française, et la distinction juridique entre secte et dérive sectaire.",
              url: PAGE_URL,
              datePublished: DATE_PUBLISHED,
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
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Accueil", url: "https://vipassana.cool" },
              { name: "Guides", url: "https://vipassana.cool/t/is-vipassana-a-cult" },
              { name: "Vipassana, une secte ?", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Vipassana, une secte ?" },
          ]}
        />
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600">
          Repères juridiques, pas une opinion de plus
        </p>
        <h1 className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">
          Vipassana, une secte ? Le test des 10 critères officiels français
        </h1>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={DATE_PUBLISHED}
          readingTime="10 min de lecture"
        />
      </header>

      <div className="mx-auto max-w-3xl px-6">
        <div className="my-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-700">
            Réponse directe (vérifié juin 2026)
          </p>
          <p className="text-zinc-800">
            En France, « secte » n&apos;est pas une catégorie juridique :
            croire à quelque chose de minoritaire n&apos;est pas un délit. Ce
            que la loi punit, c&apos;est la <strong>dérive sectaire</strong>,
            c&apos;est-à-dire l&apos;abus de faiblesse créé par la{" "}
            <strong>loi About-Picard du 12 juin 2001</strong> et surveillé par
            la <strong>MIVILUDES</strong>. Mesuré sur les 10 critères de
            dangerosité utilisés par l&apos;administration, le cours Goenka de
            10 jours en <strong>écarte {ecartes} sur 10</strong> et n&apos;est
            « partiel » que sur {partiels}, celui qui décrit une contrainte
            temporaire prenant fin au jour 10. Aucun critère n&apos;est rempli
            au sens d&apos;une dérive.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source publique : la{" "}
            <a
              href="https://fr.wikipedia.org/wiki/Loi_tendant_%C3%A0_renforcer_la_pr%C3%A9vention_et_la_r%C3%A9pression_des_mouvements_sectaires"
              className="text-teal-600 underline hover:text-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              loi n°2001-504 dite About-Picard
            </a>
            , appliquée par la MIVILUDES (mission du ministère de
            l&apos;Intérieur).
          </p>
        </div>

        <section className="my-12">
          <p className="text-lg leading-relaxed text-zinc-700">
            La plupart des pages en français qui traitent de « Vipassana
            secte » sont soit des témoignages bruts (quelqu&apos;un a trouvé
            ça oppressant et est parti), soit des démentis défensifs en un
            paragraphe. Et toutes celles qui essaient d&apos;argumenter
            empruntent les grilles américaines, le modèle BITE ou les critères
            de Lifton. Or quand un lecteur français tape ce mot, sa question
            est implicitement cadrée par un tout autre référentiel : celui de
            la loi française et de la MIVILUDES. C&apos;est ce référentiel,
            précis et vérifiable, que j&apos;applique ici.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Avertissement : je ne suis pas enseignant. J&apos;ai suivi six
            cours de 10 jours dans trois centres et je partage une expérience
            de pratiquant. Cette page parle d&apos;histoire, de droit et de
            logistique, pas de technique. Pour apprendre à pratiquer,
            l&apos;adresse est dhamma.org et un enseignant agréé.
          </p>
        </section>

        <section className="my-14">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Le mot piège : « secte » contre « dérive sectaire »
          </h2>
          <p className="mb-6 text-zinc-700">
            Tout le malentendu vient de là. Le droit français ne juge pas une
            croyance, il juge des faits. Confondre les deux mots, c&apos;est
            poser la mauvaise question dès le départ.
          </p>
          <BeforeAfter
            title="Ce que la France distingue"
            before={{
              label: "« Secte » (le mot courant)",
              content:
                "Un groupe de croyance minoritaire. Le terme n'a pas de définition légale en France et l'État ne tient plus de liste officielle. Juger ce mot revient à juger une opinion.",
              highlights: [
                "Aucune définition juridique",
                "Croire n'est pas un délit",
                "Liberté de conscience protégée",
              ],
            }}
            after={{
              label: "« Dérive sectaire » (le concept de droit)",
              content:
                "Des comportements qui portent atteinte aux droits d'une personne par un assujettissement psychologique ou physique. C'est cela, et seulement cela, qui est répréhensible et surveillé.",
              highlights: [
                "Délit d'abus de faiblesse (loi About-Picard, 2001)",
                "Surveillée par la MIVILUDES",
                "Repose sur des faits, pas sur la foi",
              ],
            }}
          />
        </section>

        <section className="my-14">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Comment la France en est arrivée là
          </h2>
          <p className="mb-2 text-zinc-700">
            Le cadre français a une histoire précise, et elle explique pourquoi
            la bonne question n&apos;est pas « est-ce une secte ? » mais « y
            a-t-il dérive ? ».
          </p>
          <StepTimeline
            steps={[
              {
                title: "1995 : le rapport Guyard",
                description:
                  "Une commission d'enquête parlementaire dresse une liste de 173 mouvements répondant à au moins un des 10 critères de dangerosité définis par les Renseignements Généraux. C'est l'âge de l'approche par listes.",
              },
              {
                title: "12 juin 2001 : la loi About-Picard",
                description:
                  "La loi n°2001-504 crée le délit d'abus frauduleux de l'état d'ignorance ou de faiblesse. Pour la première fois, c'est l'abus qui est visé, pas la croyance. C'est l'outil pénal central contre les dérives sectaires.",
              },
              {
                title: "28 novembre 2002 : naissance de la MIVILUDES",
                description:
                  "Le décret n°2002-1392 crée la Mission interministérielle de vigilance et de lutte contre les dérives sectaires, qui remplace l'observatoire de 1996.",
              },
              {
                title: "2005 puis 2021 : la fin des listes",
                description:
                  "Une circulaire de 2005 recommande d'abandonner les listes de sectes au profit d'un « faisceau d'indices ». Un rapport de 2021 confirme que l'approche par listes « se sont révélées peu probantes ». On juge désormais des comportements, au cas par cas.",
              },
            ]}
          />
        </section>

        <section className="my-14">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Le test : les 10 critères, appliqués mécanique par mécanique
          </h2>
          <p className="mb-6 text-zinc-700">
            Voici la partie qu&apos;aucune autre page en français ne fait. Je
            reprends les 10 critères de dangerosité des Renseignements Généraux,
            ceux du rapport de 1995, et je colle chacun à une mécanique
            concrète du cours de 10 jours : la règle des dons, l&apos;heure des
            repas, la politique de départ. Pas à une impression, à un fait.
          </p>

          <div className="mb-6 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-medium text-teal-700">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7.5l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {ecartes} critères écartés
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 font-medium text-zinc-600">
              <span className="inline-block h-2 w-2 rounded-full bg-zinc-400" />
              {partiels} critère partiel
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 font-medium text-zinc-500">
              0 critère rempli
            </span>
          </div>

          <div className="space-y-3">
            {criteres.map((c) => (
              <div
                key={c.n}
                className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-700">
                  {c.n}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-zinc-900">
                      {c.titre}
                    </h3>
                    {c.verdict === "ecarte" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7.5l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Écarté
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600">
                        Partiel
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {c.mecanique}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-5">
            <p className="mb-1 text-sm font-semibold text-teal-700">
              Le fait à retenir
            </p>
            <p className="text-sm text-zinc-700">
              Le seul critère qui ressort en « partiel » est la déstabilisation
              mentale, et il décrit une contrainte qui s&apos;arrête le jour 10.
              Les neuf autres sont écartés, à commencer par le plus décisif :
              les exigences financières. Un cours à 0 euro, où l&apos;on ne
              peut donner qu&apos;après l&apos;avoir terminé, est l&apos;exact
              inverse du modèle économique d&apos;une secte. L&apos;outil le
              plus utile pour tenir une pratique ensuite, un binôme de méditation,
              est d&apos;ailleurs proposé{" "}
              <Link
                href="/practice-buddy"
                className="text-teal-600 underline hover:text-zinc-900"
              >
                en dehors de l&apos;organisation
              </Link>
              , ce qu&apos;une secte ne ferait jamais.
            </p>
          </div>
        </section>

        <section className="my-14">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Là où la critique est légitime
          </h2>
          <p className="mb-4 text-zinc-700">
            Je ne ferais pas confiance à une page qui ne dirait que du bien.
            Voici les points réels, à connaître avant de s&apos;inscrire.
          </p>
          <ul className="list-disc space-y-3 pl-6 text-zinc-700">
            <li>
              <strong className="text-zinc-900">
                Le règlement pendant le cours est strict.
              </strong>{" "}
              Pas de parole, pas de téléphone, pas de lecture, horaire imposé.
              C&apos;est fonctionnel, mais cela peut être vécu comme autoritaire
              si vous y êtes sensible.
            </li>
            <li>
              <strong className="text-zinc-900">
                Partir tôt est fortement déconseillé.
              </strong>{" "}
              Des témoignages décrivent une pression à terminer les 10 jours.
              La raison avancée est qu&apos;on ne peut pas juger la méthode en
              trois jours, mais cette insistance met certaines personnes mal à
              l&apos;aise, et c&apos;est compréhensible.
            </li>
            <li>
              <strong className="text-zinc-900">
                L&apos;expérience intérieure peut être brutale.
              </strong>{" "}
              Le silence et l&apos;intensité font remonter beaucoup de choses.
              C&apos;est le critère « déstabilisation mentale », et il faut le
              prendre au sérieux : voir la page sur les risques plus bas.
            </li>
            <li>
              <strong className="text-zinc-900">
                L&apos;organisation est centralisée.
              </strong>{" "}
              Tous les centres utilisent les mêmes enregistrements de Goenka.
              Cela garantit la cohérence mais peut sembler figé.
            </li>
          </ul>
          <p className="mt-4 text-zinc-700">
            La rigidité, à elle seule, ne fait pas une dérive sectaire. Un
            internat, une formation médicale ou un conservatoire sont rigides.
            La question de droit est de savoir si la contrainte sert la personne
            ou l&apos;exploite. Sur tous les critères qui testent
            l&apos;exploitation (argent, rupture imposée, sanction du départ,
            embrigadement), le cours est écarté.
          </p>
        </section>

        <section className="my-14">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Ce qu&apos;il faut vraiment surveiller
          </h2>
          <p className="mb-4 text-zinc-700">
            Si vous arrivez avec des inquiétudes, voici les vrais signaux à
            vérifier, ceux que cherche le droit français. Ils valent pour
            n&apos;importe quel groupe, pas seulement celui-ci.
          </p>
          <div className="space-y-3">
            {[
              "Après un cours, est-ce qu'on vous recontacte sans votre accord explicite ? Si oui, c'est un signal. Dans cette tradition, à mon expérience, non.",
              "Vous demande-t-on de donner, ou fait-on pression sur le montant ? Vous devez pouvoir donner zéro, sans que personne ne vérifie.",
              "Une figure vivante a-t-elle le dernier mot ? Si un enseignant substitue son autorité aux enregistrements ou à votre propre vérification, c'est une dérive.",
              "Vous demande-t-on de couper les liens avec votre entourage ? Cela n'arrive jamais ici et serait disqualifiant.",
              "Vous demande-t-on de recruter ? Vous ne devriez pas. Le bouche-à-oreille, ou rien.",
            ].map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-4"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal-300 text-xs font-semibold text-teal-600">
                  {i + 1}
                </div>
                <p className="text-sm text-zinc-600">{line}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-14">
          <h2 className="mb-3 text-2xl font-bold text-zinc-900">
            Mon verdict, après six cours
          </h2>
          <p className="mb-4 text-zinc-700">
            J&apos;ai suivi six cours Goenka de 10 jours dans trois centres
            différents, et j&apos;ai passé des années ensuite à essayer de
            tenir une pratique quotidienne, en observant ce que
            l&apos;organisation me demande, ou ne me demande pas. Sur le
            référentiel français, mon évaluation honnête : {ecartes} critères
            écartés sur 10, {partiels} partiel qui s&apos;arrête au jour 10, et
            aucun critère rempli au sens d&apos;une dérive.
          </p>
          <p className="text-zinc-700">
            Si vous appelez « secte » tout groupe aux règles strictes, alors
            oui, ça en a l&apos;allure. Si vous employez le mot comme le droit
            français l&apos;entend, à travers la notion de dérive sectaire et
            d&apos;abus de faiblesse, ce n&apos;en est pas une. C&apos;est une
            formation de méditation gratuite, exigeante, financée par le don,
            très encadrée pendant le cours et qui ne vous demande pratiquement
            rien une fois dehors.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination="https://cal.com/team/mediar/vipassana"
          site="Vipassana"
          heading="Une question avant ou après un cours ?"
          description="Échangez avec un pratiquant qui a suivi six cours, sans jargon et sans enseignement de technique."
        />

        <div className="my-12">
          <FaqSection items={faqs} heading="Questions fréquentes" />
        </div>

        <RelatedPostsGrid
          title="À lire ensuite"
          posts={relatedPosts}
        />

        <PageComments pageId="t-vipassana-secte" />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination="https://cal.com/team/mediar/vipassana"
        site="Vipassana"
        description="Une question sur un cours ? Parlez à un pratiquant, pas à un vendeur."
      />
    </article>
  );
}
