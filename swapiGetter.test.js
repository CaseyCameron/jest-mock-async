import swapiGetter from './swapiGetter';
import mockAxios from 'axios';

jest.mock('axios');
mockAxios.get.mockImplementation(
  ()=> Promise.resolve({ data: { name: 'Luke Skywalker' } })
)

describe('swapiGetter', () => {
  test('should return a name', async () => {
    const result = await swapiGetter(1);
    console.log('result', result)
    expect(result).toBe('Luke Skywalker');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
