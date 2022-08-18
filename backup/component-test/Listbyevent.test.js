import{cleanup,render,screen,fireEvent} from "@testing-library/react";
import ListbyEvent from "./ListbyEvent";

afterEach(cleanup);

test("List Test1",()=>{
    render(<ListbyEvent/>);
    fireEvent.click(screen.getByRole("button",{name:"Read"}));
    expect(screen.getByText("Buy Grocery")).toBeDefined();
});