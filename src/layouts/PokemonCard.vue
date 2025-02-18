<template>
  <div class="bg-green-100 p-4 rounded-lg shadow-md text-center border border-gray-300">
    <img :src="pokemon?.sprites?.front_default" :alt="pokemon.name" class="w-24 h-24 mx-auto" />
    <p class="text-gray-700 font-bold mt-2 capitalize">#{{ pokemon.id}} {{ pokemon.name }}</p>
    <div class="flex justify-center gap-2 mt-2">
      <div v-for="type in pokemon.types" :key="type.type.name" :style="{ backgroundColor: pokemonTypeColor[type.type.name] }" class="capitalize bg-green-500 text-white px-3 py-1 text-xs rounded-md">
        {{ type.type.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },

  color: {
    type: String,
    default: "green",
  },

});

const pokemonTypeColor = {
  normal: "gray",
  fire: "red",
  water: "blue",
  electric: "yellow",
  grass: "green",
  ice: "purpe",
  fighting: "orange",
  poison: "purple",
  ground: "yellow",
  flying: "blue",
  psychic: "purple",
  bug: "green",
  rock: "gray",
  ghost: "purple",
  dragon: "purple",
  dark: "gray",
  steel: "gray",
  fairy: "pink",
};

</script>
