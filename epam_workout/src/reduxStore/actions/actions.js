export const loading = () => {
  return {
      type: 'LOADING'
  };
};

export const updateAAsync = (b) => {
    return {type: 'UPDATE_A', b:b};
};

export const updateA = b => {
  return dispach => {
      dispach(loading());
      setTimeout(() => {
            dispach(updateAAsync(b));
        }, 2000)
  };
};

export const updateB = (a) => {
    return {type: 'UPDATE_B', a:a}
};

