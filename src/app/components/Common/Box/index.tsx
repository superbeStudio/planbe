type Props = {
  justifyEnd?: string;
  alignItems?: string;
  children: string;
};

const Box = ({
  justifyEnd = "center",
  alignItems = "center",
  children,
}: Props) => {
  const divClasses = `flex justify-${justifyEnd} items-${alignItems} p-1 px-2`;

  return <div className={divClasses}>{children}</div>;
};

export default Box;
