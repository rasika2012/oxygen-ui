/**
 * Copyright (c) 2026, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { extendTheme } from '@mui/material/styles';
import AetherBaseTheme from './AetherBaseTheme';
import type { OxygenTheme } from './OxygenThemeBase';

/**
 * AetherColor Theme - Professional flat design with orange color scheme
 * Features: Clean minimalist design, solid colors, no blur effects, orange palette
 * Perfect for professional applications and tech-forward interfaces
 * 
 * Usage:
 * ```tsx
 * import { OxygenUIThemeProvider, AetherColorTheme } from '@wso2/oxygen-ui';
 * 
 * <OxygenUIThemeProvider theme={AetherColorTheme}>
 *   <App />
 * </OxygenUIThemeProvider>
 * ```
 */
const AetherColorTheme = extendTheme(AetherBaseTheme, {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff7300',
          mainChannel: '255 115 0',
          light: '#ff8c33',
          dark: '#cc5a00',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#757575',
          mainChannel: '117 117 117',
          light: '#9E9E9E',
          dark: '#616161',
          contrastText: '#ffffff',
        },
        background: {
          default: '#F5F5F5',
          paper: '#FFFFFF',
          acrylic: '#FFFFFF',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
        divider: '#E0E0E0',
        action: {
          selected: 'rgba(255, 115, 0, 0.12)',
          selectedOpacity: 0.12,
          hover: 'rgba(255, 115, 0, 0.08)',
          hoverOpacity: 0.08,
        },
        error: {
          main: '#D32F2F',
          light: '#EF5350',
          dark: '#C62828',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#ED6C02',
          light: '#FF9800',
          dark: '#E65100',
          contrastText: '#ffffff',
        },
        info: {
          main: '#ff7300',
          light: '#ff8c33',
          dark: '#cc5a00',
          contrastText: '#ffffff',
        },
        success: {
          main: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
          contrastText: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#ff8c33',
          mainChannel: '255 140 51',
          light: '#ffaa66',
          dark: '#ff7300',
          contrastText: '#000000',
        },
        secondary: {
          main: '#9E9E9E',
          mainChannel: '158 158 158',
          light: '#BDBDBD',
          dark: '#757575',
          contrastText: '#000000',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
          acrylic: '#1E1E1E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
        },
        divider: '#424242',
        action: {
          selected: 'rgba(255, 140, 51, 0.16)',
          selectedOpacity: 0.16,
          hover: 'rgba(255, 140, 51, 0.12)',
          hoverOpacity: 0.12,
        },
        error: {
          main: '#EF5350',
          light: '#E57373',
          dark: '#E53935',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#FFA726',
          light: '#FFB74D',
          dark: '#FB8C00',
          contrastText: '#000000',
        },
        info: {
          main: '#ff8c33',
          light: '#ffaa66',
          dark: '#ff7300',
          contrastText: '#000000',
        },
        success: {
          main: '#66BB6A',
          light: '#81C784',
          dark: '#43A047',
          contrastText: '#000000',
        },
      },
    },
  },
});

export default AetherColorTheme as OxygenTheme;
