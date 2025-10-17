import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Andrew Lalk",
  role: "Software Engineer & Quality Assurance Specialist",
  introduction: "5+ Years of experience in game development and software quality assurance.",
  description: "Main experience is in C#, C++, Python, Unity and Unreal Engine.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,
  links: {
    github: "https://github.com/andrewlalk",
    itchIO: "https://lalkdev.itch.io",

  }
};

export const games: Game[] = [
  {
    name: "A True Captain",
    description: "A short text adventure about piracy!",
    genres: ["Follow Your Own Path", "Text Adventure" , "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/andrewlalk/A-True-Captain" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];