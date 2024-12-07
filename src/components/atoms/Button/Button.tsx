import { ButtonSC } from "./styledComponents";
import { ButtonPropsI } from "./interfaces";

/**
 * Reusable button component that allows customizing size, variant, and disabled state.
 * 
 * @remarks
 * This button component provides various customization options through props.
 * 
 * @example
 * ```tsx
 * <Button
 *   label="Click me"
 *   size="medium"
 *   variant="primary"
 *   onClick={() => console.log('Button clicked')}
 * />
 * ```
 * 
 * @param props - The component props
 * @param props.label - The text to display on the button
 * @param props.onClick - The function that runs when the button is clicked
 * @param props.size - The size of the button (default: 'medium')
 * @param props.variant - The variant of the button (default: 'primary')
 * @param props.disabled - Whether the button is disabled (default: false)
 * 
 * @returns A styled button component
 * 
 * @category Components
 */

const Button: React.FC<ButtonPropsI> = ({
    label,
    onClick,
    size = "medium",
    variant = "primary",
    disabled = false,
}) => {
    return (
        <ButtonSC
            onClick={onClick}
            $size={size}
            $variant={variant}
            $disabled={disabled}
        >
            {label}
        </ButtonSC>
    );
};

export default Button;