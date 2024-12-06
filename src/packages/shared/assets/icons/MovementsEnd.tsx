import Svg, { G, Path, Mask, Defs } from "react-native-svg"

export const  MovementsEnd = () => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 48 56"
      fill="none"
    >
      <G filter="url(#filter0_d_1_461)">
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
          <Path fill="#D9D9D9" d="M12 9H36V33H12z" />
        </Mask>
        <G mask="url(#a)">
          <Path d="M17 31V12h16l-2 5 2 5H19v9h-2z" fill="#fff" />
        </G>
      </G>
      <Defs></Defs>
    </Svg>
  )
}

