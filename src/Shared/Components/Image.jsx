import { Icons } from "../Models/Icons";

export function Image({ staticImage = null, type = null, imgKey = null, className = null, width = "20px" }) {
  if (staticImage) return <img className={className} src={Icons[staticImage]} alt={staticImage} width={width} />;

  if (type && imgKey) return <img className={className} src={type[imgKey]} alt={imgKey} width={width} />;

  return;
}
