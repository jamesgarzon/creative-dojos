export class DataService {
  getDetails() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
  }
}
