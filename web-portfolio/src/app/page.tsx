"use client"
import { ArrowDownToLine } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <main className="font-poppins mx-[5%] flex min-h-[calc(100vh-90px)] flex-col-reverse justify-center overflow-auto bg-[var(--color-background)] py-8 md:mx-[10%] lg:flex-row lg:gap-20 lg:py-0 xl:gap-40">
      {/* Text section - will appear below the image on mobile/tablet */}
      <section className="mb-8 flex w-full flex-col items-center justify-center space-y-0 lg:mb-0 lg:w-1/2 lg:items-start">
        <h2 className="m-0 p-0 text-center text-[40px] font-bold text-[var(--color-text)] md:text-[50px] lg:text-left xl:text-[60px]">
          Hello, I&apos;m{" "}
          <span className="text-[var(--color-accentcolor)]">Maciej</span>
        </h2>
        <h3 className="m-0 p-0 text-center text-[20px] font-bold text-[var(--color-text)] md:text-[25px] lg:text-left xl:text-[30px]">
          Fullstack Web Developer
        </h3>
        <p className="m-0 max-w-[90%] p-0 text-center text-[16px] font-semibold text-[var(--color-text)] md:text-[18px] lg:max-w-none lg:text-left xl:text-[20px]">
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex flex-row items-center gap-1 rounded-[4px] bg-[var(--color-text)] px-3 py-1.5 text-[24px] font-semibold text-[var(--color-background)] md:text-[28px] xl:text-[32px]"
        >
          <ArrowDownToLine
            strokeWidth={3}
            width={24}
            height={24}
            className="md:h-[28px] md:w-[28px] xl:h-[32px] xl:w-[32px]"
          />
          Resume
        </a>
      </section>

      {/* Image section - will appear above the text on mobile/tablet */}
      <section className="mb-8 flex w-full items-center justify-center lg:mb-0 lg:w-1/2">
        <Image
          src="/assets/images/myProfPic.png"
          alt="Profile"
          width={512}
          height={512}
          priority
        />
      </section>
    </main>
  )
}
