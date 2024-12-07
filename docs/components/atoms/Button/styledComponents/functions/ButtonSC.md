[**starter-react-ts v1.0.0**](../../../../../README.md)

***

[starter-react-ts](../../../../../modules.md) / [components/atoms/Button/styledComponents](../README.md) / ButtonSC

# Function: ButtonSC()

Styled button component with customizable size, variant, and disabled state.

## Component

## Styled

## Remarks

This component uses styled-components to create a customizable button with
different sizes, color variants, and states. All styles are responsive to
prop changes and include hover effects.

## Example

```tsx
<ButtonSC
  $size="medium"
  $variant="primary"
  $disabled={false}
>
  Button Text
</ButtonSC>
```

## Css Properties

- border-radius: 0.25rem
- font-weight: bold
- outline: none (on focus)

## Sizes

- small: 0.25rem padding, 0.875rem font
- medium: 0.5rem padding, 1rem font
- large: 0.75rem padding, 1.125rem font

## Variants

- primary: blue (#3b82f6, hover: #2563eb)
- secondary: gray (#6b7280, hover: #4b5563)
- danger: red (#ef4444, hover: #dc2626)

## States

- disabled: opacity 0.5, cursor not-allowed
- hover: darker background color
- focus: no outline

## Call Signature

> **ButtonSC**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

### Type Parameters

• **AsTarget** *extends* `void` \| `WebTarget` = `void`

• **ForwardedAsTarget** *extends* `void` \| `WebTarget` = `void`

### Parameters

#### props

`PolymorphicComponentProps`\<`"web"`, `Substitute`\<`DetailedHTMLProps`\<`ButtonHTMLAttributes`\<`HTMLButtonElement`\>, `HTMLButtonElement`\>, [`ButtonSCPropsI`](../../interfaces/interfaces/ButtonSCPropsI.md)\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` *extends* `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : `object`, `ForwardedAsTarget` *extends* `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : `object`\>

### Returns

`Element`

### Defined in

src/components/atoms/Button/styledComponents.tsx:46

## Call Signature

> **ButtonSC**(`props`): `ReactNode`

### Parameters

#### props

`Substitute`\<`DetailedHTMLProps`\<`ButtonHTMLAttributes`\<`HTMLButtonElement`\>, `HTMLButtonElement`\>, [`ButtonSCPropsI`](../../interfaces/interfaces/ButtonSCPropsI.md)\>

### Returns

`ReactNode`

### Defined in

src/components/atoms/Button/styledComponents.tsx:46
