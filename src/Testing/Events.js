/*
  The Enzyme API has several ways to simulate events or user interactions.  If you want ot test interacting with a child component then the `mount` method can be used.
*/

it('should be possible to activate button with Spacebar', () => {
  const component = mount(<MyComponent />)

  component
    .find('button#my-button-one')
    .simulate('keydown', { keyCode: 32 })

  expect(component).toMatchSnapshot()
  component.unmount()
})