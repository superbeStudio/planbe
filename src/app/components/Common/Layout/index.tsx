import { ReactNode } from "react";

type Props = {
  isDarkMode?: boolean;
  children: ReactNode;
};

export const Layout = ({ isDarkMode = false, children }: Props) => {
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-800 dark:text-slate-100">{children}</div>
    </div>
  );
};
