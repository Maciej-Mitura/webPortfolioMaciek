"use client"
import SkillsMovingRow from "../../../components/visual/SkillsMovingRow"

export default function Skills() {
  return (
    <main className="flex h-[calc(100vh-80px)] flex-col overflow-auto bg-[var(--color-extradetails)]">
      <div className="flex h-[50%] flex-col items-center justify-center bg-[var(--color-accentcolor)]">
        <p className="text-[6rem] font-semibold text-[var(--color-text)]">
          My skillset
        </p>
        <p className="w-[40%] text-center text-[1.5rem] font-medium text-[var(--color-text)]">
          This section highlights what I&apos;ve gained experience in, but my
          learning journey is ongoing and I&apos;m always open to new challenges
        </p>
      </div>
      <div className="flex h-[50%] w-full flex-col items-center justify-center gap-4 bg-pink-300">
        <SkillsMovingRow />
        <SkillsMovingRow />
        <SkillsMovingRow />
      </div>
    </main>
  )
}
