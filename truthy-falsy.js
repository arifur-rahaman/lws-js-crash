//truthy: like true
//falsy: like false

/**
 * there are 6 falsy data type:
 * 1. false
 * 2. 0
 * 3. undefined
 * 4. null
 * 5. ""
 * 6. NaN
 */

/**
 * other than above 6 data types everything is truthy
 */

const result = NaN;

if (result) {
  //will execute, if not falsy
} else {
  //will execute, if truthy
}

if (!result) {
  //will execute,if falsy
} else {
  //will execute, if truthy
}
