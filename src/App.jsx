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

  const beforeStyle = "before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[60%] before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:rounded-3xl before:blur-[50px] before:brightness-125 before:animate-blob"
  const afterStyle = "after:absolute after:left-[50%] after:top-[30%] after:h-[70%] after:w-[70%] after:origin-[60%] after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:rounded-3xl after:blur-[50px] after:brightness-125 after:animate-blob-reverse"

  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center">
      <div
        ref={wrapperRef}
        className={
          "relative mx-auto aspect-[9/16] w-[360px] max-w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[--color-a] to-[--color-c] via-[--color-b] [transition-property:_--color-a,_--color-b,_--color-c] ease-in duration-500 p-8 text-white " + beforeStyle + " " + afterStyle
        }
      >
        <div className="relative z-10">
          <h1 className="mb-12 text-5xl font-medium leading-tight">How are you feeling today?</h1>

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
      </div>
    </main>
  )
}

export default App
