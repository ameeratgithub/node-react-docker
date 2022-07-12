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

  pets.push(req.body);

  await writePets(pets);

  res.status(201).json(req.body);
});

router.get('/pets/:id', async (req, res) => {
  const pets = await readPets();
  const pet = pets.filter((p) => p.id?.toString() === req.params.id)[0] || {};
  res.json(pet);
});

router.put('/pets/:id', async (req, res) => {
  const pets = await readPets();

  const index = pets.findIndex((p) => p.id == req.params.id);

  const {name, colour, age, breed, owner, type} = req.body;

  if (index >= 0) {
    pets[index].name = name;
    pets[index].colour = colour;
    pets[index].age = age;
    pets[index].breed = breed;
    pets[index].owner = owner;
    pets[index].type = type;
  }

  await writePets(pets);

  res.json(pets[index]);
});

export default router;
