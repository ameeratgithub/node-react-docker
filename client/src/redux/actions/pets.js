import { BASE_URL } from "../../constants"

export const addPet = pet => ({
    type: 'ADD_PET',
    payload: {
        pet
    },
    meta: {
        offline: {
            effect: {
                url: `${BASE_URL}/api/pets`,
                method: 'POST',
                body: JSON.stringify(pet),
                headers: { "content-type": 'application/json' }
            },
            commit: { type: 'ADD_PET', meta: { pet } },
            rollback: { type: 'ADD_PET_ROLLBACK', meta: { pet } },
        }
    }
})
export const updatePet = pet => ({
    type: 'UPDATE_PET',
    payload: {
        pet
    },
    meta: {
        offline: {
            effect: {
                url: `${BASE_URL}/api/pets/${pet.id}`,
                method: 'PUT',
                body: JSON.stringify(pet),
                headers: { "content-type": 'application/json' }
            },
            commit: { type: 'UPDAET_PET', meta: { pet } },
            rollback: { type: 'UPDATE_PET_ROLLBACK', meta: { pet } },
        }
    }
})
export const getPets = () => ({
    type: 'GET_PETS',
    meta: {
        offline: {
            effect: {
                url: `${BASE_URL}/api/pets/`,
                method: 'GET',
                headers: { "content-type": 'application/json' }
            },
            commit: { type: 'GET_PETS' },
            rollback: { type: 'GET_PETS_ROLLBACK' },
        }
    }
})
export const getPet = (id) => ({
    type: 'GET_PET',
    payload: {
        id
    },
    meta: {
        offline: {
            effect: {
                url: `${BASE_URL}/api/pets/${id}`,
                method: 'GET',
                headers: { "content-type": 'application/json' }
            },
            commit: { type: 'GET_PET' },
            rollback: { type: 'GET_PET_ROLLBACK' },
        }
    }
})