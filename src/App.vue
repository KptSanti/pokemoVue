<script setup>
import NavigationBar from "./layouts/NavigationBar.vue";
import PokemonCard from "./layouts/PokemonCard.vue";
import { ref, onMounted, computed } from "vue";
import { getAllPokemons, getPokemon } from "./api/pokemon";

const pokemon = ref([]);
const searchPokemon = ref("");
const isLoading = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;

    const allPokemon = await getAllPokemons();
    const detailedPokemon = await Promise.all(
      allPokemon.results.map(async (poke) => {
        return await getPokemon(poke.name);
      })
    );

    pokemon.value = detailedPokemon;
  } catch (error) {
    console.error("Error fetching Pokémon:", error.message);
  } finally {
    isLoading.value = false;
  }
});

// filter
const filteredPokemon = computed(() => {
  return pokemon.value.filter((poke) =>
    poke.name.toLowerCase().includes(searchPokemon.value.toLowerCase()) ||
    poke.id.toString().includes(searchPokemon.value)
  );
});
</script>

<template>
  <NavigationBar />

  <div class="bg-gray-100 p-6">
    <div class="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold text-center text-purple-700">Pokédex</h1>
      <p class="text-center text-gray-600 mt-2">
        Search for a Pokémon by name or using its National Pokédex number.
      </p>

      <div class="flex justify-center mt-4 relative">
        <input
          v-model="searchPokemon"
          type="text"
          placeholder="Name or number"
          class="w-full max-w-md p-3 border rounded-md shadow-md focus:outline-none"
        />
      </div>

      <div v-if="filteredPokemon.length" class="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
        <PokemonCard v-for="poke in filteredPokemon" :key="poke.name" :pokemon="poke" />
      </div>

      <p v-else class="text-center text-gray-500 mt-4">No Pokémon found.</p>
    </div>
  </div>
</template>
