import PetItem from "./PetItem"

function PetsList({pets}) {
    
    return pets.map(pet => (
        <PetItem pet={pet} key={pet.id} />
    ))
}

export default PetsList