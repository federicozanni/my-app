import EditTask from "./EditTask";
import { render, screen, waitFor } from "@testing-library/react";

const setUp = () => {
  return render(<EditTask />)
}

describe('Edit task', () => {
  beforeEach(() => {
    setUp()
  })

  it('should render EditTask', () => {
    const component = render(<EditTask />)
    expect(component).toBeInTheDocument()
  })
})