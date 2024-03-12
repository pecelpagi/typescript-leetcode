import { addTwoNumbers, ListNode } from "../solutions/002";

describe('002 - Add Two Numbers', function () {
    it("should return [0, 1]", function () {
        const results = [];
        const l1Node = new ListNode(5);
        const l2Node = new ListNode(5);

        let newNode = addTwoNumbers(l1Node, l2Node);
        
        while (newNode?.next) {
            results.push(newNode.val);
            newNode = newNode.next;
        }

        if (newNode) results.push(newNode.val);

        expect(results).toStrictEqual([0, 1]);
    });

    it("should return [7, 0, 8]", function () {
        const results = [];
        const l1Node = new ListNode(2, new ListNode(4, new ListNode(3)));
        const l2Node = new ListNode(5, new ListNode(6, new ListNode(4)));

        let newNode = addTwoNumbers(l1Node, l2Node);
        
        while (newNode?.next) {
            results.push(newNode.val);
            newNode = newNode.next;
        }

        if (newNode) results.push(newNode.val);
        expect(results).toStrictEqual([7, 0, 8]);
    });

    it("should return [8,9,9,9,0,0,0,1]", function () {
        const results = [];
        const l1Node = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
        const l2Node = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

        let newNode = addTwoNumbers(l1Node, l2Node);
        
        while (newNode?.next) {
            results.push(newNode.val);
            newNode = newNode.next;
        }

        if (newNode) results.push(newNode.val);
        expect(results).toStrictEqual([8,9,9,9,0,0,0,1]);
    });
});