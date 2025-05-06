import { ArrowDownToLine } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <main className="font-poppins mr-[10%] ml-[10%] flex h-[calc(100vh-90px)] justify-center gap-40 overflow-auto bg-[var(--color-background)]">
      <section className="flex w-1/2 flex-col items-start justify-center space-y-0">
        <h2 className="m-0 p-0 text-[60px] font-bold text-[var(--color-text)]">
          Hello, I&apos;m{" "}
          <span className="text-[var(--color-accentcolor)]">Maciej</span>
        </h2>
        <h3 className="m-0 p-0 text-[30px] font-bold text-[var(--color-text)]">
          Fullstack Web Developer
        </h3>
        <p className="m-0 p-0 text-[20px] font-semibold text-[var(--color-text)]">
          I&apos;m a passionate coder & programmer, currently studying
          Multimedia & Creative Technologies (
          <a
            href="https://mct.be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accentcolor)]"
          >
            MCT
          </a>
          ) at Howest, Belgium. I specialize in Next Web Development. Driven by
          creativity and love for technology. I enjoy turning ideas into
          impactful digital solutions.
        </p>
        <a
          href="/resume.pdf" // Change this to the actual resume path
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 ml-0.5 flex flex-row items-center gap-1 rounded-[4px] bg-[var(--color-text)] px-3 py-1.5 text-[32px] font-semibold text-[var(--color-background)]"
        >
          <ArrowDownToLine strokeWidth={3} width={32} height={32} />
          Resume
        </a>
      </section>

      <section className="flex w-1/2 items-center justify-center">
        <Image
          src="/assets/images/myProfPic.png"
          alt="Profile"
          width={512}
          height={512}
          className="w-[100%]"
        />
      </section>
    </main>
  )
}
