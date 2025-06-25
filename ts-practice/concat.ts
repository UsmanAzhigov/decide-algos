type Concat<T extends number[], K extends number[]> = [...T, ...K];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
