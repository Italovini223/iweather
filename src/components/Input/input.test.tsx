import { render } from '@testing-library/react-native'
import { Input } from '@components/Input'

describe("Component: Input", () => {
  it("should render the input component", () => {
    const { debug } = render(<Input />)
  })
})  
