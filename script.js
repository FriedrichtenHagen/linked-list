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
function createLinkedList(){
    const linkedList = {
        value: "test List",
        next: null,
        append: function(value){
            // add node to end of list
            alert(value)
        },

    }
    return linkedList
}

const testLinkedList = createLinkedList()

// create a node
function createNode(value, next){
    const newNode = {
        value: value,
        next: next,
    }
    return newNode
}

const testNode = createNode("Test Node", null)