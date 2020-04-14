const BASE = "https://www.breakingbadapi.com/api/";
const CHARACTER_ENDPOINT = "characters/";

class BBService {
  async getResource(url) {
    const res = await fetch(`${BASE}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getCharacter(id) {
    return await this.getResource(`${CHARACTER_ENDPOINT}${id}`);
  }

  async getAllCharactes() {
    return await this.getResource(`${CHARACTER_ENDPOINT}`);
  }
}

const breakingBadApi = new BBService();

breakingBadApi
  .getAllCharactes()
  .then((body) => console.log(body))
  .catch((err) => console.error(err));
