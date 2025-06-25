// 1 балл алгоритмы

/**
 * Есть дерево, на котором сидят белки (squirrels) и во́роны (ravens). Необходимо написать функцию,
 * которая находит всех белок на дереве и возвращает их имена
 */

function squirrelScanner(tree) {
  for (let i = 0; i < tree.branches.length; i++) {
    if (tree.branches[i].nest.type === 'squirrel') {
      console.log(tree.branches[i].nest.name);
    }
    if (tree.branches[i].branches) {
      squirrelScanner(tree.branches[i]);
    }
  }
}

/*
 * Type Tree = {
 *   nest: Squirrel | Raven;
 *   branches?: Tree[];
 * }
 * Type Squirrel = {
 *   name: string;
 *   type: 'squirrel';
 * }
 * Type Raven = {
 *   name: string;
 *   type: 'raven';
 * }
 */
const tree = {
  nest: { name: 'NEVERMORE!', type: 'raven' },
  branches: [
    {
      nest: { name: 'Acorn', type: 'squirrel' },
      branches: [
        {
          nest: { name: 'Sir Salty', type: 'squirrel' },
        },
        {
          nest: { name: 'Huginn', type: 'raven' },
          branches: [
            {
              nest: { name: 'Muninn', type: 'raven' },
            },
            {
              nest: { name: 'Kernel', type: 'squirrel' },
            },
          ],
        },
      ],
    },
    {
      nest: { name: 'Gvilum', type: 'raven' },
      branches: [
        {
          nest: { name: 'Macadamia', type: 'squirrel' },
          branches: [
            {
              nest: { name: 'Boldric', type: 'raven' },
            },
          ],
        },
      ],
    },
  ],
};

console.log(squirrelScanner(tree)); // => ['Acorn', 'Sir Salty', 'Macadamia', 'Kernel'];
