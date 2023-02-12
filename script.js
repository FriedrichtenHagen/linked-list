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
            // create new node
            const newNode = createNode(value)
            // get to end of linked list
            function endOfList(linkedList){
                while(linkedList.next!==null){
                    endOfList(linkedList.next)
                }
                return // chain of nodes
            }
           
            // set new node at end of list
            // .next: newNode,

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