import React from 'react'
import { css } from '@emotion/css'

export type SvgIconProps = Omit<React.SVGProps<SVGSVGElement>, 'className'> & {
  extraClasses?: string
};

const sanitizeProps = ({extraClasses, ...o}: SvgIconProps) => o;

const styles = {
  svgIcon: css`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    -moz-user-select: none;
  `,
}

/**
 * From: https://material-ui.com/components/material-icons/
 */
export const CancelIcon = (props: SvgIconProps) => (
  <svg className={`${styles.svgIcon} ${props.extraClasses}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...sanitizeProps(props)}>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
  </svg>
);

/**
 * From: https://material-ui.com/components/material-icons/
 */
export const CancelOutlinedIcon = (props: SvgIconProps) => (
  <svg className={`${styles.svgIcon} ${props.extraClasses}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...sanitizeProps(props)}>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
  </svg>
);

/**
 * From: https://material-ui.com/components/material-icons/
 */
export const InfoOutlinedIcon = (props: SvgIconProps) => (
  <svg className={`${styles.svgIcon} ${props.extraClasses}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...sanitizeProps(props)}>
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
  </svg>
);

/**
 * From: https://material-ui.com/components/material-icons/
 */
export const HelpOutlinedIcon = (props: SvgIconProps) => (
  <svg className={`${styles.svgIcon} ${props.extraClasses}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...sanitizeProps(props)}>
    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
  </svg>
);

/**
 * From: https://material-ui.com/components/material-icons/
 */
export const TranslateIcon = (props: SvgIconProps) => (
  <svg className={`${styles.svgIcon} ${props.extraClasses}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true" {...sanitizeProps(props)}>
    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
  </svg>
);

export const LoaderRings = (props: React.SVGProps<SVGSVGElement>) => (
  // By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
  <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/>
        <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/>
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>
)