const fs = require('fs');

//writing files 
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the Promis and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                //empty return to stop function
                return;
            }

            //if everything is okay, resolve Promes and send the data to `.then()` method
            resolve({
                ok: true, 
                message: 'File created!'
            });
        });
    });
};

//copying file 
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //if there's an error, reject the Promis and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                //empty return to stop function
                return;
            }

            //if everything is okay, resolve Promes and send the data to `.then()` method
            resolve({
                ok: true, 
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };