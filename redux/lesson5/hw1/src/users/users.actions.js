export const ON_CHANGE = 'USER/ON_CHANGE';


export const filterUser = (value) => {
    return {
        type: ON_CHANGE,
        payload: {
            value,
        }
    };
}