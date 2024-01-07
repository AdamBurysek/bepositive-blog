import "./button.css";

type Props = {
  size?: "small" | "large";
  color: string;
  label: string;
  onClick: () => void;
};

const Button = ({ color, label, onClick, size = "large" }: Props) => {
  return (
    <button
      className={["button", `button-${size}`].join(" ")}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
