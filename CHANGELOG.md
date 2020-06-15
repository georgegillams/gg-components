# Changelog

## 4.1.0

- Added: Pride option for Logo component.

## 4.0.7

- Fixed: Issue that caused nav bar blur effect view to repeatedly create child nodes

## 4.0.5

- Fixed: Output CSS is now compressed to reduce bundle size

## 4.0.4

- Fixed: Moved react dependencies to peer dependencies to avoid react versions clashing

## 4.0.3

- Fixed: Updated heading tags so that my site can actually have some `h1` tags.

## 4.0.2

- Fixed: Errors and warnings in Countdown components
- Fixed: Errors and warnings in Skeleton components
- Fixed: Errors and warnings in Tag components
- Fixed: Moved new-window icon to `Icons`

## 4.0.0 (published as 4.0.1)

- Breaking: Marker position is now an absolute value, rather than a percentage.
  - To migrate, newMarkerPosition = oldMarkerPosition \* 100 / goalAmount
- Fixed: Errors and warnings in Money components
- Fixed: Errors and warnings in Navigation Bar components

## 3.0.0

- Breaking: Components no longer provide font-faces. This is now left up to the consuming site.
- Breaking: `GGRedirect` renamed `Redirect`
- Fixed: Errors and warnings in Input components
- Fixed: Style errors and warnings in all components

## 2.0.1

- Breaking: `getTimeDifferenceFromMillis` renamed `getTimeDifferenceFromMilliseconds`
- Fixed: Errors and warnings in Design components
- Fixed: Errors and warnings in Footer components
- Fixed: Errors and warnings in FormBuilder components
- Fixed: Errors and warnings in InfoCell components
- Fixed: Errors and warnings in Input components
- Fixed: Errors and warnings in Select components

## 2.0.0

- Breaking: Renamed `FormBuilder` prop `presubmitText` to `preSubmitText`.
- Fixed: Errors and warnings in Auth components
- Fixed: Errors and warnings in Button components
- Fixed: Errors and warnings in Card components
- Fixed: Errors and warnings in Checkbox components
- Fixed: Errors and warnings in Code components
