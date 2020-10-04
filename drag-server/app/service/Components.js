const { readFile, writeFile, isExistFile, resourcePath } = require('./File');

const queryService = async (id = '') => {
    let result = {};
    if (!id) {
        const cptsPath = resourcePath + '/components';
        if (isExistFile(cptsPath)) {
            const cptsList = await readFile(cptsPath);
            result = JSON.parse(cptsList)['data'];
        } else {
            result = [];
        }
    } else {

    }
    return result;
}

module.exports = {
    queryService,
}