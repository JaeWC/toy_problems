/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function() {
  this.stack = [];
  this.count = 0;

  // add an item to the top of the stack
  this.push = function(item) {
    this.stack[this.count] = item;
    this.count++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    this.stack = this.stack.slice(0, this.count - 1);
    this.count--;
  };

  // return the number of items in the stack
  this.size = function() {
    const length = this.stack.length;
    return length;
  };
};

/**
 * Queue Class
 */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
  // called to add an item to the `queue`
  this.enqueue = function(item) {
    // TODO: implement `enqueue`
    inbox.push(item);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
    const result = inbox.stack[0];
    inbox.stack = inbox.stack.slice(1);
    return result;
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    return inbox.size();
  };
};
