---
layout: page
title: React 101 for designers exercises
author:
  name: Linton Ye
  twitter: lintonye
  image: linton-face.jpg
---

## Outline
- Getting Started
  -  0. Welcome
  -  1. What is React?
  -  2. Components, Props and State
  -  3. Environment Setup
- Creating Your First Component
  -  4. The House Component
  -  5. JS Premier: ES6 Constants
  -  6. JS Premier: Arrow Functions
  -  7. JSX
  -  8. Magic
  -  9. JS Premier: Expressions
  -  10. Placeholders in JSX
- Styling Components
  -  11. JS Premier: Import / Export
  -  12. JS Premier: Import Project Resources
  -  13. Style Components with CSS
  -  14. Inline Styles
  -  15. CSS-in-JS
  -  16. styled-components
- Making Components Interactive
  -  17. Blue Roof, Red Roof - Props
  -  18. Props and styled-components
  -  19. React Developer Tool
  -  20. JS Premier: ES6 Class
  -  21. State and Class Components
  -  22. Open Sesame! - setState
  -  23. setState - How does it work?
  -  24. Sleepy cat - Props and State Re-explained
  -  25. Sleepy cat 2
- Animations
  -  26. Ninja cat - CSS transitions
  -  27. Ninja cat - react-motion
  -  28. Many Ninja cats - CSSTransitionGroup
- Putting All Together: Course Project
  -  29. create-react-app: Create a React project from scratch
  -  30. Intro to Course Project

## Exercises

### 1. What is React?
- Which of the following is FALSE about DOM?
  - A. DOM lives in web browsers.
  - B. DOM is a tree.
  - C. The browser renders web pages according to the content available in the DOM.
  - - D. DOM stands for Document Observer Mode.

- Which of the following is FALSE about Reactive UI?
  - A. All UI elements built with React are reactive.
  - B. A developer just needs to specify what's needed instead of how to update the DOM.
  - C. React automatically updates the DOM when the data change.
  - - D. When a UI element is reactive, a developer doesn't need to worry about its look and feel.

- Which of the following is FALSE about Virtual DOM?
  - A. Virtual DOM is called "virtual" because it's not the real DOM in the browser.
  - B. React uses virtual DOM to speed up rendering.
  - - C. Virtual DOM replaces DOM in the browser to make the rendering faster.
  - D. Virtual DOM is much faster to update than DOM.

- Which of the following is FALSE about components?
  - - A. A React program usually consists of 1 to 10 components working together.
  - B. Components are similar to symbols in Sketch.
  - C. Components are made up of smaller components.
  - D. A program can usually be broken up into components in different ways.

### 2. Components, props and state

- Which of the following is FALSE about props?
  - A. <Roof color="blue" />: here, `color` is a prop
  - B. The value of a prop does not change throughout the entire lifespan of a component.
  - - C. The props of a component can be accessed from the component itself as well as the component's children.
  - D. Props can be used in placeholders in a component's definition, for example, `<div>{props.color} roof</div>`

- Which of the following is FALSE about state?
  - A. state can be used to represent user input.
  - - B. A component's state can only be accessed within the component itself as well as its parent component.
  - C. The state value of a component can be changed by some external events.
  - D. It's possible to write a component that doesn't have any state.

### 3. Environment setup
Preparation:

- Setup the environment according to the video tutorial
- Download the exercise files from [here](TODO) and extract to a directory
- Open the project directory `03` with Visual Studio Code
- Setup the project according to the video tutorial
- Start the project and view it in the browser

Questions:

- What did you see in the browser?
  - A. 42
  - B. Nothing
  - C. The quick fox jumps over the lazy dog.
  - D. An orange square

### 4. Build the House component in JavaScript

- Which of the following is a VALID React component?
  - A. `const House = <div>House</div>`
  - - B. `const House = () => <div />`
  - C. `const House = (<div>House</div>)`
  - D. `const House = "House"`

Preparation:

- Open the directory `03` with Visual Studio Code
- Setup the project according to "3. Environment setup" (npm install)

Exercises:

- Add roof, wall, window and door to the house (all plain text, e.g. `<div>window</div>`)
- Display two houses, one after another. The expected output is:

```
roof
wall
window
door
----------
roof
wall
window
door
```

Hint: For the horizontal separator line between the houses, use `<hr />`.

- TODO capitalize or not

### 5. ES6 Constants

- What is the result of the following code?
{% highlight jsx %}
var name = 'Tom';
const age = 20;
if (name === 'Tom') {
  age = 25;
}
{% endhighlight %}
  - A. No outuput
  - B. 25
  - C. An error
  - D. age = 25

If you are not sure, paste the code in Chrome console and hit Enter key.


### 6. Arrow Functions

Questions:
- What is the output of the code below?

```js
const fruit = () => '🍉';
console.log(fruit());
```
  - A. function () { return '🍉' }
  - B. No output
  - C. An error
  - D. 🍉

- What is the output of the code below?

```js
const fruit = () => '🍉';
const burger = () => '🍔';

const packLunch = (packMeal, packSnack) => [packMeal(), packSnack()];

console.log(packLunch(burger, fruit));
```
  - A. ['🍔', '🍉']
  - B. No output
  - C. An error
  - D. packLunch(🍔, 🍉)

- What is the output of the code below?

```js
const fruit = () => '🍉';
const burger = () => '🍔';

const packLunch = (packMeal, packSnack) => [packMeal(), packSnack()];

console.log(packLunch('🍔', fruit));
```
  - A. ['🍔', '🍉']
  - B. No output
  - C. An error
  - D. packLunch(🍔, 🍉)  

- Which of the following is FALSE about the code below?

```jsx
const Window = () => <div>Window</div>;
```
  - A. It's an HTML element mixed in JavaScript code.
  - B. It defines a React component "Window".
  - C. It defines a constant whose value is an arrow function.

Preparation:

- Open the directory `06` with Visual Studio Code
- Setup the project according to "3. Environment setup" (npm install)

Exercises:

- Convert the functions below to arrow functions (be as concise as possible). Play with the code in the project.

```js
function pi() {
  return 3.14159;
}

function square(n) {
  return n * n;
}

function add(a, b) {
  var result = a + b;
  return result;
}

const yawn = function() {
  console.log('yawn.');
  console.log('yawn...');
  console.log('zzzzzzZZZ');
}

console.log('pi = '+ pi());
console.log('square 4 = ' + square(4));
console.log('add(4, 5) = ' + add(4, 5));
console.log(yawn());
```

### 7. JSX

- Which of the following about JSX is FALSE?
  - A. JSX is an extension to JavaScript.
  - B. JSX code is eventually converted to JavaScript code.
  - C. When writing a React app, we'd need to write a function to convert JSX code into JavaScript.
  - D. In a JSX file, we can write tags that look like HTML code.

- Convert the following JSX code into JavaScript code:
```jsx
/* 
 Hint 1: 

  <MyComp />

  ==> 

  React.createElement(MyComp);


Hint 2:

  <MyComp prop1="a" prop2="b">
    <div>Hello</div>
    <Child2 />
  </MyComp>

  ==>

  React.createElement(MyComp, 
    {prop1: 'a', prop2: 'b'}, 
    React.createElement('div', {}, 'Hello'),
    React.createElement(Child2, {}, null)
  );
*/

// 1
const Roof = () => 
  <div>
    <span>Roof</span>
    This is Roof!
  </div>;

// 2
const houses = [
    <House roofColor="blue"/>, 
    <House roofColor="red" />
];

```

### 8. Magic

### 9. JS Expression
- Which of the following is NOT an expression?
  - A. `const pi = 3.14`
  - B. `""`
  - C. `<div>Window</div>`
  - D. `n => n * n`

### 10. Placeholders in JSX
- Which of the following is INVALID?
  - A. `const House = () => <div>{7*6}</div>`
  - B. `const House = (props) => <div>{props.color}</div>`
  - C. `const House = (props) => <div style={color: props.color}>House</div>`
  - D. `const House = (props) => <{props.tag}>House</{props.tag}>`
  - E. `const House = () => <div>{""}</div>`

- What HTML does the following component render to?
```jsx
const Lines = () => {
  let children = [];
  for (let i = 0; i < 2; i++) {
    children.push(<div>Line { i+1 }</div>); // Array.push() adds a new element to the array
  }
  return (
    <div>
      { children }
    </div>
  )
}
```
  - A. `<div>{ children }</div>`
  - B. 
    ```html
    <div>
      <div>Line { 0 + 1 }</div>
      <div>Line { 1 + 1 }</div>
    </div>
    ```
  - C. 
    ```html
    <div>
      <div>Line 1</div>
      <div>Line 2</div>
    </div>
    ```
  - D. N/A. This code contains errors.

TODO: perhaps don't need this question
- Convert the JSX code below into JavaScript:

```jsx
/* 
 Hint 1: 

  <MyComp prop1={21 * 2}/>

  ==> 

  React.createElement(MyComp, { prop1: 21 * 2 });

*/
const House = (props) => 
  <div>
    <Roof color={props.roofColor} />
    <Window />
  </div>;
```

### 11. Import / export
- Which of the following is correct for importing React into the current file:
  - A. `import React from './react'`
  - B. `import React from 'react'`
  - C. `import React from 'React'`
  - D. `import React from React`

- How to import and use the following module?
  ```jsx
  // Drinks.js
  export default drinks = () => ['🍺', '🍹', '🍸', '☕️'];
  ```
  - A. `import drinks from './Drinks'`
  - B. `import { drinks } from './Drinks'`
  - C. `import drinks from './Drinks/drinks`
  - D. `import drinks from ./Drinks`

- How to import and use the following module?
  ```jsx
  // Drink.js
  export const BEER = '🍺';
  export const COFFEE = '️️☕️';
  ```
  - A. `import { BEER, COFFEE } from './Drinks'`
  - B. `import BEER, COFFEE from './Drinks'`
  - C. `import { BEER, COFFEE } from ./Drinks`
  - D. `import BEER, COFFEE from ./Drinks`

- Why does every JSX file import React even when React is not used in the code? For example,
  ```jsx
  import React from 'react';
  const House = () => <div>This is a house</div>;
  ```
  - A. The import is actually optional, but it's usually included to indicate that it's a React file.
  - B. React is needed implicitly by the browser to render the components.
  - C. JSX tags, after converted to JavaScript code, contain references to React.

### 12. Import project resources
- What is the output of the following code?
  ```jsx
  /* 
  The content of fruits.json is:
  ["🍉", "🍌", "🍓", "🍍", "🍒", "🍇"]
  */
  import fruits from './fruits.json';
  console.log(fruits);
  ```
  - A. "./fruits.json"
  - B. A path similar to "./fruits0e219424afg.json"
  - C. A JavaScript object
  - D. ["🍉", "🍌", "🍓", "🍍", "🍒", "🍇"]

### 13. Style components with CSS
- Which of the following correctly styles the img with the CSS class "roof"?
  - A. `const Roof = () => <img class="roof" src={Images.roof} />`
  - B. `const Roof = () => <img className="roof" src={Images.roof} />`
  - C. `const Roof = () => <img cssClass="roof" src={Images.roof} />`
  - D. `const Roof = () => <img css="roof" src={Images.roof} />`
  
### 14. Inline style
- Which of the following correctly sets the background color of the img?
  - A. `const Window = () => <img style="background: red;" src={Images.window} />`
  - B. `const Window = () => <img style="background: red" src={Images.window} />`
  - C. `const Window = () => <img style={background: 'red'} src={Images.window} />`
  - D. `const Window = () => <img style={{background: 'red'}} src={Images.window} />`

- Which of the following correctly sets the left margin of the div?
  - A. `const Door = () => <div style="margin-left: 50px">door</div>`
  - B. `const Door = () => <div style={{margin-left: 50px}}>door</div>`
  - C. `const Door = () => <div style={{marginLeft: 50px}}>door</div>`
  - D. `const Door = () => <div style={{marginLeft: 50}}>door</div>`

### 15. CSS-in-JS
### 16. styled-components
- Which of the following is the correct usage of styled-components?
  - A. const RoofDiv = styled.div` left: 20px; `
  - B. const RoofDiv = styled.div` left: 20 `
  - C. const RoofDiv = styled.div` left: "20px" `
  - D. const RoofDiv = styled.div" left: 20 "

- Which of the following is FALSE about styled-components?
  - A. styled-components allows the use of real CSS syntax in JavaScript code.
  - B. styled-components is one of the CSS-in-JS libraries.
  - C. styled-components still requires setting either "style" or "className" attributes of an element.
  - D. With styled-components, we need to create a separate component that includes CSS properties.
  

### 17. Blue roof, red roof - Props in JS
Preparation:

- Open the directory `17` with Visual Studio Code
- Setup the project according to "3. Environment setup" (npm install)

Exercises:
- In App.js, make the house number on the wall configurable
- Can you make two houses with different roof colors and house numbers?
{% highlight jsx %}
const App = () => (
  <div>
    <House roofColor='blue' number='123'/>
    <House roofColor='red' number='321' />
  </div>
);
{% endhighlight %}

TODO
- Remix this project: [https://glitch.com/edit/#!/react-house-3-6-props](https://glitch.com/edit/#!/react-house-3-6-props)

### 18. Props and styled-components
- How to use a prop in a styled component?
  - A. const RoofImg = styled.img`background: ${props => props.color};`
  - B. const RoofImg = styled.img`background: {props => props.color};`
  - C. const RoofImg = styled.img`background: ${props.color};`
  - D. const RoofImg = styled.img`background: ${color};`

- Which of the following is FALSE about what's inside "${}" in `background: ${props => props.color};`
  - A. It's an expression.
  - B. It's an arrow function with one parameter "props".
  - C. It will be called by the code in styled-components.
  - D. Its value is either "red", "blue" or any other color value.

### 19. React developer tool

### 20. ES6 Class

- Which of the following are valid components?
{% highlight html %}
// (A)
const HouseA = <div>House</div>;

// (B)
const HouseB = <div />;

// (C)
const HouseC = () => <div><Roof><Window></div>;

// (D)
const HouseD = () => <div>House</div>;

// (E)
const HouseE = () => (
  <Roof />
  <Window />
);

// (F)
const houseF = () => 
  <div>
    <Roof />
    <Window />
  </div>;

{% endhighlight %}


- Which of the following are true about ES6 classes?
  - (A) By convention, the name of a class starts with a capital letter.
  - (B) Class is a new feature in ES6.
  - (C) A class can be used in the same way as an object.
  - (D) Class can be used to style an HTML element.
- Suppose we have a class named `Fruit`, how to create an object from it?
  - (A) `const fruit = Fruit('🍑')`
  - (B) `const fruit = Fruit 🥝`
  - (C) `const fruit = new Fruit('🍇')`
  - (D) `const fruit = Fruit.create('🍉')`
- Which of the following are true about methods?
  - (A) A method is defined in a class.
  - (B) A method cannot have any parameters.
  - (C) `this` can be used inside a method to refer to the current object.
  - (D) A method must include a `return` statement.
  - (E) A method can invoke another method defined in the same class with the `this` keyword. For example, `this.anotherMethod();`.
- Why does the name of a class start with a capital letter?
- Complete the "TODO" item in the code below:
{% highlight jsx %}
// TODO: define class Parrot here

const brad = new Parrot('Brad');
brad.say();
{% endhighlight %}
- In the code above, how can you simplify the definition of `Parrot` if you have a `Pet` class:
{% highlight jsx %}
class Pet {
  constructor(name) {
    this.name = name;
  }
  say() { console.log(this.name + ': Hello!'); }
}
{% endhighlight %}

- Complete the "TODO" items in the code below so that it prints the following in the console:
{% highlight html %}
Brad: chirp, chirp!
Bella: woooooof
{% endhighlight %}

{% highlight jsx %}
class Pet {
  constructor(name) {
    this.name = name;
  }
  say() { 
    // TODO: insert the content of say method here
  }
}

// TODO: insert class Parrot here
// TODO: insert class Dog here

const brad = new Parrot('Brad');
const bella = new dog1('Bella');
brad.say();
bella.say();
{% endhighlight %}

### 21. State and Class components
- Which of the following are true about class components:
  - (A) A class component is defined as an ES6 class.
  - (B) Class components are stateful.
  - (C) To use a class component inside another component, we need to create an instance using the `new` keyword.
  - (D) Class components cannot have props.
  - (E) The state of a class component can be accessed within a method using `this.state`.
- What are the differences between class components and functional components?
  - (A) Class components are stateless, whereas functional components are stateful.
  - (B) The props of a class component can be accessed within a method using `this.props`; whereas the first parameter of a functional component is its props.
  - (C) For a class component, props can also be retrieved as the first parameter of the render method, e.g. `render(props)`.
  - (D) The state of a class component can change during its lifetime; whereas functional components don't have state.
- Convert the `Roof` component to a class component which properly handles the `color` prop.

--- 

### 22. Open Sesame! - setState
Preparation:

- Open the directory `22` with Visual Studio Code
- Setup the project according to "3. Environment setup" (npm install)

Exercises:
- Make the window open/close when the user clicks on it

TODO
- Remix this project: [https://glitch.com/edit/#!/react-house-3-8-state](https://glitch.com/edit/#!/react-house-3-8-state)

### 23. setState - How does it work?
- Which of the following does NOT happen after the state of a component changes?
  - A. The render method will be called.
  - B. The DOM will be updated if React finds a difference before and after the state change.
  - C. The component will be recreated based on the updated state.
  - D. The DOM may not change at all.

- Why can't we initiate a component's state in its render() method?
  - A. It'd be too late. The state is needed before the render method is called.
  - B. It'd overwrite any state changes because the render method is called whenever the state is changed.
  - C. In fact we can initiate the state in the render method.
  - D. The render method would crash.

### 24. Sleepy cat - props and state re-explained

### 25. Sleepy cat 2
- Which of the following is NOT the use case of props?
  - A. Passing data from one component to another
  - B. Passing an event handler from one component to another
  - C. Handling user input
  - D. Making a component configurable

Preparation:

- Open the directory `25` with Visual Studio Code
- Setup the project according to "3. Environment setup" (npm install)

Exercises:
- Wake up the cat when the window or the door (or both) is open. If both the window and the door are closed, make the cat sleep.


### 26. Animations - Ninja cat and CSS transitions
- Which of the following is FALSE about this CSS transition property: "transition: opacity 100ms"?
  - A. It creates an animation that gradually changes the "opacity" CSS property of the element.
  - B. The animation is only effective when the "opacity" CSS property is updated.
  - C. The duration of the animation is 100 milliseconds.
  - D. It sets the opacity of the element to 0 over 100 milliseconds.

### 27. Animations - Ninja cat and react-motion
- Which of the following is FALSE about "spring(0)": 
  - A. It creates a spring whose destination value is 0.
  - B. During the animation, the value will gradually change from the current value to 0.
  - C. The rate of the value change

  ```jsx
  <Motion style={{ opacity: spring(0) }}>
    { style => <div style={{opacity: style.opacity}}>Hello</div> }
  </Motion>
  ```



### 28. Animations - CSSTransitionGroup

### 29. create-react-app

### 30. Intro to project
