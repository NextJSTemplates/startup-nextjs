"use client";

import Link from "next/link";
import { useState } from "react";

export default function CallToActionVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/courbe.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-primary/70 via-primary/60 to-primary/70" />
        )}

        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      <div className="container relative z-10 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
          Prêt à libérer le potentiel de votre entreprise ?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg md:text-xl">
          Nous vous accompagnons dans vos projets stratégiques grâce à une expertise unique en
          Business Analysis et innovation durable.
        </p>
        <Link
          href="#contact"
          className="inline-block rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          🚀 Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}
