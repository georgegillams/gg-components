# Changelog

## 8.0.0

- Breaking: Renamed `Subsection` to `Subsection`.
- Breaking: Spit `Typography` components into separate sub-modules for better code-splitting and tree-shaking.
- Breaking: Spit `Button` components into separate sub-modules for better code-splitting and tree-shaking.

## 7.0.0

- Breaking: Spit `Cards` components into separate sub-modules for better code-splitting and tree-shaking.

## 6.0.0

- Breaking: Spit `Auth` components into separate sub-modules for better code-splitting and tree-shaking.

## 5.1.3

- Fixed: Replaced `moment` dependency with `data-fns`.

## 5.1.2

- Added: `Card` has a new `highlighted` prop.
- Added: CSS variable `--primary-color-really-dark`.

## 5.0.2

- Fixed: `PageTitle` render link callback is now usable

## 5.0.1

- Fixed: `Button` uses `forwardRef`
- Fixed: `Card` and `ArticleCard` use `forwardRef`
- Fixed: `TextLink` uses `forwardRef`

## 5.0.0

- Breaking: Redirect now accepts an optional `onRedirect` function. If this is provided, it will be called instead of setting `document.location`. Use this to provide a custom function from your JS router if you want to avoid the entire page reloading when the redirect is performed.

- Breaking: Button no longer uses `react-router-dom` `Link`. If you want to use a `react-router-dom` `Link`, pass `href` and `hrefDumb` to the button and wrap it in your own `Link`.
- Breaking: Card no longer uses `react-router-dom` `Link`. If you want to use a `react-router-dom` `Link`, pass `href` and `hrefDumb` to the button and wrap it in your own `Link`.
- Breaking: ArticleCard no longer uses `react-router-dom` `Link`. If you want to use a `react-router-dom` `Link`, pass `href` and `hrefDumb` to the button and wrap it in your own `Link`.
- Breaking: TextLink no longer uses `react-router-dom` `Link`. If you want to use a `react-router-dom` `Link`, pass `href` and `hrefDumb` to the button and wrap it in your own `Link`.
- Breaking: TextLink `external` prop has been renamed to `hrefExternal`.

- Breaking: Removed `Logo`, `Footer`, `CreativeCommons`, `AdminOnly`, `LoggedInOnly`, `LoggedOutOnly` and `EmailConfirmedOnly`.

- Breaking: Fixed typo. `TimzoneSafeCountdown` is now `TimezoneSafeCountdown`

- Added: `PageTitle` can now accept an element prop `linkWrapperComponent` which will wrap a dumb link.

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
