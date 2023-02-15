let exampleLinkedList = {
    value: "fried",
    next: {
        value: "alex", 
        next: {
            value: "richard",
            next: {
                value: "johannes",
                next: {
                    value: "konrad", 
                    next: null
                }
            }
        }
    }
}

// create a linked list
function createLinkedList(value){
    let linkedList = {
        head: {
            value: value, 
            next: null,
        },
        append: function(value){
            // create new node
            let newNode = createNode(value)
            // get to end of linked list
            let lastNode = this.lastNode()
            // set new node at end of list
            lastNode.next = newNode
            return this
        },
        prepend: function(value){
            // create new node
            const newNode = createNode(value)
            // set original list as next 
            let originalList = this
            this.head.next = originalList
            this.head.value = newNode.value
            

            // problem: this seems to create a logical loop

            
            return this
        },
        size: function(){
            let sizeCounter = 1;
            let head = this
            while(head.next !== null){
                head = head.next   
                sizeCounter++ 
            }
            return sizeCounter
        }, 
        lastNode: function(){
            let currentHead = this.head
            while(currentHead.next !== null){
                currentHead = currentHead.next   
            }
            let finalNode = currentHead
            return finalNode
        }

    }
    return linkedList
}
const test = createLinkedList("headNode")


// create a node
function createNode(value){
    const newNode = {
        value: value,
        next: null,
    }
    return newNode
}
const testNode = createNode("Test Node", null)