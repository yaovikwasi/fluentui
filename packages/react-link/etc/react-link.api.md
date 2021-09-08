## API Report File for "@fluentui/react-link"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentPropsCompat } from '@fluentui/react-utilities';
import * as React_2 from 'react';

// @public
export const Link: React_2.FunctionComponent<LinkProps & React_2.RefAttributes<HTMLElement>>;

// @public (undocumented)
export type LinkProps = ComponentPropsCompat & React_2.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement> & Omit<React_2.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement>, 'type'> & {
    href?: string;
    onClick?: (event: React_2.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>) => void;
    rel?: string;
    target?: string;
    type?: string;
    disabled?: boolean;
    disabledFocusable?: boolean;
    inline?: boolean;
    secondary?: boolean;
};

// @public
export const linkShorthandProps: never[];

// @public (undocumented)
export interface LinkState extends LinkProps {
    // (undocumented)
    ref: React_2.Ref<HTMLElement>;
}

// @public
export const renderLink: (state: LinkState) => JSX.Element;

// @public
export const useLink: (props: LinkProps, ref: React_2.Ref<HTMLElement>, defaultProps?: LinkProps | undefined) => LinkState;

// @public
export const useLinkState: (state: LinkState) => LinkState;

// @public (undocumented)
export const useLinkStyles: (state: LinkState) => LinkState;

// (No @packageDocumentation comment for this package)

```