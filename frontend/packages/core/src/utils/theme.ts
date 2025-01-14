/**
 * Copyright 2020 Baidu Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {darken, lighten} from 'polished';

import {css} from 'styled-components';
import kebabCase from 'lodash/kebabCase';

export type Theme = 'light' | 'dark';

export const THEME: Theme | undefined = import.meta.env.SNOWPACK_PUBLIC_THEME;

export const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

export const autoTheme: Theme = matchMedia.matches ? 'dark' : 'light';

export const theme = THEME || autoTheme;

export const colors = {
    primary: {
        default: '#2932e1',
        focused: lighten(0.08, '#2932e1'),
        active: lighten(0.12, '#2932e1'),
        text: '#fff'
    },
    danger: {
        default: '#ff3912',
        focused: lighten(0.08, '#ff3912'),
        active: lighten(0.12, '#ff3912'),
        text: '#fff'
    }
} as const;

export const themes = {
    light: {
        // text colors
        textColor: '#333',
        textLightColor: '#666',
        textLighterColor: '#999',
        textInvertColor: '#fff',

        // background colors
        backgroundColor: '#fff',
        backgroundFocusedColor: '#f6f6f6',
        bodyBackgroundColor: '#f4f4f4',

        // border colors
        borderColor: '#ddd',
        borderFocusedColor: darken(0.15, '#ddd'),
        borderActiveColor: darken(0.3, '#ddd'),

        // loader colors
        loaderBackgroundColor: '#f5f6f7',
        loaderForegroundColor: '#eee',

        // navbar colors
        navbarTextColor: '#fff',
        navbarBackgroundColor: '#1527c2',
        navbarHoverBackgroundColor: lighten(0.05, '#1527c2'),
        navbarHighlightColor: '#596cd6',

        // components colors
        tagBackgroundColor: '#f4f5fc',
        tagFocusedBackgroundColor: darken(0.03, '#f4f5fc'),
        tagActiveBackgroundColor: darken(0.06, '#f4f5fc'),
        inputBackgroundColor: '#fff',
        selectSelectedTextColor: '#1a73e8',
        sliderRailColor: '#dbdeeb',
        sliderGripperColor: '#fff',
        modelHeaderBackgroundColor: '#eee',
        codeColor: '#666',
        codeBackgroundColor: 'rgba(216, 216, 216, 0.5)',
        audioBackgroundColor: '#f2f6ff',
        tooltipTextColor: '#fff',
        tooltipBackgroundColor: 'rgba(0, 0, 0, 0.6)',
        progressBarColor: '#fff',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        darkMaskColor: 'rgba(0, 0, 0, 0.5)',
        tabInactiveBackgroundColor: '#ebebeb',
        tableBackgroundColor: '#fff',
        tableHeaderBackgroundColor: '#f9f9f9',
        tableDraggerColor: '#6f6f6f',
        tableRowHoverBackgroundColor: '#f6f6f6',
        tableExpanderColor: '#999',
        tableExpanderHoverColor: '#666',
        tableExpanderBorderColor: '#ccc',
        tableExpanderHoverBorderColor: '#999',
        tableStickyShadowColor: '#f3f3f3',

        // graph page
        graphUploaderBackgroundColor: '#f9f9f9',
        graphUploaderActiveBackgroundColor: '#f2f6ff',
        graphCopyrightColor: '#ddd',
        graphCopyrightLogoFilter: 'opacity(25%)',

        // text sample page
        textChartTitleBackgroundColor: '#f8f8f8',
        textChartTitleIndicatorColor: '#000',
        textChartTagBackgroundColor: '#f6f6f6',

        // hyper-parameter page
        hyperParameterGraphAxisColor: '#ccc',
        hyperParameterGraphGridColor: '#ebebeb',
        hyperParameterGraphDisabledDataColor: '#ccc',
        hyperParameterGraphBrushColor: '#787878'
    },
    dark: {
        textColor: '#cfcfd1',
        textLightColor: '#757575',
        textLighterColor: '#575757',
        textInvertColor: '#000',

        backgroundColor: '#1d1d1f',
        backgroundFocusedColor: '#333',
        bodyBackgroundColor: '#121214',

        borderColor: '#3f3f42',
        borderFocusedColor: lighten(0.15, '#3f3f42'),
        borderActiveColor: lighten(0.3, '#3f3f42'),

        loaderBackgroundColor: '#333',
        loaderForegroundColor: '#666',

        navbarTextColor: '#fff',
        navbarBackgroundColor: '#262629',
        navbarHoverBackgroundColor: lighten(0.05, '#262629'),
        navbarHighlightColor: '#fff',

        tagBackgroundColor: '#333',
        tagFocusedBackgroundColor: lighten(0.3, '#333'),
        tagActiveBackgroundColor: lighten(0.4, '#333'),
        inputBackgroundColor: '#262629',
        selectSelectedTextColor: '#1a73e8',
        sliderRailColor: '#727275',
        sliderGripperColor: '#cfcfd1',
        modelHeaderBackgroundColor: '#303033',
        codeColor: '#cfcfd1',
        codeBackgroundColor: '#3f3f42',
        audioBackgroundColor: '#303033',
        tooltipTextColor: '#d1d1d1',
        tooltipBackgroundColor: '#292929',
        progressBarColor: '#fff',
        maskColor: 'rgba(0, 0, 0, 0.8)',
        darkMaskColor: 'rgba(0, 0, 0, 0.8)',
        tabInactiveBackgroundColor: '#262629',
        tableBackgroundColor: '#1d1d1f',
        tableHeaderBackgroundColor: '#202020',
        tableDraggerColor: '#6f6f6f',
        tableRowHoverBackgroundColor: '#232323',
        tableExpanderColor: '#757575',
        tableExpanderHoverColor: '#999',
        tableExpanderBorderColor: '#444',
        tableExpanderHoverBorderColor: '#757575',
        tableStickyShadowColor: '#131313',

        graphUploaderBackgroundColor: '#262629',
        graphUploaderActiveBackgroundColor: '#303033',
        graphCopyrightColor: '#565657',
        graphCopyrightLogoFilter:
            'invert(35%) sepia(5%) saturate(79%) hue-rotate(202deg) brightness(88%) contrast(86%)',

        textChartTitleBackgroundColor: '#2a2a2a',
        textChartTitleIndicatorColor: '#fff',
        textChartTagBackgroundColor: '#222',

        hyperParameterGraphAxisColor: '#999',
        hyperParameterGraphGridColor: '#262629',
        hyperParameterGraphDisabledDataColor: '#999',
        hyperParameterGraphBrushColor: '#787878'
    }
} as const;

function generateColorVariables(color: typeof colors) {
    return Object.entries(color)
        .map(([name, variant]) =>
            Object.entries(variant)
                .map(([key, value]) => {
                    if (key === 'default') {
                        return `--${kebabCase(name)}-color: ${value};`;
                    }
                    return `--${kebabCase(name)}-${kebabCase(key)}-color: ${value};`;
                })
                .join('\n')
        )
        .join('\n');
}

function generateThemeVariables(theme: Record<string, string>) {
    return Object.entries(theme)
        .map(([key, value]) => `--${kebabCase(key)}: ${value};`)
        .join('\n');
}

export const variables = css`
    :root {
        ${generateColorVariables(colors)}

        ${generateThemeVariables(themes[THEME || 'light'])}

        &.auto {
            ${generateThemeVariables(themes.light)}
            @media (prefers-color-scheme: dark) {
                ${generateThemeVariables(themes.dark)}
            }
        }
        &.light {
            ${generateThemeVariables(themes.light)}
        }
        &.dark {
            ${generateThemeVariables(themes.dark)}
        }
    }
`;
