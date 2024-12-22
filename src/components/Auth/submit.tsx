import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import LoadingSpinner from "../Ui/loading-spinner";
function Submit({children}: {children: ReactNode}) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:bg-primary/50 dark:shadow-submit-dark"
    >
      {children}{pending && <LoadingSpinner />}
    </button>
  );
}

export default Submit;
