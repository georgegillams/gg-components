# Changelog

## 19.2.4

- Fixed: Upgraded minor/patch deps

## 19.2.3

- Fixed: Reduced padding of navigation bar.
- Fixed: Navigation bar uses primary-color lines in dark-mode.

## 19.2.0

- Added: `paragraph-font-size-larger` token.
- Fixed: Reduced size of info cell titles.

## 19.1.0

- Added: typography tokens.

## 19.0.0 - Should be minor, released major instead

- Added: `daysOnly` countdown style.

## 17.0.0

- Breaking: `noPadding` has been replaced with `padding`.
- Breaking: Page titles, sections, subsections and paragraphs come with better margin defaults.

## 16.2.0

- Added: Form label and hint skeletons
- Added: Reinstated `ariaLabel` on `FeatureCard`

## 16.1.1

- Fixed: Segmented control unselected text color in dark-mode.

## 16.1.0

- Added: Focus state mixin
- Fixed: Focus states look better and work more consistently with other apps

## 16.0.0

- Breaking: Paragraph no longer applies any colour styling itself. This should be handled by the consumer.

## 15.0.0

- Breaking: Removed Button prop `buttonClassName`
- Fixed: Tweaks to Button appearance.

## 14.4.1

- Fixed: Paused timer font-size.
- Fixed: Segmented colour selected colour in Next.js projects.

## 14.4.0

- Added: Animate height now accepts a `scrollOffset` prop.
- Fixed: Key press events were being fired for any keyDown event. Now they will only be fired if that key is "Enter".

## 14.3.4

- Fixed: Markdown renderer will now render content on server.
- Fixed: Adjusted behaviour of scroll-into-view when collapsing animate-height.

## 14.3.0

- Added: Navigation bar now has a webkit native blur effect.

## 14.2.1

- Fixed: Navigation bar menu will now appear after the header in the DOM, instead of before.

## 14.2.0

- Added: Navigation bar will now hide `main` and `footer` elements when nav is open.

## 14.1.0

- Added: Navigation bar now provides a wrapper function for the burger-button, allowing custom behaviour (for example for SSR).

## 14.0.0

- Added: Filter icon
- Breaking: Icons can no longer be imported from 'gg-components/Icons' as importing this way bloats the bundle size too much.

## 13.5.3

- Fixed: Issue in Card that would cause a network request to `/null` if no background image was specified.

## 13.5.2

- Fixed: Animate-height children are now removed when not visible.

## 13.5.1

- Upgraded several dependencies.

## 13.5.0

- Added: Hints can now be included via `FormBuilder`.

## 13.4.8

- Fixed: Added aria-text "(Opens in new tab)" to external links.

## 13.4.7

- Fixed: Accessibility wins.

## 13.4.3

- Fixed: Navigation bar height placeholder when logo is wrapped.

## 13.4.2

- Fixed: Checkbox tick position should now look OK regardless of line-height.

## 13.4.1

- Fixed: Improvement to `isServer` detection.

## 13.4.0

- Added: New chevron icon.

## 13.3.1

- Fixed: `AnimateHeight` will now set the height to `null` after animating so that child-height changes are respected.

## 13.3.0

- Added: New `AnimateHeight` component.

## 13.2.9

- Fixed: Added `aria-expanded` to burger button.

## 13.2.8

- Fixed: Removed `min-width` from bouncy buttons.

## 13.2.7

- Fixed: Enabled `white` theme in `TextLink` and `Paragraph`.

## 13.2.6

- No notable changes

## 13.2.5

- No notable changes

## 13.2.4

- Fixed: Link buttons have `display: inline-block` applied by default so that styles will be properly applied.

## 13.2.3

- Fixed: `LoadingCover` will not present the `Skeleton` with no wrapping divs, so flex-alignment will now work more smoothly.

## 13.2.2

- Fixed: Link buttons will no long apply `className` to the inner button. To apply a className to the inner button, use `buttonClassName`.

## 13.2.0

- Added: Code block support for markdown.

## 13.1.0

- Added: Bullet and numbered list support for markdown.

## 13.0.0

- Breaking: Markdown citations should now use syntax `!cite(i)` where `i` is the citation being referenced.
- Breaking: Markdown references should now be specified individually using `!reference(i): REFERENCE` where `i` is the reference index and `REFERENCE` is the fully qualified reference string.

- Fixed: More broken markdown features

## 12.1.2

- Fixed: Broken markdown features

## 12.1.1

- Fixed: An issue that caused TextArea to be blurred on text entry.

## 12.1.0

- Added: New Error wrapper to turn text and SVG's red

## 12.0.2

- Fixed: Improved style for disabled Buttons
- Fixed: Improved style for disabled Cards
- Fixed: Improved style for disabled CheckBoxes

## 12.0.1

- Fixed: Improved design of `FeatureCard`

## 12.0.0

- Breaking: All `linkUrl` props have been renamed `href`.
- Breaking: `FeatureCard` now takes an array of `annotations` instead of `day` and `month`.
- Breaking: `ArticleCard` has been renamed `FeatureCard`
- Breaking: `ARTICLE_CARD_LAYOUTS` has been renamed `FEATURE_CARD_LAYOUTS`

## 11.2.0

- Added: Added functionality to `Notifications`.

## 11.1.0

- Added: Added functionality to `MarkdownRenderer`.

## 11.0.0

- Breaking: `bpk-spacing-base` has been removed.
- Breaking: `bpk-spacing-xs` has been renamed `spacing-xs`.

## 10.1.4

- Fixed: `withScroll` will now behave properly on a server, rather than rendering HMTL that is incompatible with the client React tree.

## 10.1.3

- Fixed: `InfoCell` will display auxiliary view when rendered on server.

## 10.1.2

- Fixed: Image will now not cause an error if `imgProps` is not defined.

## 10.1.1

- Fixed: Fixed application of `img` className.
- Fixed: Image SSR support.

## 10.1.0

- Added: New Image component that will render a Skeleton until both light and dark images have completely loaded.

## 10.0.0

- Breaking: `DebugObject` will now render always. Consumers are now responsible for loading/showing the component as they need it.

## 9.0.0

- Breaking: Spit `Tag` components into separate sub-modules for better code-splitting and tree-shaking.
- Breaking: Spit `Input` components into separate sub-modules for better code-splitting and tree-shaking.
- Fixed: Import optimisations.

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
