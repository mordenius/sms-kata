const messageSplitCounter = require("./../index");

describe("Message split counting", () => {
	it("start", () => {
		for (const _test of _TEST_DATA) {
			const messageCount = messageSplitCounter(_test.string, _test.max);
			expect(messageCount).toBe(_test.count);
		}
	});
});

const _TEST_DATA = [
	{
		string: "String",
		max: 10,
		count: 1
	},
	{
		string: "Simple String",
		max: 10,
		count: 2
	},
	{
		string: "Simple String",
		max: 5,
		count: -1
	}
];
