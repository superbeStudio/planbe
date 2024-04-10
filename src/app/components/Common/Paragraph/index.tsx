type Props = {
  size?: string;
  color?: string;
  children: string;
};

const Paragraph = ({ size = "base", color = "text-lg", children }: Props) => {
  const textClasses = `prose text-${size} ${color}`;

  return <p className={textClasses}>{children}</p>;
};

export default Paragraph;
