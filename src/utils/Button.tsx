interface Btn {
  label: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className: string;
}

export default function Button({
  label,
  onClick,
  className,
}: Btn): React.ReactElement<HTMLButtonElement> {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}
