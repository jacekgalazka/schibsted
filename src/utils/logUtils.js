// split log by empty line and next splict array content by space;
export function getSplitedArray(arr) {
  let objectArray = arr ? arr.split(/\n/) : [];

  objectArray = objectArray.map((item) => {
    const elementArray = item.split(' ');
    return [elementArray[0], elementArray[6], item];
  });

  return objectArray;
}

export function groupElements(arr) {
  const hostGroups = {};
  const fileGroups = {};

  arr.forEach((item) => {
    hostGroups[item[0]] ? hostGroups[item[0]]++ : hostGroups[item[0]] = 1;
    fileGroups[item[1]] ? fileGroups[item[1]]++ : fileGroups[item[1]] = 1;
  });
  return { hostGroups, fileGroups };
}

// create result aray from group object and result first five elements
export function getResultArray(obj) {
  const result = [];
  // FIXME
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      result.push([property, obj[property]]);
    }
  }
  result.sort((a, b) => b[1] - a[1]);

  return result.slice(0, 5);
}
