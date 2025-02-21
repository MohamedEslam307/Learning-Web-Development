const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate failure
    setTimeout(() => {
        if (success) {
            resolve("Data loaded successfully!");
        } else {
            reject("Failed to load data.");
        }
    }, 2000);
});

console.log(myPromise); // Pending at first

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise settled.");

    });


const fetchDate = ()=>{
    const dataPromise=new Promise((resolve,reject)=>{
        let success=false;
        setTimeout(()=>{
            if(success){
                resolve("Data fetched successfully!");
            }else{
                reject("Failed to fetch data.");
            }
        }
        ,2000);
    }
    );
    return dataPromise;
}

setTimeout(() => {
    console.log("Timer set!"); // Pending at first
    fetchDate()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Promise settled.");
        });
},2000);


function stepOne() {
    return new Promise(resolve => setTimeout(() => resolve("Step 1 complete"), 1000));
}

function stepTwo() {
    return new Promise(resolve => setTimeout(() => resolve("Step 2 complete"), 1000));
}

function stepThree() {
    return new Promise(resolve => setTimeout(() => resolve("Step 3 complete"), 1000));
}

// Chaining promises
stepOne()
    .then(result => {
        console.log(result);
        return stepTwo();
    })
    .then(result => {
        console.log(result);
        return stepThree();
    })
    .then(result => console.log(result))
    .catch(error => console.error(error));
