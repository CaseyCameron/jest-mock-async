import swapiGetter from './swapiGetter';
import mockAxios from 'axios';

jest.mock('axios', () => ({
  // needed if using import over require
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({ data: { name: 'Luke Skywalker' }})
  }
}));

// mockAxios.get.mockResolvedValue({ data: { name: 'Luke Skywalker' } });

describe('swapiGetter', () => {
  // clear the cache between tests
  afterEach(() => jest.clearAllMocks);

  test('should return a name', async () => {
    const result = await swapiGetter(1);
    console.log('result', result)
    expect(result).toBe('Luke Skywalker');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
