1. props     refers to the properties passed to a component. This provides static type checking and helps ensure that the correct properties are passed to the component.

2. import React from 'react';    The line import React from 'react' is used to import the React library in a TypeScript file.

3. export default App;     The line export default App; is used to export the App component as the default export in a  TypeScript file.

4. import { useState } from 'react';        The line import { useState } from 'react'; is used to import the useState hook from the React library. In React, hooks are functions that allow us to use state and other React features in functional components. The useState hook is a built-in hook provided by React that enables us to add state to functional components.  By importing useState from the 'react' module, we can gain access to the useState function, which we can then use within your functional component to create and update state variables.

5. User = (props: {name: string; age: number})      The line User = (props: {name: string; age: number}) is defining a functional component called User in TypeScript. The component expects to receive props as an argument, and the type of props is defined as an object with two properties: name of type string, and age of type number.

6. const        const is a keyword in the TypeScript used to declare a variable with a constant value. Once a constant is assigned a value, it cannot be re-assigned to a new value.

7.     const listItems = products.map(product =>              listItems is declared as a variable using the const keyword. It suggests that the variable is intended to hold the result of the map method being called on the products array.

8.     function handleClick()       When the handleClick function is executed, the alert function is called, which displays the specified message as an alert dialog box in the browser.

9.  export const Practicerender: React.FC = () => {      React.FC is a generic type that stands for "React Function Component." It's a type provided by the React library and is commonly used to define functional components in TypeScript. This is a shorthand notation for defining a functional component that accepts props. It provides type checking for the props that are passed to the component.

10. function MyButton() { const [count, setCount] = useState(0);             MyButton uses the useState hook from React to manage a state variable named count and a function named setCount that updates the state.   

11. onClick         onClick attribute expects a function as its value. When the element is clicked, React will invoke the provided function.

12. HandleClick     The handleClick function is defined to handle the button click event

13.  const [count, setCount] = useState(0);        React's useState hook define a state variable called "count" and a corresponding setter function called "setCount". The initial value of the "count" state is set to 0.
