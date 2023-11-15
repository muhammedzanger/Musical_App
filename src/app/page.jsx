/** @format */

import Albums from "./Components/Albums/Albums"
import Blog from "./Components/Blog/Blog"
import Events from "./Components/Events/Events"
import Hero from "./Components/Hero"
import NewsLetter from "./Components/NewsLetter"
import Player from "./Components/Player"

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <NewsLetter />
    </main>
  )
}
