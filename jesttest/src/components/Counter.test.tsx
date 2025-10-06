import Counter from "./Counter";
import { fireEvent, render } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial number", () => {
    const { getByTestId } = render(<Counter initialCount={0} trueorfalse />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={0} trueorfalse />
    );
    const incrementBttn = getByRole("button", { name: "increment" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(incrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(1);
  });
  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={0} trueorfalse />
    );
    const decrementBttn = getByRole("button", { name: "decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });
  it("count should reset to 0 when reset button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={1} trueorfalse />
    );
    const resetBttn = getByRole("button", { name: "reset" });
    expect(Number(getByTestId("count").textContent)).toEqual(1);
    fireEvent.click(resetBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });
  it("count should change sign when clicking changesign button", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={1} trueorfalse />
    );
    const changeSignBttn = getByRole("button", { name: "switchsigns" });
    expect(Number(getByTestId("count").textContent)).toEqual(1);
    fireEvent.click(changeSignBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });
  it("True or false Should change when printtrue button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={0} trueorfalse={false} />
    );
    const trueorfalseBttn = getByRole("button", { name: "printtrue" });
    expect(getByTestId("trueorfalse").textContent).toEqual("false");
    fireEvent.click(trueorfalseBttn);
    expect(getByTestId("trueorfalse").textContent).toEqual("true");
  });
  it("Count should change to initia value times 10 when timesten is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    const timestenBttn = getByRole("button", { name: "timesten" });
    expect(Number(getByTestId("count").textContent)).toEqual(1);
    fireEvent.click(timestenBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(10);
  });
});
