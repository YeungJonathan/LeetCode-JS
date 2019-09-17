/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	const ansList = [];
	let remainder = 0

	while (l1 != null && l2 != null){
		currentValue = l1.val + l2.val + remainder;
		if (currentValue > 9){
			remainder = 1
		}else{
			remainder = 0
		}
		ansList.push(currentValue%10);
		l1 = l1.next
		l2 = l2.next
	}
	
	if (l1 == null && l2 != null){
		while (l2 != null){
			currentValue = l2.val + remainder
			ansList.push(currentValue % 10)
			currentValue > 9 ? remainder = 1 : remainder = 0
			l2 = l2.next;
		}
	}
	
	if (l2 == null && l1 != null){
		while (l1 != null){
			currentValue = l1.val + remainder
			ansList.push(currentValue %10)
		
			currentValue > 9 ? remainder = 1 : remainder = 0
			l1 = l1.next;
		}
	}
	if (l1 == null && l2 == null && remainder != 0){
		ansList.push(remainder);
	}
	return createReturnLinkList(ansList);
};

const createReturnLinkList = (ansList)=>{
	let index = 0;
	let root = null;
	let currentNode = null;
	while (index < ansList.length){
		if (root == null){
			root  = new ListNode(ansList[index])
			currentNode = root;
		}else{
			currentNode.next = new ListNode(ansList[index])
			currentNode = currentNode.next
		}
		index ++
	}
	console.log(root)
	return root
}