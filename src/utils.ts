export function handleCopy(
  result: string,
  setCopied: (value: boolean) => void
) {
  if (result) {
    navigator.clipboard.writeText(result);
    setCopied(true);
  }
}
