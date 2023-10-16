const object1: any = {
  _id: "64f60830839c8227ea544053",
  userName: "test 1",
  number: "619",
  location: "Maxime voluptatem p",
  type: "female",
  email: "jezulofi@mailinator.com",
  phone: "+1 (523) 524-7216",
  options: [
    {
      start: "2023-09-11T23:00:00.000Z",
      end: "2023-09-14T23:00:00.000Z",
      Sport: "football",
      _id: "64f60830839c8227ea544054",
    },
  ],
  age: 52,
};
const objetct2: any = {
  _id: "64f60830839c8227ea544053",
  userName: "test 2",
  number: "784",
  location: "Maxime voluptatem p",
  type: "female",
  email: "jezulofi@mailinator.com",
  phone: "+1 (523) 524-7216",
  options: [
    {
      start: "2023-09-11T23:00:00.000Z",
      end: "2023-09-14T23:00:00.000Z",
      Sport: "baskball",
      _id: "64f60830839c8227ea544054",
    },
  ],
  age: 52,
};
let documentCleanCopy = null;

documentCleanCopy = Object.assign({}, objetct2);

function compareObjects(obj1: any, obj2: any) {
  delete obj1.attachments;
  delete obj2.attachments;
  const diff: any = {};
  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      const added = obj2[key].filter(
        (item2: any) =>
          !obj1[key].some(
            (item1: any) => JSON.stringify(item1) === JSON.stringify(item2)
          )
      );
      const deleted = obj1[key].filter(
        (item1: any) =>
          !obj2[key].some(
            (item2: any) => JSON.stringify(item1) === JSON.stringify(item2)
          )
      );
      if (added.length > 0) {
        diff[key] = {
          action: "Added",
          elements: added,
        };
      }

      if (deleted.length > 0) {
        if (!diff[key]) {
          diff[key] = {
            action: "Deleted",
            elements: deleted,
          };
        } else {
          diff[key].action = "Modified";
          diff[key].deleted = deleted;
        }
      }
    } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        diff[key] = obj2[key];
      }
    } else if (obj1[key] !== obj2[key]) {
      diff[key] = obj2[key];
    }
  }
  return diff;
}
const object3 = compareObjects(object1, objetct2);

console.log(object3);
