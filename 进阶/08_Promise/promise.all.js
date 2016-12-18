function p1() {
    return new Promise((resolve) => {
        console.log(1);
        resolve();
    });
}

function p2() {
    return new Promise((resolve) => {
        console.log(2);
        resolve();
    });
}

function p3() {
    return new Promise((resolve) => {
        console.log(3);
        resolve();
    });
}

p1()
    .then(() => {
        return Promise.all([
            p2(),
            p3(),
        ]);
    })
    .then(() => {
        console.log('all done');
    })
    .catch((e) => {
        console.log('e: ', e);
    });
