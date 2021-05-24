const fs = require('fs');
const path = require('path');

let helpers = {
    readJson: function (nameJson) {
        let data = fs.readFileSync(path.resolve(__dirname, `../database/${nameJson}`));
        return JSON.parse(data);
    },
    writeJson: function (nameJson, data) {
        fs.writeFileSync(path.resolve(__dirname, '../database/' + nameJson), JSON.stringify(data, null, 4));
    },
    lastId: function (nameJson) {
        
        let data = helpers.readJson(nameJson);
        let ultimo = 0;
        data.forEach(note => {
            if (ultimo < note.id) {
                ultimo = note.id;
            }
        });
        return ultimo;
    }
}

module.exports = helpers;