import { dot } from "./";

const DotPattern = () => (
  <svg width="100%" height="100%">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle
        id="pattern-circle"
        cx="10"
        cy="10"
        r="1.6257413380501518"
        fill="#000"
      ></circle>
    </pattern>

    <rect
      id="rect"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#pattern-circles)"
    ></rect>
  </svg>
);

const DotBg = () => {
  return (
    <div className="grid grid-cols-2">
      <DotPattern />
      <DotPattern />
      <DotPattern />
      <DotPattern />
    </div>
  );
};

export default DotBg;