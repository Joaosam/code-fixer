import { Fragment } from "react";
import { ClipLoader } from "react-spinners";
import { ToCorrect } from "./styles";

interface ActionButtonProps {
  messageLoading: string;
  messageLoaded: string;
  icon: React.ReactNode;
  code?: string;
  page?: string;
  isLoading: boolean;
}

export function ActionButton({
  messageLoading,
  messageLoaded,
  icon,
  code,
  page,
  isLoading,
}: ActionButtonProps) {
  return (
    <ToCorrect
      page={page}
      type="submit"
      disabled={isLoading || (!code && page === "home")}
    >
      {isLoading ? (
        <Fragment>
          <ClipLoader size={20} />
          {messageLoading}
        </Fragment>
      ) : (
        <Fragment>
          {icon}
          {messageLoaded}
        </Fragment>
      )}
    </ToCorrect>
  );
}
