import * as React from "react"
import Svg, { G, Path, Mask, Defs } from "react-native-svg"

export const MovementsStart = () => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 48 56"
      fill="none"
    >
      <G filter="url(#filter0_d_1_510)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.6 37.43A16.806 16.806 0 017.226 19.868a16.8 16.8 0 0133.548-.002A16.798 16.798 0 0126.4 37.427V45.4a2.4 2.4 0 11-4.8 0v-7.97z"
          fill="#306FE3"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.985 4a16.805 16.805 0 0116.79 15.865A16.798 16.798 0 0126.4 37.427V45.4a2.4 2.4 0 11-4.8 0v-7.97A16.806 16.806 0 017.226 19.868 16.8 16.8 0 0123.985 4zM19.6 39.08A18.807 18.807 0 015.23 19.757 18.8 18.8 0 0123.981 2h.001a18.805 18.805 0 0118.788 17.754l-1.997.111 1.997-.111a18.797 18.797 0 01-14.37 19.323V45.4a4.4 4.4 0 01-8.8 0v-6.32z"
          fill="#fff"
        />
        <Mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          maskUnits="userSpaceOnUse"
          x={12}
          y={9}
          width={24}
          height={24}
        >
          <Path
            transform="matrix(-1 0 0 1 36 9)"
            fill="#D9D9D9"
            d="M0 0H24V24H0z"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M29 32l-2.8-14.1 1.8.7V22h2v-4.7l-5.05-2.15c-.233-.1-.48-.158-.738-.175a1.821 1.821 0 00-.737.1c-.233.083-.454.2-.663.35-.208.15-.379.342-.512.575l-1 1.6a5.214 5.214 0 01-1.762 1.725c-.742.45-1.588.675-2.538.675v2c1.167 0 2.208-.242 3.125-.725a8.03 8.03 0 002.35-1.85L23.1 22.5l-2.1 2V32h2v-6.5l2.1-1.6 1.8 8.1H29zm-6.5-17.5c.55 0 1.02-.196 1.413-.588.391-.391.587-.862.587-1.412 0-.55-.196-1.02-.587-1.412A1.926 1.926 0 0022.5 10.5c-.55 0-1.02.196-1.413.588A1.926 1.926 0 0020.5 12.5c0 .55.196 1.02.587 1.412.392.392.863.588 1.413.588z"
            fill="#fff"
          />
        </G>
      </G>
      <Defs></Defs>
    </Svg>
  )
}

