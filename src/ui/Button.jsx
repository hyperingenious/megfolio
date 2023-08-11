import { Button as TheButton } from "@mantine/core";
import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "filled",
    "outline",
    "light",
    "white",
    "default",
    "subtle",
    "gradient",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  color: PropTypes.oneOf(["violet"]),
  radius: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default function Button({text, variant, size, color, radius }) {
  return (
    <TheButton
      color={color}
      variant={variant}
      radius={radius}
      size={size}
      style={{ border: `${variant === "outline" ? `2px solid #7950f2` : ""}` }}
    >{text}
    </TheButton>
  );
}
