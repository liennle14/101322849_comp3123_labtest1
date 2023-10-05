function lowerCaseWords(arr){
    var result = []
    var p1 = new Promise((resolve, reject) => {
        for (let item of arr){
            if (typeof item === "string"){
                result.push(item.toLowerCase())
                resolve("Promise SUCCESS")
            }
        }
        console.log(result)
    })
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)