import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const blackTheme: CustomThemeConfig = {
  name: "black-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
    "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #f4f73b
    "--color-primary-50": "253 254 226", // #fdfee2
    "--color-primary-100": "253 253 216", // #fdfdd8
    "--color-primary-200": "252 253 206", // #fcfdce
    "--color-primary-300": "251 252 177", // #fbfcb1
    "--color-primary-400": "247 249 118", // #f7f976
    "--color-primary-500": "244 247 59", // #f4f73b
    "--color-primary-600": "220 222 53", // #dcde35
    "--color-primary-700": "183 185 44", // #b7b92c
    "--color-primary-800": "146 148 35", // #929423
    "--color-primary-900": "120 121 29", // #78791d
    // secondary | #3d96f5
    "--color-secondary-50": "226 239 254", // #e2effe
    "--color-secondary-100": "216 234 253", // #d8eafd
    "--color-secondary-200": "207 229 253", // #cfe5fd
    "--color-secondary-300": "177 213 251", // #b1d5fb
    "--color-secondary-400": "119 182 248", // #77b6f8
    "--color-secondary-500": "61 150 245", // #3d96f5
    "--color-secondary-600": "55 135 221", // #3787dd
    "--color-secondary-700": "46 113 184", // #2e71b8
    "--color-secondary-800": "37 90 147", // #255a93
    "--color-secondary-900": "30 74 120", // #1e4a78
    // tertiary | #f53de6
    "--color-tertiary-50": "254 226 251", // #fee2fb
    "--color-tertiary-100": "253 216 250", // #fdd8fa
    "--color-tertiary-200": "253 207 249", // #fdcff9
    "--color-tertiary-300": "251 177 245", // #fbb1f5
    "--color-tertiary-400": "248 119 238", // #f877ee
    "--color-tertiary-500": "245 61 230", // #f53de6
    "--color-tertiary-600": "221 55 207", // #dd37cf
    "--color-tertiary-700": "184 46 173", // #b82ead
    "--color-tertiary-800": "147 37 138", // #93258a
    "--color-tertiary-900": "120 30 113", // #781e71
    // success | #96e71d
    "--color-success-50": "239 251 221", // #effbdd
    "--color-success-100": "234 250 210", // #eafad2
    "--color-success-200": "229 249 199", // #e5f9c7
    "--color-success-300": "213 245 165", // #d5f5a5
    "--color-success-400": "182 238 97", // #b6ee61
    "--color-success-500": "150 231 29", // #96e71d
    "--color-success-600": "135 208 26", // #87d01a
    "--color-success-700": "113 173 22", // #71ad16
    "--color-success-800": "90 139 17", // #5a8b11
    "--color-success-900": "74 113 14", // #4a710e
    // warning | #EAB308
    "--color-warning-50": "252 244 218", // #fcf4da
    "--color-warning-100": "251 240 206", // #fbf0ce
    "--color-warning-200": "250 236 193", // #faecc1
    "--color-warning-300": "247 225 156", // #f7e19c
    "--color-warning-400": "240 202 82", // #f0ca52
    "--color-warning-500": "234 179 8", // #EAB308
    "--color-warning-600": "211 161 7", // #d3a107
    "--color-warning-700": "176 134 6", // #b08606
    "--color-warning-800": "140 107 5", // #8c6b05
    "--color-warning-900": "115 88 4", // #735804
    // error | #ff0026
    "--color-error-50": "255 217 222", // #ffd9de
    "--color-error-100": "255 204 212", // #ffccd4
    "--color-error-200": "255 191 201", // #ffbfc9
    "--color-error-300": "255 153 168", // #ff99a8
    "--color-error-400": "255 77 103", // #ff4d67
    "--color-error-500": "255 0 38", // #ff0026
    "--color-error-600": "230 0 34", // #e60022
    "--color-error-700": "191 0 29", // #bf001d
    "--color-error-800": "153 0 23", // #990017
    "--color-error-900": "125 0 19", // #7d0013
    // surface | #2e2e2e
    "--color-surface-50": "224 224 224", // #e0e0e0
    "--color-surface-100": "213 213 213", // #d5d5d5
    "--color-surface-200": "203 203 203", // #cbcbcb
    "--color-surface-300": "171 171 171", // #ababab
    "--color-surface-400": "109 109 109", // #6d6d6d
    "--color-surface-500": "46 46 46", // #2e2e2e
    "--color-surface-600": "41 41 41", // #292929
    "--color-surface-700": "35 35 35", // #232323
    "--color-surface-800": "28 28 28", // #1c1c1c
    "--color-surface-900": "23 23 23", // #171717
  },
};
