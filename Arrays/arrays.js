class MyArray {
    constructor() {
        this.length = 0; // init 0 as length
        this.data = {}; // an object
    }

    // get method
    get(index) {

        /* 
        with init list would return nothing
        b/c no items present assigned to list
        */

        return this.data[index]; 
    }

    // push method
    push(item) {

        /*
        object added at 0 index (because)
        length is 0. Will now equal new item
        at 0 index.
        */

        this.data[this.length] = item;
        this.length++; //index is appended
    }

    // pop method
    pop() {
        /*
        Gets last item by grabbing object
        at the length - 1. This is because
        length still does not account for
        index starting at 0.
        */
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // delete method
    delete(index) {

        /*
        shifts all items in array and then
        deletes the last item of the array,
        seemingly deleting the item at your choice
        of index but really going through loops to do
        the feat.
        
        */
        const item = this.data[index];
        this.shiftItems(index);
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;

    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) { // O(n)
            this.data[i] = this.data[i + 1];
        }
    }

    
}

const newArray =  new MyArray();

// will return undefined because we have not defined first item in array
console.log(newArray.get(0));

// will add hi to array  at index 0 "['hi']"
newArray.push('hi');

// will add you at index 1 "['hi', 'you']"
newArray.push('you');

// will add ! at index 2 "['hi','you','!']"
newArray.push('!');

// deletes ! "['hi','you']"
newArray.pop();

// deketes you "['hi']"
newArray.pop();



// will return contents
console.log(newArray);