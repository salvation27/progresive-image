import React, { useState, useEffect } from "react";

const MyImage = ({ src, placeholderSrc, width = "50%", ...props }) => {
  const [ imageSrc, setImageSrc ] = useState(placeholderSrc);
  const cn = `progresive ${imageSrc === placeholderSrc ? 'loading':'loaded' }`;
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);
  return (
    <div>
      <img className={cn} src={imageSrc} alt={props.alt || ""} width={width} {...props} />
    </div>
  );
};

export default MyImage;
