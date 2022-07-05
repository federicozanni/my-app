import Table from "./Table";
import { render, screen } from "@testing-library/react";

const myMock1 = jest.fn();

describe('Table', () => { 
  it('sholud render component', () => {
    const labelText = screen.getByText("Task")
    expect(labelText).toBeInTheDocument()
    render(<Table tasks={myMock1} deleteTask={myMock1} editRow={myMock1} />)
  })
})