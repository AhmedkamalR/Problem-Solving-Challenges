// problem
// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// solution 1 

var middleNode = function (head) {
    let currentNode = head;
    let length = 0;
    while (currentNode != null) {
        length++;
        currentNode = currentNode.next;
    }
    for (i = 0; i < parseInt(length / 2); i++) {
        head = head.next;
    }
    return head;
};


// solution 2 we can use  fast and slow pointers traversal

var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast) {
        if (!fast.next) break;
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};




