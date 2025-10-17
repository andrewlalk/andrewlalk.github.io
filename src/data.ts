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
  },
};

export const games: Game[] = [
	{
    name: "Throne & Liberty - QA",
    description: "THRONE AND LIBERTY captures the essence of classic MMORPGs while introducing new gameplay elements, depth and excitement at every turn. Gather your guild, prepare for battle, and set forth for throne... and liberty!",
    genres: ["MMO", "RPG" , "Open World"],
    platforms: [Platform.Windows] [Platform.Xbox] [Platform.Playstation] ,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2429640/THRONE_AND_LIBERTY/" },
	  {	source: LinkImageSource.TL, url: "https://www.playthroneandliberty.com/en-gb/game/credits"}
    ],
    media: [
      { source: "/images/games/Throne & Liberty/Screenshot_1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=KFQoXwQh7j8", type: MediaType.YouTube },
      { source: "/images/games/Throne & Liberty/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },

  {
    name: "A True Captain - Dev",
    description: "A short text adventure about piracy!",
    genres: ["Follow Your Own Path", "Text Adventure" , "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/andrewlalk/A-True-Captain" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/A-True-Captain" },
    ],
    media: [
      { source: "/images/games/A True Captain/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/A True Captain/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_4.png", type: MediaType.Image },
    ],
  }
  
];