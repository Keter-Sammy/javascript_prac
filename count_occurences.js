const numbers = [1, 2, 3, 4, 1, 4, 3, 3, 1];

const count = countOccurences(numbers, 3);

console.log(count);

function countOccurences(array, searchElement) {
    // basic implementation::::
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return count;
    

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement)
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}