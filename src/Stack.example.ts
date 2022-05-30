import Stack from "./Stack";

const stack = new Stack<string>();

stack.push("last");
stack.push("in");
stack.push("first");
stack.push("out");

while (stack.peek()) {
  console.log(stack.stack, stack.pop());
}