const initialState = {
    pets: [],
    owners: [],
    pet: null,
    owner:null
};

export default function AppReducer(state = initialState, action){
    switch (action.type) {

        case "ADD_PET":
            const pets = Array.isArray(state.pets) ? state.pets : state.pets.payload;

            return (state = {
                ...state,
                pets: [...pets, action.payload.pet]
            });
        case "UPDATE_PET":
            const oldPets = Array.isArray(state.pets) ? state.pets : state.pets.payload;
            const index = oldPets.findIndex(p => p.id?.toString() === action.payload.pet.id);
            const { name, colour, age, breed, owner, type } = action.payload.pet;

            if (index >= 0) {
                oldPets[index].name = name;
                oldPets[index].colour = colour;
                oldPets[index].age = age;
                oldPets[index].breed = breed;
                oldPets[index].owner = owner;
                oldPets[index].type = type;
            }

            return (state = {
                ...state,
                pets: oldPets
            });
        case "GET_PETS":
            return (state = {
                ...state,
                pets: action.payload || state.pets
            });
        case "GET_PET":

            return (state = {
                ...state,
                pet: state.pets.filter(p => p.id?.toString() === action.payload.id)[0] || action.payload,
            });
        case "GET_OWNERS":
            
            return (state = {
                ...state,
                owners: action.payload || state.owners
            });
        case "GET_OWNER":
            return (state = {
                ...state,
                owner: action.payload || state.owner
            });
        default:
            return state;
    }
};
