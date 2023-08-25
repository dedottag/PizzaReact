import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <>
    {[...new Array(10)].map((_, index) => (
      <div className="pizza" key={index}>
        <ContentLoader
          key={index}
          speed={2}
          width={210}
          height={390}
          viewBox="0 0 210 370"
          backgroundColor="#d7d0d0"
          foregroundColor="#e5e0e0"
          {...props}
        >
          <rect x="5" y="205" rx="5" ry="5" width="200" height="11" />
          <rect x="5" y="240" rx="10" ry="5" width="200" height="90" />
          <rect x="5" y="345" rx="5" ry="5" width="55" height="20" />
          <rect x="105" y="340" rx="10" ry="10" width="100" height="30" />
          <circle cx="100" cy="95" r="95" />
        </ContentLoader>
      </div>
    ))}
  </>
);

export default Skeleton;
