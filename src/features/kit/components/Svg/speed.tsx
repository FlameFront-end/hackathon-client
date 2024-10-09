import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
          stroke="url(#paint0_linear_6_21)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6_21"
            x1="12"
            y1="2.25"
            x2="12"
            y2="21.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF57D0" />
            <stop offset="1" stop-color="#7449D0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
});
