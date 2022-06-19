myArr = [];
alphaArr = [];

function pushData() {
    let input = document.getElementById("input").value;
    //append data to the array using push

    myArr.push(input);
    form.input.value = "";
    console.log(myArr);

    //declared a variable where we have to store the value
    let value = "";
    for (i = 0; i < myArr.length; i++) {
        value = value + myArr[i] + "</br>";

    }
    //display data on web page
    document.getElementById("insertedElmt").innerHTML = value;

}


function popData() {
    //removes last element from the array
    myArr.pop(myArr.length - 1);
    console.log('pop:', myArr);
    let pvalue = "";
    for (i = 0; i < myArr.length; i++) {
        pvalue = pvalue + myArr[i] + "</br>";

    }
    //display data on web page
    document.getElementById("insertedElmt").innerHTML = pvalue;
    console.log(myArr);
}

function shiftData() {
    //removes first element from the array
    myArr.shift();
    let pvalue = "";
    for (i = 0; i < myArr.length; i++) {
        pvalue = pvalue + myArr[i] + "</br>";

    }
    //display data on web page
    document.getElementById("insertedElmt").innerHTML = pvalue;
    console.log(myArr);
}

function unshiftData() {
    //add elements to the first position
    let input = document.getElementById("input").pvalue;
    myArr.unshift(input);
    //console.log(myArr);
    let pvalue = "";
    for (i = 0; i < myArr.length; i++) {
        pvalue = pvalue + myArr[i] + "</br>";
    }
    //display data on web page
    document.getElementById("insertedElmt").innerHTML = pvalue;
    console.log(myArr);
}

function toStringData() {
    document.getElementById("output").innerHTML = myArr.toString();
}

function sliceData() {
    sliced = myArr.slice(0, 2);
    let pvalue = "";
    for (i = 0; i < myArr.length; i++) {
        pvalue = pvalue + myArr[i] + "</br>";
    }
    //display data on web page
    document.getElementById("insertedElmt").innerHTML = pvalue;
    document.getElementById("output").innerHTML = "Top 2 favourite alphabates are:" + sliced;
}

function spliceData() {
    const removed = myArr.splice(2);
    document.getElementById("output").innerHTML = "Remaining alphabates are:" + removed;
}

function lengthData() {
    document.getElementById("output").innerHTML = "Total alphabates in the list are:" + myArr.length;
}

function reverseData() {
    myArr.reverse();
    document.getElementById("output").innerHTML = "Array in reverse direction: " + myArr;
}

function joinData() {
    myArr.join("Alphabate:");
    console.log(myArr);
    document.getElementById("output").innerHTML = myArr.join(" and ");
}


function mapData() {
    const newArr = myArr.map(myFunction);

    function myFunction(alpha) {
        return alpha + alpha;
    }
    document.getElementById("output").innerHTML = newArr;
}

function sortData() {
    myArr.sort();
    document.getElementById("output").innerHTML = "Alphabets in ascendng order: " + myArr;
}

function filterData() {
    const alphalength = myArr.filter((element, index) => {
        return element.length > 6;
    })
    document.getElementById("output").innerHTML = "Display alphabets whose length is greater than six letter: " + alphalength;
}

function fillData() {
    document.getElementById("output").innerHTML = myArr.fill("#", 0);
}

function reduceData() {
    let sum = myArr.reduce((accum, curr) => {
        return parseInt(accum) + parseInt(curr);
    })
    document.getElementById("output").innerHTML = sum;
}