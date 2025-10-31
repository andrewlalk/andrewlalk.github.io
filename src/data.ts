import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Andrew Lalk",
  role: "Software Engineer & Quality Assurance Specialist",
  introduction: "5+ Years of experience in game development and software QA.",
  description: "Main experience is in C#, C++, Python, Unity and Unreal Engine.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,
  links: {
    github: "https://github.com/andrewlalk",
    itchIO: "https://hamwichdev.itch.io/",
  },
};

export const games: Game[] = [

/////// Game #1

	{
    name: "Throne & Liberty - QA",
    description: "THRONE AND LIBERTY captures the essence of classic MMORPGs while introducing new gameplay elements, depth and excitement at every turn. Gather your guild, prepare for battle, and set forth for throne... and liberty!",
    genres: ["MMO", "RPG" , "Open World"],
    platforms: [Platform.Windows, Platform.Xbox, Platform.Playstation],
	engine: GameEngine.Other,
    links: [
      { source: LinkImageSource.Steam, url: "https://store.steampowered.com/app/2429640/THRONE_AND_LIBERTY/" },
	  {	source: LinkImageSource.TL, url: "https://www.playthroneandliberty.com/en-gb/game/credits#:~:text=Test%20Associate%20%7C%20Andrew%20Lalk"}
    ],
    media: [
      { source: "/images/games/Throne & Liberty/Screenshot_1.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/KFQoXwQh7j8", type: MediaType.YouTube },
      { source: "/images/games/Throne & Liberty/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },

/////// Game #2

 {
    name: "Pirate Forest - Dev",
    description: "A simple forest environment that I made in Unreal Engine 5.1, so I threw a pirate into it. Assets were pulled for free from the asset store. Environment design, music and audio FX were done by me.",
    genres: ["Walking Simulator" , "Pirates"],
    platforms: [Platform.Windows],
    engine: GameEngine.UnrealEngine,
	    links: [
      { source: LinkImageSource.Github, url: "null" },
    ],
    media: [
      { source: "/images/games/Pirate Forest/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/9aL7astdJdw", type: MediaType.YouTube },
      { source: "/images/games/Pirate Forest/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Pirate Forest/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Pirate Forest/Screenshot_4.png", type: MediaType.Image },
    ],
  },

/////// Game #3

  {
    name: "A True Captain - Dev",
    description: "A short text adventure about piracy! All art, music and development was done by me.",
    genres: ["Follow Your Own Path", "Text Adventure" , "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/andrewlalk/A-True-Captain" },
      { source: LinkImageSource.ItchIo, url: "https://hamwichdev.itch.io/a-true-captain" }
    ],
    media: [
      { source: "/images/games/A True Captain/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/36AAKBvjrPw", type: MediaType.YouTube },
      { source: "/images/games/A True Captain/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_4.png", type: MediaType.Image },
    ],
  }

  
];