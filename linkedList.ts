class LinkedList {
    head;
    tail;
    length = 0;
    constructor(value:any){
        this.head = {
            value : value,
            next:null
        }

        this.tail = this.head; 
    }

    append(value:any){
        const newNode = {
            value : value,
            next:null,
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value:any){
        const newNode = {
            value : value,
            next:null,
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
}