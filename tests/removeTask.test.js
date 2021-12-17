import localStorageMock from './__mocks__/localStorage.js';
import removeCompletedTask from './__mocks__/removeTask.js';

describe('Remove tasks', () => {
  const arr = [{
    description: 'watch a series',
    completed: true,
    index: 1,
  },
  {
    description: 'Do my laundry',
    completed: false,
    index: 2,
  },
  {
    description: 'Prepare my dinner',
    completed: true,
    index: 3,
  },
  ];
  test('should return an array without completed tasks', () => {
    expect(removeCompletedTask(arr)).toHaveLength(1);
  });
  test('should be updated after deleting the tasks', () => {
    expect(localStorageMock.getItem('data')[0].description).toBe('Do my laundry');
  });
  test('should be updated after deleting the tasks', () => {
    expect(localStorageMock.getItem('data')[0].completed).toBe(false);
  });
});
