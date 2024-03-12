class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head: ListNode | null = null;

    function insertAtEnd(val: number) {
        let newNode: ListNode = new ListNode(val);

        if (!head) {
            head = newNode;
            return;
        }

        let currentNode: ListNode = head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    function getLeadingNumber(latestSum: number) {
        let leadingNumber: number = 0;

        if (latestSum.toString().length > 1) leadingNumber = Number(latestSum.toString().charAt(0));

        return leadingNumber;
    }

    let latestSum: number = 0;

    let currentL1Node: ListNode | null = l1;
    let currentL2Node: ListNode | null = l2;

    while (currentL1Node || currentL2Node) {
        let leadingNumber = getLeadingNumber(latestSum);
        const l1NodeVal = currentL1Node ? currentL1Node.val : 0;
        const l2NodeVal = currentL2Node ? currentL2Node.val : 0;

        latestSum = l1NodeVal + l2NodeVal + leadingNumber;

        const newValue: number = Number(latestSum.toString().charAt(latestSum.toString().length - 1));

        insertAtEnd(newValue);

        if (currentL1Node) {
            currentL1Node = currentL1Node.next;
        }

        if (currentL2Node) {
            currentL2Node = currentL2Node.next;
        }

        if ((latestSum.toString().length > 1) && !currentL1Node && !currentL2Node) {
            leadingNumber = getLeadingNumber(latestSum);
            insertAtEnd(leadingNumber);
        }
    }

    return head;
};

export { ListNode, addTwoNumbers };