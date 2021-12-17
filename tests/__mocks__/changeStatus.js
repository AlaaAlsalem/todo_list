import localStorageMock from './localStorage.js';

const changeStatus = (arr, index) => {
  if (arr[index].completed) {
    arr[index].completed = false;
  } else {
    arr[index].completed = true;
  }
  localStorageMock.setItem('data', arr);
  return arr;
};

export default changeStatus;