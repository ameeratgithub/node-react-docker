import express from 'express';

const router = express.Router();


import {readOwners, readPets, writePets} from './utils';

router.get('/owners', async (req, res) => {
  const owners = await readOwners();
  res.json(owners);
});

router.get('/owners/:id', async (req, res) => {
  const owners = await readOwners();

  const owner = owners.filter((o) => o.id == req.params.id)[0] || {};
  const pets = await readPets();
  owner.pets = pets.filter((p) => p.owner == owner.id);

  res.json(owner);
});

router.get('/pets', async (req, res) => {
  const pets = await readPets();
  res.json(pets);
});
router.post('/pets', async (req, res) => {
  const pets = await readPets();
  const {name, colour, age, breed, owner, type} = req.body;
  const pet = {
    id: pets.length + 1, name, colour, age, breed, owner, type,
  };
  pets.push(pet);
  await writePets(pets);
  res.status(201).json(pet);
});

router.get('/pets/:id', async (req, res) => {
  const pets = await readPets();
  const pet = pets.filter((p) => p.id == req.params.id)[0] || {};
  res.json(pet);
});

router.put('/pets/:id', async (req, res) => {
  const pets = await readPets();

  const pet = pets.filter((p) => p.id == req.params.id)[0];
  const newPets = pets.filter((p) => p.id != req.params.id);

  const {name, colour, age, breed, owner, type} = req.body;

  if (pet) {
    pet.name = name;
    pet.colour = colour;
    pet.age = age;
    pet.breed = breed;
    pet.owner = owner;
    pet.type = type;
  }

  newPets.push(pet);
  await writePets(newPets);

  res.json(pet);
});

export default router;
