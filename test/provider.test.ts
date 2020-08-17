import * as Github from '../src'

test('make sure classes were generated', () => {
  expect(Github.GithubProvider.name).toBe('GithubProvider');
});