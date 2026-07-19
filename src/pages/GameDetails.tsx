import { useState } from 'react';
import { GameDetailsHero } from '../components/gameDetails/GameDetailsHero';
import { GameDetailsMetadata } from '../components/gameDetails/GameDetailsMetadata';
import { GameDetailsGallery } from '../components/gameDetails/GameDetailsGallery';
import { GameDetailsTrailer } from '../components/gameDetails/GameDetailsTrailer';
import { GameDetailsCommunity } from '../components/gameDetails/GameDetailsCommunity';
import { GameDetailsUserInfo } from '../components/gameDetails/GameDetailsUserInfo';
import { GameDetailsSimilar } from '../components/gameDetails/GameDetailsSimilar';

const game = {
  id: 'stormhaven',
  title: 'Stormhaven',
  year: '2024',
  developer: 'Aether Forge',
  publisher: 'Nova Play',
  genres: ['Action', 'RPG', 'Adventure'],
  platforms: ['PC', 'PS5', 'Xbox'],
  score: 8.7,
  rating: '9.1',
  cover: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1800&q=80',
  description:
    'Stormhaven is an immersive open-world RPG where ancient magic and futuristic technology collide. Explore vast landscapes, build alliances, and master a living storm to change the fate of mankind.',
  releaseDate: '2024-09-20',
  engine: 'Thunder Engine',
  franchise: 'Stormhaven Saga',
  series: 'Stormhaven',
  themes: 'Fantasy, Sci-Fi',
  perspective: 'Third-person',
  gameModes: 'Singleplayer, Co-op',
  website: 'https://stormhaven.example.com',
  screenshots: [
    { id: 'shot-1', src: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=900&q=80', alt: 'Stormhaven landscape' },
    { id: 'shot-2', src: 'https://images.unsplash.com/photo-1525880319362-4ae0f8b7f93b?auto=format&fit=crop&w=900&q=80', alt: 'Stormhaven battle scene' },
    { id: 'shot-3', src: 'https://images.unsplash.com/photo-1444427169197-de497742b62d?auto=format&fit=crop&w=900&q=80', alt: 'Stormhaven city' },
  ],
  trailerPreview: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
};

const userEntry = {
  owned: true,
  status: 'Playing',
  personalRating: 9,
  hours: '38h',
  progress: '62%',
  started: '2024-06-14',
  finished: '—',
  favorite: true,
  notes: 'Love the stormcrafting system. Need to finish the Shardfall arc next.',
};

const similarGames = [
  {
    id: 'emberport',
    title: 'Emberport',
    genres: ['Action', 'Adventure'],
    platforms: ['PC', 'PS5'],
    rating: '8.9',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skyline-ruins',
    title: 'Skyline Ruins',
    genres: ['RPG', 'Strategy'],
    platforms: ['PC'],
    rating: '8.7',
    cover: 'https://images.unsplash.com/photo-1529270292861-0de0f3b0bad4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'horizon-surge',
    title: 'Horizon Surge',
    genres: ['Adventure', 'RPG'],
    platforms: ['PS5', 'Xbox'],
    rating: '9.0',
    cover: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  },
];

export function GameDetailsPage() {
  const [owned, setOwned] = useState(userEntry.owned);
  const [favorite, setFavorite] = useState(userEntry.favorite);

  return (
    <div className="space-y-8">
      <GameDetailsHero
        title={game.title}
        year={game.year}
        developer={game.developer}
        publisher={game.publisher}
        genres={game.genres}
        platforms={game.platforms}
        score={game.score}
        rating={game.rating}
        cover={game.cover}
        banner={game.banner}
        owned={owned}
        onAddLibrary={() => setOwned(true)}
        onToggleFavorite={() => setFavorite((current) => !current)}
      />

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.95fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Overview</p>
                <h2 className="mt-2 text-xl font-semibold text-white">About the game</h2>
              </div>
              <div className="rounded-full bg-background/70 px-4 py-2 text-sm text-muted">Story-rich RPG</div>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">{game.description}</p>
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <GameDetailsGallery screenshots={game.screenshots} />
            <GameDetailsTrailer trailerUrl={game.trailerPreview} />
          </div>

          <GameDetailsSimilar games={similarGames} />
        </div>

        <div className="space-y-6">
          <GameDetailsMetadata
            items={[
              { label: 'Release date', value: game.releaseDate },
              { label: 'Engine', value: game.engine },
              { label: 'Franchise', value: game.franchise },
              { label: 'Series', value: game.series },
              { label: 'Developer', value: game.developer },
              { label: 'Publisher', value: game.publisher },
              { label: 'Themes', value: game.themes },
              { label: 'Perspective', value: game.perspective },
              { label: 'Game modes', value: game.gameModes },
              { label: 'Website', value: game.website },
            ]}
          />
          <GameDetailsCommunity rating="9.3" players="18.4k" popularity="High" trending="#7" />
          <GameDetailsUserInfo
            owned={owned}
            status={userEntry.status}
            personalRating={userEntry.personalRating}
            hours={userEntry.hours}
            progress={userEntry.progress}
            started={userEntry.started}
            finished={userEntry.finished}
            favorite={favorite}
            notes={userEntry.notes}
            onEdit={() => setOwned(true)}
          />
        </div>
      </div>
    </div>
  );
}
