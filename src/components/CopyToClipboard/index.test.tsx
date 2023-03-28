import { render, screen, fireEvent } from "@testing-library/react";
import { CopyToClipboard } from ".";
import { Copy } from "phosphor-react";
import { handleCopy } from "../../utils/utils";

jest.mock("phosphor-react", () => ({
  Copy: jest.fn(),
}));

jest.mock("../../utils/utils", () => ({
  handleCopy: jest.fn(),
}));

describe("CopyToClipboard", () => {
  it("should render correctly", () => {
    render(
      <CopyToClipboard copied={false} result={"result"} setCopied={() => {}} />
    );

    expect(Copy).toHaveBeenCalled();
    expect(screen.getByText("Copy to clipboard")).toBeInTheDocument();
  });

  it("should render correctly when copied", async () => {
    const result = "result";
    const setCopied = jest.fn();

    render(
      <CopyToClipboard copied={true} result={result} setCopied={setCopied} />
    );

    const copyButton = screen.getByTestId("ContentClipboard");
    fireEvent.click(copyButton);

    expect(Copy).toHaveBeenCalled();
    expect(handleCopy).toHaveBeenCalledWith(result, setCopied);
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });
});
