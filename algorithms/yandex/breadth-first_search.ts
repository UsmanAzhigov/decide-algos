// поиск в ширину в графе

const graph: Record<string, string[]> = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g'],
};

function breadthSearch(
  graph: Record<string, string[]>,
  start: string,
  end: string,
) {
  let queue = [] as string[];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift() as string;
    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
}

console.log(breadthSearch(graph, 'a', 'f'));
