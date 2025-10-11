import React from "react";
import { PagesTopLoader } from "nextjs-toploader/pages";

const NextTopLoader = () => {
  return (
    <div>
      <PagesTopLoader
        color="#610000"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #610000,0 0 5px #610000"
      />
    </div>
  );
};

export default NextTopLoader;
