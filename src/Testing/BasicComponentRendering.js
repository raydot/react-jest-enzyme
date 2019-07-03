// For simple non-interactive components:

it('should render correctly with no props', () => {
  const component = shallow(<MyComponent />)

  expect(component).toMatchSnapshot()
})

it('should render banner text correctly with given strings', () => {
  const strings = ['one', 'two']

  const component = shallow(<MyComponent list={strings} />)

  expect(component).toMatchSnapshot()
})