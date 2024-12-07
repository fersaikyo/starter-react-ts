[**starter-react-ts v1.0.0**](../../../../../README.md)

***

[starter-react-ts](../../../../../modules.md) / [components/atoms/Button/interfaces](../README.md) / ButtonPropsI

# Interface: ButtonPropsI

Interface that defines the props for the Button component.

 ButtonPropsI

## Description

This interface specifies all the possible props that can be passed to the Button component.
It includes both required and optional properties that control the button's appearance and behavior.

## Example

```tsx
// Basic usage
<Button label="Click me" />

// Full usage with all props
<Button
  label="Submit"
  size="large"
  variant="primary"
  disabled={false}
  onClick={() => console.log('Button clicked')}
/>
```

## Properties

### disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.
When true, the button becomes non-interactive and visually dimmed.

#### Optional

#### Default

```ts
false

Effects when disabled:
- Cursor changes to not-allowed
- Opacity reduced to 50%
- Click events are prevented
```

#### Example

```tsx
<Button
  label="Submit"
  disabled={formIsInvalid}
/>
```

#### Defined in

src/components/atoms/Button/interfaces.ts:111

***

### label

> **label**: `string`

The text content of the button.
This is the only required prop and will be displayed inside the button.

#### Required

#### Example

```tsx
<Button label="Click me" />
```

#### Defined in

src/components/atoms/Button/interfaces.ts:37

***

### onClick()?

> `optional` **onClick**: () => `void`

Optional click handler function for the button.
Called when the button is clicked and not disabled.

#### Returns

`void`

#### Optional

#### Default

```ts
undefined
```

#### Example

```tsx
<Button
  label="Submit"
  onClick={() => console.log('Button clicked')}
/>
```

#### Defined in

src/components/atoms/Button/interfaces.ts:52

***

### size?

> `optional` **size**: [`ButtonSizeT`](../../types/type-aliases/ButtonSizeT.md)

The size variant of the button.
Controls the button's padding and font size.

#### Optional

#### Default

```ts
"medium"
```

#### Example

```tsx
<Button label="Small Button" size="small" />
```

#### Defined in

src/components/atoms/Button/interfaces.ts:71

***

### variant?

> `optional` **variant**: [`ButtonVariantT`](../../types/type-aliases/ButtonVariantT.md)

The visual variant/style of the button.
Determines the button's color scheme.

#### Optional

#### Default

```ts
"primary"
```

#### Example

```tsx
<Button label="Delete" variant="danger" />
```

#### Defined in

src/components/atoms/Button/interfaces.ts:90
