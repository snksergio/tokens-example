const StyleDictionary = require('style-dictionary').extend('config.js');

// StyleDictionary.registerFormat({
//     name: 'json/flat',
//     formatter: function(dictionary) {
//         return JSON.stringify(dictionary.allProperties, null, 2);
//     }
// })

StyleDictionary.buildAllPlatforms();