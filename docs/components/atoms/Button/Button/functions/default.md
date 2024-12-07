[**starter-react-ts v1.0.0**](../../../../../README.md)

***

[starter-react-ts](../../../../../modules.md) / [components/atoms/Button/Button](../README.md) / default

# Function: default()

> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

Reusable button component that allows customizing size, variant, and disabled state.

## Parameters

### props

[`ButtonPropsI`](../../interfaces/interfaces/ButtonPropsI.md)

The component props

### deprecatedLegacyContext?

`any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

A styled button component

## Remarks

This button component provides various customization options through props.

## Example

```tsx
<Button
  label="Click me"
  size="medium"
  variant="primary"
  onClick={() => console.log('Button clicked')}
/>
```

## Defined in

src/components/atoms/Button/Button.tsx:32
