import { coutries } from "../Data/Countries";// contris list

/*
here we have a function for the list of contris
1.get array of contry object and shufle them
2.get 4 random contrys
*/



// shufel array func
function suffled(arr){
  let shuffled = arr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
  return shuffled
}
// get a shuffeld flags array
function getCountriList() {
  let rnfCountri = suffled(coutries)
  return rnfCountri;
}

// get 4 flags obj, one of them is true
function getRandomAnswer(contry,suffledList) {
  const randomAns = [];
  while (randomAns.length < 3) {
    let rnfCountri = suffledList[Math.floor(Math.random() * suffledList.length)];
    if (contry.code != rnfCountri.code) randomAns.push(rnfCountri);
  }
  randomAns.push(contry);
  return suffled(randomAns);
}

export { getCountriList, getRandomAnswer };
