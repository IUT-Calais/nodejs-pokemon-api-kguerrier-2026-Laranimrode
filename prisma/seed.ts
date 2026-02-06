import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemonCard.deleteMany();
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

  await prisma.pokemonCard.create({
  data: {
    name: "Bulbizarre",
    pokedexId: 1,
    types: { connect: [{ name: 'Grass' }, { name: 'Poison' }] },
    lifePoints: 45,
    size: 0.7,
    weight: 6.9,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Herbizarre",
    pokedexId: 2,
    types: { connect: [{ name: 'Grass' }, { name: 'Poison' }] },
    lifePoints: 60,
    size: 1.0,
    weight: 13.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Florizarre",
    pokedexId: 3,
    types: { connect: [{ name: 'Grass' }, { name: 'Poison' }] },
    lifePoints: 80,
    size: 2.0,
    weight: 100.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Salamèche",
    pokedexId: 4,
    types: { connect: [{ name: 'Fire' }] },
    lifePoints: 39,
    size: 0.6,
    weight: 8.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Reptincel",
    pokedexId: 5,
    types: { connect: [{ name: 'Fire' }] },
    lifePoints: 58,
    size: 1.1,
    weight: 19.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Dracaufeu",
    pokedexId: 6,
    types: { connect: [{ name: 'Fire' }, { name: 'Flying' }] },
    lifePoints: 78,
    size: 1.7,
    weight: 90.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Carapuce",
    pokedexId: 7,
    types: { connect: [{ name: 'Water' }] },
    lifePoints: 44,
    size: 0.5,
    weight: 9.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Carabaffe",
    pokedexId: 8,
    types: { connect: [{ name: 'Water' }] },
    lifePoints: 59,
    size: 1.0,
    weight: 22.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Tortank",
    pokedexId: 9,
    types: { connect: [{ name: 'Water' }] },
    lifePoints: 79,
    size: 1.6,
    weight: 85.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Chenipan",
    pokedexId: 10,
    types: { connect: [{ name: 'Bug' }] },
    lifePoints: 45,
    size: 0.3,
    weight: 2.9,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Chrysacier",
    pokedexId: 11,
    types: { connect: [{ name: 'Bug' }] },
    lifePoints: 50,
    size: 0.7,
    weight: 9.9,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Papilusion",
    pokedexId: 12,
    types: { connect: [{ name: 'Bug' }, { name: 'Psychic' }] },
    lifePoints: 60,
    size: 1.1,
    weight: 32.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Aspicot",
    pokedexId: 13,
    types: { connect: [{ name: 'Bug' }, { name: 'Poison' }] },
    lifePoints: 40,
    size: 0.3,
    weight: 3.2,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Coconfort",
    pokedexId: 14,
    types: { connect: [{ name: 'Bug' }, { name: 'Poison' }] },
    lifePoints: 45,
    size: 0.6,
    weight: 10.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Dardargnan",
    pokedexId: 15,
    types: { connect: [{ name: 'Bug' }, { name: 'Poison' }] },
    lifePoints: 65,
    size: 1.0,
    weight: 29.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Roucool",
    pokedexId: 16,
    types: { connect: [{ name: 'Normal' }, { name: 'Flying' }] },
    lifePoints: 40,
    size: 0.3,
    weight: 1.8,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Roucoups",
    pokedexId: 17,
    types: { connect: [{ name: 'Normal' }, { name: 'Flying' }] },
    lifePoints: 63,
    size: 1.1,
    weight: 30.0,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Roucarnage",
    pokedexId: 18,
    types: { connect: [{ name: 'Normal' }, { name: 'Flying' }] },
    lifePoints: 83,
    size: 1.5,
    weight: 39.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Rattata",
    pokedexId: 19,
    types: { connect: [{ name: 'Normal' }] },
    lifePoints: 30,
    size: 0.3,
    weight: 3.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"
  }
});

await prisma.pokemonCard.create({
  data: {
    name: "Rattatac",
    pokedexId: 20,
    types: { connect: [{ name: 'Normal' }] },
    lifePoints: 55,
    size: 0.7,
    weight: 18.5,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"
  }
});


  console.log('Seed completed!');
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
