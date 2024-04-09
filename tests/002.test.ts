import { addTwoNumbers, ListNode } from "../solutions/002";

describe('002 - Add Two Numbers', function () {
    it("should return head = 6 when given input l1 = 4 and l2 = 2", function () {
        const l1: ListNode = new ListNode(4);
        const l2: ListNode = new ListNode(2);

        const head: ListNode | null = addTwoNumbers(l1, l2);

        expect(head ? head.val : 0).toEqual(6);
    });

    it("should return head = 4->7 when given input l1 = 3->2 and l2 = 1->5", function () {
        const l1: ListNode = new ListNode(3);
        l1.next = new ListNode(2);

        const l2: ListNode = new ListNode(1);
        l2.next = new ListNode(5);

        const head: ListNode | null = addTwoNumbers(l1, l2);

        expect(head ? head.val : 0).toEqual(4);
        expect(head && head.next ? head.next.val : 0).toEqual(7);
    });
    
    it("should return head = 7->1 when given input l1 = 5 and l2 = 2->1", function () {
        const l1: ListNode = new ListNode(5);

        const l2: ListNode = new ListNode(2);
        l2.next = new ListNode(1);

        const head: ListNode | null = addTwoNumbers(l1, l2);

        expect(head ? head.val : 0).toEqual(7);
        expect(head && head.next ? head.next.val : 0).toEqual(1);
    });

    it("should return head= 5->2 when given input l1 = 9 and l2 = 6->1", function () {
        const l1: ListNode = new ListNode(9);

        const l2: ListNode = new ListNode(6);
        l2.next = new ListNode(1);

        const head: ListNode | null = addTwoNumbers(l1, l2);

        expect(head ? head.val : 0).toEqual(5);
        expect(head && head.next ? head.next.val : 0).toEqual(2);
    }); 

    it("should return head = 6->5->0->1 when given input l1 = 4->7 and l2 = 2->8->9 ", function () {
        const l1: ListNode = new ListNode(4);
        l1.next = new ListNode(7)

        const l2: ListNode = new ListNode(2);
        l2.next = new ListNode(8);
        l2.next.next = new ListNode(9);

        const head: ListNode | null = addTwoNumbers(l1, l2);

        let result: String = '';

        let current: ListNode | null = head;

        while (current != null) {
            result = result.concat(current.val.toString());
            current = current.next;
        }

        expect(result).toEqual("6501");
    }); 

});