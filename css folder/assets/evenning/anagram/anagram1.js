function checkAnagram(input1, input2) {
  // first we will covert this string in array by split
  input1 = input1.split("");
  input2 = input2.split("");
  //compare both input length
  if (input1.length != input2.length) {
    console.log("false");
    return;
  }
  // create a seprate for loops for  both input
  for (i = 0; i < input1.length; i++) {
    for (j = 0; j < input2.length; j++) {
      if (input1[i] === input2[j]) {
        // splice will delete mathch carracter
        input2.splice(j, 1);
        break;
      }
    }
  }
  if (input2.length === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log(checkAnagram("good", "dogo"));
console.log(checkAnagram("good", "kkkk"));

/*
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("fly", "ylf"));*/
