function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let currentNode = collection[linkedList]
  
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  
  return currentNode
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    let node = nodeAt(index - 1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList) {
  let i = 0
  let currentNode = collection[linkedList]
  while (currentNode.next !== node.next) {
    currentNode = next(currentNode, collection)
    i++
  }
  return i
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let nextNode = nodeAt(index, linkedList, collection)
  let nextNodeAddress = addressAt(nextNode, linkedList, collection)
  prevNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nextNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
  let prevNode;
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    prevNode = currentNode
    currentNode = next(currentNode, collection)
  }
  prevNode.next = currentNode.next
}

