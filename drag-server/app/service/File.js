const fs = require('fs');
const path = require('path');

const isExistFile = (file) => {
    return fs.existsSync(file);
}
const readFile = async (file) => {
    return new Promise(res => {
        fs.readFile(file, {
            encoding: 'utf8',
        }, (err, data) => {
            if (err) {
                console.error('single file [' + file + '] Readed Failed: \n' + err);
                res('');
            }
            res(unescape(data));
        });
    });
}
const writeFile = async (file, content = '') => {
    return new Promise(res => {
        try {
            fs.writeFileSync(file, content, {
                encoding: 'utf8'
            });
            res(true);
        } catch (err) {
            console.error('single file [' + file + '] writed Failed: \n' + err);
            res(false);
        }
    });
}
const resourcePath = path.join(__dirname, '../../public/resources/components');

module.exports = {
    resourcePath,
    isExistFile,
    readFile,
    writeFile,
}