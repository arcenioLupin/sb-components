import "./MyLabel.css";

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all text
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  fontColor?: string;

    /**
   * Background color
   */
    backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-secondary",
  fontColor,
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span className={`${size} ${color} ${label}`} style={{ color: fontColor, backgroundColor}}>
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
