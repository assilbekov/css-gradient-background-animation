import { useEffect, useRef, useState } from "react"

const Feeling = {
  Sad: 1,
  Neutral: 2,
  Happy: 3
}

const feelingColorMap = {
  [Feeling.Sad]: ["#394e7a", "#8e9ac7", "#4ee"],
  [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
  [Feeling.Happy]: ["#39f", "#f4e54d", "#fa3"],
}

const feelingLabelMap = {
  [Feeling.Sad]: "Could be better",
  [Feeling.Neutral]: "Okay",
  [Feeling.Happy]: "Great"
}

function App() {
  const wrapperRef = useRef(null);
  const [feeling, setFeeling] = useState(Feeling.Neutral)

  useEffect(() => {
    if (!wrapperRef.current) return

    const [a, b, c] = feelingColorMap[feeling]

    wrapperRef.current.style.setProperty("--color-a", a)
    wrapperRef.current.style.setProperty("--color-b", b)
    wrapperRef.current.style.setProperty("--color-c", c)
  }, [feeling])

  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center">
      <div
        ref={wrapperRef}
        className="relative mx-auto aspect-[9/16] w-[360px] max-w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[--color-a] to-[--color-c] via-[--color-b] [transition-property:_--color-a,_--color-b,_--color-c] ease-in duration-500 p-8 text-white"
      >
        <div className="relative z-10">
          <h1 className="mb-12 text-5xl font-medium leading-tight">How are you feeling today?</h1>
        </div>

        <h2 className="mb-4 text-center text-2xl font-medium">
          {feelingLabelMap[feeling]}
        </h2>

        <input
          className="range"
          onChange={e => setFeeling(e.target.value)}
          type="range"
          value={feeling}
          min={1}
          max={3}
          step={1}
        />
      </div>
    </main>
  )
}

export default App
