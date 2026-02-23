Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* get element by id:

1. Selects only one element by id.
2. Return single element object
3. Performance Very fast because optimize internally
4. only Available on document object

* get element by class name :

1. Selects more than  one element by class name.
2. Return HTML collection
3. slower than getElementById but faster than querySelectorAll
4. Available on any element and document.

* query selector:

1. Selects any CSS selector.
2. Return first matching value
3. slower than getElementById.
4. Available on any element or document

* query selector all:

1.Selects any CSS selector.

2.Return static NodeList.

3.Generally Slowest of the four.

4.Available on any element or document

Question: How do you create and insert a new element into the DOM?

1. Get a parent where the new DOM element will be pushed

2. Create new element by using document.createElement(” elementName ”); .Element name like div ,p,section etc. and should be stored in a vairable. so that we use the newly created element. 

3. Add new element content by elementName.innertext or elementName.innerHTML.

4. now pushed to parent element by using appendChild( variable name where newly created element stored ) function or append(variable name where newly created element stored ).

Question : What is Event Bubbling? And how does it work?

Event Bubble: 

Event bubbling is a process where an event start from target element and propagates upwards to its parent element. The process consist of 3 steps:

1. Capturing Phase
2. Target Phase
3. Bubbling Phase

* Capturing Phase : when an event like click keyboard tapping happened the process starts from top of DOM and travels towards bottom to find the target  event.

* Target Phase : In this the event reaches the actual element where event happened.

* Bubbling Phase : After target the event moves upward to the parent. This process called propagation. In this process if any other event happened it will also count them and do the job.

Question : What is Event Delegation in JavaScript? Why is it useful?

* Event delegation :

Event delegation is a technique where a single event listener added to a parent element to handle the event under parent to its child elements by using event bubbling technique.

It is useful for :

1. Better Performance. One event listener does not use more memory so that any event under this parent can be handled through parent

2. Clear Code. When we use event listener on every child the memory consumption is very high also the code does not look well but messy. Clear code  makes anyone to understand what is happening under this parent and less repetition makes code cleaner.

3. Works Dynamically.

Question : What is the difference between preventDefault() and stopPropagation() methods?

* Prevent default :

1. Prevents the default browser behavior of an element.
2. The event continues to propagate through the DOM.
3. Prevents a Link like from navigate to URL like anchor tag also prevents form submission.
4. This method does not take any parameter.

* Stop propagation :

1. Prevents the event from reaching other event listener under this parent.
2. The event journey through the DOM stops immediately after the current  event listener execution.
3. Prevents Event on a nested element like div and section.
4. This method does not take any arguments.
