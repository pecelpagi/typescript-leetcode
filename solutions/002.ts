export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode();
    let current: ListNode = head;
    let carry: number = 0;

    let current_l1: ListNode | null = l1;
    let current_l2: ListNode | null = l2;

    while (current_l1 || current_l2 || carry != 0) {
        const l1_value: number = current_l1 ? current_l1.val : 0;
        const l2_value: number = current_l2 ? current_l2.val : 0;
        const total: number = l1_value + l2_value + carry;

        current.next = new ListNode(total % 10);
        carry = Math.floor(total / 10);
        current_l1 = current_l1 ? current_l1.next : null;
        current_l2 = current_l2 ? current_l2.next : null;
        current = current.next;
    }

    return head.next;
};