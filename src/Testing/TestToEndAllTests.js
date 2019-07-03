/*
  Getting more complex, you may wish to mock a function imported and used within MyComponent.js, set its return value, check that it is called, and compare to its snapshot.

  In `MyComponent.js`, we... 

  `import { SaveToStorage } from 'save-to-storage'`

  ...before creating a new SaveToStorage object, which has both TryGetValue and TrySetValue methods.  TryGetValue has a default return of false.  If it returns true the component will change.  Our component uses these states within different button clicks.

  We can use `jest.mock` to mock this, as well as `jest.fn` to provide overrides for the functions within it.
*/

const mockTryGetValue = jest.fn(() => false)
const mockTrySetValue = jest.fn()

jest.mock('save-to-storage', () => ({
  SaveToStorage: jest.fn().mockImplementation(() => ({
    tryGetValue: mockTryGetValue,
    trySetValue: mockTrySetValue
  }))
}))

describe('MyComponent', () => {
  it('should set storage on a save button click', () => {
    mockTryGetValue.mockReturnValueOnce(true)

    const component = mount(<MyComponent />)

    component.find('button#my-button-three').simulate('click')

    expect(mockTryGetValue).toHaveBeenCalled()
    expect(component).toMatchSnapshot()
    component.unmount()
  })
})