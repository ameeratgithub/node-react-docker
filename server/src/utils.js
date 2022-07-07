import * as fs from 'node:fs/promises';

/**
 * Gets owners from pets.json file.
 * @return {array} The list of owners.
 */
export async function readOwners() {
  const data = await fs.readFile('./data/owners.json', 'utf-8');
  return JSON.parse(data);
}

/**
 * Gets pets from pets.json file.
 * @return {array} The list of pets.
 */
export async function readPets() {
  const data = await fs.readFile('./data/pets.json', 'utf-8');
  return JSON.parse(data);
}

/**
 * Write pets to pets.json file.
 * @param {array} pets The collection to write in file.
 */
export async function writePets(pets) {
  await fs.writeFile('./data/pets.json', JSON.stringify(pets), 'utf-8');
}
