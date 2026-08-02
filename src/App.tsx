import { useState, useMemo, createContext, useContext, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'In Progress' | 'Completed' | 'Wishlist' | 'Dropped' | 'Multiplayer'
type Page = 'home' | 'library' | 'search' | 'users' | 'profile'
type View = 'landing' | 'app'

interface Game {
  id: number; title: string; developer: string; genre: string
  platform: string; year: number; status: Status; progress: number
  rating: number; hours: number; image: string; notes: string; description: string
}
interface DbGame {
  id: number; title: string; developer: string; genre: string; year: number
  platforms: string[]; image: string; description: string
}
interface AppUser {
  id: number; name: string; username: string; initials: string
  avatarGradient: string; bannerGradient: string; bio: string
  location: string; website: string; gamesCount: number; completedCount: number
  followersCount: number; followingCount: number; topGenre: string
  isFollowing: boolean; isPublic: boolean
}

// ─── Theme Context ────────────────────────────────────────────────────────────

interface ThemeCtx { dark: boolean; toggleDark: () => void }
const ThemeContext = createContext<ThemeCtx>({ dark: true, toggleDark: () => {} })
const useTheme = () => useContext(ThemeContext)

// ─── Data ──────────────────────────────────────────────────────────────────────

const IMG = {
  a: 'https://images.unsplash.com/photo-1640903581708-8d491706515b?w=400&h=560&fit=crop&auto=format',
  b: 'https://images.unsplash.com/photo-1640971091396-b488bc228491?w=400&h=560&fit=crop&auto=format',
  c: 'https://images.unsplash.com/photo-1597839219216-a773cb2473e4?w=400&h=560&fit=crop&auto=format',
  d: 'https://images.unsplash.com/photo-1672872476232-da16b45c9001?w=400&h=560&fit=crop&auto=format',
  e: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?w=400&h=560&fit=crop&auto=format',
  f: 'https://images.unsplash.com/photo-1698208189346-6b356d242b09?w=400&h=560&fit=crop&auto=format',
  g: 'https://images.unsplash.com/photo-1573339607881-208e75e4b267?w=400&h=560&fit=crop&auto=format',
  h: 'https://images.unsplash.com/photo-1512747646639-ed824d861e0d?w=400&h=560&fit=crop&auto=format',
  i: 'https://images.unsplash.com/photo-1713981272299-355d7038d708?w=400&h=560&fit=crop&auto=format',
  j: 'https://images.unsplash.com/photo-1630695230041-8909e3204778?w=400&h=560&fit=crop&auto=format',
  k: 'https://images.unsplash.com/photo-1626218174358-7769486c4b79?w=400&h=560&fit=crop&auto=format',
  l: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=400&h=560&fit=crop&auto=format',
}

const GAMES: Game[] = [
  { id:1,  title:'Elden Ring',              developer:'FromSoftware',         genre:'Action RPG',       platform:'PC',   year:2022, status:'In Progress', progress:68,  rating:5, hours:94,  image:IMG.a, notes:'Just reached Mountaintops of the Giants.',          description:'An action RPG set in the Lands Between.' },
  { id:2,  title:"God of War Ragnarök",     developer:'Santa Monica Studio',  genre:'Action Adventure', platform:'PS5',  year:2022, status:'Completed',   progress:100, rating:5, hours:47,  image:IMG.b, notes:"Incredible story. Atreus's arc was perfect.",         description:"Kratos and Atreus journey through the Nine Realms." },
  { id:3,  title:'The Last of Us Part I',   developer:'Naughty Dog',          genre:'Action Adventure', platform:'PC',   year:2022, status:'Completed',   progress:100, rating:5, hours:18,  image:IMG.c, notes:'One of the best narratives in gaming.',               description:'A post-apocalyptic survival story.' },
  { id:4,  title:'Cyberpunk 2077',          developer:'CD Projekt Red',       genre:'RPG',              platform:'PC',   year:2020, status:'In Progress', progress:43,  rating:4, hours:61,  image:IMG.d, notes:'Phantom Liberty was excellent.',                       description:'Open-world RPG in Night City.' },
  { id:5,  title:'Hades',                   developer:'Supergiant Games',     genre:'Roguelike',        platform:'PC',   year:2020, status:'Completed',   progress:100, rating:5, hours:112, image:IMG.e, notes:'Cleared final boss at 32 heat. Perfect game.',         description:"Defy the god of the dead in this roguelike." },
  { id:6,  title:"Baldur's Gate 3",         developer:'Larian Studios',       genre:'RPG',              platform:'PC',   year:2023, status:'In Progress', progress:28,  rating:5, hours:73,  image:IMG.f, notes:'Act 2 is phenomenal.',                                description:'Epic RPG across the Forgotten Realms.' },
  { id:7,  title:'Dead Space Remake',       developer:'EA Motive',            genre:'Survival Horror',  platform:'PC',   year:2023, status:'Completed',   progress:100, rating:4, hours:14,  image:IMG.g, notes:'Tense and atmospheric.',                               description:'Isaac Clarke battles aliens aboard a mining vessel.' },
  { id:8,  title:'Hollow Knight',           developer:'Team Cherry',          genre:'Metroidvania',     platform:'PC',   year:2017, status:'Dropped',     progress:52,  rating:4, hours:28,  image:IMG.h, notes:'Got stuck in Deepnest. Will revisit.',                 description:'Action-adventure through an underground kingdom.' },
  { id:9,  title:'Starfield',               developer:'Bethesda',             genre:'RPG',              platform:'Xbox', year:2023, status:'Dropped',     progress:22,  rating:3, hours:31,  image:IMG.i, notes:'Felt empty. May revisit with mods.',                   description:"Space exploration RPG in the 24th century." },
  { id:10, title:'Alan Wake 2',             developer:'Remedy Entertainment', genre:'Thriller',         platform:'PC',   year:2023, status:'Wishlist',    progress:0,   rating:0, hours:0,   image:IMG.j, notes:'On the list.',                                          description:'Psychological horror blurring fiction and reality.' },
  { id:11, title:'Valorant',               developer:'Riot Games',           genre:'Tactical Shooter', platform:'PC',   year:2020, status:'Multiplayer', progress:0,   rating:4, hours:340, image:IMG.k, notes:'Diamond 2. Working on ascending.',                      description:'Tactical 5v5 character-based shooter.' },
]

const DB_GAMES: DbGame[] = [
  { id:1,  title:'Elden Ring',                                  developer:'FromSoftware',         genre:'Action RPG',       year:2022, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One'],               image:IMG.a, description:'An action RPG set in the Lands Between.' },
  { id:2,  title:'God of War Ragnarök',                         developer:'Santa Monica Studio',  genre:'Action Adventure', year:2022, platforms:['PS5','PS4','PC'],                                             image:IMG.b, description:'Kratos and Atreus through the Nine Realms.' },
  { id:3,  title:'The Last of Us Part I',                       developer:'Naughty Dog',          genre:'Action Adventure', year:2022, platforms:['PS5','PC'],                                                   image:IMG.c, description:'A post-apocalyptic survival story.' },
  { id:4,  title:'Cyberpunk 2077',                              developer:'CD Projekt Red',       genre:'RPG',              year:2020, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One'],               image:IMG.d, description:'Open-world RPG in Night City.' },
  { id:5,  title:'Hades',                                       developer:'Supergiant Games',     genre:'Roguelike',        year:2020, platforms:['PC','PS5','PS4','Nintendo Switch','Xbox Series X/S'],        image:IMG.e, description:'Defy the god of the dead in this roguelike.' },
  { id:6,  title:"Baldur's Gate 3",                             developer:'Larian Studios',       genre:'RPG',              year:2023, platforms:['PC','PS5','Xbox Series X/S','Mac'],                           image:IMG.f, description:'Epic RPG across the Forgotten Realms.' },
  { id:7,  title:'Dead Space Remake',                           developer:'EA Motive',            genre:'Survival Horror',  year:2023, platforms:['PC','PS5','Xbox Series X/S'],                                image:IMG.g, description:'Isaac Clarke battles aliens aboard a vessel.' },
  { id:8,  title:'Hollow Knight',                               developer:'Team Cherry',          genre:'Metroidvania',     year:2017, platforms:['PC','PS4','Xbox One','Nintendo Switch'],                      image:IMG.h, description:'Action-adventure through an underground kingdom.' },
  { id:9,  title:'Starfield',                                   developer:'Bethesda',             genre:'RPG',              year:2023, platforms:['PC','Xbox Series X/S'],                                      image:IMG.i, description:'Space exploration RPG in the 24th century.' },
  { id:10, title:'Alan Wake 2',                                 developer:'Remedy Entertainment', genre:'Thriller',         year:2023, platforms:['PC','PS5','Xbox Series X/S'],                                image:IMG.j, description:'Psychological horror blurring fiction and reality.' },
  { id:11, title:'Red Dead Redemption 2',                       developer:'Rockstar Games',       genre:'Action Adventure', year:2018, platforms:['PC','PS4','Xbox One'],                                        image:IMG.a, description:'Epic tale of the outlaw life in a fading frontier.' },
  { id:12, title:'The Witcher 3: Wild Hunt',                    developer:'CD Projekt Red',       genre:'Action RPG',       year:2015, platforms:['PC','PS5','PS4','Xbox One','Nintendo Switch'],                image:IMG.b, description:'Open-world RPG with branching stories.' },
  { id:13, title:'Dark Souls III',                              developer:'FromSoftware',         genre:'Action RPG',       year:2016, platforms:['PC','PS4','Xbox One'],                                        image:IMG.g, description:'Challenging RPG set in the kingdom of Lothric.' },
  { id:14, title:'Sekiro: Shadows Die Twice',                   developer:'FromSoftware',         genre:'Action',           year:2019, platforms:['PC','PS4','Xbox One'],                                        image:IMG.d, description:'Shinobi combat in a dark feudal Japan.' },
  { id:15, title:'Monster Hunter: World',                       developer:'Capcom',               genre:'Action RPG',       year:2018, platforms:['PC','PS4','Xbox One'],                                        image:IMG.e, description:'Hunt massive monsters across living ecosystems.' },
  { id:16, title:'Grand Theft Auto V',                          developer:'Rockstar Games',       genre:'Action Adventure', year:2013, platforms:['PC','PS5','PS4','PS3','Xbox Series X/S','Xbox One','Xbox 360'],image:IMG.k, description:'Open-world crime epic in Los Santos.' },
  { id:17, title:'Minecraft',                                   developer:'Mojang Studios',       genre:'Sandbox',          year:2011, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One','Nintendo Switch','Mobile (iOS)','Mobile (Android)'], image:IMG.f, description:'Build and survive in a procedural blocky world.' },
  { id:18, title:'Valorant',                                    developer:'Riot Games',           genre:'Tactical Shooter', year:2020, platforms:['PC'],                                                         image:IMG.l, description:'Tactical 5v5 character-based shooter.' },
  { id:19, title:'League of Legends',                           developer:'Riot Games',           genre:'MOBA',             year:2009, platforms:['PC','Mac'],                                                   image:IMG.j, description:'Team-based strategy MOBA with 160+ champions.' },
  { id:20, title:'The Legend of Zelda: Tears of the Kingdom',   developer:'Nintendo',             genre:'Action Adventure', year:2023, platforms:['Nintendo Switch'],                                           image:IMG.h, description:'Link explores the skies above Hyrule.' },
  { id:21, title:'Resident Evil 4 Remake',                      developer:'Capcom',               genre:'Survival Horror',  year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S'],                          image:IMG.g, description:"Leon Kennedy rescues the president's daughter." },
  { id:22, title:'Street Fighter 6',                            developer:'Capcom',               genre:'Fighting',         year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S'],                          image:IMG.b, description:'Next chapter of the legendary fighting series.' },
  { id:23, title:'Armored Core VI: Fires of Rubicon',           developer:'FromSoftware',         genre:'Action',           year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One'],               image:IMG.a, description:'Pilot a customizable mech in brutal sci-fi combat.' },
  { id:24, title:'Final Fantasy XVI',                           developer:'Square Enix',          genre:'Action RPG',       year:2023, platforms:['PS5','PC'],                                                   image:IMG.e, description:'Dark fantasy set in the world of Valisthea.' },
  { id:25, title:'Diablo IV',                                   developer:'Blizzard Entertainment',genre:'Action RPG',      year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One'],               image:IMG.i, description:'The devil walks in Sanctuary once more.' },
  { id:26, title:'Fortnite',                                    developer:'Epic Games',           genre:'Battle Royale',    year:2017, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One','Nintendo Switch','Mobile (iOS)','Mobile (Android)'], image:IMG.k, description:'Build and battle royale across ever-changing islands.' },
  { id:27, title:'Counter-Strike 2',                            developer:'Valve',                genre:'Tactical Shooter', year:2023, platforms:['PC'],                                                         image:IMG.l, description:"The world's premier tactical first-person shooter." },
  { id:28, title:'Lies of P',                                   developer:'NEOWIZ',               genre:'Action RPG',       year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One'],               image:IMG.f, description:'A Pinocchio retelling in the soulslike genre.' },
  { id:29, title:'Overwatch 2',                                 developer:'Blizzard Entertainment',genre:'Hero Shooter',    year:2022, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One','Nintendo Switch'],image:IMG.b, description:'Team-based action game with unique hero abilities.' },
  { id:30, title:'Apex Legends',                                developer:'Respawn Entertainment', genre:'Battle Royale',   year:2019, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One','Nintendo Switch'],image:IMG.j, description:'Legend-based battle royale in the Titanfall universe.' },
  { id:31, title:'Call of Duty: Modern Warfare III',            developer:'Infinity Ward',        genre:'Shooter',          year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One'],               image:IMG.l, description:'The blockbuster military shooter returns.' },
  { id:32, title:'FIFA 24 (EA Sports FC 24)',                   developer:'EA Sports',            genre:'Sports',           year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One','Nintendo Switch'],image:IMG.k, description:'The world\'s most popular football game.' },
  { id:33, title:'Hogwarts Legacy',                             developer:'Portkey Games',        genre:'Action RPG',       year:2023, platforms:['PC','PS5','PS4','Xbox Series X/S','Xbox One','Nintendo Switch'],image:IMG.c, description:'Explore Hogwarts in the 1800s.' },
  { id:34, title:'Pokémon Scarlet & Violet',                    developer:'Game Freak',           genre:'RPG',              year:2022, platforms:['Nintendo Switch'],                                           image:IMG.h, description:'Open-world Pokémon adventure in the Paldea region.' },
  { id:35, title:'Super Mario Odyssey',                         developer:'Nintendo',             genre:'Platformer',       year:2017, platforms:['Nintendo Switch'],                                           image:IMG.e, description:'Mario travels the world to rescue Princess Peach.' },
]

const MOCK_USERS: AppUser[] = [
  { id:101, name:'Sarah Chen',   username:'sarahplays',  initials:'SC', avatarGradient:'linear-gradient(135deg,#00F5D4,#00B894)', bannerGradient:'linear-gradient(135deg,#051515 0%,#0D2E2E 100%)', bio:"RPG enthusiast & completionist. Currently lost in BG3 for the 4th time. 🎮",             location:'Seattle, WA',   website:'sarahplays.gg',   gamesCount:247, completedCount:189, followersCount:1420, followingCount:312, topGenre:'RPG',            isFollowing:true,  isPublic:true  },
  { id:102, name:'Marcus Webb',  username:'mwebb_gg',    initials:'MW', avatarGradient:'linear-gradient(135deg,#FF4B2B,#CC1C00)', bannerGradient:'linear-gradient(135deg,#150505 0%,#2E0D0D 100%)', bio:'Competitive FPS main. Top 500 Valorant. Occasional story game enjoyer.',                location:'Chicago, IL',   website:'',                gamesCount:89,  completedCount:31,  followersCount:8204, followingCount:156, topGenre:'Shooter',        isFollowing:false, isPublic:true  },
  { id:103, name:'Aria Nakamura',username:'aria_n',      initials:'AN', avatarGradient:'linear-gradient(135deg,#A855F7,#7C3AED)', bannerGradient:'linear-gradient(135deg,#0D0520 0%,#1A0D35 100%)', bio:"Indie game curator. If it has pixel art, I've played it. 🕹️ Game dev by day.",           location:'Tokyo, JP',     website:'arianakamura.dev',gamesCount:312, completedCount:241, followersCount:3102, followingCount:892, topGenre:'Indie',          isFollowing:true,  isPublic:true  },
  { id:104, name:'Dev Patel',    username:'devhp',       initials:'DP', avatarGradient:'linear-gradient(135deg,#F59E0B,#D97706)', bannerGradient:'linear-gradient(135deg,#150A00 0%,#2E1800 100%)', bio:'Completionist. 100% or bust. Currently: Elden Ring DLC at 89%.',                        location:'London, UK',    website:'',                gamesCount:156, completedCount:143, followersCount:723,  followingCount:201, topGenre:'Action RPG',     isFollowing:false, isPublic:true  },
  { id:105, name:'Luna Rivera',  username:'luna_gamer',  initials:'LR', avatarGradient:'linear-gradient(135deg,#EC4899,#BE185D)', bannerGradient:'linear-gradient(135deg,#150008 0%,#2E0020 100%)', bio:'Horror game specialist. Sleep is overrated. Dead Space is my therapy. 👻',               location:'Mexico City, MX',website:'lunagamer.mx',    gamesCount:94,  completedCount:72,  followersCount:2340, followingCount:445, topGenre:'Survival Horror', isFollowing:false, isPublic:false },
  { id:106, name:'Alex Kim',     username:'retro_alex',  initials:'AK', avatarGradient:'linear-gradient(135deg,#22C55E,#15803D)', bannerGradient:'linear-gradient(135deg,#011505 0%,#052E12 100%)', bio:'Retro collector. 428 games across 24 platforms. NES to PS5.',                           location:'Austin, TX',    website:'',                gamesCount:428, completedCount:89,  followersCount:5601, followingCount:310, topGenre:'Platformer',     isFollowing:true,  isPublic:true  },
]

const STATUS_COLORS: Record<Status, { bg: string; text: string; dot: string }> = {
  'In Progress': { bg:'rgba(0,245,212,0.12)',   text:'#00F5D4', dot:'#00F5D4' },
  'Completed':   { bg:'rgba(34,197,94,0.12)',   text:'#22c55e', dot:'#22c55e' },
  'Wishlist':    { bg:'rgba(255,75,43,0.12)',   text:'#FF7A5C', dot:'#FF4B2B' },
  'Dropped':     { bg:'rgba(136,136,160,0.12)', text:'#8888A0', dot:'#6b7280' },
  'Multiplayer': { bg:'rgba(168,85,247,0.12)',  text:'#A855F7', dot:'#7C3AED' },
}

const PLATFORM_GROUPS = [
  { label:'Current Generation',    platforms:['PC','Mac','PS5','Xbox Series X/S','Nintendo Switch','Nintendo Switch 2','Mobile (iOS)','Mobile (Android)'] },
  { label:'Previous Generation',   platforms:['PS4','Xbox One','Wii U','3DS / 2DS','PS Vita','PSP'] },
  { label:'PlayStation Classic',   platforms:['PS3','PS2','PS1 / PSX'] },
  { label:'Xbox Classic',          platforms:['Xbox 360','Xbox (Original)'] },
  { label:'Nintendo Classic',      platforms:['Wii','Nintendo DS','Game Boy Advance','GameCube','Nintendo 64','SNES','NES','Game Boy / GBC','Virtual Boy'] },
  { label:'Sega',                  platforms:['Sega Dreamcast','Sega Saturn','Sega Genesis / Mega Drive','Sega Master System','Game Gear'] },
  { label:'Other',                 platforms:['Atari 2600','Atari Jaguar','Arcade','VR (Meta Quest)','VR (PlayStation VR)','Browser','Other'] },
]

const GENRES = ['All','Action RPG','Action Adventure','RPG','Roguelike','Survival Horror','Metroidvania','Thriller','Tactical Shooter','Hero Shooter','Battle Royale','MOBA','Fighting','Sandbox','Action','Strategy','Sports','Puzzle','Platformer','Indie']
const STATUS_FILTERS: (Status | 'All')[] = ['All','In Progress','Completed','Wishlist','Dropped','Multiplayer']
const STATUS_LIST: Status[] = ['In Progress','Completed','Wishlist','Dropped','Multiplayer']

// ─── Icons ────────────────────────────────────────────────────────────────────

const Ico = ({ d, size = 18, fill = 'none', stroke = 'currentColor', sw = 2, children }: { d?: string; size?: number; fill?: string; stroke?: string; sw?: number; children?: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
)

const IconHome    = () => <Ico><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Ico>
const IconGrid    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>
const IconSearch  = () => <Ico><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Ico>
const IconUser    = () => <Ico><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Ico>
const IconUsers   = () => <Ico><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Ico>
const IconMenu    = () => <Ico><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></Ico>
const IconX       = () => <Ico size={14} sw={2.5}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Ico>
const IconXLg     = () => <Ico sw={2.5}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Ico>
const IconClock   = () => <Ico size={13}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Ico>
const IconPlus    = () => <Ico size={16} sw={2.5}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Ico>
const IconSun     = () => <Ico size={16}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></Ico>
const IconMoon    = () => <Ico size={16} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
const IconDice    = () => <Ico size={18}><rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="8" r="1.5" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></Ico>
const IconMapPin  = () => <Ico size={13} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"><circle cx="12" cy="10" r="3"/></Ico>
const IconGlobe   = () => <Ico size={13}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Ico>
const IconHeart   = ({ filled }: { filled: boolean }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#FF4B2B' : 'none'} stroke={filled ? '#FF4B2B' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
const IconStar    = ({ filled }: { filled: boolean }) => <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#FF4B2B' : 'var(--c-star-empty)'} stroke={filled ? '#FF4B2B' : 'var(--c-border)'} strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IconZap     = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
const IconShield  = () => <Ico size={13} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
const IconTrend   = () => <Ico size={20}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></Ico>
const IconCompass = () => <Ico size={20}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></Ico>
const IconBook    = () => <Ico size={20}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></Ico>
const IconChevronR = () => <Ico size={14} sw={2.5} d="M9 18l6-6-6-6"/>

// ─── Shared UI ────────────────────────────────────────────────────────────────

function Avatar({ initials, gradient, size = 40 }: { initials: string; gradient: string; size?: number }) {
  return (
    <div className="rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white select-none"
      style={{ width: size, height: size, background: gradient, fontSize: size * 0.35, fontFamily: "'Exo 2', sans-serif" }}
    >{initials}</div>
  )
}

function StatusBadge({ status }: { status: Status }) {
  const c = STATUS_COLORS[status]
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: c.bg, color: c.text }}>
      {status === 'Multiplayer' ? <IconZap /> : <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />}
      {status}
    </span>
  )
}

function StarRating({ rating, onChange }: { rating: number; onChange?: (n: number) => void }) {
  const [hov, setHov] = useState(0)
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((n) => (
        <button key={n} className={onChange ? 'cursor-pointer' : 'cursor-default'}
          onClick={() => onChange?.(n)} onMouseEnter={() => onChange && setHov(n)} onMouseLeave={() => onChange && setHov(0)}
        ><IconStar filled={n <= (hov || rating)} /></button>
      ))}
    </div>
  )
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1.5 rounded-full" style={{ background: 'var(--c-border)' }}>
      <div className="h-full rounded-full" style={{ width:`${value}%`, background: value===100 ? '#22c55e':'#00F5D4', boxShadow: value>0 ? `0 0 5px ${value===100?'#22c55e80':'#00F5D480'}` : 'none' }} />
    </div>
  )
}

const FL = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--c-dim)' }}>{children}</p>
)

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo({ size = 28, showText = true }: { size?: number; showText?: boolean }) {
  const [err, setErr] = useState(false)
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`

  return (
    <div className="flex items-center gap-2">
      {!err ? (
        <img src={logoSrc} alt="GameTrack" style={{ width: size, height: size, objectFit: 'contain' }} onError={() => setErr(true)} />
      ) : (
        <div className="rounded-lg flex items-center justify-center font-black text-black"
          style={{ width: size, height: size, background: 'linear-gradient(135deg,#00F5D4,#00B894)', fontFamily:"'Exo 2',sans-serif", fontSize: size * 0.45 }}
        >G</div>
      )}
      {showText && (
        <span className="font-bold tracking-tight text-base hidden sm:block" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>
          Game<span style={{ color:'#00F5D4' }}>Track</span>
        </span>
      )}
    </div>
  )
}

// ─── GameCard ─────────────────────────────────────────────────────────────────

function GameCard({ game, onClick }: { game: Game; onClick: () => void }) {
  const [err, setErr] = useState(false)
  return (
    <button onClick={onClick} className="group w-full text-left rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.025] hover:shadow-xl focus:outline-none"
      style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}
    >
      <div className="relative aspect-[3/4] overflow-hidden" style={{ background:'var(--c-elevated)' }}>
        {!err
          ? <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={() => setErr(true)} />
          : <div className="w-full h-full flex items-center justify-center text-5xl" style={{ color:'var(--c-border)' }}>🎮</div>
        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute top-2.5 left-2.5"><StatusBadge status={game.status} /></div>
        {game.hours > 0 && (
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ background:'rgba(0,0,0,0.65)', color:'#8888A0' }}>
            <IconClock />{game.hours}h
          </div>
        )}
        <div className="absolute bottom-2.5 left-2.5"><StarRating rating={game.rating} /></div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold leading-snug mb-0.5 group-hover:text-[#00F5D4] transition-colors line-clamp-2" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{game.title}</h3>
        <p className="text-xs mb-2.5" style={{ color:'var(--c-muted)' }}>{game.developer} · {game.year}</p>
        {game.status !== 'Wishlist' && game.status !== 'Multiplayer' && (
          <div>
            <div className="flex justify-between text-xs mb-1" style={{ color:'var(--c-muted)' }}>
              <span>Progress</span>
              <span style={{ color: game.progress===100?'#22c55e':'#00F5D4' }}>{game.progress}%</span>
            </div>
            <ProgressBar value={game.progress} />
          </div>
        )}
      </div>
    </button>
  )
}

// ─── GameModal ────────────────────────────────────────────────────────────────

function GameModal({ game, onClose, onUpdate }: { game: Game; onClose: () => void; onUpdate: (g: Game) => void }) {
  const [notes, setNotes] = useState(game.notes)
  const [rating, setRating] = useState(game.rating)
  const [status, setStatus] = useState<Status>(game.status)
  const [progress, setProgress] = useState(game.progress)
  const [saved, setSaved] = useState(false)
  const [err, setErr] = useState(false)

  const save = () => { onUpdate({...game,notes,rating,status,progress}); setSaved(true); setTimeout(()=>setSaved(false),2000) }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6" style={{ background:'var(--c-overlay)' }} onClick={onClose}>
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden border" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)', maxHeight:'90vh' }} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 p-2 rounded-full" style={{ background:'rgba(0,0,0,0.4)', color:'var(--c-muted)' }}><IconXLg /></button>
        <div className="flex flex-col md:flex-row overflow-y-auto" style={{ maxHeight:'90vh' }}>
          <div className="md:w-48 flex-shrink-0" style={{ background:'var(--c-elevated)', minHeight:180 }}>
            {!err
              ? <img src={game.image} alt={game.title} className="w-full h-full object-cover" style={{ minHeight:180 }} onError={()=>setErr(true)} />
              : <div className="w-full h-full flex items-center justify-center text-5xl" style={{ minHeight:180 }}>🎮</div>
            }
          </div>
          <div className="flex-1 p-5 overflow-y-auto space-y-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <StatusBadge status={status} />
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background:'var(--c-elevated)', color:'var(--c-muted)' }}>{game.platform}</span>
              </div>
              <h2 className="text-xl font-bold" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{game.title}</h2>
              <p className="text-sm" style={{ color:'var(--c-muted)' }}>{game.developer} · {game.genre} · {game.year}</p>
            </div>

            <div>
              <FL>Status</FL>
              <div className="flex flex-wrap gap-1.5">
                {STATUS_LIST.map(s=>(
                  <button key={s} onClick={()=>setStatus(s)} className="px-2.5 py-1 rounded-lg text-xs font-medium border transition-all"
                    style={{ borderColor: status===s ? STATUS_COLORS[s].dot : 'var(--c-border)', background: status===s ? STATUS_COLORS[s].bg : 'transparent', color: status===s ? STATUS_COLORS[s].text : 'var(--c-muted)' }}
                  >{s}</button>
                ))}
              </div>
            </div>

            <div><FL>Rating</FL><StarRating rating={rating} onChange={setRating} /></div>

            {status !== 'Wishlist' && status !== 'Multiplayer' && (
              <div>
                <FL>Progress — <span style={{ color:'#00F5D4' }}>{progress}%</span></FL>
                <input type="range" min={0} max={100} value={progress} onChange={e=>setProgress(+e.target.value)} className="w-full accent-[#00F5D4]" />
              </div>
            )}

            {game.hours > 0 && (
              <div className="flex items-center gap-2 text-sm" style={{ color:'var(--c-muted)' }}><IconClock />{game.hours}h played</div>
            )}

            <div>
              <FL>Notes</FL>
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3}
                className="w-full rounded-xl p-3 text-sm resize-none focus:outline-none"
                style={{ background:'var(--c-input)', border:'1px solid var(--c-border)', color:'var(--c-text)' }}
                placeholder="Your thoughts..."
              />
            </div>

            <button onClick={save} className="px-5 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{ background: saved?'rgba(34,197,94,0.15)':'rgba(0,245,212,0.12)', color: saved?'#22c55e':'#00F5D4', border:`1px solid ${saved?'#22c55e40':'#00F5D440'}` }}
            >{saved?'✓ Saved':'Save Changes'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── AddGameModal (database search) ──────────────────────────────────────────

function AddGameModal({ onClose, onAdd, ownedIds }: { onClose: () => void; onAdd: (g: Game) => void; ownedIds: Set<number> }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<DbGame | null>(null)
  const [status, setStatus] = useState<Status>('Wishlist')
  const [platform, setPlatform] = useState('')
  const [notes, setNotes] = useState('')
  const [err, setErr] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    if (!query.trim()) return DB_GAMES.slice(0, 8)
    const q = query.toLowerCase()
    return DB_GAMES.filter(g => g.title.toLowerCase().includes(q) || g.developer.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)).slice(0, 12)
  }, [query])

  const handleSelect = (g: DbGame) => {
    setSelected(g)
    setPlatform(g.platforms[0] ?? 'PC')
  }

  const handleAdd = () => {
    if (!selected) return
    const progress = status === 'Completed' ? 100 : 0
    onAdd({ id: Date.now(), title: selected.title, developer: selected.developer, genre: selected.genre, platform, year: selected.year, status, progress, rating: 0, hours: 0, image: selected.image, notes, description: selected.description })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6" style={{ background:'var(--c-overlay)' }} onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-3xl border overflow-hidden" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)', maxHeight:'92vh' }} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 p-2 rounded-full" style={{ background:'rgba(0,0,0,0.3)', color:'var(--c-muted)' }}><IconXLg /></button>

        <div className="overflow-y-auto" style={{ maxHeight:'92vh' }}>
          {!selected ? (
            <div className="p-5">
              <h2 className="text-lg font-bold mb-1" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>Add a Game</h2>
              <p className="text-sm mb-4" style={{ color:'var(--c-muted)' }}>Search our database of 10,000+ games.</p>
              <div className="relative mb-4">
                <div className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color:'var(--c-muted)' }}><IconSearch /></div>
                <input ref={inputRef} autoFocus type="text" value={query} onChange={e=>setQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none border"
                  style={{ background:'var(--c-input)', borderColor:'var(--c-border)', color:'var(--c-text)' }}
                />
              </div>
              <div className="space-y-1.5 max-h-96 overflow-y-auto">
                {results.map(g => {
                  const owned = ownedIds.has(g.id)
                  return (
                    <button key={g.id} onClick={() => !owned && handleSelect(g)}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${owned ? 'opacity-50 cursor-default' : 'hover:border-[#00F5D440] hover:bg-[color:var(--c-elevated)]'}`}
                      style={{ background:'var(--c-elevated)', borderColor:'var(--c-border)' }}
                    >
                      <div className="w-10 h-14 rounded-lg overflow-hidden flex-shrink-0" style={{ background:'var(--c-border)' }}>
                        <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{g.title}</p>
                        <p className="text-xs" style={{ color:'var(--c-muted)' }}>{g.developer} · {g.year}</p>
                        <p className="text-xs" style={{ color:'var(--c-dim)' }}>{g.genre}</p>
                      </div>
                      {owned && <span className="text-xs flex-shrink-0" style={{ color:'#22c55e' }}>✓ In Library</span>}
                      {!owned && <IconChevronR />}
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="p-5">
              <button onClick={()=>setSelected(null)} className="flex items-center gap-1.5 text-sm mb-4 transition-colors hover:text-[#00F5D4]" style={{ color:'var(--c-muted)' }}>
                ← Back to search
              </button>

              {/* Selected game preview */}
              <div className="flex gap-3 mb-5 p-3 rounded-2xl border" style={{ background:'var(--c-elevated)', borderColor:'var(--c-border)' }}>
                <div className="w-14 h-20 rounded-xl overflow-hidden flex-shrink-0" style={{ background:'var(--c-border)' }}>
                  {!err ? <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" onError={()=>setErr(true)} />
                    : <div className="w-full h-full flex items-center justify-center">🎮</div>}
                </div>
                <div>
                  <p className="font-bold" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{selected.title}</p>
                  <p className="text-sm" style={{ color:'var(--c-muted)' }}>{selected.developer} · {selected.year}</p>
                  <p className="text-xs mt-1" style={{ color:'var(--c-dim)' }}>{selected.genre}</p>
                </div>
              </div>

              {/* Status */}
              <div className="mb-4">
                <FL>Status</FL>
                <div className="flex flex-wrap gap-1.5">
                  {STATUS_LIST.map(s=>(
                    <button key={s} onClick={()=>setStatus(s)} className="px-2.5 py-1 rounded-lg text-xs font-medium border transition-all"
                      style={{ borderColor: status===s ? STATUS_COLORS[s].dot : 'var(--c-border)', background: status===s ? STATUS_COLORS[s].bg : 'transparent', color: status===s ? STATUS_COLORS[s].text : 'var(--c-muted)' }}
                    >{s}</button>
                  ))}
                </div>
              </div>

              {/* Platform */}
              <div className="mb-4">
                <FL>Platform</FL>
                <select value={platform} onChange={e=>setPlatform(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none border"
                  style={{ background:'var(--c-input)', borderColor:'var(--c-border)', color:'var(--c-text)' }}
                >
                  {PLATFORM_GROUPS.map(grp => (
                    <optgroup key={grp.label} label={grp.label}>
                      {grp.platforms.map(p => <option key={p} value={p}>{p}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className="mb-5">
                <FL>Notes (optional)</FL>
                <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={2}
                  placeholder="Your thoughts, plans, or reminders..."
                  className="w-full px-3 py-2 rounded-xl text-sm resize-none focus:outline-none border"
                  style={{ background:'var(--c-input)', borderColor:'var(--c-border)', color:'var(--c-text)' }}
                />
              </div>

              <div className="flex gap-2">
                <button onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm border transition-colors" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>Cancel</button>
                <button onClick={handleAdd} className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background:'rgba(0,245,212,0.12)', color:'#00F5D4', border:'1px solid #00F5D440' }}>
                  Add to Library
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── RandomGameModal ──────────────────────────────────────────────────────────

function RandomGameModal({ games, onClose, onView }: { games: Game[]; onClose: () => void; onView: (g: Game) => void }) {
  const pool = games.filter(g => g.status !== 'Wishlist')
  const [pick, setPick] = useState<Game>(() => pool[Math.floor(Math.random() * pool.length)])
  const [err, setErr] = useState(false)
  const reroll = () => { setErr(false); setPick(pool[Math.floor(Math.random() * pool.length)]) }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background:'var(--c-overlay)' }} onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-3xl border overflow-hidden" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 p-2 rounded-full" style={{ background:'rgba(0,0,0,0.4)', color:'var(--c-muted)' }}><IconXLg /></button>
        <div className="relative h-48 overflow-hidden" style={{ background:'var(--c-elevated)' }}>
          {!err
            ? <img src={pick.image} alt={pick.title} className="w-full h-full object-cover" onError={()=>setErr(true)} />
            : <div className="w-full h-full flex items-center justify-center text-6xl">🎮</div>
          }
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--c-surface)] via-transparent to-transparent" />
          <div className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full" style={{ background:'rgba(0,245,212,0.2)', color:'#00F5D4', backdropFilter:'blur(6px)' }}>
            🎲 Tonight's Pick
          </div>
        </div>
        <div className="px-5 pb-5">
          <h2 className="text-xl font-bold mb-1" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{pick.title}</h2>
          <p className="text-sm mb-1" style={{ color:'var(--c-muted)' }}>{pick.developer} · {pick.genre}</p>
          <div className="flex items-center gap-3 mb-4">
            <StatusBadge status={pick.status} />
            {pick.hours > 0 && <span className="text-xs flex items-center gap-1" style={{ color:'var(--c-muted)' }}><IconClock />{pick.hours}h</span>}
          </div>
          <div className="flex gap-2">
            <button onClick={reroll} className="flex-1 py-2.5 rounded-xl text-sm border transition-colors hover:border-[#00F5D440]" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>
              🎲 Pick Another
            </button>
            <button onClick={()=>{ onView(pick); onClose() }} className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background:'rgba(0,245,212,0.12)', color:'#00F5D4', border:'1px solid #00F5D440' }}>
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Landing Page ─────────────────────────────────────────────────────────────

function LandingPage({ onEnter }: { onEnter: () => void }) {
  const [authMode, setAuthMode] = useState<'none'|'signin'|'signup'>('none')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const features = [
    { Icon: IconBook,    title:'Track Everything',    desc:'Log every game you own, play, or dream of playing. Rate, annotate, and track progress across all platforms.' },
    { Icon: IconUsers,  title:'Play Together',        desc:'Follow friends, see what they\'re playing, and discover hidden gems through your network.' },
    { Icon: IconCompass,title:'Discover New Worlds',  desc:'Our smart recommendation engine surfaces games perfectly tuned to your taste and play style.' },
    { Icon: IconTrend,  title:'Your Gaming Identity', desc:'Build a public profile that tells your story as a gamer — every genre, every completed epic.' },
  ]

  return (
    <div style={{ background:'#0D0D0F', color:'#F0F0F2', fontFamily:"'DM Sans',sans-serif", minHeight:'100vh' }}>

      {/* Landing header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 border-b" style={{ background:'rgba(13,13,15,0.9)', backdropFilter:'blur(12px)', borderColor:'#1E1E22' }}>
        <Logo size={30} />
        <div className="flex items-center gap-3">
          <button onClick={() => setAuthMode('signin')} className="text-sm px-4 py-2 rounded-xl transition-colors hover:text-white" style={{ color:'#8888A0' }}>Sign In</button>
          <button onClick={() => setAuthMode('signup')} className="text-sm px-4 py-2 rounded-xl font-semibold transition-all hover:opacity-90" style={{ background:'#00F5D4', color:'#0D0D0F' }}>
            Get Started — Free
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden" style={{ minHeight:'100vh' }}>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={`https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=1920&h=1080&fit=crop&auto=format`} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background:'linear-gradient(to bottom, rgba(13,13,15,0.5) 0%, rgba(13,13,15,0.8) 50%, #0D0D0F 100%)' }} />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background:'radial-gradient(circle, #00F5D4, transparent)' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background:'radial-gradient(circle, #FF4B2B, transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 border" style={{ background:'rgba(0,245,212,0.08)', borderColor:'#00F5D430', color:'#00F5D4' }}>
            🎮 Track · Discover · Connect
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{ fontFamily:"'Exo 2',sans-serif", background:'linear-gradient(135deg, #FFFFFF 30%, #00F5D4 70%, #FFFFFF 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}
          >
            Track Every Game.<br />Remember Every Journey.
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color:'#8888A0', lineHeight:1.7 }}>
            Join <strong style={{ color:'#F0F0F2' }}>240,000+</strong> gamers tracking their library, rating their favorites, and discovering what to play next — together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <button onClick={() => setAuthMode('signup')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-lg"
              style={{ background:'linear-gradient(135deg,#00F5D4,#00B894)', color:'#0D0D0F', boxShadow:'0 0 24px rgba(0,245,212,0.3)' }}
            >
              Start Tracking — Free
            </button>
            <button onClick={onEnter}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-base border transition-all hover:border-[#00F5D440]"
              style={{ borderColor:'#252528', color:'#8888A0' }}
            >
              Explore Demo →
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[['240K+','Active Gamers'],['1.2M','Games Tracked'],['85+','Platforms'],['4.8★','App Rating']].map(([n,l])=>(
              <div key={l} className="rounded-2xl p-4 border" style={{ background:'rgba(22,22,24,0.8)', borderColor:'#252528', backdropFilter:'blur(8px)' }}>
                <p className="text-2xl font-bold mb-0.5" style={{ fontFamily:"'Exo 2',sans-serif", color:'#00F5D4' }}>{n}</p>
                <p className="text-xs" style={{ color:'#8888A0' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-20" style={{ background:'#0D0D0F' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily:"'Exo 2',sans-serif" }}>Everything a gamer needs.</h2>
            <p style={{ color:'#8888A0' }}>Built by gamers, for gamers. Every feature exists because we needed it ourselves.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 border" style={{ background:'#161618', borderColor:'#252528' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background:'rgba(0,245,212,0.1)', color:'#00F5D4' }}><Icon /></div>
                <h3 className="font-bold mb-2" style={{ fontFamily:"'Exo 2',sans-serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color:'#8888A0' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-14 border" style={{ background:'linear-gradient(135deg,#0D2020,#0A1A2E)', borderColor:'#00F5D420' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily:"'Exo 2',sans-serif" }}>Ready to start your journey?</h2>
          <p className="mb-8" style={{ color:'#8888A0' }}>Free forever. No credit card required. Just your love of games.</p>
          <button onClick={() => setAuthMode('signup')} className="px-10 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105" style={{ background:'linear-gradient(135deg,#00F5D4,#00B894)', color:'#0D0D0F' }}>
            Create Free Account
          </button>
        </div>
      </section>

      {/* Landing Footer */}
      <footer className="border-t px-6 md:px-12 py-10" style={{ borderColor:'#1E1E22' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div><Logo size={24} /></div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" style={{ color:'#8888A0' }}>
            {['About','Features','Pricing','Blog','Privacy','Terms','Contact'].map(l=>(
              <button key={l} className="hover:text-white transition-colors">{l}</button>
            ))}
          </div>
          <p className="text-xs" style={{ color:'#444458' }}>© 2024 GameTrack. All rights reserved.</p>
        </div>
      </footer>

      {/* Auth Modal */}
      {authMode !== 'none' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background:'rgba(0,0,0,0.8)' }} onClick={()=>setAuthMode('none')}>
          <div className="w-full max-w-sm rounded-3xl border p-8" style={{ background:'#161618', borderColor:'#252528' }} onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setAuthMode('none')} className="float-right p-1.5 rounded-lg mb-4" style={{ color:'#8888A0' }}><IconXLg /></button>
            <h2 className="text-xl font-bold mb-1" style={{ fontFamily:"'Exo 2',sans-serif" }}>{authMode==='signup'?'Create Account':'Welcome Back'}</h2>
            <p className="text-sm mb-6" style={{ color:'#8888A0' }}>{authMode==='signup'?'Free forever. No credit card.':'Sign in to your account.'}</p>
            <div className="space-y-3 mb-4">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ background:'#0D0D0F', borderColor:'#252528', color:'#F0F0F2' }} />
              <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none border" style={{ background:'#0D0D0F', borderColor:'#252528', color:'#F0F0F2' }} />
            </div>
            <button onClick={onEnter} className="w-full py-3 rounded-xl font-bold text-sm mb-4" style={{ background:'linear-gradient(135deg,#00F5D4,#00B894)', color:'#0D0D0F' }}>
              {authMode==='signup'?'Get Started':'Sign In'}
            </button>
            <p className="text-center text-sm" style={{ color:'#8888A0' }}>
              {authMode==='signup'?'Already have an account?':'No account yet?'}
              {' '}<button className="underline" style={{ color:'#00F5D4' }} onClick={()=>setAuthMode(authMode==='signup'?'signin':'signup')}>
                {authMode==='signup'?'Sign In':'Create one'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── App Header ───────────────────────────────────────────────────────────────

function AppHeader({ searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen, setPage, onAddGame, onRandom }: {
  searchQuery: string; setSearchQuery: (v:string) => void
  sidebarOpen: boolean; setSidebarOpen: (v:boolean) => void
  setPage: (p:Page) => void; onAddGame: () => void; onRandom: () => void
}) {
  const { dark, toggleDark } = useTheme()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center gap-2 md:gap-3 px-3 md:px-5 h-14 md:h-16 border-b"
      style={{ background:'var(--c-header)', backdropFilter:'blur(12px)', borderColor:'var(--c-border-sub)' }}
    >
      <button className="md:hidden p-2 rounded-lg" style={{ color:'var(--c-muted)' }} onClick={()=>setSidebarOpen(!sidebarOpen)}><IconMenu /></button>

      <button onClick={()=>setPage('home')} className="flex-shrink-0"><Logo size={28} /></button>

      {/* Search */}
      <div className="flex-1 max-w-sm mx-auto relative min-w-0">
        <div className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color:'var(--c-muted)' }}><IconSearch /></div>
        <input type="text" value={searchQuery}
          onChange={e=>{ setSearchQuery(e.target.value); if(e.target.value) setPage('search') }}
          placeholder="Search games..."
          className="w-full pl-9 pr-3 py-1.5 md:py-2 rounded-xl text-sm focus:outline-none border"
          style={{ background:'var(--c-elevated)', borderColor:'var(--c-border)', color:'var(--c-text)' }}
        />
      </div>

      <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
        {/* Random game */}
        <button onClick={onRandom} title="Suggest a random game"
          className="flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs font-semibold border transition-all hover:opacity-80"
          style={{ background:'rgba(255,75,43,0.08)', color:'#FF7A5C', borderColor:'#FF4B2B30' }}
        >
          <IconDice /><span className="hidden md:inline">Random</span>
        </button>

        {/* Add game */}
        <button onClick={onAddGame}
          className="flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-xl text-xs font-semibold border transition-all hover:opacity-80"
          style={{ background:'rgba(0,245,212,0.08)', color:'#00F5D4', borderColor:'#00F5D430' }}
        >
          <IconPlus /><span className="hidden md:inline">Add Game</span>
        </button>

        {/* Theme toggle */}
        <button onClick={toggleDark} className="p-2 rounded-xl border transition-all" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)', background:'var(--c-elevated)' }}>
          {dark ? <IconSun /> : <IconMoon />}
        </button>

        {/* Profile */}
        <button onClick={()=>setPage('profile')} className="w-8 h-8 md:w-9 md:h-9 rounded-full border transition-all hover:border-[#00F5D4] flex items-center justify-center" style={{ background:'var(--c-elevated)', borderColor:'var(--c-border)', color:'var(--c-muted)' }}>
          <IconUser />
        </button>
      </div>
    </header>
  )
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ page, setPage, open, setOpen, statusFilter, setStatusFilter, genreFilter, setGenreFilter }: {
  page: Page; setPage: (p:Page) => void; open: boolean; setOpen: (v:boolean) => void
  statusFilter: string; setStatusFilter: (v:string) => void; genreFilter: string; setGenreFilter: (v:string) => void
}) {
  const nav = [
    { id:'home'    as Page, label:'Dashboard', Icon: IconHome   },
    { id:'library' as Page, label:'Library',   Icon: IconGrid   },
    { id:'search'  as Page, label:'Search',    Icon: IconSearch },
    { id:'users'   as Page, label:'Users',     Icon: IconUsers  },
    { id:'profile' as Page, label:'Profile',   Icon: IconUser   },
  ]
  return (
    <>
      {open && <div className="fixed inset-0 z-30 md:hidden" style={{ background:'var(--c-overlay)' }} onClick={()=>setOpen(false)} />}
      <aside className={`fixed top-14 md:top-16 left-0 bottom-0 w-56 z-40 flex flex-col border-r overflow-y-auto transition-transform duration-300 md:translate-x-0 ${open?'translate-x-0':'-translate-x-full'}`}
        style={{ background:'var(--c-bg)', borderColor:'var(--c-border-sub)' }}
      >
        <nav className="p-2.5 flex flex-col gap-0.5">
          {nav.map(({ id, label, Icon }) => {
            const active = page === id
            return (
              <button key={id} onClick={()=>{ setPage(id); setOpen(false) }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left"
                style={{ background: active?'rgba(0,245,212,0.08)':'transparent', color: active?'#00F5D4':'var(--c-muted)' }}
              ><Icon />{label}</button>
            )
          })}
        </nav>

        <div className="mx-3 h-px" style={{ background:'var(--c-border-sub)' }} />

        <div className="px-2.5 py-2">
          <p className="text-xs uppercase tracking-widest px-3 py-2" style={{ color:'var(--c-dim)' }}>Status</p>
          {STATUS_FILTERS.map(s=>(
            <button key={s} onClick={()=>{ setStatusFilter(s); setPage('library'); setOpen(false) }}
              className="w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all"
              style={{ color: statusFilter===s?'var(--c-text)':'var(--c-muted)', background: statusFilter===s?'var(--c-elevated)':'transparent' }}
            >
              {s !== 'All' && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: STATUS_COLORS[s as Status].dot }} />}
              {s}
            </button>
          ))}
        </div>

        <div className="mx-3 h-px" style={{ background:'var(--c-border-sub)' }} />

        <div className="px-2.5 py-2 pb-6">
          <p className="text-xs uppercase tracking-widest px-3 py-2" style={{ color:'var(--c-dim)' }}>Genre</p>
          {GENRES.slice(0, 12).map(g=>(
            <button key={g} onClick={()=>{ setGenreFilter(g); setPage('library'); setOpen(false) }}
              className="w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all"
              style={{ color: genreFilter===g?'var(--c-text)':'var(--c-muted)', background: genreFilter===g?'var(--c-elevated)':'transparent' }}
            >{g}</button>
          ))}
        </div>
      </aside>
    </>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const cols = [
    { title:'Product',   links:['Dashboard','Library','Search','Discover'] },
    { title:'Community', links:['Users','Forums','Discord','Events'] },
    { title:'Company',   links:['About','Blog','Careers','Press'] },
    { title:'Legal',     links:['Privacy Policy','Terms of Service','Cookie Policy','Contact'] },
  ]
  return (
    <footer className="border-t mt-12" style={{ borderColor:'var(--c-border-sub)' }}>
      <div className="px-6 md:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Logo size={26} />
            <p className="text-xs mt-3 leading-relaxed" style={{ color:'var(--c-muted)' }}>Track every game. Remember every journey. Connect with gamers worldwide.</p>
            <div className="flex gap-3 mt-4">
              {['𝕏','💬','📷','📺'].map(icon=>(
                <button key={icon} className="w-8 h-8 rounded-lg flex items-center justify-center text-sm border transition-colors hover:border-[#00F5D440]" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>{icon}</button>
              ))}
            </div>
          </div>
          {cols.map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color:'var(--c-dim)' }}>{title}</p>
              <ul className="space-y-2">
                {links.map(l=>(
                  <li key={l}><button className="text-sm transition-colors hover:text-[#00F5D4]" style={{ color:'var(--c-muted)' }}>{l}</button></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t" style={{ borderColor:'var(--c-border-sub)' }}>
          <p className="text-xs" style={{ color:'var(--c-dim)' }}>© 2024 GameTrack. All rights reserved.</p>
          <p className="text-xs" style={{ color:'var(--c-dim)' }}>Made with ❤️ for gamers, by gamers.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ games, onGameClick, setPage, onAddGame }: { games: Game[]; onGameClick: (g:Game)=>void; setPage: (p:Page)=>void; onAddGame: ()=>void }) {
  const stats = useMemo(() => ({
    total: games.length,
    completed: games.filter(g=>g.status==='Completed').length,
    inProgress: games.filter(g=>g.status==='In Progress').length,
    hours: games.reduce((a,g)=>a+g.hours,0),
  }), [games])
  const inProgress = games.filter(g=>g.status==='In Progress')
  const completed = games.filter(g=>g.status==='Completed').slice(0,3)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-start justify-between mb-7 gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>
            Welcome back, <span style={{ color:'#00F5D4' }}>Player</span>
          </h1>
          <p className="text-sm" style={{ color:'var(--c-muted)' }}>Your gaming dashboard.</p>
        </div>
        <button onClick={onAddGame} className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all hover:opacity-80"
          style={{ background:'rgba(0,245,212,0.08)', color:'#00F5D4', borderColor:'#00F5D430' }}
        ><IconPlus />Add Game</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[['Total Games',stats.total,'#00F5D4'],['Completed',stats.completed,'#22c55e'],['In Progress',stats.inProgress,'#00F5D4'],['Hours Played',`${stats.hours}h`,'#FF4B2B']].map(([l,v,c])=>(
          <div key={String(l)} className="rounded-2xl p-4 border" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
            <p className="text-xs mb-2" style={{ color:'var(--c-muted)' }}>{l}</p>
            <p className="text-2xl font-bold" style={{ fontFamily:"'Exo 2',sans-serif", color:String(c) }}>{v}</p>
          </div>
        ))}
      </div>

      {/* In Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color:'var(--c-muted)' }}>Currently Playing</h2>
          <button onClick={()=>setPage('library')} className="text-xs hover:text-[#00F5D4] transition-colors" style={{ color:'var(--c-muted)' }}>View all →</button>
        </div>
        {inProgress.length === 0 ? (
          <div className="text-center py-10 rounded-2xl border" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>
            <p className="mb-2 text-sm">No games in progress.</p>
            <button onClick={onAddGame} className="text-xs" style={{ color:'#00F5D4' }}>+ Add a game</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inProgress.map(g=>(
              <button key={g.id} onClick={()=>onGameClick(g)} className="group flex gap-3 p-3 rounded-2xl border text-left transition-all hover:bg-[color:var(--c-elevated)]"
                style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}
              >
                <div className="w-11 h-15 rounded-xl overflow-hidden flex-shrink-0" style={{ background:'var(--c-elevated)', width:44, height:60 }}>
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-snug mb-1 truncate group-hover:text-[#00F5D4] transition-colors" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{g.title}</p>
                  <p className="text-xs mb-2" style={{ color:'var(--c-muted)' }}>{g.hours}h played</p>
                  <ProgressBar value={g.progress} />
                  <p className="text-xs mt-1" style={{ color:'#00F5D4' }}>{g.progress}%</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Recently completed */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color:'var(--c-muted)' }}>Recently Completed</h2>
        <div className="space-y-2">
          {completed.map(g=>(
            <button key={g.id} onClick={()=>onGameClick(g)} className="group w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all hover:bg-[color:var(--c-elevated)]"
              style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}
            >
              <div className="rounded-lg overflow-hidden flex-shrink-0" style={{ background:'var(--c-elevated)', width:40, height:54 }}>
                <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate group-hover:text-[#00F5D4] transition-colors" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{g.title}</p>
                <p className="text-xs" style={{ color:'var(--c-muted)' }}>{g.developer} · {g.hours}h</p>
              </div>
              <StarRating rating={g.rating} />
              <span className="text-xs flex-shrink-0" style={{ color:'#22c55e' }}>✓</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Library Page ─────────────────────────────────────────────────────────────

function LibraryPage({ games, onGameClick, statusFilter, setStatusFilter, genreFilter, setGenreFilter, onAddGame }: {
  games: Game[]; onGameClick: (g:Game)=>void; statusFilter: string; setStatusFilter: (v:string)=>void
  genreFilter: string; setGenreFilter: (v:string)=>void; onAddGame: ()=>void
}) {
  const [sort, setSort] = useState<'title'|'rating'|'progress'|'hours'>('rating')
  const filtered = useMemo(() => {
    let list = [...games]
    if (statusFilter !== 'All') list = list.filter(g=>g.status===statusFilter)
    if (genreFilter !== 'All') list = list.filter(g=>g.genre===genreFilter)
    list.sort((a,b)=>{
      if(sort==='title') return a.title.localeCompare(b.title)
      if(sort==='rating') return b.rating-a.rating
      if(sort==='progress') return b.progress-a.progress
      return b.hours-a.hours
    })
    return list
  }, [games,statusFilter,genreFilter,sort])

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <h1 className="text-2xl font-bold" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>
          Library <span className="text-base font-normal" style={{ color:'var(--c-muted)' }}>({filtered.length})</span>
        </h1>
        <div className="flex items-center gap-2">
          <select value={sort} onChange={e=>setSort(e.target.value as typeof sort)} className="text-xs px-3 py-2 rounded-lg border focus:outline-none" style={{ background:'var(--c-elevated)', borderColor:'var(--c-border)', color:'var(--c-muted)' }}>
            <option value="rating">Rating</option><option value="progress">Progress</option><option value="hours">Hours</option><option value="title">Title</option>
          </select>
          <button onClick={onAddGame} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border" style={{ background:'rgba(0,245,212,0.08)', color:'#00F5D4', borderColor:'#00F5D430' }}>
            <IconPlus />Add Game
          </button>
        </div>
      </div>

      {(statusFilter !== 'All' || genreFilter !== 'All') && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {statusFilter !== 'All' && <button onClick={()=>setStatusFilter('All')} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border" style={{ background:'rgba(0,245,212,0.08)', borderColor:'#00F5D440', color:'#00F5D4' }}>{statusFilter} <IconX /></button>}
          {genreFilter !== 'All' && <button onClick={()=>setGenreFilter('All')} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border" style={{ background:'rgba(255,75,43,0.08)', borderColor:'#FF4B2B40', color:'#FF7A5C' }}>{genreFilter} <IconX /></button>}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>
          <p className="text-4xl mb-3">🎮</p>
          <p className="text-sm mb-3">No games match your filters.</p>
          <button onClick={onAddGame} className="text-xs" style={{ color:'#00F5D4' }}>+ Add a game</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {filtered.map(g=><GameCard key={g.id} game={g} onClick={()=>onGameClick(g)} />)}
        </div>
      )}
    </div>
  )
}

// ─── Search Page ──────────────────────────────────────────────────────────────

function SearchPage({ games, query, setQuery, onGameClick }: { games: Game[]; query: string; setQuery: (v:string)=>void; onGameClick: (g:Game)=>void }) {
  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return games.filter(g=>g.title.toLowerCase().includes(q)||g.developer.toLowerCase().includes(q)||g.genre.toLowerCase().includes(q))
  }, [games, query])

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-5" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>Search</h1>
      <div className="relative mb-7">
        <div className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color:'var(--c-muted)' }}><IconSearch /></div>
        <input type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by title, developer, or genre..." autoFocus
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-sm focus:outline-none border"
          style={{ background:'var(--c-surface)', borderColor: query?'#00F5D440':'var(--c-border)', color:'var(--c-text)' }}
        />
      </div>
      {!query.trim() ? (
        <div className="text-center py-16" style={{ color:'var(--c-muted)' }}>
          <p className="text-5xl mb-4">🔍</p><p className="text-sm">Start typing to search your library.</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-16" style={{ color:'var(--c-muted)' }}>
          <p className="text-5xl mb-4">🎮</p><p className="text-sm">No results for "<span style={{ color:'var(--c-text)' }}>{query}</span>"</p>
        </div>
      ) : (
        <>
          <p className="text-xs mb-4" style={{ color:'var(--c-muted)' }}>{results.length} result{results.length!==1&&'s'} for "<span style={{ color:'var(--c-text)' }}>{query}</span>"</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {results.map(g=><GameCard key={g.id} game={g} onClick={()=>onGameClick(g)} />)}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Users Page ───────────────────────────────────────────────────────────────

function UsersPage({ onViewProfile }: { onViewProfile: (u: AppUser) => void }) {
  const [q, setQ] = useState('')
  const [following, setFollowing] = useState<Set<number>>(new Set(MOCK_USERS.filter(u=>u.isFollowing).map(u=>u.id)))

  const results = useMemo(() => {
    if (!q.trim()) return MOCK_USERS
    const lq = q.toLowerCase()
    return MOCK_USERS.filter(u=>u.name.toLowerCase().includes(lq)||u.username.toLowerCase().includes(lq)||u.topGenre.toLowerCase().includes(lq))
  }, [q])

  const toggle = (id: number) => setFollowing(prev=>{ const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n })

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>Discover Players</h1>
        <p className="text-sm" style={{ color:'var(--c-muted)' }}>Connect with gamers who share your taste.</p>
      </div>

      <div className="relative mb-6">
        <div className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color:'var(--c-muted)' }}><IconSearch /></div>
        <input type="text" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name, username, or genre..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl text-sm focus:outline-none border"
          style={{ background:'var(--c-surface)', borderColor:'var(--c-border)', color:'var(--c-text)' }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map(u=>{
          const isFollowing = following.has(u.id)
          return (
            <div key={u.id} className="rounded-2xl border overflow-hidden" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
              {/* Mini banner */}
              <div className="h-16 relative" style={{ background:u.bannerGradient }}>
                {!u.isPublic && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ background:'rgba(0,0,0,0.5)', color:'#8888A0' }}>
                    <IconShield />Private
                  </div>
                )}
              </div>

              <div className="px-4 pb-4">
                {/* Avatar row */}
                <div className="flex items-end justify-between -mt-5 mb-3">
                  <Avatar initials={u.initials} gradient={u.avatarGradient} size={44} />
                  <button onClick={()=>toggle(u.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
                    style={{
                      background: isFollowing?'var(--c-elevated)':'rgba(0,245,212,0.08)',
                      borderColor: isFollowing?'var(--c-border)':'#00F5D430',
                      color: isFollowing?'var(--c-muted)':'#00F5D4',
                    }}
                  >
                    <IconHeart filled={isFollowing} />
                    {isFollowing?'Following':'Follow'}
                  </button>
                </div>

                <button onClick={()=>onViewProfile(u)} className="text-left w-full">
                  <p className="font-bold text-sm leading-tight hover:text-[#00F5D4] transition-colors" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{u.name}</p>
                  <p className="text-xs mb-2" style={{ color:'var(--c-muted)' }}>@{u.username}</p>
                  {u.bio && <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color:'var(--c-muted)' }}>{u.bio}</p>}
                  <div className="flex items-center gap-3 text-xs" style={{ color:'var(--c-dim)' }}>
                    <span><strong style={{ color:'var(--c-text)' }}>{u.gamesCount}</strong> games</span>
                    <span><strong style={{ color:'var(--c-text)' }}>{u.completedCount}</strong> done</span>
                    <span><strong style={{ color:'var(--c-text)' }}>{u.followersCount >= 1000 ? `${(u.followersCount/1000).toFixed(1)}K` : u.followersCount}</strong> followers</span>
                  </div>
                </button>

                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background:'var(--c-elevated)', color:'var(--c-muted)' }}>{u.topGenre}</span>
                  {u.location && <span className="text-xs flex items-center gap-1" style={{ color:'var(--c-dim)' }}><IconMapPin />{u.location}</span>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Profile Page ─────────────────────────────────────────────────────────────

function ProfilePage({ games, viewingUser, onBack }: { games: Game[]; viewingUser: AppUser | null; onBack: () => void }) {
  const { dark, toggleDark } = useTheme()
  const [tab, setTab] = useState<'library'|'activity'|'friends'>('library')
  const [following, setFollowing] = useState(viewingUser?.isFollowing ?? false)

  const isOwn = viewingUser === null
  const user = viewingUser ?? {
    id: 0, name: 'Alex Rodriguez', username: 'alex_r', initials: 'AR',
    avatarGradient: 'linear-gradient(135deg,#00F5D4,#00B894)',
    bannerGradient: 'linear-gradient(135deg,#051A20 0%,#0D2E3E 50%,#05111A 100%)',
    bio: 'Completionist gamer. Currently tackling 3 RPGs simultaneously and somehow surviving. 🎮',
    location: 'Miami, FL', website: 'alexr.games',
    gamesCount: games.length, completedCount: games.filter(g=>g.status==='Completed').length,
    followersCount: 842, followingCount: 203,
    topGenre: 'RPG', isFollowing: false, isPublic: true,
  }

  const stats = useMemo(() => {
    const rated = games.filter(g=>g.rating>0)
    return {
      avgRating: rated.length ? (rated.reduce((a,g)=>a+g.rating,0)/rated.length).toFixed(1) : '—',
      hours: games.reduce((a,g)=>a+g.hours,0),
      completed: games.filter(g=>g.status==='Completed').length,
    }
  }, [games])

  const activity = [
    { time:'2h ago',   color:'#22c55e', icon:'✓',  text:`Completed God of War Ragnarök`,       rating:5 },
    { time:'1d ago',   color:'#00F5D4', icon:'▶',  text:'Updated progress on Elden Ring',      extra:'68%' },
    { time:'2d ago',   color:'#00F5D4', icon:'▶',  text:"Playing Baldur's Gate 3",             extra:'28%' },
    { time:'4d ago',   color:'#FF7A5C', icon:'🔖', text:'Added Alan Wake 2 to Wishlist',       rating:0 },
    { time:'1wk ago',  color:'#22c55e', icon:'✓',  text:'Completed Hades',                     rating:5 },
    { time:'2wks ago', color:'#8888A0', icon:'✗',  text:'Dropped Starfield',                   rating:3 },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      {!isOwn && (
        <button onClick={onBack} className="flex items-center gap-2 text-sm mb-4 transition-colors hover:text-[#00F5D4]" style={{ color:'var(--c-muted)' }}>
          ← Back to Users
        </button>
      )}

      {/* Banner */}
      <div className="rounded-2xl overflow-hidden border mb-0 relative" style={{ borderColor:'var(--c-border)', height:160, background:user.bannerGradient }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Profile header */}
      <div className="rounded-2xl border -mt-1 px-5 pb-5" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
        <div className="flex items-end justify-between -mt-7 mb-4">
          <div className="ring-4 rounded-full" style={{ ringColor:'var(--c-surface)' }}>
            <Avatar initials={user.initials} gradient={user.avatarGradient} size={72} />
          </div>
          <div className="flex gap-2 mt-2">
            {!isOwn ? (
              <>
                <button onClick={()=>setFollowing(!following)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all"
                  style={{ background: following?'var(--c-elevated)':'rgba(0,245,212,0.08)', borderColor: following?'var(--c-border)':'#00F5D430', color: following?'var(--c-muted)':'#00F5D4' }}
                >
                  <IconHeart filled={following} />{following?'Following':'Follow'}
                </button>
                <button className="px-4 py-2 rounded-xl text-sm border" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>Message</button>
              </>
            ) : (
              <button className="px-4 py-2 rounded-xl text-sm border" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>Edit Profile</button>
            )}
          </div>
        </div>

        <div className="mb-3">
          <h1 className="text-xl font-bold leading-tight" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{user.name}</h1>
          <p className="text-sm" style={{ color:'var(--c-muted)' }}>@{user.username}</p>
        </div>

        {user.bio && <p className="text-sm leading-relaxed mb-3" style={{ color:'var(--c-text)', opacity:0.85 }}>{user.bio}</p>}

        <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color:'var(--c-muted)' }}>
          {user.location && <span className="flex items-center gap-1"><IconMapPin />{user.location}</span>}
          {user.website && <span className="flex items-center gap-1"><IconGlobe />{user.website}</span>}
          {!user.isPublic && <span className="flex items-center gap-1"><IconShield />Private account</span>}
        </div>

        {/* Stats row */}
        <div className="flex gap-5 text-sm border-t pt-3" style={{ borderColor:'var(--c-border-sub)' }}>
          {[
            [isOwn ? games.length : user.gamesCount, 'Games'],
            [isOwn ? stats.completed : user.completedCount, 'Completed'],
            [user.followersCount, 'Followers'],
            [user.followingCount, 'Following'],
            ...(isOwn ? [[stats.hours+'h','Played']] : []),
          ].map(([v,l])=>(
            <div key={String(l)}>
              <p className="font-bold" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{v}</p>
              <p className="text-xs" style={{ color:'var(--c-muted)' }}>{l}</p>
            </div>
          ))}
          {isOwn && (
            <div>
              <p className="font-bold" style={{ fontFamily:"'Exo 2',sans-serif", color:'#FF4B2B' }}>{stats.avgRating}</p>
              <p className="text-xs" style={{ color:'var(--c-muted)' }}>Avg Rating</p>
            </div>
          )}
        </div>
      </div>

      {/* Friends row */}
      <div className="mt-4 mb-4 rounded-2xl border p-4" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color:'var(--c-muted)' }}>Friends · {MOCK_USERS.filter(u=>u.isFollowing).length} mutual</p>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {MOCK_USERS.map(u=>(
            <div key={u.id} className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <Avatar initials={u.initials} gradient={u.avatarGradient} size={40} />
              <p className="text-xs text-center" style={{ color:'var(--c-muted)', width:52 }} title={u.name}>@{u.username.slice(0,7)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b mb-5" style={{ borderColor:'var(--c-border-sub)' }}>
        {(['library','activity','friends'] as const).map(t=>(
          <button key={t} onClick={()=>setTab(t)}
            className="px-5 py-3 text-sm font-medium capitalize border-b-2 transition-all"
            style={{ borderColor: tab===t?'#00F5D4':'transparent', color: tab===t?'#00F5D4':'var(--c-muted)' }}
          >{t}</button>
        ))}
      </div>

      {/* Tab: Library */}
      {tab === 'library' && (
        (!isOwn && !viewingUser?.isPublic) ? (
          <div className="text-center py-16 rounded-2xl border" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>
            <IconShield /><p className="mt-3 text-sm">This profile is private.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {(isOwn ? games : games.slice(0,6)).map(g=>(
              <div key={g.id} className="rounded-xl overflow-hidden border" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
                <div className="aspect-[3/4] relative overflow-hidden" style={{ background:'var(--c-elevated)' }}>
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs font-semibold leading-tight line-clamp-2" style={{ fontFamily:"'Exo 2',sans-serif", color:'#fff' }}>{g.title}</p>
                    <div className="mt-1"><StatusBadge status={g.status} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* Tab: Activity */}
      {tab === 'activity' && (
        <div className="space-y-2">
          {activity.map((a,i)=>(
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl border" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5" style={{ background:`${a.color}20`, color:a.color }}>{a.icon}</div>
              <div className="flex-1">
                <p className="text-sm" style={{ color:'var(--c-text)' }}>{a.text}</p>
                {a.extra && <p className="text-xs" style={{ color:a.color }}>{a.extra}</p>}
                {a.rating > 0 && (
                  <div className="mt-1"><StarRating rating={a.rating} /></div>
                )}
              </div>
              <span className="text-xs flex-shrink-0" style={{ color:'var(--c-dim)' }}>{a.time}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Friends */}
      {tab === 'friends' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MOCK_USERS.map(u=>(
            <div key={u.id} className="flex items-center gap-3 p-3 rounded-xl border" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
              <Avatar initials={u.initials} gradient={u.avatarGradient} size={40} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate" style={{ fontFamily:"'Exo 2',sans-serif", color:'var(--c-text)' }}>{u.name}</p>
                <p className="text-xs" style={{ color:'var(--c-muted)' }}>@{u.username} · {u.gamesCount} games</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full" style={{ background:'var(--c-elevated)', color:'var(--c-muted)' }}>{u.topGenre}</span>
            </div>
          ))}
        </div>
      )}

      {/* Settings (own profile only) */}
      {isOwn && (
        <div className="mt-6 rounded-2xl border p-5" style={{ background:'var(--c-surface)', borderColor:'var(--c-border)' }}>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color:'var(--c-muted)' }}>Settings</h2>
          <div className="flex items-center justify-between py-3 border-b" style={{ borderColor:'var(--c-border-sub)' }}>
            <div>
              <p className="text-sm font-medium" style={{ color:'var(--c-text)' }}>Appearance</p>
              <p className="text-xs" style={{ color:'var(--c-muted)' }}>{dark?'Dark mode active':'Light mode active'}</p>
            </div>
            <button onClick={toggleDark} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all"
              style={{ background: dark?'rgba(255,75,43,0.08)':'rgba(0,245,212,0.08)', borderColor: dark?'#FF4B2B30':'#00F5D430', color: dark?'#FF7A5C':'#00F5D4' }}
            >
              {dark?<><IconSun />Light</>:<><IconMoon />Dark</>}
            </button>
          </div>
          {[['Account','alex@gametrack.app'],['Notifications','Email + push enabled'],['Privacy','Profile is public']].map(([l,s])=>(
            <div key={l} className="flex items-center justify-between py-3 border-b last:border-b-0" style={{ borderColor:'var(--c-border-sub)' }}>
              <div>
                <p className="text-sm font-medium" style={{ color:'var(--c-text)' }}>{l}</p>
                <p className="text-xs" style={{ color:'var(--c-muted)' }}>{s}</p>
              </div>
              <span className="text-xs px-3 py-1.5 rounded-lg" style={{ background:'var(--c-elevated)', color:'var(--c-muted)' }}>Manage</span>
            </div>
          ))}
          <div className="mt-4">
            <button className="w-full py-2.5 rounded-xl text-sm border transition-colors" style={{ borderColor:'var(--c-border)', color:'var(--c-muted)' }}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<View>('landing')
  const [dark, setDark] = useState(true)
  const [page, setPage] = useState<Page>('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [showAddGame, setShowAddGame] = useState(false)
  const [showRandom, setShowRandom] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [genreFilter, setGenreFilter] = useState('All')
  const [games, setGames] = useState<Game[]>(GAMES)
  const [viewingUser, setViewingUser] = useState<AppUser | null>(null)

  const handleUpdate = (g: Game) => { setGames(p=>p.map(x=>x.id===g.id?g:x)); setSelectedGame(g) }
  const handleAdd = (g: Game) => { setGames(p=>[...p,g]); setPage('library') }
  const ownedIds = useMemo(() => new Set(games.map(g=>g.id).filter(id=>id<=35)), [games])

  const handleViewUser = (u: AppUser) => { setViewingUser(u); setPage('profile') }

  const renderPage = () => {
    switch (page) {
      case 'home':    return <HomePage games={games} onGameClick={setSelectedGame} setPage={setPage} onAddGame={()=>setShowAddGame(true)} />
      case 'library': return <LibraryPage games={games} onGameClick={setSelectedGame} statusFilter={statusFilter} setStatusFilter={setStatusFilter} genreFilter={genreFilter} setGenreFilter={setGenreFilter} onAddGame={()=>setShowAddGame(true)} />
      case 'search':  return <SearchPage games={games} query={searchQuery} setQuery={setSearchQuery} onGameClick={setSelectedGame} />
      case 'users':   return <UsersPage onViewProfile={handleViewUser} />
      case 'profile': return <ProfilePage games={games} viewingUser={viewingUser} onBack={()=>{ setViewingUser(null); setPage('users') }} />
    }
  }

  if (view === 'landing') return (
    <ThemeContext.Provider value={{ dark, toggleDark: ()=>setDark(d=>!d) }}>
      <LandingPage onEnter={()=>setView('app')} />
    </ThemeContext.Provider>
  )

  return (
    <ThemeContext.Provider value={{ dark, toggleDark: ()=>setDark(d=>!d) }}>
      <div data-theme={dark?'dark':'light'} className="min-h-screen transition-colors duration-300"
        style={{ background:'var(--c-bg)', color:'var(--c-text)', fontFamily:"'DM Sans',sans-serif" }}
      >
        <AppHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setPage={(p)=>{ if(p!=='profile') setViewingUser(null); setPage(p) }} onAddGame={()=>setShowAddGame(true)} onRandom={()=>setShowRandom(true)} />

        <div className="flex pt-14 md:pt-16">
          <Sidebar page={page} setPage={(p)=>{ if(p!=='profile') setViewingUser(null); setPage(p) }} open={sidebarOpen} setOpen={setSidebarOpen} statusFilter={statusFilter} setStatusFilter={setStatusFilter} genreFilter={genreFilter} setGenreFilter={setGenreFilter} />
          <div className="flex-1 md:ml-56 flex flex-col min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)]">
            <main className="flex-1 p-4 md:p-7">{renderPage()}</main>
            <Footer />
          </div>
        </div>

        {selectedGame && <GameModal game={selectedGame} onClose={()=>setSelectedGame(null)} onUpdate={handleUpdate} />}
        {showAddGame && <AddGameModal onClose={()=>setShowAddGame(false)} onAdd={handleAdd} ownedIds={ownedIds} />}
        {showRandom && games.filter(g=>g.status!=='Wishlist').length > 0 && (
          <RandomGameModal games={games} onClose={()=>setShowRandom(false)} onView={(g)=>{ setSelectedGame(g) }} />
        )}
      </div>
    </ThemeContext.Provider>
  )
}
