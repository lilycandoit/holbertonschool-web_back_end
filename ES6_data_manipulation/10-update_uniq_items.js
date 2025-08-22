export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    return ('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map; // map got updated
}
