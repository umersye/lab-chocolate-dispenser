var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color,no_of_Choco)
{
    if(no_of_Choco < 1)
    {
        return 'Number cannot be zero/negative'
    }
    for(let i=0; i<no_of_Choco; i++)
    {
        chocolates.unshift(color)
    }
    return chocolates
}
//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates,count)
{
    let remove_arr =[]
    if (count>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else if (count<1)
    {
        return 'Number cannot be zero/negative'
    }
    for(let i=0; i < count ; i++)
    {
        remove_arr.push(chocolates.shift())
    }
    return remove_arr

}


//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates,count)
{
    let arr =[]
    if (count>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    else if (count<1)
    {
        return 'Number cannot be zero/negative'
    }
    for(let i=0; i < count ; i++)
    {
        arr.push(chocolates.pop())
    }
    return arr
}


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates,number,color)
{
    let arr = []
    let count = 0
    if (number>chocolates.length)
    {
        return 'Insufficient chocolates in the dispenser'
    }
    if (number<1)
    {
        return 'Number cannot be zero/negative'
    }
    for (let i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            arr.push(chocolates.pop())
            count++
            if (count == number) return (arr)
        }
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates)
{
    var count = [];
    var color = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    for (let i = 0; i< color.length; i++) {
        var c= 0;
        for(let j = 0; j< chocolates.length; j++) {
            if (color[i] == chocolates[j])
            c++;
        }
        count[i] = c;
    }
    return count.filter(Number);
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let dark = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let sorted = chocolates.sort((a, b) => {
        if (dark[b] > dark[a]) {
            return 1;
        }
        if (dark[b] < dark[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = sorted;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if (chocolates.length == 0)
        return chocolates;
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i <= chocolates.length; i++) {
        if (chocolates[i] == finalColor)
            return "Can't replace the same chocolates";
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            count++;
            if (count == number)
                return chocolates;

        }
    }
    if (count < number)
        return "Insufficient chocolates in the dispenser";
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, Color, finalColor) {
    if (Color == finalColor)
        return "Can't replace the same chocolates";
    else
        for (var i = chocolates.length; i >= 0; i--) {
            if (chocolates[i] == Color)
                chocolates[i] = finalColor;
        }
    var temp1 = [chocolates.length, chocolates];
    return temp1;
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let dark = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let sorted = chocolates.sort((a, b) => {
        if (dark[b] > dark[a]) {
            return 1;
        }
        if (dark[b] < dark[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = sorted;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if (chocolates.length == 0)
        return chocolates;
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i <= chocolates.length; i++) {
        if (chocolates[i] == finalColor)
            return "Can't replace the same chocolates";
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            count++;
            if (count == number)
                return chocolates;

        }
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color,finalcolor){
    if (chocolates.length === 0) {
        return [0, []];
    }
    var count = 0;
    if (color == finalcolor) {
        return "Can't replace the same chocolates";
    }
    for (let i = 0; i < chocolates.length; i++) {
        if (chocolates[i] === color) {
            chocolates[i] = finalcolor;
        }
    }
    for (let j = 0; j < chocolates.length; j++) {
        if (chocolates[j] == finalcolor)
            count += 1;
    }
    var result = [count, chocolates];
    return result;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed