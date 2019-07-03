# react-jest-enzyme
Following tutorial "Testing React with Jest and Enzyme" by Dominic Fraser.  https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

# Jest
<em>Jest is a JavaScript unit testing framework used by Facebook to test services and React applications.</em>

Jest will look for tests in any of the following places:
<ol>
  <li>Files with `.js` suffixes in `__tests__` folders</li>
  <li>Files with a `.test.js` suffix</li>
  <li>Files with a `.spec.js` suffix</li>
</ol>

Also: it is convention to put each test file next to the code it is testing.  (`./MyComponent` vs. `../../MyComponent` etc.)

# Enzyme
<em>Enzyme is a JavaScript Testing utility, created by Airbnb, that makes it easier to assert, manipulate, and traverse your React components' outcomes.</em>

It also adds some great additional utility methods for rendering a component(s), finding elements, and interacting with elements.

## Mount, Shallow, Render
`import { mount, shallow, render } from 'enzyme'`

Mounting:
<ul>
  <li>Full DOM rendering including child components</li>
  <li>Ideal for use cases where you have components that may interact with DOM or API, or use React lifecycle methods in order to fully test the component</li>
  <li>As it actually mounts the component in the DOM `.unmount()` should be called after each test</li>
  <li>Allows access to both props directly passed into the root component (including default props) and props passed into child components</li>
</ul>

Shallow:
<ul>
  <li>Renders only the single components and not its children.  This is useful for isolating a component for pure unit testing.  It protects against changes or bugs in a child component altering the behavior or output of the component under test.</li>
  <li>As of Enzyme 3 `shallow` components do have access to lifecycle methods by default.</li>
  <li>Cannot access props passed into the root component (so no defauly props) but can access props passed into child components, and can test the <em>effect</em> of props passed into the root component.  So with `shallow(<MyComponent />)` you are testing what `MyComponent` <em>renders</em>, not the element itself.</li>
</ul>

Render:
<ul>
  <li>Renders to static HTML, including children</li>
  <li>Does not have access to React lifecycle methods</li>
  <li>Less costly than `mount` but provides less functionality</li>
</ul>

# Jest and Enzyme
<ul>
  <li>Both Jest and Enzyme are specifically designed to test React applications.  Jest can be used with any other JS app but Enzyme only works with React.</li>
  <li>Jest can be used without Enzyme to render components and test with snapshots;  Enzyme simple adds additional functional functionality.</li>
  <li>Enzyme can be used without Jest, but Enzyme must be paired with another test runner if Jest is not used.</li>
</ul>

#  This demo:
<ul>
  <li>Uses Jest as the test runner, assertion library, and mocking library.</li>
  <li>Uses Enzyme to provide additional testing utilities to interact with elements.</li>
</ul>

# According to [various](https://stackoverflow.com/questions/25678063/whats-the-difference-between-assertion-library-testing-framework-and-testing-e) [web](https://medium.com/@piraveenaparalogarajah/what-is-mocking-in-testing-d4b0f2dbe20a) [sources](https://amzotti.github.io/testing/2015/03/16/what-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin/):
<ul>
  <li>A <strong>test runner</strong> creates a fake server and then spins up various browsers using data derived from that fake server.  It is also the highest level of abstraction in testing.  Other example: Karma</li>
  <li>An <strong>assertion library</strong> is what actually runs the specs and determines whether any given condition is valid.  Not every framework needs an external assertion library.  Other example: Chai</li>
  <li><strong>Mocking</strong> in unit testing refers to the process of isolating the behavior of an object you want to test while replacing associated objects with "mocks" that simulate the behavior of the real objects.</li>
</ul>