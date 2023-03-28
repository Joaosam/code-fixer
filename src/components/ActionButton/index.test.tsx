import { render, screen } from "@testing-library/react";
import { ActionButton } from ".";
import { ClipLoader } from "react-spinners";

jest.mock("react-spinners", () => ({
  ClipLoader: jest.fn(),
}));

describe("ActionButton", () => {
  it("should render correctly while loading", () => {
    render(
      <ActionButton
        messageLoaded="Carregado"
        messageLoading="Carregando"
        icon={<div>icon</div>}
        isLoading={true}
      />
    );

    expect(ClipLoader).toHaveBeenCalled();
    expect(screen.getByText("Carregando")).toBeInTheDocument();
  });

  it("should render correctly when loaded", () => {
    render(
      <ActionButton
        messageLoaded="Carregado"
        messageLoading="Carregando"
        icon={<div>icon</div>}
        isLoading={false}
      />
    );

    expect(ClipLoader).not.toHaveBeenCalled();
    expect(screen.getByText("Carregado")).toBeInTheDocument();
  });
});
