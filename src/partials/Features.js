import React from "react";
import FeatureItem from "./FeatureItem.js";

function Features() {
  return (
    <section className="relative" id="design-tools-section">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore Design Tools</h1>
          </div>
          <FeatureItem
            title="Svgwave"
            desc="svgwave is a tiny, free and beautiful SVG gradient waves generator
            for your UI or website desgin. It offers dead simple UI to
            customize, and style your waves based on your theme specifications."
            imagePath="svgwave.png"
            featureTitle="Generate svgs, pngs, jpegs with one-click."
            featureDesc="Customize number of waves, frequency, amplitude, colors, with
            cool gradients ."
            link="https://svgwave.in"
          />

          <hr />

          <FeatureItem
            title="Tinter"
            desc="Tinter is a simple design tool to generate color and hue variation of images with customizable fine tuning. Change Hue Online without any privacy concerns, no server uploads. It offers simple UI to generate monoTone as well as RGB color variations of images."
            imagePath="tinter.png"
            featureTitle="Supports JPG, PNG, WEBP and many more."
            featureDesc="Work with fine tuning of your images without concerning about privacy."
            reverse={true}
            link="https://tinter.uxie.io"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
