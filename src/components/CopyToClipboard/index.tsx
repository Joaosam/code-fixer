import { Copy } from "phosphor-react";
import { handleCopy } from "../../utils";
import { ContentClipboard } from "./styles";

interface CopyToClipboardProps {
  copied: boolean;
  result: string;
  setCopied: (copied: boolean) => void;
}

export function CopyToClipboard({
  copied,
  result,
  setCopied,
}: CopyToClipboardProps) {
  return (
    <ContentClipboard onClick={() => handleCopy(result, setCopied)}>
      <Copy weight={copied ? "fill" : "regular"} size={20} color="#c4c4c4" />
      <span>{copied ? "Copied!" : "Copy to clipboard"}</span>
    </ContentClipboard>
  );
}
