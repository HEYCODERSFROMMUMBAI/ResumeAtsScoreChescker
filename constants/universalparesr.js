// const patterns = require('./patternLibraray');

// const parseResume = (fileContent) => {
//     const result = {};

//     for (const [field, patternList] of Object.entries(patterns)) {
//         for (const pattern of patternList) {
//             const match = fileContent.match(pattern);
//             if (match) {
//                 result[field] = Array.isArray(match) && match[2]
//                     ? match[2].split(/[;,\n]/).map(item => item.trim()).filter(Boolean).join(' ')
//                     : match[0];
//                 break;
//             }
//         }
//         result[field] = result[field] || 'Unknown';
//     }

//     return result;
// };

// module.exports = parseResume;

const patterns = require('./patternLibraray');
const logger = require('../config/logger');

const parseResume = (fileContent) => {
    const result = {};

    for (const [field, patternList] of Object.entries(patterns)) {
        logger.info(`Parsing field: ${field}`);
        for (const pattern of patternList) {
            const match = fileContent.match(pattern);
            if (match) {
                logger.info(`Match found for field: ${field}`);
                if (Array.isArray(match) && match[2]) {
                    const valueArray = match[2].split(/[;,\n]/).map(item => item.trim()).filter(Boolean);
                    result[field] = valueArray.join(', ');
                } else {
                    result[field] = match[0].trim();
                }
                break;
            }
        }
        result[field] = result[field] || 'Unknown';
    }

    logger.info('Resume parsing completed successfully.');
    return result;
};

module.exports = parseResume;
