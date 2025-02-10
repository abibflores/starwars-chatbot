export interface SwapiCharacterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiCharacter[] | [];
}

export interface SwapiCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string; // URL al planeta de origen
  films: string[]; // URLs de las películas en las que aparece
  species: string[]; // URLs de las especies
  vehicles: string[]; // URLs de los vehículos que usa
  starships: string[]; // URLs de las naves espaciales que pilota
  created: string; // Fecha de creación en SWAPI
  edited: string; // Fecha de última edición
  url: string; // URL de referencia en SWAPI
}

export interface SwapiMovieResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiMovie[];
}

export interface SwapiMovie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // URLs de los personajes
  planets: string[]; // URLs de los planetas
  starships: string[]; // URLs de las naves estelares
  vehicles: string[]; // URLs de los vehículos
  species: string[]; // URLs de las especies
  created: string; // Fecha de creación en SWAPI
  edited: string; // Fecha de última edición
  url: string; // URL de referencia en SWAPI
}
