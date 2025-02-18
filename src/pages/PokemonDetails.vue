<template>
  <div class="bg-white text-black font-sans min-h-screen flex flex-col justify-center items-center">

<div class="w-full max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center">
    <!-- Left Column -->
    <div>
      <h2 class="text-gray-600">Pokémon</h2>
        <h1 class="text-5xl font-bold capitalize">{{ pokemon.name }}</h1>
        <p class="mt-4 text-gray-700">The Ghost Pokémon</p>
        <h3 class="mt-6 font-bold">MAJOR APPEARANCES</h3>
        <div class="grid grid-cols-4 gap-2 mt-2">
            <div class="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div class="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div class="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div class="w-20 h-20 bg-gray-200 rounded-lg"></div>
        </div>
    </div>

    <!-- Centered Image -->
   <img v-if="pokemon.sprites?.other['official-artwork'].front_default" :src="pokemon.sprites.other['official-artwork'].front_default" alt="Chandelure"  class="w-full max-w-sm mx-auto col-start-2">

    <!-- Right Column -->
    <div v-if="pokemon">
        <div class="flex justify-center space-x-4 mt-4">
            <span class="w-6 h-6 bg-purple-600 rounded-full"></span>
            <span class="w-6 h-6 bg-orange-500 rounded-full"></span>
        </div>
        <h3 class="mt-6 font-bold"></h3>
        <div class="flex space-x-2 mt-2">
            <span class="w-6 h-6 bg-yellow-400 rounded-full"></span>
            <span class="w-6 h-6 bg-purple-400 rounded-full"></span>
            <span class="w-6 h-6 bg-blue-400 rounded-full"></span>
            <span class="w-6 h-6 bg-brown-600 rounded-full"></span>
        </div>
        <h3 class="mt-6 font-bold">STATS</h3>
        <div class="space-y-2 mt-2">
            <div class="flex justify-between"><span>HP:</span> <span>78</span></div>
            <div class="flex justify-between"><span>ATTACK:</span> <span>84</span></div>
            <div class="flex justify-between"><span>DEFENSE:</span> <span>78</span></div>
            <div class="flex justify-between"><span>SPEED:</span> <span>109</span></div>
            <div class="flex justify-between"><span>SP. ATTACK:</span> <span>85</span></div>
            <div class="flex justify-between"><span>SP. DEFENSE:</span> <span>100</span></div>
        </div>
    </div>
  </div>

<div class="w-full max-w-7xl mx-auto flex justify-between p-6 border-t">
    <a href="#" class="text-gray-600">#605</a>
    <a href="#" class="text-gray-600">#610</a>
</div>
</div>
</template>
