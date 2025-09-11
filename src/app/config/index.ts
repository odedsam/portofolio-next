import { Project } from '@/components/cards/ProjectCard';

export const PROJECTS: Project[] = [
  {
    title: 'Aura Stream',
    description:
      'Developed a sleek real-time audio streaming app with live user channels, interactive sessions, and smooth playback. Focused on low latency, performance, and a modern music-driven UX.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Zustand', 'TMDB API'],
    href: 'https://aura-stream.vercel.app/',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/aura-stream-browse.webp',
    pinned: true,
  },
  {
    title: 'RealtimeCollab',
    description:
      'RealtimeCollab is a robust collaborative platform enabling seamless live interactions, Built for scalability and responsiveness, it leverages WebSockets for real-time data sync, delivering smooth, low-latency UX for team collaboration and communication.',
    tech: ['Next.js', 'TypeScript', 'Express.js', 'WebSockets', 'Prisma', 'PostgreSQL'],
    href: 'https://realtime-collab-next-ts.vercel.app',
    imageUrl: '/thumb/realtime-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/realtimecollab',
  },
  {
    title: 'LawFinder',
    description:
      'LawFinder is an intelligent platform designed to search, discover, and compare laws, court rulings, and legal precedents in real time. Built for high performance and a streamlined user experience, it offers advanced search, smart filtering, and full multilingual support, making legal information accessible, precise, and easy to use for everyone.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Lucide Icons'],
    href: 'https://lawfinder.co.il',
    imageUrl: '/thumb/lawfinder-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/lawfinder',
  },

  {
    title: 'Estatein RealEstate',
    description:
      'Developed a smart real estate platform with property listings, advanced filters, and admin dashboards. Designed for high usability, scalability, and clean architecture. Combines sleek UI with powerful property management tools.',
    tech: ['TypeScript', 'Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'FirebaseDB'],
    href: 'https://estate-app-nuxt3.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/Estate-App-nuxt3',
    imageUrl: '/thumb/esa.webp',
    pinned: true,
  },

  {
    title: 'Explore Moon',
    description:
      'Crafted an interactive web app that simulates a lunar exploration journey. Built with immersive animations, real-time data integration, and a futuristic design. Blends storytelling with cutting-edge frontend tech for a unique user experience.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://explore-moon.vercel.app',
    imageUrl: '/thumb/explore-moon-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/explore-moon',
  },
  {
    title: 'Noad',
    description:
      'sleek platform for a future-forward techwear company. Includes dynamic product displays, micro-animations, and smooth UX flows. Designed to merge fashion innovation with digital elegance',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://noad.vercel.app',
    imageUrl: '/thumb/noad-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/crypto-dash',
  },
  {
    title: 'Coffee Shop',
    description:
      'A modern coffee shop web app featuring a fully interactive menu, table reservations, and customer management. Optimized for mobile and desktop with smooth animations, seamless ordering, and real-time updates for availability.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://coffee-shop-mauve-mu.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/coffee-shop-thumbnail.webp',
  },
  {
    title: 'Gym Studio',
    description:
      'A comprehensive fitness studio platform that allows users to book classes, track workouts, and manage subscriptions. Features responsive UI, real-time schedule updates, and personalized dashboards for both trainers and clients.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://gym-studio-pi.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/gym-studio-thumbnail.webp',
  },
  {
    title: 'Furniture Store',
    description:
      'An online furniture store with advanced product catalog, category filters, and real-time inventory tracking. Supports smooth checkout, high-quality visuals, and optimized performance for fast browsing and conversion.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://furniture-shop-eosin-eight.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/furniture-store-thumbnail.webp',
  },
  {
    title: 'Academy',
    description:
      'A professional e-learning platform offering online courses, video lessons, progress tracking, and certification. Includes personalized dashboards, multilingual support, and optimized performance for a smooth learning experience.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://academy-iota-two.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/academy-thumbnail.webp',
  },
  {
    title: 'Real Estate',
    description:
      'A real estate platform for browsing, comparing, and inquiring about properties. Features advanced search, map integration, real-time availability, and optimized UX for desktop and mobile users looking for homes or commercial spaces.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://flowers-shop-xi.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/real-estate-thumbnail.webp',
  },
  {
    title: 'Cars Rental',
    description:
      'A dynamic car rental platform offering real-time availability, instant booking, and flexible pricing. Includes smooth browsing, vehicle details, image galleries, and responsive checkout optimized for speed and low latency.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://cars-rentals-silk.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/cars-rental-thumbnail.webp',
  },
  {
    title: 'Business Consulting',
    description:
      'A professional business consulting platform showcasing services, expert profiles, case studies, and client testimonials. Includes smooth navigation, interactive forms, and optimized performance for lead generation and client engagement.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://business-consulting-kappa.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/business-consulting-thumbnail.webp',
  },
  {
    title: 'Handyman',
    description:
      'An on-demand handyman service platform allowing users to schedule repairs, track service providers, and rate completed jobs. Features a real-time booking system, responsive UI, and streamlined workflow for both clients and professionals.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://clinic-wine.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/handyman-thumbnail.webp',
  },
  {
    title: 'Kids Clothes',
    description:
      'An e-commerce platform for children’s clothing featuring curated collections, age and gender filters, promotions, and fast checkout. Optimized for mobile-first shopping, smooth product browsing, and high conversion rates.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://kids-clothes-six.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/kids-clothes-thumbnail.webp',
  },
  {
    title: 'Delicatessen',
    description:
      'An online delicatessen platform offering gourmet products with detailed descriptions, promotions, and delivery options. Features smooth browsing, quick checkout, and high-quality product images to enhance user experience.',
    tech: ['TypeScript', 'Next.js', 'Zustand', 'Tailwind CSS'],
    href: 'https://delicatessen-brown.vercel.app',
    githubMonorepo: 'https://github.com/odedsam/stream-vibe',
    imageUrl: '/thumb/delicatessen-thumbnail.webp',
  },
  {
    title: 'Virtual Library',
    description:
      'Developed an advanced web application for Browse and managing books, leveraging an open-source book API. The app enables users to search, and view detailed information about books, providing a smooth and intuitive user experience.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Zustand', 'Open Library API'],
    href: 'https://virtual-libary-rho.vercel.app/',
    githubMonorepo: 'https://github.com/odedsam/virtual-libary',
    imageUrl: '/thumb/virtual-libary-thumbnail.webp',
    pinned: true,
  },
  {
    title: 'Market Mate',
    description:
      'Developed a sleek and user-friendly basic e-commerce application, integrating the EsculaJS API. The app allows users to seamlessly browse products, search, and view detailed information, delivering a smooth and engaging shopping experience.',
    tech: ['TypeScript', 'React', 'Vite', 'Zustand', 'Escuelajs API', 'React Query'],
    href: 'https://marketmate-jet.vercel.app/',
    githubMonorepo: 'https://github.com/odedsam/marketmate',
    imageUrl: '/thumb/marketmate-thumb.webp',
    pinned: true,
  },

  {
    title: 'Pierced',
    description:
      'Built a bold, responsive website for a modern tattoo & piercing studio. Features include a custom gallery, booking system, and edgy UI that reflects the brand’s identity. Clean, scalable frontend with top UX practices.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://pierced.vercel.app/',
    imageUrl: '/thumb/pierced-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/Pierced',
  },
  {
    title: 'Hasa Media',
    description:
      'Built a dynamic platform for a digital media agency, featuring project showcases, client onboarding, and content management tools. Focused on performance, elegant UI, and smooth user flows to elevate brand presence online.',
    tech: ['TypeScript', 'React', 'CMS', 'PHP'],
    href: 'https://hasamedia.io',
    githubClientUrl: 'https://github.com/odedsam/Hasamedia',
    githubMonorepo: 'https://github.com/odedsam/Hasamedia',
    imageUrl: '/thumb/hasamedia-thumbnail.webp',
    pinned: true,
  },
  {
    title: 'Candleaf E‑Commerce',
    description:
      'Created a clean and calming online store for a sustainable candle brand. Includes product filtering, subscription options, and minimalist design. Focused on user trust, accessibility, and eco-conscious branding.',
    tech: ['TypeScript', 'Vue 3', 'NodeJs', 'MongoDB', 'GoogleAuth', 'Tailwind', 'Stripe', 'Express'],
    href: 'https://candleaf-front.vercel.app',
    githubClientUrl: 'https://github.com/odedsam/candleaf-front',
    githubServerUrl: 'https://github.com/odedsam/candleaf-back',
    imageUrl: '/thumb/cand-black.webp',
    pinned: true,
  },

  {
    title: 'Avion E‑Commerce',
    description:
      'Designed and developed a refined e-commerce platform for a luxury furniture brand. Features include modular product components, smooth cart experience, and optimized performance. Built for elegance, speed, and conversion.',
    tech: ['TypeScript', 'React', 'Tailwind', 'NestJS', 'ReduxRTK', 'MongoDB'],
    href: 'https://avion-steel.vercel.app/',
    githubClientUrl: 'https://github.com/odedsam/avion-new-react-18',
    githubServerUrl: 'https://github.com/odedsam/avm-back',
    imageUrl: '/thumb/avion-thumbnail.webp',
    pinned: true,
  },
  {
    title: 'Lernaean',
    description:
      'Developed a cutting-edge VR application leveraging WebXR to deliver immersive, high-performance virtual experiences. Focused on intuitive interaction, futuristic UI, and seamless integration of next-gen tech.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://lernaean.vercel.app/',
    imageUrl: '/thumb/lernaean-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/lernaean',
  },
  {
    title: 'Cyber Skin',
    description:
      'Engineered a modern marketplace for game skins and digital outfits. Features include smart search, live updates, user profiles, and a gaming-inspired UI. Built for scalability, performance, and real-time engagement.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://cyberskin.vercel.app/',
    imageUrl: '/thumb/cyberskin-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/cyberskin',
  },
  {
    title: 'Crypto Pulse',
    description: 'Real-time cryptocurrency dashboard with live price updates, interactive charts, and global market stats.',
    tech: ['React', 'Zustand', 'Recharts', 'WebSockets'],
    href: 'https://crypto-dash-flame.vercel.app',
    imageUrl: '/thumb/cryptodash-thumbnail.webp',
    githubMonorepo: 'https://github.com/odedsam/crypto-dash',
  },
];
