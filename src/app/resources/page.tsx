import type { Metadata } from "next";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Useful Resources",
  description:
    "200+ curated resources for Vipassana meditation as taught by S.N. Goenka — books, documentaries, podcasts, research, apps, blogs, and official dhamma.org links.",
};

export default function Resources() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
          Curated Collection
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Useful Resources
        </h1>
        <p className="max-w-2xl text-muted">
          A comprehensive collection of books, documentaries, podcasts, research papers,
          apps, blog posts, and official resources related to Vipassana meditation as taught
          by S.N. Goenka in the tradition of Sayagyi U Ba Khin.
        </p>
      </section>

      {/* Table of Contents */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="mb-4 text-lg font-semibold">Contents</h2>
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-accent hover:underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Official Goenka / dhamma.org Resources */}
      <ResourceSection id="official" title="Official Goenka / dhamma.org Network">
        <SubSection title="Main Websites">
          <LinkList
            links={[
              { href: "https://www.dhamma.org/", title: "dhamma.org", description: "The primary global website for Vipassana Meditation as taught by S.N. Goenka. Course schedules, center directory, introductory information." },
              { href: "https://www.vridhamma.org/", title: "Vipassana Research Institute (VRI)", description: "Established by Goenka to investigate and publish literature on Vipassana. Research papers, publications, Pali text translations, newsletters." },
              { href: "https://discourses.dhamma.org/", title: "Discourses.dhamma.org", description: "Old Student resource for accessing S.N. Goenka's 3-day, 10-day, and Mahasatipatthana Sutta course discourses in many languages." },
              { href: "https://pariyatti.org/", title: "Pariyatti.org", description: "Nonprofit bookstore and resource center providing books, podcasts, and 'Daily Words of the Buddha' emails. Sole North American distributor of Buddhist Publication Society and Pali Text Society books." },
              { href: "https://store.pariyatti.org/", title: "Pariyatti Store", description: "Online bookstore with nearly 900 print titles, audio resources, and video streaming related to Vipassana and Theravada Buddhism." },
              { href: "https://www.globalpagoda.org/", title: "Global Vipassana Pagoda", description: "Website for the world's largest meditation dome hall (seating 8,000) near Mumbai, built under Goenka's guidance and inaugurated in 2009." },
              { href: "https://giri.vridhamma.org/", title: "Dhamma Giri — Vipassana International Academy", description: "The main center and headquarters in Igatpuri, India. Serves around 600 students per 10-day course." },
            ]}
          />
        </SubSection>

        <SubSection title="Regional Centers (Selected)">
          <LinkList
            links={[
              { href: "https://dhara.dhamma.org/", title: "Dhamma Dhara (Shelburne Falls, MA)", description: "First Goenka center outside India, established 1982." },
              { href: "https://mahavana.dhamma.org/", title: "Dhamma Mahavana (California)", description: "Oldest Goenka center in California." },
              { href: "https://ny.us.dhamma.org/", title: "New York Vipassana Association", description: "New York regional center." },
              { href: "https://uk.dhamma.org/", title: "UK Vipassana — Dhamma Dipa", description: "'Island of Dhamma', established 1991." },
              { href: "https://santosa.dhamma.org/", title: "Dhamma Santosa (Bay Area)", description: "Bay Area Vipassana Center." },
              { href: "https://siri.dhamma.org/", title: "Dhamma Siri (Kaufman, Texas)", description: "Texas Vipassana center." },
              { href: "https://www.dhamma.org/en-US/locations/directory", title: "Complete Worldwide Directory", description: "393+ locations in 94+ countries, including 264 permanent centers." },
            ]}
          />
        </SubSection>

        <SubSection title="Special Programs & Sub-Resources">
          <LinkList
            links={[
              { href: "https://na.prison.dhamma.org/en/", title: "North American Vipassana Prison Project", description: "Since 1997, bringing 10-day courses to correctional facilities." },
              { href: "https://kunja.dhamma.org/virtual/", title: "Virtual Group Sittings", description: "Virtual group sittings for Old Students." },
              { href: "https://www.dhamma.org/en/about/mobile-app", title: "Official Dhamma.org Mobile App", description: "Group sitting recordings, daily sitting log, center/course finder." },
              { href: "https://www.vridhamma.org/Children-Courses", title: "Children's Anapana Courses", description: "Courses for children ages 8-12." },
              { href: "https://www.vridhamma.org/Teenagers-Course", title: "Teenagers' Anapana Courses", description: "Courses for teenagers ages 13-18." },
              { href: "https://www.vridhamma.org/free-books", title: "Free Dhamma Books from VRI", description: "Free downloadable books from the Vipassana Research Institute." },
              { href: "https://schedule.vridhamma.org/eligibility", title: "Course Eligibility Criteria", description: "Requirements and scheduling information for courses." },
            ]}
          />
        </SubSection>

        <SubSection title="Course Information">
          <LinkList
            links={[
              { href: "https://www.dhamma.org/en-US/courses/search", title: "Course Search", description: "Search for 10-day courses worldwide." },
              { href: "https://www.dhamma.org/en/courses/glossary", title: "Course Glossary", description: "Definitions of all course types." },
              { href: "https://www.dhamma.org/en-US/requirements", title: "Old Student Course Requirements", description: "Requirements for advanced courses." },
              { href: "https://www.dhamma.org/en/code.shtml", title: "Code of Discipline", description: "Rules and expectations for course attendees." },
              { href: "https://www.dhamma.org/en-US/publications", title: "Publications for Old Students", description: "Books and materials available for Old Students." },
            ]}
          />
        </SubSection>

        <SubSection title="Newsletters">
          <LinkList
            links={[
              { href: "https://www.vridhamma.org/", title: "VRI Newsletter", description: "Monthly English/Hindi newsletters from the Vipassana Research Institute." },
              { href: "https://pariyatti.org/", title: "Pariyatti Monthly Newsletter", description: "Inspiring and educational monthly newsletter; also offers daily 'Words of the Buddha' emails." },
              { href: "https://na.prison.dhamma.org/", title: "Vipassana Prison Newsletter", description: "Published by the Vipassana Prison Trust for correctional facility programs." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* Books */}
      <ResourceSection id="books" title="Books">
        <SubSection title="Core / Essential">
          <LinkList
            links={[
              { href: "https://www.amazon.com/Art-Living-Vipassana-Meditation-Taught-ebook/dp/B0069CJMG6", title: "The Art of Living: Vipassana Meditation as Taught by S.N. Goenka", description: "By William Hart. The first and most authoritative English-language book on the Goenka tradition. Prepared under Goenka's guidance. Translated into 15+ languages." },
              { href: "https://www.amazon.com/Discourse-Summaries-Vipassana-Meditation-1-Jan-2000/dp/B011T8KGY6", title: "The Discourse Summaries", description: "By S.N. Goenka (condensed by William Hart). Summaries of all 11 evening discourses from a 10-day course." },
              { href: "https://store.pariyatti.org/", title: "Satipatthana Sutta Discourses", description: "By S.N. Goenka. Examination of the principal text in which the technique of Vipassana is systematically explained." },
            ]}
          />
        </SubSection>

        <SubSection title="Other Books by S.N. Goenka">
          <LinkList
            links={[
              { href: "https://store.pariyatti.org/art-of-dying-ebook-vipassana", title: "The Art of Dying", description: "Collection of articles on facing end of life, featuring Pali texts, Goenka's writings, poems, and essays by meditators." },
              { href: "https://store.pariyatti.org/", title: "Chronicles of Dhamma", description: "Selected Articles from the Vipassana Newsletter, arranged by theme. VRI 2012, Pariyatti 2016." },
              { href: "https://store.pariyatti.org/", title: "Meditation Now: Inner Peace Through Inner Wisdom", description: "Talks and guidance on Vipassana meditation practice." },
              { href: "https://store.pariyatti.org/", title: "For the Benefit of Many", description: "Talks and Answers to Questions from Vipassana Students 1983-2000." },
              { href: "https://store.pariyatti.org/", title: "The Gem Set in Gold: Dhamma Chanting", description: "Pali chanting used in the Vipassana tradition." },
              { href: "https://store.pariyatti.org/", title: "Gotama the Buddha: His Life and His Teaching", description: "Brief sketch of the life and teaching of the Buddha." },
              { href: "https://store.pariyatti.org/", title: "Dhamma Verses", description: "Poems of a Modern-day Master of Vipassana Meditation." },
              { href: "https://store.pariyatti.org/", title: "The Caravan of Dhamma", description: "Diary of S.N. Goenka's 'Meditation Now' tour of Europe and North America, 2002." },
            ]}
          />
        </SubSection>

        <SubSection title="Related Books">
          <LinkList
            links={[
              { href: "https://www.amazon.com/Waking-Up-Spirituality-Without-Religion/dp/1451636024", title: "Waking Up: A Guide to Spirituality Without Religion", description: "By Sam Harris. Discusses Vipassana extensively; Harris practiced Vipassana as his first meditation style and has completed retreats up to 3 months." },
              { href: "https://www.amazon.com/10-Happier-Self-Help-Actually-Works/dp/0062265423", title: "10% Happier", description: "By Dan Harris. New York Times bestseller by ABC News anchor about meditation after an on-air panic attack." },
              { href: "https://www.amazon.com/Altered-Traits-Science-Reveals-Meditation/dp/0399184384", title: "Altered Traits: Science Reveals How Meditation Changes Your Mind, Brain, and Body", description: "By Daniel Goleman & Richard Davidson. Review of 6,000+ scientific studies on meditation. Goleman studied Vipassana with S.N. Goenka." },
              { href: "https://www.goodreads.com/en/book/show/806704", title: "Insight Meditation: The Practice of Freedom", description: "By Joseph Goldstein. By one of the foremost Western Vipassana teachers who studied directly with Goenka." },
              { href: "https://www.christophertitmussblog.org/s-n-goenka-emissary-of-insight-a-review-of-a-biography-by-daniel-m-stuart", title: "S.N. Goenka: Emissary of Insight", description: "By Daniel M. Stuart. Biography of S.N. Goenka." },
              { href: "https://www.amazon.com/ART-LIFE-Vipassana-meditation-according/dp/B09QF1TDRD", title: "THE ART OF LIFE: Vipassana Meditation According to the Teachings of SN Goenka", description: "By Eddie Parker." },
            ]}
          />
        </SubSection>

        <SubSection title="Book Lists">
          <LinkList
            links={[
              { href: "https://www.goodreads.com/author/list/314384.S_N_Goenka", title: "Complete Goenka Bibliography (Goodreads)", description: "All books by S.N. Goenka. Average rating of 4.36 across 3,850 ratings." },
              { href: "https://www.goodreads.com/shelf/show/vipassana", title: "Vipassana Bookshelf (Goodreads)", description: "Community-curated list of Vipassana books." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* Documentary Films */}
      <ResourceSection id="documentaries" title="Documentary Films">
        <LinkList
          links={[
            { href: "https://www.imdb.com/title/tt0367665/", title: "Doing Time, Doing Vipassana (1997)", description: "50-minute documentary about Vipassana at Tihar Jail, India. IMDB 8.2. Won Golden Spire Award at San Francisco International Film Festival 1998. Directed by Eilona Ariel and Ayelet Menahemi." },
            { href: "https://www.imdb.com/title/tt1212007/", title: "The Dhamma Brothers (2007)", description: "Documentary about Vipassana at Donaldson Correctional Facility, Alabama — first maximum-security prison in North America to hold an extended Vipassana retreat. IMDB 7.6. Featured on Oprah Winfrey. Directed by Jenny Phillips." },
            { href: "https://dharma-documentaries.net/the-rise-of-dhamma", title: "The Rise of Dhamma (2019)", description: "2-hour film covering 50 years since Goenka began teaching (1969 to present). Features voices of Goenka, his family, and meditators worldwide." },
            { href: "https://astitvawellbeing.com/2023/05/01/10-day-vipaasana-meditation/", title: "Hill of Dhamma", description: "Documentary detailing the proceedings of a 10-day Vipassana course at Dhammagiri, Igatpuri." },
            { href: "https://dharma-documentaries.net/tag/vipassana", title: "Dharma Documentaries — Vipassana Collection", description: "Comprehensive collection of Vipassana-related documentary films from a site curating 1,000+ Buddhist documentaries over 15+ years." },
            { href: "https://na.prison.dhamma.org/en/documentaries/", title: "Prison Vipassana Documentaries", description: "Collection of documentaries about Vipassana in prisons from the North American Vipassana Prison Project." },
          ]}
        />
      </ResourceSection>

      {/* Podcasts & Audio */}
      <ResourceSection id="podcasts" title="Podcasts & Audio">
        <SubSection title="Vipassana-Focused Podcasts">
          <LinkList
            links={[
              { href: "https://podcasts.apple.com/us/podcast/untold-the-retreat/id1724826952", title: "Untold: The Retreat (Financial Times)", description: "4-episode investigative series by Madison Marriage examining experiences at Goenka retreats. Also on Spotify and Acast." },
              { href: "https://podcasts.apple.com/us/podcast/you-need-to-meditate-a-journey-in-vipassana-meditation/id1357157178", title: "You Need to Meditate: A Journey in Vipassana Meditation", description: "Apple Podcasts series focused on Vipassana practice." },
              { href: "https://open.spotify.com/show/00N6f9V2FiWdk30LkDuHRm", title: "Vipassana Group Sitting by S.N. Goenka (Spotify)", description: "1-hour group sitting recordings." },
            ]}
          />
        </SubSection>

        <SubSection title="Pariyatti Podcast & Goenka Talks">
          <LinkList
            links={[
              { href: "https://podcasts.apple.com/us/podcast/pariyatti/id81508264", title: "Pariyatti Podcast (Apple)", description: "Dhamma talks by S.N. Goenka — 'wonderfully straightforward explanations of Vipassana.'" },
              { href: "https://pariyatti.org/Free-Resources/Podcasts/Podcast-CC/ID/85/SN-Goenka-and-Vipassana", title: "S.N. Goenka and Vipassana", description: "Specific episode from Pariyatti." },
              { href: "https://pariyatti.org/Free-Resources/Podcasts/Podcast-CC/ID/47/SN-Goenka--Meditation-Now-in-Los-Angeles-CA", title: "S.N. Goenka — Meditation Now in Los Angeles", description: "Talk recording from Pariyatti." },
              { href: "https://pariyatti.org/Free-Resources/Podcasts/Podcast-CC/ID/24/SN-Goenka--Meditation-Now-at-Ted-Mann-Hall-St-Paul-MN", title: "S.N. Goenka — Meditation Now at Ted Mann Hall, St. Paul, MN (2002)", description: "Talk recording from Pariyatti." },
              { href: "https://pariyatti.org/Free-Resources/Podcasts", title: "All Pariyatti Free Podcasts", description: "Complete collection of free podcast episodes." },
            ]}
          />
        </SubSection>

        <SubSection title="Episodes Featuring Vipassana">
          <LinkList
            links={[
              { href: "https://beherenownetwork.com/heart-wisdom-with-jack-kornfield-ep-96-an-homage-to-goenka/", title: "Heart Wisdom with Jack Kornfield — Ep. 96: An Homage to Goenka", description: "Jack Kornfield's tribute to S.N. Goenka." },
              { href: "https://insightmyanmar.org/complete-shows/tag/S.N.+Goenka", title: "Insight Myanmar — S.N. Goenka Episodes", description: "Podcast episodes examining Goenka's teachings and their intersection with society." },
              { href: "https://tim.blog/2018/06/20/the-tim-ferriss-show-transcripts-meditation-mindset-and-mastery/", title: "Tim Ferriss Show — Meditation, Mindset, and Mastery", description: "Tim Ferriss discusses his 10-day silent retreat experience." },
              { href: "https://tim.blog/2014/06/18/sam-harris/", title: "Tim Ferriss Show — Sam Harris on Spirituality, Neuroscience, Meditation", description: "Sam Harris discusses Vipassana extensively." },
              { href: "https://podcasts.apple.com/us/podcast/yuval-harari-author-of-sapiens-on-ai-religion-and-60/id1081584611?i=1000381998593", title: "Tim Ferriss Show — Yuval Harari on AI, Religion, and 60-Day Meditation Retreats", description: "Harari credits Vipassana for his writing ability." },
              { href: "https://store.pariyatti.org/yuval-harari-interview-pariyatti", title: "Interview with Yuval Harari (Pariyatti, 2022)", description: "Video interview available on Pariyatti." },
              { href: "https://podcasts.apple.com/us/podcast/10-happier-with-dan-harris/id1087147821", title: "10% Happier with Dan Harris", description: "Major meditation podcast with many episodes discussing Vipassana." },
              { href: "https://dopeypodcast.podbean.com/e/dopey48-vipassana-reddit-beats/", title: "Dopey Podcast #48: Vipassana, Reddit, Beats", description: "Vipassana in the context of addiction recovery." },
            ]}
          />
        </SubSection>

        <SubSection title="Audio Resources">
          <LinkList
            links={[
              { href: "https://store.pariyatti.org/free-audio-resources", title: "Free Audio Resources (Pariyatti Store)", description: "Streaming and download in multiple languages." },
              { href: "https://soundcloud.com/isleofdhamma/vipassanaguided", title: "1-Hour Guided Vipassana Session by S.N. Goenka (SoundCloud)", description: "Full guided meditation session." },
              { href: "https://archive.org/details/10DayD11Chanting", title: "10-Day Chanting Recordings (Internet Archive)", description: "Free audio from the 10-day course." },
              { href: "https://www.jiosaavn.com/album/10-day-hindi-discourses-vipassana-meditation/2GlDq0HMz2E_", title: "10-Day Hindi Discourses (JioSaavn)", description: "Hindi discourses by Goenka." },
              { href: "https://www.vipassana.com/audio_files/", title: "vipassana.com Audio Files", description: "Audio resource collection." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* YouTube & Video */}
      <ResourceSection id="video" title="YouTube & Video">
        <LinkList
          links={[
            { href: "https://www.vridhamma.org/Introductory-Videos", title: "VRI Introductory Videos", description: "Official introduction videos from the Vipassana Research Institute." },
            { href: "https://www.vridhamma.org/Discourses-by-Mr-S-N-Goenka", title: "Discourses by Mr. S.N. Goenka (VRI)", description: "Video discourses." },
            { href: "https://store.pariyatti.org/sn-goenka-and-vipassana-video-streaming-and-download-vipassana", title: "S.N. Goenka and Vipassana (Pariyatti Store)", description: "Streaming and download." },
            { href: "https://talaka.dhamma.org/about-vipassana/peace-summit/transcript/", title: "Goenka's Address at the UN Millennium World Peace Summit", description: "Speech at the United Nations General Assembly Hall on religious harmony and peace." },
            { href: "https://singjupost.com/full-transcript-eilona-ariel-on-vipassana-meditation-and-body-sensation-at-tedxjaffa-2013/", title: "TEDxJaffa: Vipassana Meditation and Body Sensation — Eilona Ariel (2013)", description: "By the co-director of 'Doing Time, Doing Vipassana.'" },
          ]}
        />
      </ResourceSection>

      {/* Blog Posts & Personal Experiences */}
      <ResourceSection id="blogs" title="Blog Posts & Personal Experiences">
        <SubSection title="Recommended Personal Accounts">
          <LinkList
            links={[
              { href: "https://ethanmaurice.com/blog/my-mind-blowing-inner-experience-of-a-10-day-vipassana-meditation-course", title: "My Mind-Blowing Inner Experience of a 10-Day Vipassana Meditation Course", description: "By Ethan Maurice. Detailed, widely-shared personal account." },
              { href: "https://www.legalnomads.com/vipassana-meditation/", title: "Lessons Learned at a 10-Day Vipassana Meditation Course", description: "By Jodi Ettenberg (Legal Nomads). Featured in NY Times, National Geographic, BBC Travel, and CNN." },
              { href: "https://alittleadrift.com/vipassana-meditation-course-nepal/", title: "Vipassana Meditation: Is Vipassana Worth It?", description: "By Shannon O'Donnell (A Little Adrift). Course in Nepal; updated 2025." },
              { href: "https://www.earthvagabonds.com/10-day-silent-meditation-retreat-at-dhamma-malaya/", title: "10-Day Silent Meditation Retreat at Dhamma Malaya", description: "By Earth Vagabonds. Third retreat, in Malaysia (2025)." },
              { href: "https://www.lookingoutloud.com/first-vipassana-retreat/", title: "Preparing a First 10-Day Vipassana Meditation Retreat: What I Wish I Would've Known", description: "By Looking Out Loud." },
              { href: "https://www.7continents1passport.com/10-day-vipassana-retreat/", title: "My 10-Day Vipassana Retreat: A Journey Through Pain and Self-Observation", description: "By 7 Continents 1 Passport." },
              { href: "https://londonerinsydney.com/meditation-can-change-life/", title: "What I Learned at a 10-Day Vipassana Retreat in Sydney", description: "By Londoner in Sydney." },
              { href: "https://www.livelimitless.net/exploring-dhamma-my-10-day-vipassana-experience/", title: "My 10-Day Vipassana Experience", description: "By Live Limitless." },
              { href: "https://www.rebornbyadventure.com/blog/10dayvipassanacourseexperience", title: "Taming the Monkey Mind: My Experience at the 10-Day Silent Vipassana Meditation Retreat", description: "By Reborn By Adventure." },
              { href: "https://walden.us/blogs/news/my-transformative-journey-through-a-10-day-silent-vipassana-meditation-retreat-finding-inner-peace-and-mindfulness", title: "My Transformative Journey Through a 10-Day Silent Vipassana Meditation", description: "By Walden." },
              { href: "https://beyondbasicsphysicaltherapy.com/blog/10-days-of-silence-my-vipassana-meditation-retreat-experience/", title: "My 10-Day Vipassana Meditation Retreat — 10 Days of Profound Silence", description: "By Beyond Basics Physical Therapy." },
              { href: "https://benbansblog.wordpress.com/2020/02/25/10-day-vipassana-meditation-course/", title: "10-Day Vipassana Meditation Course", description: "By Benban's Travel Blog." },
              { href: "https://inspiredlivingblog.wordpress.com/2019/11/23/nine-takeaways-from-a-ten-day-meditation-retreat/", title: "Nine Takeaways from a Ten-Day Meditation Retreat", description: "By Eric's Inspired Living Blog." },
              { href: "https://samroff.com/vipassana-meditation-why-im-doing-my-third-vipassana-meditation-retreat-at-23-years-of-age/", title: "Vipassana Meditation: Why I'm Doing My Third Retreat at 23", description: "By Sam Roff." },
              { href: "https://medium.com/@harshul263/10-days-vipassana-meditation-course-taught-by-sn-goenka-what-do-you-need-to-know-about-it-as-a-6e066f2733b", title: "10 Day's Vipassana Meditation Course Taught by SN Goenka", description: "By Harshul Singhal on Medium." },
            ]}
          />
        </SubSection>

        <SubSection title="Critical & Balanced Perspectives">
          <LinkList
            links={[
              { href: "https://www.path2yoga.net/2024/05/Goenkas-Vipassana-Meditation-Course.html", title: "3 Things I Hated about Goenka's 10-Day Vipassana Meditation Course", description: "By Path to Yoga." },
              { href: "https://www.path2yoga.net/2024/05/vipassana-meditation-retreat.html", title: "There is No Aim in Meditation (Lessons From My 2nd Vipassana Retreat)", description: "By Path to Yoga." },
              { href: "https://www.path2yoga.net/2024/06/what-is-vipassana-meditation.html", title: "What is Vipassana Meditation? Goenka's 10-Day Course Explained", description: "By Path to Yoga." },
              { href: "https://anderswanders.org/the-good-the-bad-the-ugly-a-critique-of-the-goenka-10-day-vipassana-retreat/", title: "The Good, The Bad, The Ugly: A Critique of the Goenka 10-Day Vipassana Retreat", description: "By Ander Wanders." },
              { href: "https://www.christophertitmussblog.org/10-day-goenka-courses-in-vipassana-time-to-make-changes-12-firm-proposals", title: "10-Day Goenka Courses in Vipassana: Time to Make Changes. 12 Firm Proposals", description: "By Christopher Titmuss. Thoughtful critique from a respected Dharma teacher." },
              { href: "https://www.dhammawheel.com/viewtopic.php?t=18275", title: "Insights from My 21 Years of Practising Goenka Style", description: "Discussion on Dhamma Wheel Forum." },
              { href: "https://davidleon.blog/2019/11/08/why-goenkas-vipassana-is-so-culty/", title: "Why Goenka's Vipassana Is So Culty", description: "By David Leon." },
              { href: "https://duddhawork.com/blog/is-goenka-vipassana-a-cult-short-answer-yes-long-answer-no/", title: "Is Goenka Vipassana a Cult? Short Answer, Yes. Long Answer, No.", description: "By Duddhawork." },
              { href: "https://indivyoga.com/untold-retreat-review-goenka-vipassana-meditation/", title: "Untold Review: Goenka Vipassana Meditation Retreat", description: "By Indiv Yoga. Response to the Financial Times investigation." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* Major Publication Articles */}
      <ResourceSection id="articles" title="Articles in Major Publications">
        <LinkList
          links={[
            { href: "https://harpers.org/archive/2021/04/lost-in-thought-psychological-risks-of-meditation/", title: "Lost in Thought: The Psychological Risks of Meditation — Harper's Magazine", description: "By David Kortava (April 2021). In-depth investigation into adverse effects of intensive meditation." },
            { href: "https://www.npr.org/sections/health-shots/2024/03/31/1241784635/meditation-vipassana-dangerous-mental-health", title: "Meditation Can Have Dangerous Effects on Mental Health — NPR", description: "NPR coverage of the Financial Times 'Untold: The Retreat' investigation (March 2024)." },
            { href: "https://www.christophertitmussdharma.org/p/financial-times-uk-investigates-goenkas", title: "Financial Times Investigation: Untold: The Retreat", description: "January 2024 investigation by Madison Marriage examining adverse mental health outcomes at Goenka retreats." },
            { href: "https://www.newstatesman.com/culture/radio-podcasts/2024/03/financial-times-the-retreat-review-meditating-to-mental-collapse", title: "The Retreat Review: Terrifying in Its Own Way — New Statesman", description: "Review of the FT podcast." },
            { href: "https://www.vice.com/en/article/im-addicted-to-silent-meditation-and-ive-never-felt-better-vipassana/", title: "I'm Addicted to Silent Meditation and I've Never Felt Better — Vice", description: "Personal Vipassana experience." },
            { href: "https://tricycle.org/magazine/s-n-goenka/", title: "S.N. Goenka on Meditation — Tricycle", description: "Interview with Goenka about his 10-day courses." },
            { href: "https://tricycle.org/article/s-n-goenka-pioneer-secular-meditation-movement-dies-90/", title: "S.N. Goenka, Pioneer of Secular Meditation Movement, Dies at 90 — Tricycle", description: "Obituary." },
            { href: "https://tricycle.org/article/what-is-vipassana-meditation/", title: "What Is Vipassana Meditation? — Tricycle", description: "Explainer article." },
            { href: "https://tricycle.org/magazine/meditation-en-masse/", title: "The History of Vipassana Meditation — Tricycle", description: "Historical feature ('Meditation en Masse')." },
            { href: "https://www.lionsroar.com/the-universal-meditation-technique-of-s-n-goenka/", title: "The Universal Meditation Technique of S.N. Goenka — Lion's Roar", description: "Feature article." },
            { href: "https://www.lionsroar.com/how-to-practice-vipassana-insight-meditation/", title: "How to Practice Vipassana (Insight) Meditation — Lion's Roar", description: "Practice guide." },
            { href: "https://www.lionsroar.com/can-meditation-actually-be-dangerous/", title: "Can Meditation Actually Be Dangerous? — Lion's Roar", description: "Analysis article." },
            { href: "https://www.lionsroar.com/wp-content/uploads/2024/01/Deep-Dive-into-Vipassana.pdf", title: "Deep Dive into Vipassana (PDF) — Lion's Roar", description: "Comprehensive deep-dive resource." },
            { href: "https://mediscuss.org/vipassana-meditation-physician-guide/", title: "Vipassana Meditation: An Evidence-Based Guide by Physicians — MeDiscuss", description: "Medical perspective on Vipassana." },
            { href: "https://www.cnbc.com/2020/05/16/jack-dorsey-bill-gates-both-recommend-book-about-meditation.html", title: "Jack Dorsey, Bill Gates Both Recommend Book About Meditation — CNBC", description: "Feature on notable practitioners." },
            { href: "https://www.thejuggernaut.com/vipassana-history-silent-retreat-meditation-s-n-goenka", title: "Vipassana: Ancient Cure-All or Current Fad? — The Juggernaut", description: "Feature on the history and cultural phenomenon of Vipassana." },
            { href: "https://www.deseret.com/lifestyle/2024/04/04/can-meditation-be-dangerous/", title: "Is Meditation Dangerous? — Deseret News", description: "Exploration of meditation safety." },
          ]}
        />
      </ResourceSection>

      {/* Academic Research */}
      <ResourceSection id="research" title="Academic & Scientific Research">
        <SubSection title="Systematic Reviews">
          <LinkList
            links={[
              { href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12558566/", title: "The Impact of Vipassana Meditation on Health and Well-Being: A Systematic Review", description: "Cureus / PubMed Central. 11 studies reviewed; moderate evidence supports benefits for stress, anxiety, migraine burden." },
              { href: "https://pubmed.ncbi.nlm.nih.gov/20055558/", title: "Vipassana Meditation: Systematic Review of Current Evidence (2010)", description: "PubMed earlier systematic review." },
            ]}
          />
        </SubSection>

        <SubSection title="Neurobiological Studies">
          <LinkList
            links={[
              { href: "https://www.sciencedirect.com/science/article/abs/pii/S0079612318301663", title: "State-trait Influences of Vipassana Meditation Practice on P3 EEG Dynamics", description: "ScienceDirect. EEG dynamics in long-term practitioners." },
              { href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3174711/", title: "Vipassana Meditation: A Naturalistic, Preliminary Observation in Muscat", description: "PubMed Central. Neuro-imaging studies show activation of prefrontal and anterior cingulate cortex during meditation." },
            ]}
          />
        </SubSection>

        <SubSection title="Applied Studies">
          <LinkList
            links={[
              { href: "https://www.tandfonline.com/doi/full/10.1080/2331186X.2025.2563703", title: "Vipassana Meditation in Educational Settings for Enhancing Attention and Academic Performance", description: "Taylor & Francis (2025). Neurological mechanisms and implementation strategies." },
              { href: "https://journals.lww.com/jpmh/fulltext/2023/01010/the_experiences_of_attending_vipassana_meditation.3.aspx", title: "The Experiences of Attending Vipassana Meditation Retreat", description: "IAPS Journal of Practice in Mental Health (2023)." },
              { href: "https://www.scienceopen.com/hosted-document?doi=10.14293/PR2199.000686.v1", title: "Effects of Vipassana Meditation on Psychological and Interpersonal Functioning", description: "1-month follow-up study." },
            ]}
          />
        </SubSection>

        <SubSection title="Research Collections">
          <LinkList
            links={[
              { href: "https://www.vridhamma.org/Research-Papers-and-Seminars", title: "VRI Research Papers and Seminars", description: "Collection of research from the Vipassana Research Institute, including studies on addiction, neuropsychology, and daily life applications." },
              { href: "https://paperguide.ai/papers/top/research-papers-vipassana-meditation/", title: "Top Research Papers on Vipassana Meditation (PaperGuide)", description: "AI-curated list of top research papers." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* Apps & Tools */}
      <ResourceSection id="apps" title="Apps & Tools">
        <SubSection title="Official Apps">
          <LinkList
            links={[
              { href: "https://apps.apple.com/us/app/dhamma-org/id1127952631", title: "Dhamma.org App (iOS)", description: "Group sitting recordings (25+ languages), daily sitting log, group sitting counter, center/course finder (300+ locations), and Mini-Anapana guided meditation." },
              { href: "https://play.google.com/store/apps/details?id=com.vipassanameditation", title: "Vipassana Meditation App (Android)", description: "Official VRI app for Android." },
              { href: "https://play.google.com/store/apps/details?id=org.vridhamma.globalvipassanapagoda&hl=en", title: "Global Vipassana Pagoda App (Android)", description: "App for the Global Vipassana Pagoda." },
            ]}
          />
        </SubSection>

        <SubSection title="Related Meditation Apps">
          <LinkList
            links={[
              { href: "https://www.wakingup.com/", title: "Waking Up by Sam Harris", description: "Teaches Vipassana as its foundational practice, plus Zen, Dzogchen, and Advaita Vedanta. 28-day introductory course. Features Joseph Goldstein teaching Vipassana." },
              { href: "https://www.meditatehappier.com/our-story", title: "10% Happier (Happier Meditation)", description: "App by Dan Harris based on Vipassana principles. Guided courses with major Vipassana teachers." },
              { href: "https://insighttimer.com/meditation-topics/vipassana", title: "Insight Timer — Vipassana", description: "Free meditation timer and community with Vipassana-specific content." },
              { href: "https://blog.cogitactive.com/news/insight-timer-free-vs-medito/", title: "Medito", description: "Free, ad-free, no-signup meditation app by a volunteer-run foundation. Simple timer for Vipassana practitioners." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* Reddit & Online Communities */}
      <ResourceSection id="communities" title="Online Communities & Forums">
        <SubSection title="Reddit">
          <LinkList
            links={[
              { href: "https://www.reddit.com/r/vipassana/", title: "r/vipassana", description: "1,871+ posts, 30,845+ comments. 'A place for potential new students to learn more about this living tradition, and for old students to support each other.'" },
            ]}
          />
        </SubSection>

        <SubSection title="Buddhist Forums">
          <LinkList
            links={[
              { href: "https://www.dhammawheel.com/", title: "Dhamma Wheel Buddhist Forum", description: "Active forum with multiple threads on Goenka Vipassana technique, retreats, and practice." },
              { href: "https://www.dharmawheel.net/", title: "Dharma Wheel", description: "Related Buddhist forum with Goenka Vipassana discussions." },
              { href: "https://www.vipassanaforum.net/", title: "Vipassana Forum", description: "Active since 2007; dedicated Vipassana discussion." },
              { href: "https://puredhamma.net/forums/topic/goenkas-vipassana/", title: "Pure Dhamma Forum", description: "Discussion of Goenka's Vipassana within the Theravada framework." },
              { href: "https://bswa.org/forum/forum/discussion/ask-a-monastic/560-goenka-s-vipassana-technique", title: "BSWA Forum (Dhammaloka Community)", description: "Monastic perspective on Goenka's technique." },
            ]}
          />
        </SubSection>

        <SubSection title="Quora">
          <LinkList
            links={[
              { href: "https://www.quora.com/What-was-your-experience-with-Vipassana-like-Can-you-describe-how-you-felt-during-and-after-the-10-day-silent-retreat-offered-by-Dhamma-org-and-their-partners-How-did-it-change-your-life", title: "What was your experience with Vipassana like?", description: "Popular thread with many personal accounts." },
              { href: "https://www.quora.com/Do-you-have-any-tips-for-someone-doing-the-10-day-vipassana-course-and-has-little-or-no-prior-experience-in-meditation", title: "Do you have any tips for someone doing the 10-day Vipassana course?", description: "Practical advice for first-timers." },
              { href: "https://www.quora.com/Have-you-tried-Vipassana-If-so-How-has-it-changed-your-life-and-would-you-recommend-it", title: "Have you tried Vipassana? How has it changed your life?", description: "Experience-sharing thread." },
              { href: "https://www.quora.com/Can-anybody-share-a-good-or-bad-experience-of-the-Vipassana-10-day-meditation-course-Is-it-safe-to-do-or-not", title: "Is Vipassana safe?", description: "Safety-focused discussion." },
            ]}
          />
        </SubSection>

        <SubSection title="Social Media">
          <LinkList
            links={[
              { href: "https://www.instagram.com/vipassanaorg/", title: "@vipassanaorg on Instagram", description: "Official VRI account, 119K followers." },
              { href: "https://www.instagram.com/globalvipassanapagoda/", title: "@globalvipassanapagoda on Instagram", description: "Global Vipassana Foundation, 11K followers." },
              { href: "https://www.instagram.com/vipassanameditationindia/", title: "@vipassanameditationindia on Instagram", description: "Unofficial, 16K followers." },
            ]}
          />
        </SubSection>
      </ResourceSection>

      {/* Notable Practitioners */}
      <ResourceSection id="practitioners" title="Notable Practitioners">
        <LinkList
          links={[
            { href: "https://medium.com/the-book-mechanic/how-vipassana-helps-yuval-noah-harari-write-his-book-73a1b1c9e978", title: "Yuval Noah Harari", description: "Author of 'Sapiens' and 'Homo Deus.' Meditates 2 hours daily and attends up to 60-day retreats yearly. Credits Vipassana for the concentration and clarity needed to write his books." },
            { href: "https://www.cnbc.com/2020/05/16/jack-dorsey-bill-gates-both-recommend-book-about-meditation.html", title: "Jack Dorsey", description: "Twitter/Square co-founder. Meditates 2 hours daily and has attended 10-day silent retreats." },
            { href: "https://www.wakingup.com/", title: "Sam Harris", description: "Neuroscientist and author. Started with Vipassana as his first meditation practice. Completed retreats up to 3 months. Created the Waking Up app." },
            { href: "https://www.amazon.com/10-Happier-Self-Help-Actually-Works/dp/0062265423", title: "Dan Harris", description: "ABC News anchor. On-air panic attack led to meditation practice. Wrote '10% Happier' and created the meditation app." },
            { href: "https://tim.blog/2018/06/20/the-tim-ferriss-show-transcripts-meditation-mindset-and-mastery/", title: "Tim Ferriss", description: "Author and podcaster. Completed 10-day silent retreat. Over 80% of world-class performers he interviewed had a daily meditation practice." },
            { href: "https://www.amazon.com/Altered-Traits-Science-Reveals-Meditation/dp/0399184384", title: "Daniel Goleman", description: "Psychologist, author of 'Emotional Intelligence.' Studied Vipassana with Goenka in India as a Harvard graduate student." },
            { href: "https://www.goodreads.com/en/book/show/806704", title: "Joseph Goldstein", description: "Co-founder of Insight Meditation Society. Studied directly with S.N. Goenka. The IMS retreat structure was modeled on Goenka's courses." },
            { href: "https://www.spiritrock.org/about/our-buddhist-lineage", title: "Sharon Salzberg", description: "Co-founder of Insight Meditation Society. Studied with Goenka." },
          ]}
        />
      </ResourceSection>

      {/* Lineage & History */}
      <ResourceSection id="history" title="Lineage & History">
        <LinkList
          links={[
            { href: "https://www.vridhamma.org/History-and-Spread-of-Vipassana", title: "History and Spread of Vipassana (VRI)", description: "From Buddha to present day." },
            { href: "https://www.vridhamma.org/Sayagyi-U-Ba-Khin", title: "Sayagyi U Ba Khin (VRI)", description: "Goenka's teacher, 1899-1971. First Accountant General of Burma." },
            { href: "https://uk.dhamma.org/about-vipassana/the-tradition/", title: "The Tradition (UK Dhamma)", description: "Lineage: Ledi Sayadaw → Saya Thet Gyi → Sayagyi U Ba Khin → S.N. Goenka." },
            { href: "https://www.vridhamma.org/Vipassana-in-Prisons-History-and-Spread", title: "Vipassana in Prisons — History & Spread (VRI)", description: "History of prison meditation programs." },
            { href: "https://www.spiritrock.org/about/our-buddhist-lineage", title: "Spirit Rock: Our Buddhist Lineage", description: "Connection between Goenka tradition and Western Insight Meditation." },
            { href: "https://www.vridhamma.org/Dhamma-Giri-The-Hill-of-Dhamma", title: "Dhamma Giri: The Hill of Dhamma (VRI)", description: "History of the main center in Igatpuri." },
            { href: "https://www.insightmeditationcenter.org/books-articles/insight-meditation-in-the-united-states-life-liberty-and-the-pursuit-of-happiness/", title: "Insight Meditation in the United States", description: "Historical context of Vipassana in America." },
          ]}
        />
      </ResourceSection>

      {/* Wikipedia & Reference */}
      <ResourceSection id="reference" title="Wikipedia & Reference">
        <LinkList
          links={[
            { href: "https://en.wikipedia.org/wiki/S._N._Goenka", title: "S.N. Goenka — Wikipedia", description: "Comprehensive biography." },
            { href: "https://en.wikipedia.org/wiki/Sayagyi_U_Ba_Khin", title: "Sayagyi U Ba Khin — Wikipedia", description: "Goenka's teacher." },
            { href: "https://en.wikipedia.org/wiki/Vipassana_movement", title: "Vipassana Movement — Wikipedia", description: "History of the broader movement including Goenka's role." },
            { href: "https://en.wikipedia.org/wiki/Global_Vipassana_Pagoda", title: "Global Vipassana Pagoda — Wikipedia", description: "The world's largest meditation dome." },
            { href: "https://en.wikipedia.org/wiki/Doing_Time,_Doing_Vipassana", title: "Doing Time, Doing Vipassana — Wikipedia", description: "Documentary film article." },
            { href: "https://en.wikipedia.org/wiki/The_Dhamma_Brothers", title: "The Dhamma Brothers — Wikipedia", description: "Documentary film article." },
            { href: "https://en.wikipedia.org/wiki/Pariyatti_(bookstore)", title: "Pariyatti (bookstore) — Wikipedia", description: "Nonprofit bookstore article." },
            { href: "https://en.wikipedia.org/wiki/Altered_Traits", title: "Altered Traits — Wikipedia", description: "Book on meditation science." },
          ]}
        />
      </ResourceSection>

      {/* Additional Websites */}
      <ResourceSection id="websites" title="Additional Websites & Blogs">
        <LinkList
          links={[
            { href: "https://www.christophertitmussblog.org/", title: "Christopher Titmuss Blog (The Buddha Wallah)", description: "Weekly Dharma blog by respected teacher; includes both appreciative and critical analysis of Goenka tradition." },
            { href: "https://www.christophertitmussdharma.org/", title: "Christopher Titmuss Dharma", description: "Dharma teachings and commentary." },
            { href: "https://dharma-documentaries.net", title: "Dharma Documentaries", description: "1,000+ Buddhist documentaries curated over 15+ years; strong Vipassana section." },
            { href: "https://www.vipassanaathome.org/satipatthana", title: "vipassanaathome.org", description: "Resources for home practice including Satipatthana long course." },
            { href: "https://thelonerider.com/2018/mar/vipassana8/vipassana8.shtml", title: "The Loner Rider — Satipatthana Sutta Vipassana", description: "Detailed personal account of an advanced course." },
            { href: "https://bookretreats.com/s/meditation-retreats/vipassana-retreats/new-york", title: "BookRetreats.com — Vipassana Retreats", description: "Third-party retreat booking site." },
          ]}
        />
      </ResourceSection>

      <PageComments pageId="resources" />
    </>
  );
}

/* ── Layout Components ── */

const tocItems = [
  { id: "official", label: "Official Goenka / dhamma.org Network" },
  { id: "books", label: "Books" },
  { id: "documentaries", label: "Documentary Films" },
  { id: "podcasts", label: "Podcasts & Audio" },
  { id: "video", label: "YouTube & Video" },
  { id: "blogs", label: "Blog Posts & Personal Experiences" },
  { id: "articles", label: "Articles in Major Publications" },
  { id: "research", label: "Academic & Scientific Research" },
  { id: "apps", label: "Apps & Tools" },
  { id: "communities", label: "Online Communities & Forums" },
  { id: "practitioners", label: "Notable Practitioners" },
  { id: "history", label: "Lineage & History" },
  { id: "reference", label: "Wikipedia & Reference" },
  { id: "websites", label: "Additional Websites & Blogs" },
];

function ResourceSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="mb-4 text-lg font-semibold text-accent">{title}</h3>
      {children}
    </div>
  );
}

function LinkList({
  links,
}: {
  links: { href: string; title: string; description: string }[];
}) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.href + link.title}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-accent-light underline-offset-2 hover:text-accent"
          >
            {link.title}
          </a>
          <p className="mt-1 text-sm text-muted">{link.description}</p>
        </li>
      ))}
    </ul>
  );
}
