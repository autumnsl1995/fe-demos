/**
 *
 * 链表是否有环
 * 两个指针指向同一个节点
 *
 *
 */
//1.快慢指针

function hansCycle(root) {
  if (!root) return false;
  let slow = root;
  let fast = root;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
//2.hash表

function hansCycle2(root) {
  if (!root) return false;

  const map = new Map();

  while (root !== null) {
    if (map.has(root)) {
      return true;
    } else {
      map.set(root, "");
    }
    root = root.next;
  }
  return false;
}
