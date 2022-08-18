import{cleanup,render,screen,fireEvent} from "@testing-library/react";
import List from "./List";

afterEach(cleanup);

test("List Test1",()=>{
    render(<List/>);
    expect(screen.getByText("Buy Grocery")).toBeDefined();
});