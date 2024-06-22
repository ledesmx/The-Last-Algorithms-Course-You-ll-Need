import { describe, test, expect } from "bun:test";
import { solve } from "./maze_solver.ts";

describe("Solve mazes", () => {
  test("First maze", () => {
    const maze = [
      "#### #",
      "#    #",
      "# ####"
    ]
    const start = { x: 1, y: 2 }
    const end = { x: 4, y: 0 }
    const result = solve(maze, '#', start, end);
    expect(result.length).toBe(6);
    expect(result).toEqual([
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
      { x: 4, y: 0 }
    ]);
  });
  test("Second maze", () => {
    const maze = [
      "xxxxxx",
      "x   xx",
      "x x  x",
      "x xx x",
      "x xx x"
    ]
    const start = { x: 1, y: 4 }
    const end = { x: 4, y: 4 }
    const result = solve(maze, 'x', start, end);
    expect(result.length).toBe(10);
    expect(result).toEqual([
      { x: 1, y: 4 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 }
    ]);
  });
  test("Third maze", () => {
    const maze = [
      "qqq q",
      "  q  ",
      "q qq ",
      "q qq ",
      "q    "
    ]
    const start = { x: 0, y: 1 }
    const end = { x: 3, y: 0 }
    const result = solve(maze, 'q', start, end);
    expect(result.length).toBe(13);
    expect(result).toEqual([
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 4, y: 3 },
      { x: 4, y: 2 },
      { x: 4, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 0 }
    ]);
  });
  test("Fourth maze", () => {
    const maze = [
      "zzzzz z",
      "zzzzz z",
      "zzzzz z",
      "z     z",
      "z zzzzz",
      "  zzzzz"
    ]
    const start = { x: 5, y: 0 }
    const end = { x: 0, y: 5 }
    const result = solve(maze, 'z', start, end);
    expect(result.length).toBe(11);
    expect(result).toEqual([
      { x: 5, y: 0 },
      { x: 5, y: 1 },
      { x: 5, y: 2 },
      { x: 5, y: 3 },
      { x: 4, y: 3 },
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
      { x: 0, y: 5 }
    ]);
  });
});

describe("Mazes with no solution", () => {
  test("Fifth maze", () => {
    const maze = [
      "xxxxxxxx",
      "    x   ",
      "xxxxxxxx"
    ]
    const start = { x: 0, y: 1 }
    const end = { x: 7, y: 1 }
    const result = solve(maze, 'x', start, end);
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });
  test("Sixth maze", () => {
    const maze = [
      "x x x",
      "x xxx",
      "x x x",
      "x   x",
      "xxxxx"
    ]
    const start = { x: 1, y: 0 }
    const end = { x: 3, y: 0 }
    const result = solve(maze, 'x', start, end);
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });
});
