import { describe, it, expect } from "vitest";

describe("Basic Frontend Test", () => {
  it("should run successfully", () => {
    console.log("TEST STARTED!");

    const value = 2 + 3;
    expect(value).toBe(5);

    console.log("TEST COMPLETED SUCCESSFULLY!!!");
  });

  it("should handle asynchronous tests", async () => {
    console.log("ASYNC TEST STARTED!");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("ASYNC TEST COMPLETED!");
    expect(true).toBe(true);
  });
});
