import * as React from "react"
import { Svg, Path } from "react-native-svg"
import { SvgCss } from "react-native-svg/css"
import { View, ViewStyle } from "react-native"

interface SvgProps {
    style?: ViewStyle
    height?: string
    width?: string
    colour?: string
    colourPrimary?: string
    colourSecondary?: string
    stroke?: string
}

export function FamilyMartLogo({ width = "100%", height = "100%" }: SvgProps) {
    const xml = `
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359 259" width="359" height="259">
            <title>Family_Mart_Logo</title>
            <style>
                .s0 { fill: #0094da } 
                .s1 { fill: #01ac4e } 
            </style>
            <path id="Bottom" class="s0" d="m0 143h359v116h-359z"/>
            <path id="Top" class="s1" d="m0 0h359v116h-359z"/>
        </svg>
        `;
    return (
        <SvgCss xml={xml} width={width} height={height} />
    )
}

export function ProtocolLogo({ width = "100%", height = "100%", colour }: SvgProps) {
    return (
        <Svg height={height} width={width} viewBox="-1.9956 0.7926 22.22 21.93">
            <Path fill={colour} d="M16 8A5 5 90 0011 3H5A5 5 90 000 8V21.927A1 1 90 001.623 22.709L5.307 19.779A4 4 90 017.797 18.909H11A5 5 90 0016 13.909V8Z" />
        </Svg>
    )
}

export function ProtoLogo(props: SvgProps): any {
    return (
        <Svg
            viewBox="0 0 100 100"
            {...props}
        >
            <Path
                fill="#34d399"
                strokeWidth="5.00149"
                d="M 90.129135,25.217986 A 25.007459,25.007459 0 0 0 65.121675,0.21052636 H 35.112722 A 25.007459,25.007459 0 0 0 10.105263,25.217986 v 69.655778 a 5.001492,5.001492 0 0 0 8.117421,3.911166 L 36.64818,84.130559 a 20.005968,20.005968 0 0 1 12.453716,-4.351298 h 16.019779 a 25.007459,25.007459 0 0 0 25.00746,-25.00746 z"
            />
        </Svg>
    )
};

export function MicroLogo({ width = "100%", height = "100%", colourPrimary, colourSecondary }: SvgProps): any {
    return (
        <Svg
            fill="none"
            viewBox="0 0 32 32"
            stroke-width="1.5"
            stroke="currentColor"
            width="32"
            height="32"
        >
            <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m 22.805,13.766c 0,4.971-4.029,9-9,9-4.971,0-9-4.029-9-9 0-4.971 4.029-9 9-9 4.971,0 9,4.029 9,9 z"
                fill={colourPrimary}
                stroke={colourPrimary}
            />
            <Path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m 27.167,18.261c 0,4.971-4.029,9-9,9-4.971,0-9-4.029-9-9 0-4.971 4.029-9 9-9 4.971,0 9,4.029 9,9 z"
                fill={colourSecondary}
                stroke={colourSecondary}
            />
        </Svg>
    )
};
