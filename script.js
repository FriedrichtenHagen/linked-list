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
        append: function(value, next){
            // create new node
            const newNode = createNode(value, next)
            // get to end of linked list
            const lastNode = endOfList(this)
            // set new node at end of list
            lastNode.next = newNode
        },

    }
    return linkedList
}
const testLinkedList = createLinkedList("headNode")

function endOfList(input){
    if(typeof input.next === 'object' && input.next !== null){
        endOfList(input.next)
    } else{
        console.log(input)
        return input
    }
}

// create a node
function createNode(value, next){
    const newNode = {
        value: value,
        next: next,
    }
    return newNode
}
const testNode = createNode("Test Node", null)