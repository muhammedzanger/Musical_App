/** @format */

import Link from "next/link"
import {
  RiYoutubeFill,
  RiSpotifyFill,
  RiSoundcloudFill,
  RiInstagramFill,
} from "react-icons/ri"

const social = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
]

const Sochial = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {social.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Sochial
