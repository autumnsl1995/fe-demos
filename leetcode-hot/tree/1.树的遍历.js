/**
 * 树的遍历
 */

//1.深度遍历优先 DFS
const tree = {
  children: [
    { value: 2, children: [{ value: 7 }, { value: 8 }] },
    { value: 3 },
    { value: 4 },
    { value: 5, children: [{ value: 9 }, { value: 10 }] },
    { value: 6 },
  ],
  value: 1,
};

function dfs(node) {
  console.log(node.value);

  node.children?.forEach((item) => dfs(item));
}
dfs(tree);
console.log("+++++++++++++++++++++++");

// 2.广度遍历优先
function bfs(tree) {
  const stack = [tree];

  while (stack.length) {
    const node = stack.shift();
    node.children?.forEach((item) => stack.push(item));
    console.log(node.value);
  }
}
bfs(tree);
