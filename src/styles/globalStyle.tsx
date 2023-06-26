import { css } from '@emotion/react';

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    -webkit-touch-callout: none;
  }

  body,
  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  textarea,
  button,
  select {
    margin: 0;
    padding: 0;
  }

  body {
    word-break: break-all;
    word-wrap: break-word;
    line-height: 1.5;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  [tabindex='-1']:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border: 0;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    cursor: help;
    border-bottom: 0;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  sub,
  sup {
    position: relative;
    font-size: 65%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: 0;

    &:hover {
      text-decoration: none;
    }

    &:not([href]):not([tabindex]) {
      text-decoration: none;

      &:focus {
        outline: 0;
      }
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }

  a,
  button,
  input,
  textarea {
    transition: border-color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, color 0.15s ease-in-out,
      opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  img {
    vertical-align: top;
    border-style: none;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  ul,
  ol {
    list-style: none;
  }

  label {
    font-weight: 700;
    cursor: pointer;
  }

  button {
    border-radius: 0;
    border: 0;
    background: none;
    cursor: pointer;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  input:focus {
    outline: none;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  input[type='password'] {
    font-family: sans-serif;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
`;
