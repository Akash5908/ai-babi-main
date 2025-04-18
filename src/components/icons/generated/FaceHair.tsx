import * as React from "react"
import type { SVGProps } from "react"
const SvgFaceHair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path fill="url(#face-hair_svg__a)" d="M0 .5h24v24H0z" />
    <defs>
      <pattern
        id="face-hair_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#face-hair_svg__b" transform="scale(.01389)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="face-hair_svg__b"
        width={72}
        height={72}
      />
    </defs>
  </svg>
)
export default SvgFaceHair
