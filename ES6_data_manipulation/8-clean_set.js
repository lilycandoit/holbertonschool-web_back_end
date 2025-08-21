export default function cleanSet(set, startString) {
  if (typeof startString !== 'string')
    return '';

  if (startString === '') return '\n';

  const result = [];

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  })

  return result.join('-');
}
