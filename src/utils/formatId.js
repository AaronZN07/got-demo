const formatID = (string) => string.replace(/(\s)/g, '_').toLowerCase();

const unFormatID = (string) => string.replace(/(_)/g, ' ').toLowerCase();

export { formatID, unFormatID };