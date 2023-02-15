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
    const linkedList = {
        value: value,
        next: null,
        append: function(value){
            // create new node
            let newNode = createNode(value)
            // get to end of linked list
            let lastNode = endOfList(this)
            // set new node at end of list
            lastNode.next = newNode
            return linkedList
        },
        prepend: function(value){
            // create new node
            // set next of new node to the current head
            const newNode = createNode(value)
            newNode.next = linkedList
            linkedList = newNode
            return linkedList
        },
        size: function(){
            let sizeCounter = 1;
            if(typeof this.next === 'object' && this.next !== null){
                endOfList(this.next)
                sizeCounter++;
            } 
                console.log(sizeCounter)
                return sizeCounter
        }
    }
    return linkedList
}
const test = createLinkedList("headNode")

function endOfList(input){
    let finalNode;
    if(typeof input.next === 'object' && input.next !== null){
        finalNode = endOfList(input.next)
    } else{
        // save final node at base case of recursion
        return input
    }
    return finalNode
    
}

// create a node
function createNode(value){
    const newNode = {
        value: value,
        next: null,
    }
    return newNode
}
const testNode = createNode("Test Node", null)