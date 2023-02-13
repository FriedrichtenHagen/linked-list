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
            
           
            // set new node at end of list
            // .next: newNode,

            alert(value)
        },

    }
    return linkedList
}
const testLinkedList = createLinkedList()

function endOfList(input){
    if(typeof input.next === 'object' && input.next !== null){
        endOfList(input.next)
    } else{
        console.log(input.value)
        return input.value
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