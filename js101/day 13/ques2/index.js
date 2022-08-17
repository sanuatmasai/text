class queue {
    constructor() {
        this.length = 0;
        this.queue_content = [];
    }
    enQueue(ele) {
        this.queue_content.push(ele);
        this.length++;
        return this.length;
    }
    deQueue() {
        if(this.length > 0) {
            let deleted_ele = this.queue_content.shift();
            this.length--;
            return deleted_ele;
        } else {
            console.log("queue is empty");
        }
    }
    enQueueThree(...ele) {
        ele.forEach((el) => {
            this.queue_content.push(el);
            this.length++; 
        });
        return this.length;
    }
    deQueueThree() {
        if(this.length <= 3) {
            if(this.length == 0) {
                console.log("queue is empty");
            }
            this.queue_content = [];
            this.length = 0;
        } else {
            let x = 3;
            while(x--) {
                this.queue_content.shift();
            }
            this.length -= 3;
        }
        return this.length;
    }
}

let q1 = new queue();
q1.enQueue(10);
q1.enQueueThree(20, 30, 40);
q1.deQueue();
q1.deQueue();
q1.deQueueThree();
console.log(q1);