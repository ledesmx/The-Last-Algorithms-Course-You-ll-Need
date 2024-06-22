type Point = {
  x: number;
  y: number;
}
const dir = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: -1, y: 0 },
]

function walk(maze: string[], wall: string, current: Point, end: Point, path: Point[], seen: Set<string>): boolean {
  if (current.y < 0 || current.y >= maze.length || current.x < 0 || current.x >= maze[0].length) {
    return false;
  }
  if (maze[current.y][current.x] === wall) {
    return false;
  }
  if (seen.has(`${current.x}-${current.y}`)) {
    return false;
  }
  if (current.x === end.x && current.y === end.y) {
    path.push({ x: current.x, y: current.y });
    return true;
  }

  path.push({ x: current.x, y: current.y });
  seen.add(`${current.x}-${current.y}`);

  for (let i = 0; i < dir.length; ++i) {
    const { x, y } = dir[i];
    const newDir: Point = { x: current.x + x, y: current.y + y };
    if (walk(maze, wall, newDir, end, path, seen)) {
      return true;
    }
  }
  return false;
}

export function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const path: Point[] = [];
  const seen = new Set<string>();
  const ok = walk(maze, wall, start, end, path, seen);
  return ok ? path : [];
}
