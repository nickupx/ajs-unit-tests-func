// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

// напишем очень тупо
export default function showHealth(obj) {
  if (obj.health > 50) return 'healthy';
  if (obj.health <= 50 && obj.health >= 15) return 'wounded';
  return 'critical';
}

export function sortByHealth(arr) {
  arr.sort((a, b) => (a.health > b.health ? -1 : 1));
  return arr;
}
