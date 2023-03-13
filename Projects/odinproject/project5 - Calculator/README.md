<a href="https://lc9908.github.io/myPortfolio/Projects/odinproject/project5%20-%20Calculator/index.html"> Live Demo </h1>

<h1>The Odin Project - Calculator </h1>
<a href="https://www.theodinproject.com/lessons/foundations-calculator">https://www.theodinproject.com/lessons/foundations-calculator</a>

<h1> Assignment </h1>
<p>Don’t forget to commit early &amp; often! You can <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages" target="_blank" rel="noopener noreferrer">reference the Commit Message lesson here</a>!</p>

 <p>Here are some use cases (abilities your project needs to have):</p>

 <ol>
      <li>Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
        <ul>
          <li>add</li>
          <li>subtract</li>
          <li>multiply</li>
          <li>divide</li>
        </ul>
      </li>
      <li>Create a new function <code>operate</code> that takes an operator and 2 numbers and then calls one of the above functions on the numbers.</li>
      <li>Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
        <ul>
          <li>Do not worry about wiring up the JS just yet.</li>
          <li>There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.</li>
          <li>Add a “clear” button.</li>
        </ul>
      </li>
      <li>Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.</li>
      <li>Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then <code>operate()</code> on them when the user presses the “=” key.
        <ul>
          <li>You should already have the code that can populate the display, so once <code>operate()</code> has been called, update the display with the ‘solution’ to the operation.</li>
          <li>This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.</li>
        </ul>
      </li>
      <li>Gotchas: watch out for and fix these bugs if they show up in your code:
        <ul>
          <li>Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, <code>12 + 7 - 5 * 3 =</code> should yield <code>42</code>. An example of the behavior we’re looking for would be <a href="https://mrbuddh4.github.io/calculator/" target="_blank" rel="noopener noreferrer">this student solution</a>.</li>
          <li><strong>Your calculator should not evaluate more than a single pair of numbers at a time.</strong> Example: you press a number button (<code>12</code>), followed by an operator button (<code>+</code>), a second number button (<code>7</code>), and finally a second operator button (<code>-</code>). Your calculator should then do the following: first, evaluate the first pair of numbers (<code>12 + 7</code>), second, display the result of that calculation (<code>19</code>), and finally, use that result (<code>19</code>) as the first number in your new calculation, along with the next operator (<code>-</code>).</li>
          <li>You should round answers with long decimals so that they don’t overflow the screen.</li>
          <li>Pressing <code>=</code> before entering all of the numbers or an operator could cause problems!</li>
          <li>Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”</li>
          <li>Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!</li>
        </ul>
      </li>
    </ol>

