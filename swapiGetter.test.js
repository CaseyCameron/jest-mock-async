import swapiGetter from './swapiGetter';

describe('swapiGetter', () => {
  test('should return a name', async () => {
    const result = await swapiGetter(1);
    console.log('result', result)
    expect(result).toBe('Luke Skywalker');
  });
});
