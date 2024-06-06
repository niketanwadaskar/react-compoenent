import React, { useEffect } from "react";
// import Image from "next/image";

export default function TimelineEffect() {
  useEffect(() => {
    const bar = document.getElementById("scrollBar");
    const elem = document.getElementById("middle-section");
    const coloredBar = document.getElementById("coloredBar");

    const handleScroll = () => {
      if (!elem) return; // Ensure elem exists
      if (!coloredBar) return; // Ensure coloredBar exists
      const rect = elem.getBoundingClientRect();
      if (!rect) return; // Ensure rect exists

      // Define the margin values
      const topMargin = 300; // Adjust top margin if needed
      const bottomMargin = 500; // Adjust bottom margin if needed

      // Calculate the adjusted bounding rectangle
      const adjustedTop = rect.top - topMargin;
      const adjustedBottom = rect.bottom - bottomMargin;
      const adjustedHeight = adjustedBottom - adjustedTop;

      // Calculate the height of the viewport
      const viewportHeight = window.innerHeight;

      // Calculate the visible part of the middle section, ignoring the margins
      const visibleTop = Math.max(adjustedTop, 0);
      const visibleBottom = Math.min(adjustedBottom, viewportHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Calculate the percentage of the middle section that is visible, ignoring the margins
      const percentageVisible =
        adjustedHeight > 0 ? (visibleHeight / adjustedHeight) * 100 : 0;

      if (bar && percentageVisible > 0 && visibleTop <= 0) {
        bar.style.top = `${100 - percentageVisible}%`;
        coloredBar.style.height = `${100 - percentageVisible}%`;
      }

      console.log(percentageVisible.toFixed(2) + "%", visibleTop);
    };

    // Initial call to set the scroll position
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-w-full px-10 sm:px-20 md:px-20 lg:px-40 py-4 pt-20 pb-28 overflow-y-hidden">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl font-semibold text-center">How it Works?</h1>
      </div>
      <div className="mt-16 flex flex-col gap-10 md:gap-16 lg:gap-20">
        <div className="w-full flex md:justify-end md:ml-5 box">
          <div className="w-full md:w-[50%] max-w-full bg-white rounded-lg shadow-md flex items-center space-x-4 p-2 md:p-5">
            <img
              src="/assets/works_2.svg"
              alt="Start a Campaign"
              width={100}
              height={100}
              className="object-cover w-1/3 h-auto"
            />
            <div>
              <h3 className="text-lg font-semibold">Start A Campaign</h3>
              <p className="text-gray-600 md:text-sm text-xs font-normal">
                An NGO/Individual submits a request to start a campaign. The
                request is reviewed by the team.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start md:-ml-5 box">
          <div className="w-full md:w-[50%] max-w-full bg-white rounded-lg shadow-md flex items-center space-x-4 p-2 md:p-5">
            <img
              src="/assets/works_2.svg"
              alt="Start a Campaign"
              width={100}
              height={100}
              className="object-cover w-1/3 h-auto"
            />
            <div>
              <h3 className="text-lg font-semibold"> Set Up Campaign</h3>
              <p className="text-gray-600 md:text-sm text-xs font-normal">
                An NGO/Individual submits a request to start a campaign. The
                request is reviewed by the team
              </p>
            </div>
          </div>
        </div>
        <div
          id="middle-section"
          className="absolute top-1/2 left-5 md:left-1/2 transform transition-all -translate-x-1/2 -translate-y-1/2 flex justify-start bg-gray-light h-[70%] w-[5px]"
        >
          <svg
            id="scrollBar"
            width="30"
            height="30"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 transform -translate-x-1/2 z-10 -translate-y-1/2 top-5 transition-all"
          >
            <circle cx="19.5" cy="19.5" r="19.5" fill="#ED1C24" />
            <path
              d="M10.7061 20.8824L16.059 26.2354L29.059 13.2354"
              stroke="white"
              strokeWidth="3.05882"
              strokeLinecap="round"
            />
          </svg>
          <div
            id="coloredBar"
            className="absolute top-0 w-full bg-red-600 h-5 transition-all"
          ></div>
        </div>
        <div className="w-full flex md:justify-end md:ml-5 box">
          <div className="w-full md:w-[50%] max-w-full p-5 bg-white rounded-lg shadow-md flex items-center space-x-4 md:p-5">
            <img
              src="/assets/works_2.svg"
              alt="Start a Campaign"
              width={100}
              height={100}
              className="object-cover w-1/3 h-auto"
            />
            <div>
              <h3 className="text-lg font-semibold"> Campaign Page Live</h3>
              <p className="text-gray-600 md:text-sm text-xs font-normal">
                An NGO/Individual submits a request to start a campaign. The
                request is reviewed by the team.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start md:-ml-5 box">
          <div className="w-full md:w-[50%] max-w-full p-5 bg-white rounded-lg shadow-md flex items-center space-x-4 p-2 md:p-5">
            <img
              src="/assets/works_2.svg"
              alt="Start a Campaign"
              width={100}
              height={100}
              className="object-cover w-1/3 h-auto"
            />
            <div>
              <h3 className="text-lg font-semibold"> Funds Raised</h3>
              <p className="text-gray-600 md:text-sm text-xs font-normal">
                An NGO/Individual submits a request to start a campaign. The
                request is reviewed by the team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
