import React from "react";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
import webpack = require("webpack");
export = webpack;
declare module '*.jpg' {
    const jpgPath: string;

}
declare module '*.jpeg' {
    const jpegPath: string;

}
declare module '*.png' {
    const pngPath: string;

}
// declare module '*.svg' {
//     import React = require('react');

//     export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//     const src: string;
//     export default src;
// }
declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    > & { title?: string }>;

    const src: string;
    export default src;

}
// declare module '*.svg' {
//     const svgPath: string;

// }