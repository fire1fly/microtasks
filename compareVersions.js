function compareVersions(v1, v2) {
  const partsV1 = v1.split(".");
  const partsV2 = v2.split(".");
  const longerArr = partsV1.length >= partsV2.length ? partsV1 : partsV2;
  for (let i = 0; i < longerArr.length; i++) {
    partsV1[i] = +partsV1[i] || 0;
    partsV2[i] = +partsV2[i] || 0;
    if (partsV1[i] > partsV2[i]) {
      return true;
    } else if (partsV1[i] < partsV2[i]) {
      return false;
    } else if ((partsV1[i] === partsV2[i]) && (i + 1 === longerArr.length)) {
      return true;
    }
  }
}

console.log(compareVersions("11", "10"));
console.log(compareVersions("11", "11"));
console.log(compareVersions("10.4.6", "10.4"));
console.log(compareVersions("10.4", "11"));
console.log(compareVersions("10.4", "10.10"));
console.log(compareVersions("10.4.9", "10.5.2.5"));