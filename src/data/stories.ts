type StorySection = 
  | { type: 'text'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'lifestyle'; title: string; items: string[] };

type Story = {
  id: number;
  name: string;
  image: string;
  title: string;
  teaser: string;
  content: StorySection[];
  milestones: { year: number; title: string; description: string }[];
};

export const stories: Story[] = [
  {
    id: 1,
    name: "Ryan Hoover",
    image: "/images/ryan_hoover.jpg",
    title: "From Small-Town Curiosity to Silicon Valley’s Launchpad",
    teaser: "How Ryan Hoover turned a side project into Product Hunt, building a platform that changed how startups launch.",
    content: [
      {
        type: 'text',
        text: `Ryan Hoover grew up in Eugene, Oregon — a quiet town far from the hustle of Silicon Valley. From a young age, he was endlessly curious, spending hours exploring new tech and reading about startups.`
      },
      {
        type: 'text',
        text: `He attended the University of Oregon, studying business and economics. But it wasn’t the lectures that shaped him — it was his passion for products, community, and side projects.`
      },
      {
        type: 'text',
        text: `After college, Ryan moved to San Francisco to work as a product manager. Surrounded by startups, he noticed there was no casual, community-driven place to discover cool new products. Tech blogs were too slow and curated. So, at 27, he decided to solve his own problem.`
      },
      {
        type: 'text',
        text: `One weekend, Ryan hacked together a simple email list using a tool called Linkydink. He called it Product Hunt. It was nothing fancy — just a daily email sharing interesting products with friends.`
      },
      {
        type: 'text',
        text: `He shared it on Twitter and startup forums. The simplicity resonated. Founders, investors, and early adopters started subscribing because it felt authentic and community-first.`
      },
      {
        type: 'quote',
        text: `It wasn’t meant to be a company. I just wanted a place to talk about cool stuff with my friends.`
      },
      {
        type: 'text',
        text: `As the list grew, Ryan applied to Y Combinator in 2014, unsure if a side project would get accepted. It did. During YC, Product Hunt evolved into a full platform where anyone could post and upvote products — launching just as the startup boom accelerated.`
      },
      {
        type: 'text',
        text: `Product Hunt became the go-to place for launches. Startups like Notion, Robinhood, and Slack all gained their first users there.`
      },
      {
        type: 'text',
        text: `By 29, Ryan sold Product Hunt to AngelList for a reported 20 million dollars. But instead of chasing luxury, he focused on supporting other builders.`
      },
      {
        type: 'text',
        text: `In 2017, he launched Weekend Fund to invest in early-stage founders — turning his passion for discovering products into backing the people behind them.`
      },
      {
        type: 'text',
        text: `Today, Ryan embraces a minimalist, flexible lifestyle. He works remotely from cities like Lisbon or Barcelona, hosts casual founder meetups, and spends his time empowering makers — proving success isn’t about fame or fortune, but freedom and community.`
      },
      {
        type: 'lifestyle',
        title: "Where is Ryan Hoover Now?",
        items: [
          "Runs Weekend Fund, investing in early-stage startups",
          "Travels between California and Europe, often working from Lisbon",
          "Prefers simple living — no mansion, no luxury cars",
          "Active in the startup community, mentoring founders",
          "Known for supporting indie hackers and product makers"
        ]
      }
    ],
    milestones: [
      { year: 2013, title: "Created Product Hunt at 27", description: "Started as a simple email list using Linkydink" },
      { year: 2014, title: "Joined Y Combinator", description: "Turned Product Hunt into a platform for startup launches" },
      { year: 2016, title: "Sold to AngelList", description: "Exited for 20 million dollars, stayed on to lead Product Hunt" },
      { year: 2017, title: "Launched Weekend Fund", description: "Began investing in early-stage founders" }
    ]
  },
  
  {
    id: 2,
    name: "Pieter Levels",
    image: "/images/pieter_levels.jpg",
    title: "The Solo Developer Who Turned Side Projects Into Millions",
    teaser: "How Pieter Levels proved you don’t need a team or funding to build a profitable, flexible life.",
    content: [
      {
        type: 'text',
        text: `Pieter Levels grew up in Amsterdam, Netherlands — a city known for creativity and independence. From a young age, he was fascinated by design, coding, and the idea of building things on the internet. But Pieter never dreamed of corporate success or raising venture capital. He wanted freedom.`
      },
      {
        type: 'text',
        text: `After finishing his studies in business and multimedia, Pieter realized he didn’t want a traditional 9-to-5. In 2014, at 27 years old, he gave himself an ambitious challenge — launch 12 startups in 12 months. Armed with just his laptop and a backpack, he set off traveling across Asia, building wherever he could find Wi-Fi.`
      },
      {
        type: 'text',
        text: `One of those projects was Nomad List — a simple public spreadsheet to help remote workers find the best cities to live and work based on cost, internet speed, and community. It wasn’t flashy, but it solved a real problem as digital nomadism started to grow.`
      },
      {
        type: 'text',
        text: `Pieter didn’t rely on ads or PR. He shared every step of his journey on Twitter, Product Hunt, Hacker News, and Reddit. By building in public, he attracted a loyal audience who watched his projects evolve in real time — turning followers into paying users.`
      },
      {
        type: 'quote',
        text: `I wasn’t trying to build a company. I was solving my own problems — and sharing them online.`
      },
      {
        type: 'text',
        text: `Nomad List quickly became the go-to resource for remote workers. As the global shift to remote work accelerated, his user base exploded — all without a marketing budget or a single employee.`
      },
      {
        type: 'text',
        text: `Following that success, he launched Remote OK, a remote job board, applying the same solo founder mindset — automate everything, stay lean, and focus on value.`
      },
      {
        type: 'text',
        text: `By his early 30s, Pieter was generating over 3 million dollars per year in automated income from his projects. He became a symbol of the indie hacker movement — proof that you could build profitable businesses alone, without investors or offices.`
      },
      {
        type: 'text',
        text: `But Pieter’s goal was never about massive wealth. He designed his life around flexibility.`
      },
      {
        type: 'text',
        text: `Today, he splits his time between Bali, Thailand, and Amsterdam. He doesn’t own luxury cars or mansions — instead, he rents apartments near the beach or in vibrant cities. His days are spent coding a few hours, surfing, exploring local cafés, and connecting with other digital nomads.`
      },
      {
        type: 'lifestyle',
        title: "Where is Pieter Levels Now?",
        items: [
          "Runs Nomad List and Remote OK, fully bootstrapped and automated",
          "Generates over 3 million dollars per year as a solo founder",
          "Lives between Bali, Thailand, and Amsterdam — no fixed office",
          "Prefers experiences over possessions — no mansion, no sports cars",
          "Advocates for remote work, minimalism, and indie entrepreneurship"
        ]
      }
    ],
    milestones: [
      { year: 2014, title: "Launched Nomad List at 27", description: "Started as a public spreadsheet during his 12 startups challenge" },
      { year: 2015, title: "Created Remote OK", description: "Built a leading remote job board, fully automated" },
      { year: 2019, title: "Reached 1M Annual Revenue", description: "Scaled solo projects without hiring or funding" },
      { year: 2023, title: "3M+ Per Year, Fully Remote", description: "Lives as a digital nomad while running a SaaS empire alone" }
    ]
  },

  {
    id: 3,
    name: "Alexis Ohanian",
    image: "/images/alexis_ohanian.jpg",
    title: "The College Project That Became the Front Page of the Internet",
    teaser: "How Alexis Ohanian co-founded Reddit, sold it at 23, and built a life funding creators and championing ethical tech.",
    content: [
      {
        type: 'text',
        text: `Alexis Ohanian grew up in Baltimore, Maryland — the son of an Armenian immigrant father and a German-born mother. From a young age, he was drawn to computers, video games, and the idea that anyone could build something impactful online.`
      },
      {
        type: 'text',
        text: `He attended the University of Virginia, where he met his college roommate Steve Huffman. Between classes, they bonded over tech and startup ideas — dreaming of building something meaningful before they graduated.`
      },
      {
        type: 'text',
        text: `In 2005, at just 22, they pitched a mobile food ordering app to Y Combinator. Paul Graham rejected the idea but told them, "Build something people use every day." That advice sparked Reddit — a simple website where anyone could share links and vote on what mattered.`
      },
      {
        type: 'text',
        text: `They launched Reddit with no users, no design, and no funding — just pure hustle. To make it look active, Alexis and Steve created fake accounts, posting and upvoting their own links until real users started trickling in.`
      },
      {
        type: 'quote',
        text: `We weren’t experts. We were two college kids figuring it out as we went — faking a community until it became real.`
      },
      {
        type: 'text',
        text: `Reddit’s simplicity and openness caught on fast. Within a year, it became one of the fastest-growing sites on the web — the place where internet culture, news, and memes collided.`
      },
      {
        type: 'text',
        text: `In 2006, just 16 months after launch, Alexis and Steve sold Reddit to Condé Nast for approximately $10 million dollars. Alexis was only 23 — a millionaire before most people land their first job. But instead of retiring young, Alexis stayed hungry.`
      },
      {
        type: 'text',
        text: `Throughout his late 20s and 30s, he shifted from founder to investor, co-founding Initialized Capital and backing early giants like Coinbase, Instacart, and Flexport. But Alexis wasn’t just chasing returns — he became a vocal advocate for ethical tech, diversity, and creator empowerment.`
      },
      {
        type: 'text',
        text: `In 2020, he left Initialized to launch 776, a venture fund focused on mission-driven startups — blending profit with purpose.`
      },
      {
        type: 'text',
        text: `Today, Alexis balances his role as a leading tech investor with family life. Married to tennis legend Serena Williams, he’s just as likely to be seen courtside with his daughter as he is speaking at a startup event.`
      },
      {
        type: 'text',
        text: `Unlike flashy founders, Alexis doesn’t flaunt extreme wealth. He owns a comfortable home in Florida, drives practical cars, and spends heavily on causes he believes in — from supporting Black founders to advocating for paid paternity leave.`
      },
      {
        type: 'lifestyle',
        title: "Where is Alexis Ohanian Now?",
        items: [
          "Founder of 776, investing in ethical and diverse startups",
          "Early investor in Coinbase, Instacart, and other unicorns",
          "Lives in Florida with Serena Williams and their daughter",
          "Drives a modest electric car, focuses on family and impact",
          "Advocates for social justice, creator rights, and responsible tech"
        ]
      }
    ],
    milestones: [
      { year: 2005, title: "Founded Reddit at 22", description: "Launched from Y Combinator’s first batch" },
      { year: 2006, title: "Sold Reddit at 23", description: "Acquired by Condé Nast just 16 months after launch" },
      { year: 2012, title: "Co-Founded Initialized Capital", description: "Backed early-stage startups like Coinbase" },
      { year: 2020, title: "Launched 776", description: "Focused on mission-driven venture investing" }
    ]
  },
  
  {
    id: 4,
    name: "Patrick Collison",
    image: "/images/patrick_collison.jpg",
    title: "The Brothers Who Simplified Payments and Built a $50B Company",
    teaser: "How Patrick Collison went from a small town in Ireland to founding Stripe — making online payments effortless worldwide.",
    content: [
      {
        type: 'text',
        text: `Patrick Collison grew up in the tiny village of Dromineer, Ireland — population less than 100. With no tech hubs in sight, Patrick and his younger brother John spent their childhood teaching themselves how to code on dial-up internet.`
      },
      {
        type: 'text',
        text: `By 16, Patrick had already won Ireland’s Young Scientist of the Year for building his own programming language. College was brief — he enrolled at MIT but dropped out after a year, realizing he could learn more by building.`
      },
      {
        type: 'text',
        text: `In 2008, the Collison brothers launched their first startup, Auctomatic, a tool for managing eBay sales. Still teenagers, they moved to Silicon Valley and sold the company within a year for 5 million dollars. But that was just the beginning.`
      },
      {
        type: 'text',
        text: `Despite their early success, Patrick and John were frustrated by one thing — how painfully complicated it was to accept payments online. Setting up transactions took weeks, with outdated banking systems standing in the way of innovation.`
      },
      {
        type: 'text',
        text: `In 2010, at just 22, Patrick and John started building Stripe — a simple API that would let developers integrate payments with just a few lines of code. They didn’t make noise about it. Instead, they quietly shared Stripe with friends, startups, and on Hacker News.` 
      },
      {
        type: 'quote',
        text: `We weren’t trying to launch with fanfare. We just wanted developers to say — this is so much easier.`
      },
      {
        type: 'text',
        text: `The product spoke for itself. Word spread fast in the developer community. By 2011, they joined Y Combinator and quickly attracted attention from Silicon Valley heavyweights like Elon Musk and Peter Thiel, who became early investors.`
      },
      {
        type: 'text',
        text: `Stripe became the invisible backbone of the internet economy — powering payments for companies like Shopify, Amazon, and Lyft. The Collison brothers, known for their intellect and humility, avoided the spotlight even as Stripe’s valuation soared.`
      },
      {
        type: 'text',
        text: `By 28, Patrick was one of the world’s youngest self-made billionaires. But rather than chasing luxury, he focused on Stripe’s mission — growing the GDP of the internet.` 
      },
      {
        type: 'text',
        text: `Today, Patrick lives a low-key life split between San Francisco and occasional trips back to Ireland. He’s known for his obsession with learning — devouring books on science, philosophy, and economics.` 
      },
      {
        type: 'text',
        text: `He doesn’t flaunt wealth. No flashy cars or mansions. Instead, he invests in ambitious projects like Fast Grants, funding scientific research, and supports initiatives to accelerate global progress.` 
      },
      {
        type: 'lifestyle',
        title: "Where is Patrick Collison Now?",
        items: [
          "CEO of Stripe, valued at over 50 billion dollars",
          "Passionate about science funding and global innovation",
          "Splits time between San Francisco and visiting Ireland",
          "Leads a minimalist lifestyle — avoids luxury and media attention",
          "Spends free time reading, writing, and supporting research initiatives"
        ]
      }
    ],
    milestones: [
      { year: 2008, title: "First Exit at 19", description: "Sold Auctomatic for 5 million dollars" },
      { year: 2010, title: "Founded Stripe at 22", description: "Built a simple API to fix online payments" },
      { year: 2016, title: "Billionaire by 28", description: "Stripe became a global payment giant" },
      { year: 2023, title: "Stripe Hits $50B+ Valuation", description: "Focused on expanding internet economic infrastructure" }
    ]
  },
  
  

  {
    id: 5,
    name: "Daniel Gross",
    image: "/images/daniel_gross.jpg",
    title: "The Teen Who Left Israel to Build in Silicon Valley",
    teaser: "How Daniel Gross went from a self-taught coder in Jerusalem to leading AI at Apple and backing the world’s top founders.",
    content: [
      {
        type: 'text',
        text: `Daniel Gross grew up in Jerusalem, Israel — a city known for history, not tech startups. But while other kids focused on school, Daniel was teaching himself to code using online forums and outdated computers. By 15, he was building serious projects from his bedroom.`
      },
      {
        type: 'text',
        text: `Unlike most teens, Daniel wasn’t aiming for college. At 18, he cold-applied to Y Combinator with a search engine project called Cue — and got accepted, making him one of the youngest founders ever in YC’s history.` 
      },
      {
        type: 'text',
        text: `With no connections and little money, he left Israel for Silicon Valley. Living frugally, Daniel focused entirely on building. Cue evolved into an AI-powered personal assistant that organized data from emails, calendars, and files — years ahead of its time.`
      },
      {
        type: 'quote',
        text: `I didn’t care about being a ‘founder.’ I just wanted to work on interesting problems with smart people.`
      },
      {
        type: 'text',
        text: `In 2013, at just 22, Daniel sold Cue to Apple for a reported 40 million dollars. Instead of moving on, Apple asked him to stay — and he ended up leading AI and machine learning projects within the company.`
      },
      {
        type: 'text',
        text: `But Daniel wasn’t built for corporate life. After a few years, he left Apple to co-found Pioneer — a platform designed to discover and fund ambitious people around the world, using online tournaments and mentorship instead of traditional venture capital.`
      },
      {
        type: 'text',
        text: `Alongside Pioneer, Daniel became a sought-after angel investor, backing startups like GitHub (pre-Microsoft acquisition), Figma, and Notion — spotting breakout companies before they became household names.`
      },
      {
        type: 'text',
        text: `Today, Daniel is known for his sharp mind, love of AI, and passion for finding "lost Einsteins" — brilliant people who just need a shot.`
      },
      {
        type: 'text',
        text: `He lives a minimalist lifestyle in San Francisco, often described as quiet and intensely focused. No flashy cars or luxury homes — Daniel invests in ideas, not things. He spends his time reading, writing, mentoring founders, and exploring cutting-edge AI research.`
      },
      {
        type: 'lifestyle',
        title: "Where is Daniel Gross Now?",
        items: [
          "Co-founder of Pioneer, funding ambitious global talent",
          "Angel investor in companies like GitHub, Figma, and Notion",
          "Former Director of AI at Apple after selling his startup at 22",
          "Lives simply in San Francisco — no luxury flex, focused on impact",
          "Passionate about AI, philosophy, and discovering hidden talent"
        ]
      }
    ],
    milestones: [
      { year: 2010, title: "Accepted to YC at 18", description: "Moved from Israel to Silicon Valley with his startup Cue" },
      { year: 2013, title: "Sold Cue to Apple at 22", description: "Joined Apple to lead AI and machine learning projects" },
      { year: 2018, title: "Launched Pioneer", description: "Created a new way to fund and mentor global talent" },
      { year: 2020, title: "Backed Future Unicorns", description: "Invested early in GitHub, Figma, Notion, and more" }
    ]
  },
  
  {
    id: 6,
    name: "Guillermo Rauch",
    image: "/images/guillermo_rauch.jpg",
    title: "From Small Town Argentina to Powering the Modern Web",
    teaser: "How Guillermo Rauch went from a teenage hacker without a diploma to creating Next.js and leading Vercel — now behind websites like Netflix and TikTok.",
    content: [
      {
        type: 'text',
        text: `Guillermo Rauch was born in a small town in Argentina, far from the tech hubs of Silicon Valley. Growing up, he found his passion in internet cafes, where he taught himself to code by experimenting with open-source projects. By age 11, while others played games, Guillermo was already contributing to developer forums and building tools.`
      },
      {
        type: 'text',
        text: `School never fit his ambitions. At 17, he dropped out and took a job in Switzerland, gaining real-world experience as a developer. Just a year later, he made a bold move — emigrating alone to the United States at 18 to chase his dream of becoming a tech entrepreneur.`
      },
      {
        type: 'text',
        text: `Guillermo quickly made a name for himself in the Node.js community. He created foundational tools like Socket.IO, Now.js, Hyperterm CLI, and Mongoose — projects that shaped how developers built real-time and command-line applications.` 
      },
      {
        type: 'quote',
        text: `I always believed the web should be faster, simpler, and accessible to anyone who wants to build.`
      },
      {
        type: 'text',
        text: `In 2015, Guillermo founded Zeit (later rebranded to Vercel) to solve a pain he felt deeply — making web deployment effortless. Around the same time, he introduced Next.js, an open-source React framework that became the standard for modern web development.`
      },
      {
        type: 'text',
        text: `By focusing on developers and open source, Guillermo grew Vercel quietly but powerfully. Today, Vercel powers websites for giants like Netflix, TikTok, Twitch, and many more, becoming a multi-billion dollar company without the loud hype typical of tech startups.`
      },
      {
        type: 'text',
        text: `Despite his success, Guillermo avoids the typical Silicon Valley lifestyle. Known for his minimalist mindset, he doesn’t chase luxury cars or mansions. Instead, he focuses on product innovation, developer tools, and fostering open-source communities.` 
      },
      {
        type: 'text',
        text: `Now based in San Francisco, Guillermo leads Vercel while staying hands-on with coding. His story proves that you don’t need a degree, a team of investors, or a perfect background to shape the internet — just relentless focus, passion, and the courage to start.` 
      },
      {
        type: 'lifestyle',
        title: "Where is Guillermo Rauch Now?",
        items: [
          "CEO of Vercel, powering sites for companies like Netflix and TikTok",
          "Creator of Next.js, Socket.IO, Now.js, and Hyperterm",
          "Lives a minimalist life in San Francisco, focused on product and open source",
          "Advocates for simplicity in software and empowering developers globally",
          "Invests his time in building tools that shape the future of the web"
        ]
      }
    ],
    milestones: [
      { year: 2007, title: "Moved to Switzerland at 17", description: "Left school to work as a developer in Europe" },
      { year: 2008, title: "Emigrated to U.S. at 18", description: "Joined the Node.js community and launched key open-source tools" },
      { year: 2010, title: "Created Socket.IO & Now.js", description: "Pioneered real-time web communication tools" },
      { year: 2015, title: "Founded Vercel & Next.js", description: "Simplified web deployment and modern frontend development" },
      { year: 2022, title: "Vercel Hits Unicorn Status", description: "Adopted by global tech giants, valued at billions" }
    ]
  },
  
  {
    id: 7,
    name: "Arvid Kahl",
    image: "/images/arvid_kahl.jpg",
    title: "The Developer Who Built, Sold, and Documented the Indie Hacker Dream",
    teaser: "How Arvid Kahl bootstrapped a SaaS business with his partner, sold it for millions, and became a leading voice for founders chasing freedom over funding.",
    content: [
      {
        type: 'text',
        text: `Arvid Kahl grew up in a small town in Germany, where his curiosity for technology led him to teach himself how to code. After finishing his studies in Computer Science, he spent years working typical software engineering jobs — but the 9-to-5 grind never felt right.`
      },
      {
        type: 'text',
        text: `In his early 30s, while working as a developer, Arvid met Danielle Simpson, an online English teacher from Canada. They connected over a shared desire for independence and meaningful work. Danielle constantly struggled with repetitive tasks in her teaching job — writing student feedback manually every day.`
      },
      {
        type: 'text',
        text: `At 34 years old, Arvid decided to build a solution. Together, in 2017, they launched FeedbackPanda — a SaaS tool that automated feedback for online teachers. It wasn’t a grand startup vision. It was a simple product solving Danielle’s daily problem.` 
      },
      {
        type: 'quote',
        text: `We weren’t chasing unicorns. We just wanted a profitable, sustainable business that gave us freedom.`
      },
      {
        type: 'text',
        text: `With zero outside funding, no employees, and no marketing budget, they grew by focusing on niche teacher communities, listening to users, and constantly improving the product. Within 2 years, FeedbackPanda was generating $55,000 in monthly recurring revenue — fully bootstrapped.` 
      },
      {
        type: 'text',
        text: `In 2019, at age 36, Arvid and Danielle sold FeedbackPanda to a private equity firm for a reported low 7-figure deal. It was enough to achieve financial independence.` 
      },
      {
        type: 'text',
        text: `But instead of retiring quietly, Arvid did something rare — he documented everything. He became a mentor to thousands by sharing the behind-the-scenes of building, growing, and exiting a SaaS business without investors.` 
      },
      {
        type: 'text',
        text: `He published "Zero to Sold", which became a bestseller in the indie hacker community, offering a transparent roadmap for bootstrapped founders.` 
      },
      {
        type: 'text',
        text: `Today, Arvid lives a calm life in Germany with Danielle. He doesn’t own flashy cars or luxury homes. His definition of success is simple — owning his time, writing, podcasting, and helping others escape the rat race through sustainable entrepreneurship.` 
      },
      {
        type: 'lifestyle',
        title: "Where is Arvid Kahl Now?",
        items: [
          "Financially independent after selling FeedbackPanda",
          "Author of 'Zero to Sold' and 'The Embedded Entrepreneur'",
          "Lives in Germany, focusing on writing, podcasting, and mentoring",
          "Advocates for calm, profitable businesses over venture-backed hyper-growth",
          "Enjoys a minimalist lifestyle centered around freedom and creativity"
        ]
      }
    ],
    milestones: [
      { year: 2017, title: "Founded FeedbackPanda at 34", description: "Built a SaaS tool with Danielle to automate teacher feedback" },
      { year: 2019, title: "Exited for 7 Figures", description: "Sold FeedbackPanda after scaling to $55k MRR bootstrapped" },
      { year: 2020, title: "Published Zero to Sold", description: "Shared his blueprint for indie hacker success" },
      { year: 2023, title: "Mentor & Thought Leader", description: "Continues to inspire founders to build freedom-first businesses" }
    ]
  },  
  
  {
    id: 8,
    name: "Ben Tossell",
    image: "/images/ben_tossell.jpg",
    title: "The Community Builder Who Made No-Code Mainstream",
    teaser: "How Ben Tossell turned a lack of coding skills into his greatest asset — building and selling Makerpad, and proving anyone can launch tech products.",
    content: [
      {
        type: 'text',
        text: `Ben Tossell grew up in Wales, far from Silicon Valley. He studied Business Management at Cardiff Metropolitan University but graduated unsure of how to break into tech — especially without knowing how to code.`
      },
      {
        type: 'text',
        text: `In his early 20s, Ben landed a role in community management, where he discovered the power of connecting makers and founders. His big break came in 2016, at age 25, when he joined Product Hunt — immersing himself in a world where people launched startups overnight.` 
      },
      {
        type: 'text',
        text: `Surrounded by developers, Ben noticed a gap: what about people like him — non-technical but full of ideas? This realization planted the seed for what would become Makerpad.` 
      },
      {
        type: 'text',
        text: `By 2019, at 28 years old, Ben launched Makerpad — a platform teaching people to build apps, automate tasks, and launch businesses using no-code tools like Webflow, Airtable, and Zapier. He built the entire platform without writing a single line of code.` 
      },
      {
        type: 'quote',
        text: `No-code wasn’t a hack — it was a movement. I wanted to show people they didn’t need permission or technical skills to build.`
      },
      {
        type: 'text',
        text: `Ben grew Makerpad by sharing tutorials and success stories on Twitter, leveraging the rising indie hacker and no-code communities. Within a year, Makerpad became the go-to resource for anyone wanting to build without engineers or venture capital.` 
      },
      {
        type: 'text',
        text: `In 2021, just two years after launching, Ben sold Makerpad to Zapier for a multi-million dollar exit — aligning perfectly with Zapier’s mission of automation and empowerment.` 
      },
      {
        type: 'text',
        text: `After the acquisition, Ben didn’t stick around for a corporate role. With financial freedom secured, he stepped back to focus on what mattered most — spending time with family, investing in startups, and sharing his journey to help others break into tech without traditional barriers.`
      },
      {
        type: 'lifestyle',
        title: "Where is Ben Tossell Now?",
        items: [
          "Financially independent after selling Makerpad to Zapier",
          "Invests in no-code startups and indie founders",
          "Lives in the UK, focusing on family and passion projects",
          "Advocates for building without code, funding, or permission",
          "Enjoys a minimalist lifestyle centered around freedom and creativity"
        ]
      }
    ],
    milestones: [
      { year: 2016, title: "Joined Product Hunt at 25", description: "Worked in community management, connecting makers daily" },
      { year: 2019, title: "Founded Makerpad at 28", description: "Launched the leading no-code education platform" },
      { year: 2021, title: "Sold Makerpad", description: "Exited to Zapier in a multi-million dollar deal" },
      { year: 2023, title: "Investor & No-Code Advocate", description: "Supports founders building without technical skills or VC money" }
    ]
  },
  {
    id: 9,
    name: "David Darmanin",
    image: "/images/david_darmanin.jpg",
    title: "From Failed Startups to Bootstrapping a $40M SaaS Success",
    teaser: "How David Darmanin built Hotjar from Malta, proving you don’t need Silicon Valley or VC money to win big.",
    content: [
      {
        type: 'text',
        text: `David Darmanin grew up in Malta, a small Mediterranean island with no real startup scene. He followed a traditional path at first, earning a law degree from the University of Malta — but his passion was always design, marketing, and understanding how people interacted with products.`
      },
      {
        type: 'text',
        text: `After college, David spent years working as a conversion rate optimization (CRO) consultant, helping companies improve their websites. At the same time, in his late 20s and early 30s, he launched several startups — all of which failed. Those failures taught him critical lessons about product-market fit, pricing, and user empathy.`
      },
      {
        type: 'text',
        text: `By 34, while still consulting full-time, David noticed a recurring problem: businesses had no affordable way to see how users behaved on their websites. In 2014, using his evenings and weekends, he launched Hotjar — a simple, affordable tool offering heatmaps, session recordings, and feedback polls.` 
      },
      {
        type: 'text',
        text: `He bootstrapped Hotjar with a small remote team, using savings and revenue from early customers. With no outside funding, David relied on word-of-mouth, transparent pricing, and a deep understanding of what marketers actually needed.` 
      },
      {
        type: 'quote',
        text: `I wasn’t looking to build a unicorn. I wanted a product that solved a real problem and could fund a good life.`
      },
      {
        type: 'text',
        text: `Hotjar quickly resonated with startups and SMBs priced out by expensive enterprise tools. Within three years, it crossed $10M ARR — fully bootstrapped.`
      },
      {
        type: 'text',
        text: `In 2021, at 41, David sold Hotjar to Contentsquare in a private deal rumored to be worth hundreds of millions. But instead of chasing status, he stayed in Malta, focusing on family, sailing, and backing ethical startups.` 
      },
      {
        type: 'text',
        text: `Today, David enjoys true freedom — no corporate grind, no flashy lifestyle. He drives a modest car, lives near the coast, and spends his time mentoring founders who want to build sustainable, calm businesses without burning out.` 
      },
      {
        type: 'lifestyle',
        title: "Where is David Darmanin Now?",
        items: [
          "Financially independent after Hotjar’s acquisition",
          "Lives in Malta, enjoying sailing and Mediterranean life",
          "Drives a simple car — values freedom over luxury",
          "Angel invests in user-first, ethical SaaS startups",
          "Spends time with family and mentoring bootstrapped founders"
        ]
      }
    ],
    milestones: [
      { year: 2014, title: "Launched Hotjar at 34", description: "Built while consulting, using savings and remote talent" },
      { year: 2017, title: "Hit $10M ARR", description: "Became a leading UX tool for startups — bootstrapped" },
      { year: 2021, title: "Sold Hotjar", description: "Exited to Contentsquare in a life-changing deal" },
      { year: 2023, title: "Investor & Mentor", description: "Focused on ethical SaaS, freedom, and family life" }
    ]
  },

  {
    id: 10,
    name: "Courtland Allen",
    image: "/images/courtland_allen.jpg",
    title: "From Solo Developer to Building the Indie Hacker Revolution",
    teaser: "How Courtland Allen bootstrapped Indie Hackers, got acquired by Stripe, and inspired thousands to build profitable online businesses.",
    content: [
      {
        type: 'text',
        text: `Courtland Allen grew up in Mississippi with a passion for computers and problem-solving. His talent earned him a scholarship to study Computer Science at MIT, where he graduated and followed the typical tech path — landing a software engineering job in Silicon Valley.`
      },
      {
        type: 'text',
        text: `But the 9-to-5 life didn’t satisfy him. Throughout his mid-20s, Courtland worked at startups by day and built side projects by night. He launched multiple apps and businesses, but none gained lasting traction. These failures, however, taught him valuable lessons about product-market fit and the power of small, profitable businesses.` 
      },
      {
        type: 'text',
        text: `In 2016, at 28 years old, frustrated by the lack of stories about solo founders, Courtland built Indie Hackers — a platform to showcase entrepreneurs making a sustainable income without venture capital. He coded the entire site himself in a matter of weeks while freelancing to pay the bills.`
      },
      {
        type: 'text',
        text: `With no marketing budget, he shared Indie Hackers on Hacker News, Reddit, and Twitter. The response was immediate — thousands of aspiring founders resonated with his mission of financial independence through bootstrapped businesses.` 
      },
      {
        type: 'quote',
        text: `I wanted to prove you could make a good living online without playing the startup lottery.`
      },
      {
        type: 'text',
        text: `Within months, Indie Hackers became the hub for bootstrappers worldwide. Later that year, Courtland received an unexpected offer — Stripe wanted to acquire Indie Hackers to further their mission of growing the GDP of the internet.` 
      },
      {
        type: 'text',
        text: `At 29, Courtland sold Indie Hackers but stayed on to lead and expand the community. Under his guidance, Indie Hackers evolved into a thriving ecosystem of forums, podcasts, and local meetups.`
      },
      {
        type: 'text',
        text: `Today, Courtland lives in San Francisco. Despite his success, he keeps a low profile — no luxury cars or mansions. He spends his time coding, podcasting, mentoring founders, and continuing to inspire people to build online businesses on their own terms.` 
      },
      {
        type: 'lifestyle',
        title: "Where is Courtland Allen Now?",
        items: [
          "Leads Indie Hackers under Stripe, empowering global bootstrappers",
          "Lives in San Francisco, focused on community and product",
          "Drives a modest car, values freedom over flashy status",
          "Hosts the Indie Hackers podcast, sharing real founder stories",
          "Invests in mentoring and growing the indie hacker movement"
        ]
      }
    ],
    milestones: [
      { year: 2016, title: "Launched Indie Hackers at 28", description: "Built solo while freelancing, gained traction via Hacker News" },
      { year: 2017, title: "Acquired by Stripe at 29", description: "Scaled Indie Hackers into a global community" },
      { year: 2020, title: "Expanded Community", description: "Grew podcasts, forums, and local founder meetups" },
      { year: 2023, title: "Champion of Bootstrappers", description: "Continues to inspire and support indie founders worldwide" }
    ]
  },
  // {
  //   id: 11,
  //   name: "Sahil Lavingia",
  //   image: "/images/sahil_lavingia.jpg",
  //   title: "The Designer Who Turned a Weekend Project Into a $100M Business — On His Terms",
  //   teaser: "How Sahil Lavingia built Gumroad, walked away from VC expectations, and designed a life around freedom and creativity.",
  //   content: [
  //     {
  //       type: 'text',
  //       text: `Sahil Lavingia grew up between New York and Singapore, always drawn to creativity and design. He enrolled at USC for computer science but dropped out at 18 after landing a role as the first designer at Pinterest. That experience exposed him to Silicon Valley’s startup world — but also showed him how complicated it was to build simple tools for creators.`
  //     },
  //     {
  //       type: 'text',
  //       text: `In 2011, at just 19, Sahil built Gumroad over a weekend. It was born from his frustration — why was it so hard for creators to sell a digital product, like an ebook or design asset, directly to their audience? He shared the project on Twitter, Hacker News, and with his network from Pinterest. The response was immediate: creators loved the simplicity.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Excited by early traction, Sahil raised $8 million from top VCs, including Kleiner Perkins. He hired a team and tried to scale Gumroad into a classic Silicon Valley success story. But growth wasn’t fast enough for venture expectations.` 
  //     },
  //     {
  //       type: 'quote',
  //       text: `"I built something people wanted — just not at the scale VCs needed to justify their investment."`
  //     },
  //     {
  //       type: 'text',
  //       text: `By 2015, Sahil faced a tough decision. Gumroad was generating steady revenue, but it wasn’t a unicorn. Instead of chasing unsustainable growth or shutting down, he laid off most of his team, returned the office lease, and moved Gumroad to a one-man operation.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `He automated everything he could — payments, support, infrastructure — and quietly grew Gumroad as a lean, profitable business. No more investor pressure. No more hiring sprees. Just a sustainable tool serving creators.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Sahil became known for his radical transparency, publishing Gumroad’s financials publicly and openly discussing the downsides of venture capital. His honest approach attracted even more creators to the platform.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `By 2020, Gumroad was processing over $10 million a month for creators — all run by Sahil and a few contractors. He had proven that you don’t need a big team or VC backing to build a meaningful, profitable company.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Now in his early 30s, Sahil lives in Provo, Utah, far from Silicon Valley. He spends his days painting, writing, angel investing, and working just a few hours a week. He doesn’t own flashy cars or mansions — instead, he prioritizes freedom, creativity, and helping other founders escape the growth-at-all-costs mindset.` 
  //     },
  //     {
  //       type: 'lifestyle',
  //       title: "Where is Sahil Lavingia Now?",
  //       items: [
  //         "Runs Gumroad solo with a few contractors, serving thousands of creators",
  //         "Lives in Provo, Utah, focusing on art, writing, and investing",
  //         "Drives a modest car, avoids luxury for intentional living",
  //         "Publishes essays on entrepreneurship, creativity, and calm business",
  //         "Invests in startups that align with sustainable and creator-friendly values"
  //       ]
  //     }
  //   ],
  //   milestones: [
  //     { year: 2011, title: "Launched Gumroad at 19", description: "Built in a weekend, shared on Twitter and Hacker News" },
  //     { year: 2012, title: "Raised $8M VC Funding", description: "Scaled team but growth didn’t match VC expectations" },
  //     { year: 2015, title: "Downsized to Solo Operation", description: "Laid off team, pivoted to profitability" },
  //     { year: 2023, title: "Gumroad Hits $100M+ in Creator Payouts", description: "Proved calm, lean businesses can thrive" }
  //   ]
  // },

  // {
  //   id: 12,
  //   name: "Derrick Reimer",
  //   image: "/images/derrick_reimer.jpg",
  //   title: "Why Derrick Reimer Shut Down His Startup to Build the Right One",
  //   teaser: "How Derrick Reimer bootstrapped Drip, walked away from VC money, and proved that calm businesses can win.",
  //   content: [
  //     {
  //       type: 'text',
  //       text: `Derrick Reimer grew up in Minnesota with a passion for building software. He studied Computer Science at South Dakota State University, but even before graduating, he knew the typical corporate path wasn’t for him.`
  //     },
  //     {
  //       type: 'text',
  //       text: `After college, Derrick worked as a freelance developer, helping businesses build web apps. It was during this time, in his mid-20s, that he teamed up with entrepreneur Rob Walling to launch Drip — an email marketing tool designed for small businesses that couldn't afford complex platforms like HubSpot.`
  //     },
  //     {
  //       type: 'text',
  //       text: `With no outside funding, they grew Drip by focusing on indie hackers, startups, and solopreneurs. Derrick handled all the technical development while Rob led marketing through podcasts, blogging, and niche communities. Word of mouth and tight customer feedback loops drove steady growth.` 
  //     },
  //     {
  //       type: 'quote',
  //       text: `"We didn’t want hyper-growth. We wanted a business that gave us freedom and served real customers."`
  //     },
  //     {
  //       type: 'text',
  //       text: `By 2016, Drip had become a leader in lightweight email automation. The company was acquired by Leadpages for a multi-million dollar exit, giving Derrick financial independence before 30.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `In 2019, Derrick launched Level, a Slack competitor focused on calm communication. But after raising VC money, he realized he was building something he didn’t believe in — a product that required constant growth pressure. He made the rare decision to shut it down and return the funds.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Returning to his bootstrapped roots, Derrick launched SavvyCal in 2020 — a scheduling tool designed to respect both the sender and recipient. He marketed it through Twitter, podcasts, and indie hacker networks, reaching profitability within a year.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Now in his early 30s, Derrick lives a quiet life in Minnesota. No flashy cars or Silicon Valley lifestyle — just a cozy home, a reliable car, and the freedom to work on projects he enjoys. He spends his days coding, podcasting, and mentoring founders who want to build calm, sustainable businesses.` 
  //     },
  //     {
  //       type: 'lifestyle',
  //       title: "Where is Derrick Reimer Now?",
  //       items: [
  //         "Founder of SavvyCal, a profitable solo SaaS",
  //         "Co-founder of Drip, exited for a multi-million dollar deal",
  //         "Lives in Minnesota, embracing simple living and remote work",
  //         "Drives a modest car, focuses on freedom over luxury",
  //         "Shares insights through podcasts, writing, and mentoring indie founders"
  //       ]
  //     }
  //   ],
  //   milestones: [
  //     { year: 2013, title: "Launched Drip", description: "Bootstrapped an email marketing SaaS while freelancing" },
  //     { year: 2016, title: "Drip Acquired", description: "Sold to Leadpages for a multi-million dollar exit" },
  //     { year: 2019, title: "Shut Down Level", description: "Returned VC funds after realizing misaligned vision" },
  //     { year: 2020, title: "Founded SavvyCal", description: "Bootstrapped to profitability within a year" }
  //   ]
  // },

  // {
  //   id: 13,
  //   name: "Ilya Zhitomirskiy",
  //   image: "/images/ilya_zhitomirskiy.jpg",
  //   title: "The Student Who Took on Facebook with a Dream of Decentralization",
  //   teaser: "How Ilya Zhitomirskiy and his friends tried to revolutionize social media from their college apartment — before privacy was mainstream.",
  //   content: [
  //     {
  //       type: 'text',
  //       text: `Born in Moscow and raised in the U.S., Ilya Zhitomirskiy was a visionary long before tech giants cared about privacy. While studying at NYU in his early 20s, Ilya and three friends decided to take on an impossible mission — build a decentralized, open-source alternative to Facebook.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `In 2010, at just 21 years old, they launched Diaspora from their cramped apartment. The idea? Give people control over their data when the world was blindly trusting social media platforms.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `They didn’t have Silicon Valley connections or a polished business plan. Instead, they posted their idea on Kickstarter — hoping to raise $10,000. The internet rallied behind them. They raised over $200,000, making it one of the biggest crowdfunding successes at the time.` 
  //     },
  //     {
  //       type: 'quote',
  //       text: `"We were just four students who believed the web could be a better place — owned by everyone, not corporations."`
  //     },
  //     {
  //       type: 'text',
  //       text: `Tech legends like Mark Zuckerberg himself donated to their campaign, calling it a "cool idea." The media dubbed them the "Anti-Facebook." Suddenly, these college kids were thrust into the spotlight — praised as the future of ethical social networking.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `But behind the scenes, the pressure was immense. Ilya, the idealist of the group, struggled with the weight of expectations, perfectionism, and the harsh realities of building a startup that challenged Big Tech.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Tragically, in 2011, at just 22 years old, Ilya passed away. His death shook the tech world and became a symbol of how brutal startup life can be when passion meets overwhelming pressure.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Yet, his legacy lives on. Diaspora* didn’t become the next Facebook, but it sparked a global conversation about data privacy, decentralization, and ethical tech — years before these became mainstream concerns.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Today, Diaspora* is still maintained by the open-source community, a testament to Ilya’s vision that technology should empower people, not exploit them.` 
  //     },
  //     {
  //       type: 'lifestyle',
  //       title: "Where is Diaspora* Now?",
  //       items: [
  //         "One of the first decentralized social networks, still running as open-source",
  //         "Inspired the wave of privacy-focused platforms like Mastodon",
  //         "Ilya’s story is taught as a case study in ethical tech and founder wellness",
  //         "Kickstarter success paved the way for crowdfunding in tech",
  //         "A lasting symbol of building for values, not just valuation"
  //       ]
  //     }
  //   ],
  //   milestones: [
  //     { year: 2010, title: "Launched Diaspora at 21", description: "Crowdfunded $200K to build a privacy-first social network" },
  //     { year: 2011, title: "Global Media Attention", description: "Became the face of ethical tech and decentralization" },
  //     { year: 2011, title: "Ilya's Passing at 22", description: "Sparked conversations on mental health in startups" },
  //     { year: 2023, title: "Diaspora Lives On", description: "Maintained by developers worldwide, inspiring decentralized platforms" }
  //   ]
  // },

  // {
  //   id: 14,
  //   name: "Sandi MacPherson",
  //   image: "/images/sandi_macpherson.jpg",
  //   title: "How a Non-Technical Founder Built Silicon Valley’s Most Exclusive Network",
  //   teaser: "Sandi MacPherson turned a simple Google Sheet into Quibb — connecting top tech leaders without writing a single line of code.",
  //   content: [
  //     {
  //       type: 'text',
  //       text: `Sandi MacPherson grew up in Canada. She didn’t study computer science or business — she earned a science degree from Queen’s University, later pursuing a master's in environmental policy. Her early career was focused on climate change initiatives and policy research, a path that seemed destined for government or non-profits.`
  //     },
  //     {
  //       type: 'text',
  //       text: `But in her late 20s, Sandi became fascinated by the tech industry’s pace and innovation. With no coding background and no Silicon Valley connections, she took a leap — moving to San Francisco to immerse herself in the startup world.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `While trying to break into tech, Sandi noticed a personal frustration: social media platforms like Twitter and LinkedIn were noisy and overwhelming. There was no curated space where serious tech professionals shared what they were actually reading.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `In 2013, instead of waiting for someone else to solve it, she hacked together a solution using Google Sheets and Mailchimp. She called it Quibb — an invite-only network where tech insiders could quietly share articles and insights.` 
  //     },
  //     {
  //       type: 'quote',
  //       text: `"I wasn’t technical, so I used the tools I had. It wasn’t about flashy features — it was about creating value for the right people."`
  //     },
  //     {
  //       type: 'text',
  //       text: `Quibb wasn’t open to everyone. Sandi personally vetted every applicant, making sure the community stayed high-quality. Within months, founders, investors, and executives from top companies were using Quibb daily — from Airbnb and Twitter to Andreessen Horowitz.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Without writing a line of code, Sandi had built one of Silicon Valley’s most exclusive networks. She raised a small seed round from investors impressed by her ability to create influence without scale.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `By 2017, Sandi decided to shut Quibb down — not because it failed, but because she wasn’t interested in turning it into a traditional startup chasing growth. Instead, she focused her energy on solving a bigger problem she experienced firsthand: the lack of diversity in tech funding.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `She launched initiatives like FiftyFifty Pledge and worked to connect underrepresented founders with investors, using her hard-earned network to open doors for others.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Today, Sandi lives back in Canada, working remotely on impact-driven projects. She never chased luxury or hype — no flashy cars or Silicon Valley mansions. Her success is defined by influence, community, and driving meaningful change in tech culture.` 
  //     },
  //     {
  //       type: 'lifestyle',
  //       title: "Where is Sandi MacPherson Now?",
  //       items: [
  //         "Leads diversity and inclusion initiatives in tech funding",
  //         "Lives in Canada, working remotely on mission-driven projects",
  //         "Known for building Quibb, the private network for top tech leaders",
  //         "Invests time in connecting underrepresented founders with investors",
  //         "Keeps a low profile, focused on impact over status"
  //       ]
  //     }
  //   ],
  //   milestones: [
  //     { year: 2013, title: "Launched Quibb", description: "Created an invite-only tech network using no-code tools" },
  //     { year: 2015, title: "Raised Seed Funding", description: "Secured investors based on influence, not scale" },
  //     { year: 2017, title: "Shut Down Quibb", description: "Pivoted to focus on diversity in tech" },
  //     { year: 2023, title: "Advocate for Inclusion", description: "Continues to drive change in startup funding culture" }
  //   ]
  // },
  // {
  //   id: 15,
  //   name: "Joshua Browder",
  //   image: "/images/joshua_browder.jpg",
  //   title: "The Teen Who Took on Parking Tickets — And Then the Legal System",
  //   teaser: "How Joshua Browder built DoNotPay at 18, turning a simple bot into the world’s first ‘robot lawyer’ and redefining access to justice.",
  //   content: [
  //     {
  //       type: 'text',
  //       text: `Joshua Browder grew up in London, England, the son of a prominent tech executive. From an early age, he was surrounded by conversations about technology and entrepreneurship, but his interests leaned towards solving real-world inefficiencies — especially those that frustrated everyday people.`
  //     },
  //     {
  //       type: 'text',
  //       text: `At 18, while still a student at Stanford University, Joshua found himself repeatedly getting parking tickets he couldn’t afford to pay. Instead of just complaining, he decided to automate the process of appealing them — not just for himself, but for everyone.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `With minimal coding experience, he built **DoNotPay** — a simple chatbot designed to help users contest parking fines. What started as a side project in his dorm room quickly went viral after being featured in tech blogs and mainstream media.` 
  //     },
  //     {
  //       type: 'quote',
  //       text: `"I realized the legal system was designed to confuse people. I wanted to level the playing field."`
  //     },
  //     {
  //       type: 'text',
  //       text: `Within months, DoNotPay helped overturn hundreds of thousands of dollars in tickets. But Joshua didn’t stop there. He expanded the platform to tackle other legal headaches — from canceling subscriptions to fighting bank fees and even suing robocallers.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `By his early 20s, Joshua had transformed DoNotPay into what he called "the world’s first robot lawyer," giving ordinary people free or low-cost access to legal tools that would otherwise require expensive attorneys.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `His unconventional approach attracted investors from Silicon Valley, raising millions to expand DoNotPay’s reach. But unlike typical startup founders chasing enterprise clients, Joshua stayed focused on consumer rights — building a product that fought for the little guy.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Today, in his mid-20s, Joshua leads DoNotPay from San Francisco. Despite his success, he’s known for keeping a relatively low profile — no luxury cars or flashy lifestyle. His focus remains on democratizing access to legal services and pushing boundaries on what automation can achieve.` 
  //     },
  //     {
  //       type: 'lifestyle',
  //       title: "Where is Joshua Browder Now?",
  //       items: [
  //         "CEO of DoNotPay, expanding AI-driven legal tools",
  //         "Raised over $25M from top Silicon Valley investors",
  //         "Lives in San Francisco, focused on product and advocacy",
  //         "Known for challenging outdated legal systems with technology",
  //         "Keeps a minimalist lifestyle, reinvesting in DoNotPay’s mission"
  //       ]
  //     }
  //   ],
  //   milestones: [
  //     { year: 2015, title: "Launched DoNotPay at 18", description: "Built a chatbot to fight parking tickets while at Stanford" },
  //     { year: 2017, title: "Expanded Legal Services", description: "Added tools for bank fees, subscriptions, and small claims" },
  //     { year: 2020, title: "Raised Series A", description: "Secured $12M to grow DoNotPay’s AI legal platform" },
  //     { year: 2023, title: "DoNotPay Goes Mainstream", description: "Used by millions to fight corporations and legal bureaucracy" }
  //   ]
  // },
  // {
  //   id: 16,
  //   name: "Sam Parr",
  //   image: "/images/sam_parr.jpg",
  //   title: "From Selling Hot Dogs to a $20M Media Exit",
  //   teaser: "How Sam Parr hustled his way from street food to founding The Hustle, proving that consistency and grit can build an empire.",
  //   content: [
  //     {
  //       type: 'text',
  //       text: `Sam Parr grew up in St. Louis, Missouri, in a middle-class family where entrepreneurship wasn’t just encouraged — it was necessary. From a young age, Sam had a knack for spotting opportunities. While attending Belmont University in Nashville, he wasn’t focused on grades — he was busy making money.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `At 21, Sam launched a hot dog stand called Southern Sam’s: Wieners as Big as the South. What started as a joke quickly turned into a profitable side hustle, paying his bills while giving him a taste of business independence.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `But Sam wasn’t destined to stay in street food. After a brief stint working at a tech company, he moved to San Francisco with little more than ambition and a willingness to outwork everyone around him.` 
  //     },
  //     {
  //       type: 'quote',
  //       text: `"I didn’t have connections. I wasn’t technical. But I knew how to hustle and tell a good story."`
  //     },
  //     {
  //       type: 'text',
  //       text: `In 2016, Sam launched The Hustle, a daily email newsletter delivering business news with personality — something that felt like a conversation, not a corporate briefing. He started by manually collecting emails at events and leveraging his network, growing the list one subscriber at a time.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Through relentless focus on content, viral growth tactics, and community-building, The Hustle exploded to over 1 million subscribers. Sam bootstrapped the entire operation, turning it into a profitable media company without outside funding.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `In 2021, HubSpot acquired The Hustle for a reported $20-30 million, giving Sam the financial freedom he’d hustled for since college.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Post-exit, Sam didn’t fade into the background. He co-founded Hampton, a private community for entrepreneurs, and became a prominent voice through his podcast "My First Million," where he breaks down business ideas and interviews top founders.` 
  //     },
  //     {
  //       type: 'text',
  //       text: `Today, Sam lives in Austin, Texas. Unlike many who cash out and splurge, he’s known for a balanced lifestyle — owning a nice home, enjoying family life, and staying obsessed with business ideas. He still wakes up early, reads obsessively, and builds communities around people who love to create.` 
  //     },
  //     {
  //       type: 'lifestyle',
  //       title: "Where is Sam Parr Now?",
  //       items: [
  //         "Co-founder of Hampton, a private founder community",
  //         "Host of the top-ranked podcast 'My First Million'",
  //         "Lives in Austin with his wife, enjoying a mix of work and family life",
  //         "Invests in startups and advises media businesses",
  //         "Drives a modest car despite multi-million dollar exit — focused on ideas over luxury"
  //       ]
  //     }
  //   ],
  //   milestones: [
  //     { year: 2013, title: "Started with Hot Dogs", description: "Launched a profitable hot dog stand while in college" },
  //     { year: 2016, title: "Founded The Hustle", description: "Bootstrapped a daily business newsletter to 1M+ subscribers" },
  //     { year: 2021, title: "Sold to HubSpot", description: "Exited The Hustle for a reported $20-30M" },
  //     { year: 2022, title: "Launched Hampton", description: "Created an exclusive community for entrepreneurs" }
  //   ]
  // },
  
  
  
  
  
  
  
  
  
  
];