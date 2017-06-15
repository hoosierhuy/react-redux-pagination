/*
export default class APIUsers {

  static getList(action) {
    const timeoutDelay = 1000;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // simulated seed data
        let westerosi = [];
        for (let w = 1; w <= 100; w++) {
          westerosi.push({
            id: w,
            westerosusName: 'Jon Snow ' + w,
            job: 'King of the North ' + w,
          });
        }
        resolve(westerosi);
      }, timeoutDelay)
    })
  }

}
*/
