const BASE = "https://www.breakingbadapi.com/api/";
const CHARACTER_ENDPOINT = "characters/";
const EPISODE_ENDPOINT = "episodes/";
const QUOTE_ENDPOINT = "quotes/";

class BBService {
  async getResource(endpoint) {
    const res = await fetch(`${BASE}${endpoint}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${endpoint}, received ${res.status}`);
    }

    return await res.json();
  }

  async getCharacter(id) {
    return await this.getResource(`${CHARACTER_ENDPOINT}${id}`);
  }

  async getAllCharactes() {
    return await this.getResource(CHARACTER_ENDPOINT);
  }

  async getEpisode(id) {
    return await this.getResource(`${EPISODE_ENDPOINT}${id}`);
  }

  async getAllEpisodes() {
    return await this.getResource(EPISODE_ENDPOINT);
  }

  async getQuote(id) {
    return await this.getResource(`${QUOTE_ENDPOINT}${id}`);
  }

  async getAllQuotes() {
    return await this.getResource(QUOTE_ENDPOINT);
  }
}

const breakingBadApi = new BBService();

breakingBadApi
  .getAllCharactes()
  .then((body) => console.log(body))
  .catch((err) => console.error(err));
