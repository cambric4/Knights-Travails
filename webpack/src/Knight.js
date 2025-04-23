export function knightMoves(start, end) {
    const boardSize = 8;
    const directions = [
        [1,2], [2,1], [-1,2], [-2,1], [-1,-2], [-2,-1], [1,-2], [2,-1],
    ];
    const isValid = ([x, y]) => x >= 0 && x < boardSize && y >= 0 && y < boardSize;

    const visited = new Set();
    const queue = [[start]];

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length -1];
        const key = `${x}, ${y}`;
        if (visited.has(key)) continue;

        visited.add(key);

        if (x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length -1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return path;
        }
        
        for (let [dx, dy] of directions) {
            const next = [x + dx, y + dy];
            if (isValid(next)) {
                queue.push ([...path, next]);
            }
        }
    }
}