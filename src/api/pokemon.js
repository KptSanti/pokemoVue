  import axios from 'axios';

  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  export const getAllPokemons = async () => {
    try {
      const response = await api.get('/pokemon?limit=151');
      return response.data;
    }
    catch (error) {
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  }

  export const getPokemon = async (pokemon) => {
    try {
      const response = await api.get(`/pokemon/${pokemon}`);
      console.log(response.data);
      return response.data;
    }
    catch (error) {
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  }

  export const getPokemonLocations = async (id) => {
    try {
      const response = await api.get(`/pokemon/${id}/encounters?limit=4`);
      console.log(response.data);
      return response.data;
    }
    catch (error) {
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  }



  export default api;
