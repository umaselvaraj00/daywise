import sum from "./sum"
// describe ("test suite 1", ()=>{


test("snapshot testing - sum",()=>{
    expect(sum(3,4,2)).toMatchSnapshot();
    expect(sum(4,4,0)).toMatchSnapshot();
    expect(sum(-3,4,3)).toMatchSnapshot();
    expect(sum(3,5,7)).toMatchSnapshot();
    expect(sum(3,4,2)).toMatchSnapshot();
});
