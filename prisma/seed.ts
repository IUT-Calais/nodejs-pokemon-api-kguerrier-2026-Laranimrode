import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.type.deleteMany();
  await prisma.type.createMany({
    data: [
      { name: 'Normal' },
      { name: 'Fire' },
      { name: 'Water' },
      { name: 'Grass' },
      { name: 'Electric' },
      { name: 'Ice' },
      { name: 'Fighting' },
      { name: 'Poison' },
      { name: 'Ground' },
      { name: 'Flying' },
      { name: 'Psychic' },
      { name: 'Bug' },
      { name: 'Rock' },
      { name: 'Ghost' },
      { name: 'Dragon' },
      { name: 'Dark' },
      { name: 'Steel' },
      { name: 'Fairy' },
    ],
  });

  await prisma.pokemonCard.createMany({
  data: [
  {
    name: "Bulbizarre",
    pokedexID: 1,
    typeId: 1,
    lifePoints: 45,
    size: 0.7,
    weight: 6.9,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "Herbizarre",
    pokedexID: 2,
    typeId: 1,
    lifePoints: 60,
    size: 1.0,
    weight: 13.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  },
  {
    name: "Florizarre",
    pokedexID: 3,
    typeId: 1,
    lifePoints: 80,
    size: 2.0,
    weight: 100.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    name: "Salamèche",
    pokedexID: 4,
    typeId: 2,
    lifePoints: 39,
    size: 0.6,
    weight: 8.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    name: "Reptincel",
    pokedexID: 5,
    typeId: 2,
    lifePoints: 58,
    size: 1.1,
    weight: 19.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  },
  {
    name: "Dracaufeu",
    pokedexID: 6,
    typeId: 2,
    lifePoints: 78,
    size: 1.7,
    weight: 90.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    name: "Carapuce",
    pokedexID: 7,
    typeId: 3,
    lifePoints: 44,
    size: 0.5,
    weight: 9.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    name: "Carabaffe",
    pokedexID: 8,
    typeId: 3,
    lifePoints: 59,
    size: 1.0,
    weight: 22.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  },
  {
    name: "Tortank",
    pokedexID: 9,
    typeId: 3,
    lifePoints: 79,
    size: 1.6,
    weight: 85.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  },
  {
    name: "Chenipan",
    pokedexID: 10,
    typeId: 4,
    lifePoints: 45,
    size: 0.3,
    weight: 2.9,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  },
  {
    name: "Chrysacier",
    pokedexID: 11,
    typeId: 4,
    lifePoints: 50,
    size: 0.7,
    weight: 9.9,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
  },
  {
    name: "Papilusion",
    pokedexID: 12,
    typeId: 4,
    lifePoints: 60,
    size: 1.1,
    weight: 32.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  },
  {
    name: "Aspicot",
    pokedexID: 13,
    typeId: 4,
    lifePoints: 40,
    size: 0.3,
    weight: 3.2,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
  },
  {
    name: "Coconfort",
    pokedexID: 14,
    typeId: 4,
    lifePoints: 45,
    size: 0.6,
    weight: 10.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
  },
  {
    name: "Dardargnan",
pokedexID: 15,
    typeId: 4,
    lifePoints: 65,
    size: 1.0,
    weight: 29.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
  },
  {
    name: "Roucool",
    pokedexID: 16,
    typeId: 5,
    lifePoints: 40,
    size: 0.3,
    weight: 1.8,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
  },
  {
    name: "Roucoups",
    pokedexID: 17,
    typeId: 5,
    lifePoints: 63,
    size: 1.1,
    weight: 30.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
  },
  {
    name: "Roucarnage",
    pokedexID: 18,
    typeId: 5,
    lifePoints: 83,
    size: 1.5,
    weight: 39.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
  },
  {
    name: "Rattata",
    pokedexID: 19,
    typeId: 6,
    lifePoints: 30,
    size: 0.3,
    weight: 3.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
  },
  {
    name: "Rattatac",
    pokedexID: 20,
    typeId: 6,
    lifePoints: 55,
    size: 0.7,
    weight: 18.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
  }
]
})

  console.log('Seed completed!');
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
