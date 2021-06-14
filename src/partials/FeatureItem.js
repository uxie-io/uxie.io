import React from "react";
import { Transition } from "react-transition-group";

const FeatureItem = ({
  title,
  desc,
  imagePath,
  featureTitle,
  featureDesc,
  link,
  reverse = false,
}) => {
  const content = (
    <div
      className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
      data-aos="fade-right"
    >
      <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
        <a href={link}>
          <h3 className="h3 mb-3">{title}</h3>
        </a>
        <p className="text-xl text-gray-600">{desc}</p>
      </div>
      {/* Tabs buttons */}
      <div className="mb-8 md:mb-0">
        <div
          className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 "bg-white shadow-md border-gray-200 hover:shadow-lg"                  }`}
        >
          <div>
            <div className="font-bold leading-snug tracking-tight mb-1">
              {featureTitle}
            </div>
            <div className="text-gray-600">{featureDesc}</div>
          </div>
          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const screenShot = (
    <div
      className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 my-auto"
      data-aos="zoom-y-out"
    >
      <div className="relative flex flex-col text-center lg:text-right">
        {/* Item 1 */}
        <Transition
          show={true}
          appear={true}
          className="w-full"
          enter="transition ease-in-out duration-700 transform order-first"
          enterStart="opacity-0 translate-y-16"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-300 transform absolute"
          leaveStart="opacity-100 translate-y-0"
          leaveEnd="opacity-0 -translate-y-16"
        >
          <div className="relative inline-flex flex-col">
            <img
              className="md:max-w-none mx-auto rounded-lg"
              src={require(`../images/${imagePath}`).default}
              width="500"
              height="462"
              alt="Features bg"
            />
          </div>
        </Transition>
      </div>
    </div>
  );

  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 my-16">
      {!reverse ? (
        <>
          {content}
          {screenShot}
        </>
      ) : (
        <>
          {screenShot}
          {content}
        </>
      )}
    </div>
  );
};

export default FeatureItem;
