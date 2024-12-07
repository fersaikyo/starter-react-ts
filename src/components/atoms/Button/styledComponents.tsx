import styled from "styled-components";
import { ButtonSCPropsI } from "./interfaces";

/**
 * Styled button component with customizable size, variant, and disabled state.
 * 
 * @component
 * @styled
 * 
 * @remarks
 * This component uses styled-components to create a customizable button with
 * different sizes, color variants, and states. All styles are responsive to
 * prop changes and include hover effects.
 * 
 * @example
 * ```tsx
 * <ButtonSC
 *   $size="medium"
 *   $variant="primary"
 *   $disabled={false}
 * >
 *   Button Text
 * </ButtonSC>
 * ```
 * 
 * @cssProperties
 * - border-radius: 0.25rem
 * - font-weight: bold
 * - outline: none (on focus)
 * 
 * @sizes
 * - small: 0.25rem padding, 0.875rem font
 * - medium: 0.5rem padding, 1rem font
 * - large: 0.75rem padding, 1.125rem font
 * 
 * @variants
 * - primary: blue (#3b82f6, hover: #2563eb)
 * - secondary: gray (#6b7280, hover: #4b5563)
 * - danger: red (#ef4444, hover: #dc2626)
 * 
 * @states
 * - disabled: opacity 0.5, cursor not-allowed
 * - hover: darker background color
 * - focus: no outline
 */
export const ButtonSC = styled.button<ButtonSCPropsI>`
  border-radius: 0.25rem; /* rounded */
  padding: ${(props) => (props.$size === "small" ? "0.25rem 0.5rem" : props.$size === "large" ? "0.75rem 1.5rem" : "0.5rem 1rem")}; 
  font-weight: bold; /* font-bold */
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  
  /* Estilos según el tamaño */
  font-size: ${(props) => (props.$size === "small" ? "0.875rem" : props.$size === "large" ? "1.125rem" : "1rem")};
  
  /* Variantes de color */
  background-color: ${(props) => 
    props.$variant === "primary" ? "#3b82f6" :
    props.$variant === "secondary" ? "#6b7280" :
    props.$variant === "danger" ? "#ef4444" : "#3b82f6"};
  color: white;
  
  &:hover {
    background-color: ${(props) => 
      props.$variant === "primary" ? "#2563eb" :
      props.$variant === "secondary" ? "#4b5563" :
      props.$variant === "danger" ? "#dc2626" : "#2563eb"};
  }

  &:focus {
    outline: none;
  }
`;