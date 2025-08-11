"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { gallerySections } from "./data";

export function GalleryHeroParallax() {
  const products = gallerySections.map(section => ({
    title: section.title,
    link: "#", // we can make this trigger your border click later
    thumbnail: section.image,
  }));

  return <HeroParallax products={products} />;
}
