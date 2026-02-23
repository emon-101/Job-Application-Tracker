# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans-> getElementById we use it for get a specific element from html file and for select many elments together use getElementsByClassName, we use querySelector/querySelectorAll like css styles if we need a specific elments form another specific element then we use querySelector/querySelectorAll if we need the first occurrrence from the element then use the querySelector and if need all occurrence then use the querySelectorAll

# 2. How do you create and insert a new element into the DOM?

### Ans-> step-1: create the new element -> const element = document.createElement('element name') 
### step-2: set the element content -> element.innerHTML = html file or text
### step-3: where to add the element -> elementContainer = document.getElementById('element-container')
### step-4: insert the element -> elementContainer.appendChild(element)

# 3. What is Event Bubbling? And how does it work?

### Event Bubbling -> This is a process of DOM where it starts form the target element then it's going upwards one by on upto documents and it's act like bubbles up.
### first starts from target element then it's parent then grandparent then stops the documents or root element.

# 4. What is Event Delegation in JavaScript? Why is it useful?

### Event delegation is technique where we add event listener in the parent element and detect the listener from child element we can check which element is triggered.
### If we use event delegation we just need to add one event listener in the parent element instead of using add listener for all childs. we can also using this for working with dynamic elements that's mean if we add new elements using javaScript they will still work without adding new listeners

# 5. What is the difference between preventDefault() and stopPropagation() methods?

### preventDefault() -> If we use preventDefault it will stops the browser's default behavior for an event but it does not stop event bubbling.
### stopPropagation() -> It will stops the event from bubbling to parent elements that's mean If we click the child element then it will only triggered that's child element not the parent element, it stops the bubbling.
