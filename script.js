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
            // append a given node
            let newNode = createNode(value)
            // get to end of linked list
            let lastNode = this.lastNode()
            // set new node at end of list
            lastNode.next = newNode
        },
        prepend: function(value){
            // prepend a given node 
            const newNode = createNode(value)
            // set original list as next 
            newNode.next = this.head
            this.head = newNode
        },
        size: function(){
            // return length of linked list
            let sizeCounter = 1;
            let currentHead = this.head
            while(currentHead.next !== null){
                currentHead = currentHead.next   
                sizeCounter++ 
            }
            return sizeCounter
        }, 
        lastNode: function(){
            // return tail node
            let currentHead = this.head
            while(currentHead.next !== null){
                currentHead = currentHead.next   
            }
            let finalNode = currentHead
            return finalNode
        },
        getHead: function(){
            return this.head
        },
        at: function(index){
            // return node of given index
            let currentHead = this.head
            for(let i=0; i<index; i++){
                if(currentHead.next === null){
                    alert("invalid index: the list is not that long")
                }
                currentHead = currentHead.next  
            }
            return currentHead
        },
        pop: function(){
            if(this.size()>1){
                // remove the last node
                // get the second to last node
                let currentHead = this.head
                while(currentHead.next.next !== null){
                    currentHead = currentHead.next   
                }
                // set next to null
                let secondToLastNode = currentHead
                secondToLastNode.next = null
            } else{
                alert("this method only works on list with a minimum length of 2")
            }
        },
        contains: function(passedValue){
            // returns true if the passed in value is in the list and otherwise returns false
            let currentHead = this.head
            while(currentHead.next !== null){
                if(currentHead.value===passedValue){
                    return true
                }
                currentHead = currentHead.next   
            }
            if(currentHead.value===passedValue){
                return true
            }
            return false
        },
        find: function(passedValue){
            let currentHead = this.head
            let index = 0;
            while(currentHead.next !== null){
                if(currentHead.value===passedValue){
                    return index
                }
                currentHead = currentHead.next  
                index++ 
            }
            if(currentHead.value===passedValue){
                return index
            }
            return "could not find string"
        },
        toString: function(){
            let currentHead = this.head
            let returnString = currentHead.value

            while(currentHead.next !== null){
                currentHead = currentHead.next   
                returnString += `-> ${currentHead.value}`
            }
            return returnString
        }
    }
    return linkedList
}
const test = createLinkedList("headNode")
test.append("hana")
test.append("duul")
test.append("set")

// create a node
function createNode(value){
    const newNode = {
        value: value,
        next: null,
    }
    return newNode
}
const testNode = createNode("Test Node", null)