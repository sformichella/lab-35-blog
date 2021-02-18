const getFreeIndex = objectList => {
  const indices = Object.keys(objectList);

  indices.forEach((index, i) => {
    if(index !== i) return i;
  });

  return indices.length;
};

export default getFreeIndex;
