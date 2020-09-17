import sum from '../basic';
import showHealth, { sortByHealth } from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);
  expect(result).toBe(6);
});

test('should be healthy', () => {
  const result = showHealth({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should be healthy', () => {
  const result = showHealth({ name: 'Маг', health: 51 });
  expect(result).toBe('healthy');
});

test('should be wounded', () => {
  const result = showHealth({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('should be wounded', () => {
  const result = showHealth({ name: 'Маг', health: 25 });
  expect(result).toBe('wounded');
});

test('should be wounded', () => {
  const result = showHealth({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('should be critical', () => {
  const result = showHealth({ name: 'Маг', health: 1 });
  expect(result).toBe('critical');
});

test('should be critical', () => {
  const result = showHealth({ name: 'Маг', health: 0 });
  expect(result).toBe('critical');
});

test('should be sorted', () => {
  const result = sortByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('should be sorted', () => {
  const result = sortByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'рыцарь', health: 0 },
    { name: 'гном', health: 100500 },
  ]);
  expect(result).toEqual([
    { name: 'гном', health: 100500 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'рыцарь', health: 0 },
  ]);
});
