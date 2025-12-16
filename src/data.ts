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
    YouTube: "https://www.youtube.com/@HamwichDev",
  },
};

export const games: Game[] = [

/////// Game #5

	{
    name: "Ember Shrine | Cinematic Environment - Developer/Audio Engineer",
    description: "This is a treasure-filled crypt environment I made in Unreal Engine 5.4, this was made with assets from the Fab library and the audio was engineered by me.",
    genres: ["Cinematic", "Dark Fantasy"],
    platforms: [Platform.YouTube],
	engine: GameEngine.Other,
    links: [
      { source: LinkImageSource.YouTube, url: "https://www.youtube.com/watch?v=mhtUulFAvLo&t=7s" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/mhtUulFAvLo?si=jFhcIXYlU6EXm13q", type: MediaType.YouTube },
      { source: "/images/games/Ember Shrine/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Ember Shrine/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Ember Shrine/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Ember Shrine/Screenshot_4.png", type: MediaType.Image },
    ],
  },

/////// Game #4

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
      { source: "https://www.youtube.com/embed/KFQoXwQh7j8?si=X_GiVIAfWLf3EFwH", type: MediaType.YouTube },
      { source: "/images/games/Throne & Liberty/Screenshot_1.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/Throne & Liberty/Screenshot_4.jpg", type: MediaType.Image },
    ],
  },

/////// Game #3

 {
    name: "Pirate Forest | Cinematic Environment - Developer/Audio Engineer",
    description: "A simple forest environment that I made in Unreal Engine 5.1, so I threw a pirate into it. Assets were pulled for free from the asset store. Environment design, music and audio FX were done by me.",
    genres: ["Walking Simulator" , "Pirates"],
    platforms: [Platform.YouTube],
    engine: GameEngine.UnrealEngine,
	    links: [
      { source: LinkImageSource.YouTube, url: "null" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/9aL7astdJdw?si=MW8oxq9yJMXrnkqv", type: MediaType.YouTube },
      { source: "/images/games/Pirate Forest/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Pirate Forest/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Pirate Forest/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Pirate Forest/Screenshot_4.png", type: MediaType.Image },
    ],
  },

/////// Game #2

  {
    name: "Operation: Stop Primus - Developer",
    description: "This is some random project I made, go listen to the band Primus if you like the music, I do not own the right to their music, I just was listening to it a lot at the time I made it in 2021.",
    genres: ["Shmup", "Bullet Hell" , "Railshooter"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/andrewlalk/Operation-Stop-Primus" },
      { source: LinkImageSource.ItchIo, url: "https://hamwichdev.itch.io/operation-stop-primus" }
    ],
    media: [
      { source: "https://www.youtube.com/embed/Pl6NLr1vm7k?si=6PvjIXY3bnj4dhuV", type: MediaType.YouTube },
      { source: "/images/games/Operation Stop Primus/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Operation Stop Primus/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Operation Stop Primus/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Operation Stop Primus/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  
  /////// Game #1

  {
    name: "A True Captain - Developer",
    description: "A short text adventure about piracy! All art, music and development was done by me.",
    genres: ["Follow Your Own Path", "Text Adventure" , "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/andrewlalk/A-True-Captain" },
      { source: LinkImageSource.ItchIo, url: "https://hamwichdev.itch.io/a-true-captain" }
    ],
    media: [
      { source: "https://www.youtube.com/embed/36AAKBvjrPw?si=6KAZhulH-KSB34TD", type: MediaType.YouTube },
      { source: "/images/games/A True Captain/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/A True Captain/Screenshot_4.png", type: MediaType.Image },
    ],
  }

  
];