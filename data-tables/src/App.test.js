import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DataTable from "./Table";

let columns = [
  {
    id: "product",
    label: "Product",
    numeric: false,
    width: undefined,
  },
  {
    id: "checkbox",
    label: "checkbox",
    numeric: false,
    width: "",
  },
];

let rows = [
  {
    id: "test_id",
    title: "title",
    thumbnail: "thumbail",
    numeric: 1,
  },
];

describe("DataTablecomponent", () => {
  test("On clicking All checkbox", () => {
    const { getByTestId } = render(
      <DataTable
        columns={columns}
        onSelectionChange={(data) => console.debug("onSelectionChange", data)}
      />
    );
    const checkbox = getByTestId("all-checkbox");
    console.log(checkbox.checked);
    act(() => {
      checkbox.click();
    });
    console.log(checkbox.checked);
  });
  test("On clicking An item", () => {
    const { getByTestId } = render(
      <DataTable
        columns={columns}
        rows={rows}
        onSelectionChange={(data) => console.log("onSelectionChange", data)}
      />
    );
    const checkbox = getByTestId("individual-checkbox");
    console.log(checkbox.checked);
    act(() => {
      checkbox.click();
    });
    console.log(checkbox.checked);
  });
  test("On rowClick", () => {
    const { getByTestId } = render(
      <DataTable
        columns={columns}
        rows={rows}
        onRowClick={() => console.log("rowClick")}
      />
    );
    const row = getByTestId("individual-row");
    act(() => {
      row.click();
    });
  });
});
