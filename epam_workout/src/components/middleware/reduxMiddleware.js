const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log(`Middeleware action result: ${JSON.stringify(result)} `);
            return result;
        }
    }
};

export default logAction;