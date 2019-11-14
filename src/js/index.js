const _SPACE_CHAR = " ";
const _SPACE_CHAR_LENGTH = 1;

function messageSplitCounter(inputString, maxLength) {
	let chunkLength = 0;
	let wordLength = 0;
	let messageCount = 1;

	for (const char of inputString) {
		if (char === _SPACE_CHAR) {
			if (maxLength < wordLength) {
				return -1;
			} else if (maxLength < chunkLength + wordLength) {
				chunkLength += _SPACE_CHAR_LENGTH + wordLength;
			} else {
				messageCount += 1;
				chunkLength = wordLength;
			}
		} else {
			wordLength++;
		}
	}

	return messageCount;
}

module.exports = messageSplitCounter;
