import {Admin} from "../Components/Admin"
import {render,screen} from "react-testing-library"

test('should ', () => {
  render(<Admin/>)
  screen.getByTestId("delete").toBeIntheDocument();
})
