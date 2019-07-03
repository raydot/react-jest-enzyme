# react-jest-enzyme
Following tutorial "Testing React with Jest and Enzyme" by Dominic Fraser.  https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

# Jest
<em>Jest is a JavaScript unit testing framework used by Facebook to test services and React applications.</em>

# Enzyme
<em>Enzyme is a JavaScript Testing utility, created by Airbnb, that makes it easier to assert, manipulate, and traverse your React Components' outcome.</em>

It also adds some great additional utility methods for rendering a component(s), finding elements, and interacting with elements.

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