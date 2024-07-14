export const TW = `/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

:root {
  --inherit: inherit;
  --current: currentColor;
  --transparent: transparent;
  --black: #000;
  --white: #fff;
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --slate-950: #020617;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --gray-950: #030712;
  --zinc-50: #fafafa;
  --zinc-100: #f4f4f5;
  --zinc-200: #e4e4e7;
  --zinc-300: #d4d4d8;
  --zinc-400: #a1a1aa;
  --zinc-500: #71717a;
  --zinc-600: #52525b;
  --zinc-700: #3f3f46;
  --zinc-800: #27272a;
  --zinc-900: #18181b;
  --zinc-950: #09090b;
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-200: #e5e5e5;
  --neutral-300: #d4d4d4;
  --neutral-400: #a3a3a3;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;
  --neutral-950: #0a0a0a;
  --stone-50: #fafaf9;
  --stone-100: #f5f5f4;
  --stone-200: #e7e5e4;
  --stone-300: #d6d3d1;
  --stone-400: #a8a29e;
  --stone-500: #78716c;
  --stone-600: #57534e;
  --stone-700: #44403c;
  --stone-800: #292524;
  --stone-900: #1c1917;
  --stone-950: #0c0a09;
  --red-50: #fef2f2;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;
  --red-950: #450a0a;
  --orange-50: #fff7ed;
  --orange-100: #ffedd5;
  --orange-200: #fed7aa;
  --orange-300: #fdba74;
  --orange-400: #fb923c;
  --orange-500: #f97316;
  --orange-600: #ea580c;
  --orange-700: #c2410c;
  --orange-800: #9a3412;
  --orange-900: #7c2d12;
  --orange-950: #431407;
  --amber-50: #fffbeb;
  --amber-100: #fef3c7;
  --amber-200: #fde68a;
  --amber-300: #fcd34d;
  --amber-400: #fbbf24;
  --amber-500: #f59e0b;
  --amber-600: #d97706;
  --amber-700: #b45309;
  --amber-800: #92400e;
  --amber-900: #78350f;
  --amber-950: #451a03;
  --yellow-50: #fefce8;
  --yellow-100: #fef9c3;
  --yellow-200: #fef08a;
  --yellow-300: #fde047;
  --yellow-400: #facc15;
  --yellow-500: #eab308;
  --yellow-600: #ca8a04;
  --yellow-700: #a16207;
  --yellow-800: #854d0e;
  --yellow-900: #713f12;
  --yellow-950: #422006;
  --lime-50: #f7fee7;
  --lime-100: #ecfccb;
  --lime-200: #d9f99d;
  --lime-300: #bef264;
  --lime-400: #a3e635;
  --lime-500: #84cc16;
  --lime-600: #65a30d;
  --lime-700: #4d7c0f;
  --lime-800: #3f6212;
  --lime-900: #365314;
  --lime-950: #1a2e05;
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-400: #4ade80;
  --green-500: #22c55e;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;
  --green-950: #052e16;
  --emerald-50: #ecfdf5;
  --emerald-100: #d1fae5;
  --emerald-200: #a7f3d0;
  --emerald-300: #6ee7b7;
  --emerald-400: #34d399;
  --emerald-500: #10b981;
  --emerald-600: #059669;
  --emerald-700: #047857;
  --emerald-800: #065f46;
  --emerald-900: #064e3b;
  --emerald-950: #022c22;
  --teal-50: #f0fdfa;
  --teal-100: #ccfbf1;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #2dd4bf;
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-800: #115e59;
  --teal-900: #134e4a;
  --teal-950: #042f2e;
  --cyan-50: #ecfeff;
  --cyan-100: #cffafe;
  --cyan-200: #a5f3fc;
  --cyan-300: #67e8f9;
  --cyan-400: #22d3ee;
  --cyan-500: #06b6d4;
  --cyan-600: #0891b2;
  --cyan-700: #0e7490;
  --cyan-800: #155e75;
  --cyan-900: #164e63;
  --cyan-950: #083344;
  --sky-50: #f0f9ff;
  --sky-100: #e0f2fe;
  --sky-200: #bae6fd;
  --sky-300: #7dd3fc;
  --sky-400: #38bdf8;
  --sky-500: #0ea5e9;
  --sky-600: #0284c7;
  --sky-700: #0369a1;
  --sky-800: #075985;
  --sky-900: #0c4a6e;
  --sky-950: #082f49;
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;
  --blue-950: #172554;
  --indigo-50: #eef2ff;
  --indigo-100: #e0e7ff;
  --indigo-200: #c7d2fe;
  --indigo-300: #a5b4fc;
  --indigo-400: #818cf8;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-800: #3730a3;
  --indigo-900: #312e81;
  --indigo-950: #1e1b4b;
  --violet-50: #f5f3ff;
  --violet-100: #ede9fe;
  --violet-200: #ddd6fe;
  --violet-300: #c4b5fd;
  --violet-400: #a78bfa;
  --violet-500: #8b5cf6;
  --violet-600: #7c3aed;
  --violet-700: #6d28d9;
  --violet-800: #5b21b6;
  --violet-900: #4c1d95;
  --violet-950: #2e1065;
  --purple-50: #faf5ff;
  --purple-100: #f3e8ff;
  --purple-200: #e9d5ff;
  --purple-300: #d8b4fe;
  --purple-400: #c084fc;
  --purple-500: #a855f7;
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  --purple-800: #6b21a8;
  --purple-900: #581c87;
  --purple-950: #3b0764;
  --fuchsia-50: #fdf4ff;
  --fuchsia-100: #fae8ff;
  --fuchsia-200: #f5d0fe;
  --fuchsia-300: #f0abfc;
  --fuchsia-400: #e879f9;
  --fuchsia-500: #d946ef;
  --fuchsia-600: #c026d3;
  --fuchsia-700: #a21caf;
  --fuchsia-800: #86198f;
  --fuchsia-900: #701a75;
  --fuchsia-950: #4a044e;
  --pink-50: #fdf2f8;
  --pink-100: #fce7f3;
  --pink-200: #fbcfe8;
  --pink-300: #f9a8d4;
  --pink-400: #f472b6;
  --pink-500: #ec4899;
  --pink-600: #db2777;
  --pink-700: #be185d;
  --pink-800: #9d174d;
  --pink-900: #831843;
  --pink-950: #500724;
  --rose-50: #fff1f2;
  --rose-100: #ffe4e6;
  --rose-200: #fecdd3;
  --rose-300: #fda4af;
  --rose-400: #fb7185;
  --rose-500: #f43f5e;
  --rose-600: #e11d48;
  --rose-700: #be123c;
  --rose-800: #9f1239;
  --rose-900: #881337;
  --rose-950: #4c0519;
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
}

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.invisible {
  visibility: hidden;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.left-0 {
  left: 0px;
}
.left-2 {
  left: 0.5rem;
}
.left-2\\.5 {
  left: 0.625rem;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-2 {
  right: 0.5rem;
}
.right-4 {
  right: 1rem;
}
.top-0 {
  top: 0px;
}
.top-2 {
  top: 0.5rem;
}
.top-2\\.5 {
  top: 0.625rem;
}
.top-4 {
  top: 1rem;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.z-50 {
  z-index: 50;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-6 {
  margin-left: 1.5rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-auto {
  margin-top: auto;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-10 {
  height: 2.5rem;
}
.h-14 {
  height: 3.5rem;
}
.h-3 {
  height: 0.75rem;
}
.h-3\\.5 {
  height: 0.875rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-7 {
  height: 1.75rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\\[18px\\] {
  height: 18px;
}
.h-\\[19px\\] {
  height: 19px;
}
.h-\\[1px\\] {
  height: 1px;
}
.h-\\[40rem\\] {
  height: 40rem;
}
.h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.max-h-96 {
  max-height: 24rem;
}
.max-h-\\[300px\\] {
  max-height: 300px;
}
.min-h-\\[60px\\] {
  min-height: 60px;
}
.min-h-screen {
  min-height: 100vh;
}
.w-10 {
  width: 2.5rem;
}
.w-14 {
  width: 3.5rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\\.5 {
  width: 0.875rem;
}
.w-3\\/4 {
  width: 75%;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-72 {
  width: 18rem;
}
.w-8 {
  width: 2rem;
}
.w-80 {
  width: 20rem;
}
.w-9 {
  width: 2.25rem;
}
.w-\\[100px\\] {
  width: 100px;
}
.w-\\[1px\\] {
  width: 1px;
}
.w-\\[30\\%\\] {
  width: 30%;
}
.w-full {
  width: 100%;
}
.min-w-\\[8rem\\] {
  min-width: 8rem;
}
.min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.max-w-lg {
  max-width: 32rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.caption-bottom {
  caption-side: bottom;
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\\.5 {
  gap: 0.375rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-200 {
  --tw-border-opacity: 1;
  border-color: rgb(228 228 231 / var(--tw-border-opacity));
}
.border-zinc-900 {
  --tw-border-opacity: 1;
  border-color: rgb(24 24 27 / var(--tw-border-opacity));
}
.bg-black\\/80 {
  background-color: rgb(0 0 0 / 0.8);
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-zinc-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}
.bg-zinc-100\\/50 {
  background-color: rgb(244 244 245 / 0.5);
}
.bg-zinc-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(228 228 231 / var(--tw-bg-opacity));
}
.bg-zinc-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}
.bg-zinc-900\\/10 {
  background-color: rgb(24 24 27 / 0.1);
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-indigo-300 {
  --tw-gradient-from: #a5b4fc var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(165 180 252 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-purple-300 {
  --tw-gradient-to: #d8b4fe var(--tw-gradient-to-position);
}
.fill-blue-500 {
  fill: #3b82f6;
}
.fill-current {
  fill: currentColor;
}
.fill-emerald-500 {
  fill: #10b981;
}
.fill-red-500 {
  fill: #ef4444;
}
.fill-slate-800 {
  fill: #1e293b;
}
.fill-white {
  fill: #fff;
}
.stroke-blue-500 {
  stroke: #3b82f6;
}
.stroke-emerald-500 {
  stroke: #10b981;
}
.stroke-red-500 {
  stroke: #ef4444;
}
.stroke-slate-500 {
  stroke: #64748b;
}
.stroke-white {
  stroke: #fff;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-8 {
  padding-right: 2rem;
}
.pt-0 {
  padding-top: 0px;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.align-middle {
  vertical-align: middle;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.leading-none {
  line-height: 1;
}
.leading-snug {
  line-height: 1.375;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-current {
  color: currentColor;
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}
.text-transparent {
  color: transparent;
}
.text-zinc-50 {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}
.text-zinc-900 {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}
.text-zinc-950 {
  --tw-text-opacity: 1;
  color: rgb(9 9 11 / var(--tw-text-opacity));
}
.underline-offset-4 {
  text-underline-offset: 4px;
}
.opacity-0 {
  opacity: 0;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-70 {
  opacity: 0.7;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-offset-white {
  --tw-ring-offset-color: #fff;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.fade-in-0 {
  --tw-enter-opacity: 0;
}
.zoom-in-95 {
  --tw-enter-scale: .95;
}
.duration-200 {
  animation-duration: 200ms;
}
.duration-300 {
  animation-duration: 300ms;
}
.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

[contenteditable]:focus {
  outline: 0px solid transparent;
}

.no-click {
  pointer-events: none;
}

.file\\:border-0::file-selector-button {
  border-width: 0px;
}

.file\\:bg-transparent::file-selector-button {
  background-color: transparent;
}

.file\\:text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.file\\:font-medium::file-selector-button {
  font-weight: 500;
}

.placeholder\\:text-zinc-500::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}

.placeholder\\:text-zinc-500::placeholder {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}

.hover\\:bg-red-500\\/80:hover {
  background-color: rgb(239 68 68 / 0.8);
}

.hover\\:bg-red-500\\/90:hover {
  background-color: rgb(239 68 68 / 0.9);
}

.hover\\:bg-zinc-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.hover\\:bg-zinc-100\\/50:hover {
  background-color: rgb(244 244 245 / 0.5);
}

.hover\\:bg-zinc-100\\/80:hover {
  background-color: rgb(244 244 245 / 0.8);
}

.hover\\:bg-zinc-900\\/80:hover {
  background-color: rgb(24 24 27 / 0.8);
}

.hover\\:bg-zinc-900\\/90:hover {
  background-color: rgb(24 24 27 / 0.9);
}

.hover\\:text-zinc-900:hover {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.hover\\:opacity-100:hover {
  opacity: 1;
}

.focus\\:bg-zinc-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.focus\\:text-zinc-900:focus {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-zinc-950:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(9 9 11 / var(--tw-ring-opacity));
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring-1:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-zinc-950:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(9 9 11 / var(--tw-ring-opacity));
}

.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:ring-offset-white:focus-visible {
  --tw-ring-offset-color: #fff;
}

.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:cursor-pointer:disabled {
  cursor: pointer;
}

.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}

.group:hover .group-hover\\:scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}

.peer:disabled ~ .peer-disabled\\:opacity-70 {
  opacity: 0.7;
}

.aria-selected\\:bg-zinc-100[aria-selected="true"] {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.aria-selected\\:text-zinc-900[aria-selected="true"] {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}

.data-\\[disabled\\=\\'true\\'\\]\\:pointer-events-none[data-disabled='true'] {
  pointer-events: none;
}

.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=right\\]\\:translate-x-1[data-side=right] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked] {
  --tw-translate-x: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes accordion-up {

  from {
    height: var(--radix-accordion-content-height);
  }

  to {
    height: 0;
  }
}

.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state=closed] {
  animation: accordion-up 0.2s ease-out;
}

@keyframes accordion-down {

  from {
    height: 0;
  }

  to {
    height: var(--radix-accordion-content-height);
  }
}

.data-\\[state\\=open\\]\\:animate-accordion-down[data-state=open] {
  animation: accordion-down 0.2s ease-out;
}

.data-\\[state\\=checked\\]\\:bg-zinc-900[data-state=checked] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}

.data-\\[state\\=open\\]\\:bg-zinc-100[data-state=open] {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.data-\\[state\\=selected\\]\\:bg-zinc-100[data-state=selected] {
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 245 / var(--tw-bg-opacity));
}

.data-\\[state\\=unchecked\\]\\:bg-zinc-200[data-state=unchecked] {
  --tw-bg-opacity: 1;
  background-color: rgb(228 228 231 / var(--tw-bg-opacity));
}

.data-\\[state\\=checked\\]\\:text-zinc-50[data-state=checked] {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.data-\\[state\\=open\\]\\:text-zinc-500[data-state=open] {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}

.data-\\[disabled\\=\\'true\\'\\]\\:opacity-50[data-disabled='true'] {
  opacity: 0.5;
}

.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {
  transition-duration: 300ms;
}

.data-\\[state\\=open\\]\\:duration-500[data-state=open] {
  transition-duration: 500ms;
}

.data-\\[state\\=open\\]\\:animate-in[data-state=open] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {
  --tw-exit-scale: .95;
}

.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {
  --tw-enter-scale: .95;
}

.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {
  --tw-enter-translate-y: -0.5rem;
}

.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {
  --tw-enter-translate-x: 0.5rem;
}

.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {
  --tw-enter-translate-x: -0.5rem;
}

.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {
  --tw-enter-translate-y: 0.5rem;
}

.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed] {
  --tw-exit-translate-y: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed] {
  --tw-exit-translate-x: -100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed] {
  --tw-exit-translate-x: -50%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed] {
  --tw-exit-translate-x: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed] {
  --tw-exit-translate-y: -100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed] {
  --tw-exit-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open] {
  --tw-enter-translate-y: 100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open] {
  --tw-enter-translate-x: -100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open] {
  --tw-enter-translate-x: -50%;
}

.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open] {
  --tw-enter-translate-x: 100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open] {
  --tw-enter-translate-y: -100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open] {
  --tw-enter-translate-y: -48%;
}

.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {
  animation-duration: 300ms;
}

.data-\\[state\\=open\\]\\:duration-500[data-state=open] {
  animation-duration: 500ms;
}

.dark\\:border-zinc-50:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(250 250 250 / var(--tw-border-opacity));
}

.dark\\:border-zinc-800:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity));
}

.dark\\:bg-black:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.dark\\:bg-red-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(127 29 29 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-50:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-50\\/10:is(.dark *) {
  background-color: rgb(250 250 250 / 0.1);
}

.dark\\:bg-zinc-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-800\\/50:is(.dark *) {
  background-color: rgb(39 39 42 / 0.5);
}

.dark\\:bg-zinc-950:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(9 9 11 / var(--tw-bg-opacity));
}

.dark\\:from-indigo-500:is(.dark *) {
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.dark\\:to-purple-500:is(.dark *) {
  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);
}

.dark\\:text-red-900:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(127 29 29 / var(--tw-text-opacity));
}

.dark\\:text-white:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:text-zinc-400:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.dark\\:text-zinc-50:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:text-zinc-900:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}

.dark\\:ring-offset-zinc-950:is(.dark *) {
  --tw-ring-offset-color: #09090b;
}

.dark\\:placeholder\\:text-zinc-400:is(.dark *)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.dark\\:placeholder\\:text-zinc-400:is(.dark *)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.dark\\:hover\\:bg-red-900\\/80:hover:is(.dark *) {
  background-color: rgb(127 29 29 / 0.8);
}

.dark\\:hover\\:bg-red-900\\/90:hover:is(.dark *) {
  background-color: rgb(127 29 29 / 0.9);
}

.dark\\:hover\\:bg-zinc-50\\/80:hover:is(.dark *) {
  background-color: rgb(250 250 250 / 0.8);
}

.dark\\:hover\\:bg-zinc-50\\/90:hover:is(.dark *) {
  background-color: rgb(250 250 250 / 0.9);
}

.dark\\:hover\\:bg-zinc-800:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-zinc-800\\/50:hover:is(.dark *) {
  background-color: rgb(39 39 42 / 0.5);
}

.dark\\:hover\\:bg-zinc-800\\/80:hover:is(.dark *) {
  background-color: rgb(39 39 42 / 0.8);
}

.dark\\:hover\\:text-zinc-50:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:focus\\:bg-zinc-800:focus:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:focus\\:text-zinc-50:focus:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:focus\\:ring-zinc-300:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(212 212 216 / var(--tw-ring-opacity));
}

.dark\\:focus-visible\\:ring-zinc-300:focus-visible:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(212 212 216 / var(--tw-ring-opacity));
}

.dark\\:focus-visible\\:ring-offset-zinc-950:focus-visible:is(.dark *) {
  --tw-ring-offset-color: #09090b;
}

.dark\\:aria-selected\\:bg-zinc-800[aria-selected="true"]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:aria-selected\\:text-zinc-50[aria-selected="true"]:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.dark\\:data-\\[state\\=checked\\]\\:bg-zinc-50[data-state=checked]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.dark\\:data-\\[state\\=open\\]\\:bg-zinc-800[data-state=open]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:data-\\[state\\=selected\\]\\:bg-zinc-800[data-state=selected]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:data-\\[state\\=unchecked\\]\\:bg-zinc-800[data-state=unchecked]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:data-\\[state\\=checked\\]\\:text-zinc-900[data-state=checked]:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}

.dark\\:data-\\[state\\=open\\]\\:text-zinc-400[data-state=open]:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

@media (min-width: 640px) {

  .sm\\:not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .sm\\:static {
    position: static;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:table-cell {
    display: table-cell;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-auto {
    height: auto;
  }

  .sm\\:max-w-sm {
    max-width: 24rem;
  }

  .sm\\:max-w-xs {
    max-width: 20rem;
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:gap-4 {
    gap: 1rem;
  }

  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:whitespace-nowrap {
    white-space: nowrap;
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:border-0 {
    border-width: 0px;
  }

  .sm\\:bg-transparent {
    background-color: transparent;
  }

  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:pl-14 {
    padding-left: 3.5rem;
  }

  .sm\\:text-left {
    text-align: left;
  }
}

@media (min-width: 768px) {

  .md\\:flex {
    display: flex;
  }

  .md\\:table-cell {
    display: table-cell;
  }

  .md\\:h-8 {
    height: 2rem;
  }

  .md\\:w-8 {
    width: 2rem;
  }

  .md\\:w-\\[200px\\] {
    width: 200px;
  }

  .md\\:grow-0 {
    flex-grow: 0;
  }

  .md\\:gap-8 {
    gap: 2rem;
  }

  .md\\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 1024px) {

  .lg\\:w-\\[320px\\] {
    width: 320px;
  }
}

.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]) {
  padding-right: 0px;
}

.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\]>[role=checkbox] {
  --tw-translate-y: 2px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\>span\\]\\:line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child>tr {
  border-bottom-width: 0px;
}

.\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state=open]>svg {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] {
  font-size: 0.75rem;
  line-height: 1rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] {
  font-weight: 500;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-zinc-500 [cmdk-group-heading] {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}

.dark\\:\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-zinc-400 [cmdk-group-heading]:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}

.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group] {
  padding-top: 0px;
}

.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg {
  width: 1.25rem;
}

.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] {
  height: 3rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg {
  width: 1.25rem;
}

.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {
  border-width: 0px;
}

.\\[\\&_tr\\]\\:border-b tr {
  border-bottom-width: 1px;
}
`;
