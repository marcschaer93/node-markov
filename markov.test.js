const MarkovMachine = require("./markov.js");

describe("MarkovMachine", () => {
  describe("constructor", () => {
    it("should create a MarkovMachine instance with words array", () => {
      const mm = new MarkovMachine("the cat in the hat");
      expect(mm).toBeInstanceOf(MarkovMachine);
      expect(mm.words).toEqual(["the", "cat", "in", "the", "hat"]);
    });
  });

  describe("makeChains", () => {
    it("should create valid chains from the source text", () => {
      const mm = new MarkovMachine("the cat in the hat");
      mm.makeChains();
      // Test specific chain relationships, e.g., mm.chains['the'] should include 'cat' and 'hat'
      expect(mm.chains["the"]).toEqual(["cat", "hat"]);
      expect(mm.chains["cat"]).toEqual(["in"]);
      // Add more tests for other chain relationships
    });
  });

  describe("makeText", () => {
    it("should generate random text with the specified number of words", () => {
      const mm = new MarkovMachine("the cat in the hat");
      const text = mm.makeText(5); // Generate 5 words
      const words = text.split(" ");

      expect(words).toHaveLength(5);
    });

    // Add more tests to check if generated text makes sense based on the source text.
  });
});
