function pathSum(root, sum) {
  if (!root) return [];
  const result = [];
  const path = [];
  const traverse = (node, sum) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right && sum === node.val) {
      result.push([...path]);
    }
    traverse(node.left, sum - node.val);
    traverse(node.right, sum - node.val);
    path.pop();
  };
  traverse(root, sum);
  return result;
}
