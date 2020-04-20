import { episodes, quotes, characters } from "utils/dummyData";

const BASE = "https://www.breakingbadapi.com/api/";
const CHARACTER_ENDPOINT = "characters/";
const EPISODE_ENDPOINT = "episodes/";
const QUOTE_ENDPOINT = "quotes/";
const SERIES = "?series=Breaking+Bad";

export default class BBService {
  async getResource(endpoint) {
    const res = await fetch(`${BASE}${endpoint}${SERIES}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${endpoint}, received ${res.status}`);
    }

    return await res.json();
  }

  async getCharacter(id) {
    const charater = await this.getResource(`${CHARACTER_ENDPOINT}${id}`);
    return this._transformCharacter(charater);
  }

  async getAllCharacters() {
    const allCharaters = characters; //await this.getResource(CHARACTER_ENDPOINT);
    return allCharaters.map(this._transformCharacter);
  }

  async getEpisode(id) {
    const episode = await this.getResource(`${EPISODE_ENDPOINT}${id}`);
    return this._transformEpisode(episode);
  }

  async getAllEpisodes() {
    const allEpisodes = episodes; //await this.getResource(EPISODE_ENDPOINT);
    return allEpisodes.map(this._transformEpisode);
  }

  async getQuote(id) {
    const quote = await this.getResource(`${QUOTE_ENDPOINT}${id}`);
    return this._transformQuote(quote);
  }

  async getAllQuotes() {
    const allQuotes = quotes; //await this.getResource(QUOTE_ENDPOINT);
    return allQuotes.map(this._transformQuote);
  }

  _transformCharacter(characterItem) {
    return {
      id: characterItem.char_id,
      name: characterItem.name,
      birthday: characterItem.birthday,
      img: characterItem.img,
      status: characterItem.status,
      nickname: characterItem.nickname,
      appearance: characterItem.appearance,
    };
  }

  _transformEpisode(episodeItem) {
    return {
      id: episodeItem.episode_id,
      title: episodeItem.title,
      season: episodeItem.season,
      date: episodeItem.air_date,
      characters: episodeItem.characters,
      episode: episodeItem.episode,
    };
  }

  _transformQuote(quoteItem) {
    return {
      id: quoteItem.quote_id,
      quote: quoteItem.quote,
      author: quoteItem.author,
    };
  }
}
