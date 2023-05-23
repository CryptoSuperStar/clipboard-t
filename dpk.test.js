const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Uses partitionKey when provided", () => {
    const event = {
      partitionKey: "abc123",
    };
    const expectedKey = "abc123";
    const actualKey = deterministicPartitionKey(event);
    expect(actualKey).toBe(expectedKey);
  });

  it("Hashes event data correctly", () => {
    const event = {
      id: 123,
      name: "example",
      date: new Date(),
    };
    const data = JSON.stringify(event);
    const expectedKey = crypto.createHash("sha256").update(data).digest("hex");
    const actualKey = deterministicPartitionKey(event);
    expect(actualKey).toBe(expectedKey);
  });

  it("Hashes partitionKey correctly when event data too long", () => {
    const partitionKey = "a".repeat(300);
    const event = {
      partitionKey,
    };
    const expectedKey = crypto
      .createHash("sha256")
      .update(partitionKey)
      .digest("hex");
    const actualKey = deterministicPartitionKey(event);
    expect(actualKey).toBe(expectedKey);
  });

  it("Returns the trivial partition key when input is undefined", () => {
    const actualKey = deterministicPartitionKey(undefined);
    expect(actualKey).toBe("0");
  });

  it("Handles non-string partition key values", () => {
    const event = {
      partitionKey: 123,
    };
    const expectedKey = "123";
    const actualKey = deterministicPartitionKey(event);
    expect(actualKey).toBe(expectedKey);
  });

  it("Handles undefined partition key values", () => {
    const event = {
      partitionKey: undefined,
    };
    const data = JSON.stringify(event);
    const expectedKey = crypto.createHash("sha256").update(data).digest("hex");
    const actualKey = deterministicPartitionKey(event);
    expect(actualKey).toBe(expectedKey);
  });
});