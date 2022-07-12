import { BASE_URL } from "../../constants"

export const getOwners = () => ({
    type: 'GET_OWNERS',
    meta: {
        offline: {
            effect: {
                url: `${BASE_URL}/api/owners`,
                method: 'GET',
                headers: { "content-type": 'application/json' }
            },
            commit: { type: 'GET_OWNERS' },
            rollback: { type: 'GET_OWNERS_ROLLBACK' },
        }
    }
})

export const getOwner = (id) => ({
    type: 'GET_OWNER',
    payload: {
        id
    },
    meta: {
        offline: {
            effect: {
                url: `${BASE_URL}/api/owners/${id}`,
                method: 'GET',
                headers: { "content-type": 'application/json' }
            },
            commit: { type: 'GET_OWNER' },
            rollback: { type: 'GET_OWNER_ROLLBACK' },
        }
    }
})