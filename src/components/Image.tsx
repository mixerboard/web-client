import { FC } from "react";

interface Props {
  src: string;
  alt?: string;
}

const Image: FC<Props> = ({ src, alt = "" }) => {
  return (
    <>
      <img src={src} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Image;
