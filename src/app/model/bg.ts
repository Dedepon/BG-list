export class Bg {
  id: string;
  name: string;
  url: string;

  image: string;
  thumbnail: string;

  minPlayers: number;
  maxPlayers: number;
  description: string;
  playTime: number;
  minAge: number;

  category: string[];
  mechanic: string[];
  family: string[];

  rating: number;

  publisher: string[];
  designer: string[];
  author: string[];
  artist: string[];

  expansionsIDs: string[];
  expansionOfId: string;
}
