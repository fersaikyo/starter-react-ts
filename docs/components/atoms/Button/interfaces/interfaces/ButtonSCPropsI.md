[**starter-react-ts v1.0.0**](../../../../../README.md)

***

[starter-react-ts](../../../../../modules.md) / [components/atoms/Button/interfaces](../README.md) / ButtonSCPropsI

# Interface: ButtonSCPropsI

Interface for styled button component props.

## Remarks

All props are prefixed with $ to avoid conflicts with HTML attributes
and follow styled-components best practices.

## Properties

### $disabled

> **$disabled**: `boolean`

Disabled state of the button
- true: reduces opacity to 0.5 and changes cursor to not-allowed
- false: normal state with full opacity and pointer cursor

#### Defined in

src/components/atoms/Button/interfaces.ts:139

***

### $size

> **$size**: [`ButtonSizeT`](../../types/type-aliases/ButtonSizeT.md)

Button size that affects padding and font size
- small: compact size (0.25rem padding, 0.875rem font)
- medium: default size (0.5rem padding, 1rem font)
- large: expanded size (0.75rem padding, 1.125rem font)

#### Defined in

src/components/atoms/Button/interfaces.ts:126

***

### $variant

> **$variant**: [`ButtonVariantT`](../../types/type-aliases/ButtonVariantT.md)

Button variant that determines color scheme
- primary: blue theme (#3b82f6, hover: #2563eb)
- secondary: gray theme (#6b7280, hover: #4b5563)
- danger: red theme (#ef4444, hover: #dc2626)

#### Defined in

src/components/atoms/Button/interfaces.ts:133
