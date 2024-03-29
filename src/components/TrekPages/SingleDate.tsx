import React from "react";

export default function SingleDate({
  trekGroupStartDate,
  trekGroupFinishDate,
}: any) {
  return (
    <div className="m-4 p-1 flex flex-row justify-between flex-shrink-0 bg-sky-500 w-48 h-24 rounded-xl drop-shadow-special">
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-row pl-1 ">
          <div className="self-center">
            <svg
              width="10px"
              height="40px"
              viewBox="0 0 10 80"
            >
              <g id="Interface / Line_Xl">
                <path
                  id="Vector"
                  d="M1 80 V3"
                  stroke="#ffffff"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold font-poppins p-0">
              {trekGroupStartDate}
            </div>
            <div className="text-white font-semibold font-poppins">
              {trekGroupFinishDate}
            </div>
          </div>
        </div>

        <div className="text-sm font-semibold pl-4  ">5seats left</div>
      </div>

      <div className="self-end ">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Icon-Set-Filled"
              transform="translate(-310.000000, -1089.000000)"
              fill="#000000"
            >
              <path
                d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                id="arrow-right-circle"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
