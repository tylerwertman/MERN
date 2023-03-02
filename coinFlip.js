function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
  return new Promise((resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
      while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
          headsCount++;
        } else {
          headsCount = 0;
        }
        if (headsCount===5){
          resolve(`It took ${attempts} tries to flip five "heads"`)
          
        }
        else if (attempts>100){
          reject("Attempts exceeded 100")
          headsCount=5
          
        }
        }
      }

)};

fiveHeads()
  .then(res => console.log(res))
  .catch(err => console.log(err));
console.log("When does this run now?");



