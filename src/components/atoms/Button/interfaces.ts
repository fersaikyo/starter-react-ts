import { ButtonSizeT, ButtonVariantT } from "./types";

/**
 * Interface that defines the props for the Button component.
 * 
 * @interface ButtonPropsI
 * @description
 * This interface specifies all the possible props that can be passed to the Button component.
 * It includes both required and optional properties that control the button's appearance and behavior.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button label="Click me" />
 * 
 * // Full usage with all props
 * <Button
 *   label="Submit"
 *   size="large"
 *   variant="primary"
 *   disabled={false}
 *   onClick={() => console.log('Button clicked')}
 * />
 * ```
 */
export interface ButtonPropsI {
    /**
   * The text content of the button.
   * This is the only required prop and will be displayed inside the button.
   * 
   * @required
   * @example
   * ```tsx
   * <Button label="Click me" />
   * ```
   */
    label: string;
    /**
   * Optional click handler function for the button.
   * Called when the button is clicked and not disabled.
   * 
   * @optional
   * @default undefined
   * @example
   * ```tsx
   * <Button
   *   label="Submit"
   *   onClick={() => console.log('Button clicked')}
   * />
   * ```
   */
    onClick?: () => void;
    /**
   * The size variant of the button.
   * Controls the button's padding and font size.
   * 
   * @optional
   * @default "medium"
   * @type {"small" | "medium" | "large"}
   * 
   * Values:
   * - "small": Compact size, useful for tight spaces
   * - "medium": Standard size, suitable for most use cases
   * - "large": Larger size, good for primary actions
   * 
   * @example
   * ```tsx
   * <Button label="Small Button" size="small" />
   * ```
   */
    size?: ButtonSizeT;
    /**
   * The visual variant/style of the button.
   * Determines the button's color scheme.
   * 
   * @optional
   * @default "primary"
   * @type {"primary" | "secondary" | "danger"}
   * 
   * Values:
   * - "primary": Main action button (blue theme)
   * - "secondary": Alternative action button (gray theme)
   * - "danger": Destructive action button (red theme)
   * 
   * @example
   * ```tsx
   * <Button label="Delete" variant="danger" />
   * ```
   */
    variant?: ButtonVariantT;
    /**
   * Whether the button is disabled.
   * When true, the button becomes non-interactive and visually dimmed.
   * 
   * @optional
   * @default false
   * 
   * Effects when disabled:
   * - Cursor changes to not-allowed
   * - Opacity reduced to 50%
   * - Click events are prevented
   * 
   * @example
   * ```tsx
   * <Button
   *   label="Submit"
   *   disabled={formIsInvalid}
   * />
   * ```
   */
    disabled?: boolean;
}

/**
 * Interface for styled button component props.
 * @remarks
 * All props are prefixed with $ to avoid conflicts with HTML attributes
 * and follow styled-components best practices.
 */
export interface ButtonSCPropsI {
/** Button size that affects padding and font size
   * - small: compact size (0.25rem padding, 0.875rem font)
   * - medium: default size (0.5rem padding, 1rem font)
   * - large: expanded size (0.75rem padding, 1.125rem font)
   */
    $size: ButtonSizeT;

    /** Button variant that determines color scheme
   * - primary: blue theme (#3b82f6, hover: #2563eb)
   * - secondary: gray theme (#6b7280, hover: #4b5563)
   * - danger: red theme (#ef4444, hover: #dc2626)
   */
    $variant: ButtonVariantT;

    /** Disabled state of the button
   * - true: reduces opacity to 0.5 and changes cursor to not-allowed
   * - false: normal state with full opacity and pointer cursor
   */
    $disabled: boolean;
}

