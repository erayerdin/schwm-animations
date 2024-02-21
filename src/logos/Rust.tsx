// Copyright (c) 2024 Eray Erdin
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { SVGProps } from "react"

const RustCore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1080} height={1080} {...props}>
    <path
      d="M540 47.743C268.614 47.743 47.735 268.723 47.735 540c0 271.277 220.983 492.256 492.265 492.256S1032.265 811.277 1032.265 540c0-271.278-220.983-492.257-492.265-492.257Zm-.729 43.738a32.283 32.387 0 0 1 31.45 32.386 32.387 32.387 0 0 1-64.774 0 32.387 32.387 0 0 1 33.324-32.386zm74.147 53.318a398.54 398.533 0 0 1 272.844 194.32l-38.219 86.226c-6.56 14.891.209 32.386 14.996 39.051l73.522 32.595a398.54 398.533 0 0 1 .833 69.147h-40.926c-4.062 0-5.728 2.708-5.728 6.665v18.745c0 44.154-24.89 53.838-46.758 56.234-20.828 2.395-43.843-8.748-46.759-21.453-12.288-69.043-32.7-83.726-64.982-109.24 40.093-25.41 81.749-63.003 81.749-113.197 0-54.255-37.178-88.412-62.484-105.178-35.615-23.431-74.98-28.117-85.602-28.117H243.1A398.54 398.533 0 0 1 466.06 144.799l49.883 52.277c11.247 11.767 29.888 12.288 41.655.937zM153.124 384.523a32.387 32.387 0 0 1 31.45 32.386 32.387 32.387 0 0 1-64.775 0 32.387 32.387 0 0 1 33.325-32.386zm772.19 1.458a32.387 32.387 0 0 1 31.45 32.386 32.387 32.387 0 0 1-64.774 0 32.387 32.387 0 0 1 33.324-32.386zm-711.165 5.207h56.443v254.51H156.664a398.54 398.533 0 0 1-12.913-152.144l69.773-31.032c14.892-6.665 21.661-24.056 14.996-38.948zm235.562 2.707h134.444c6.977 0 49.05 8.019 49.05 39.572 0 26.139-32.284 35.511-58.84 35.511H449.608Zm0 182.865h102.994c9.372 0 50.3 2.708 63.316 54.985 4.062 16.037 13.122 68.314 19.266 85.08 6.144 18.744 31.034 56.234 57.589 56.234h168.08a398.54 398.533 0 0 1-36.865 42.696l-68.42-14.683c-15.932-3.437-31.657 6.769-35.094 22.702l-16.246 75.812a398.54 398.533 0 0 1-332.307-1.563l-16.246-75.812c-3.436-15.933-19.057-26.138-34.99-22.701l-66.962 14.37a398.54 398.533 0 0 1-34.574-40.821h325.643c3.644 0 6.144-.625 6.144-4.062V653.822c0-3.333-2.5-4.062-6.144-4.062h-95.288ZM299.44 840.54a32.387 32.387 0 0 1 31.45 32.386 32.387 32.387 0 0 1-64.775 0 32.387 32.387 0 0 1 33.325-32.386zm479.56 1.457a32.387 32.387 0 0 1 31.45 32.387 32.387 32.387 0 0 1-64.775 0A32.387 32.387 0 0 1 779 841.997z"
      style={{
        display: "inline",
        strokeWidth: 10.4138,
      }}
    />
  </svg>
)

const RustCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1080} height={1080} {...props}>
    <path
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={23.007}
      d="M1004.772 540A464.772 464.764 0 0 1 540 1004.764 464.772 464.764 0 0 1 75.228 540 464.772 464.764 0 0 1 540 75.235 464.772 464.764 0 0 1 1004.772 540Zm-8.747-44.884 72.48 44.884-72.48 44.883 62.275 58.212-79.77 29.888 49.778 69.251-84.249 13.746 35.408 77.687-85.29-3.02 19.578 83.101-83.103-19.578 3.02 85.289-77.688-35.407-13.746 84.247-69.253-49.778-29.887 79.77-58.214-62.274L540 1068.495l-44.884-72.48-58.214 62.275-29.887-79.77-69.253 49.778-13.746-84.247-77.688 35.407 3.02-85.289-83.103 19.578 19.578-83.101-85.29 3.02 35.408-77.687-84.249-13.746 49.779-69.251-79.77-29.888 62.274-58.212L11.495 540l72.48-44.884L21.7 436.904l79.77-29.888-49.778-69.25 84.249-13.747-35.408-77.686 85.29 3.02-19.578-83.102 83.103 19.578-3.02-85.288 77.688 35.406L337.762 51.7l69.253 49.778 29.887-79.77 58.214 62.275L540 11.503l44.884 72.48 58.214-62.274 29.887 79.769L742.238 51.7l13.746 84.247 77.688-35.406-3.02 85.288 83.103-19.578-19.578 83.102 85.29-3.02-35.408 77.686 84.249 13.746-49.779 69.251 79.77 29.888z"
      style={{
        display: "inline",
      }}
    />
  </svg>
)

export default {
  Circle: RustCircle,
  Core: RustCore,
}
