export default ({ light, dark }) => {
  return (
    <svg viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M207 355.206L801.408 58V370.848L207 652.412V355.206Z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M817.05 965.26L269.569 714.981L608.344 560.992L817.05 652.412V965.26Z'
        fill='url(#paint1_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='504.204'
          y1='58'
          x2='504.204'
          y2='652.412'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={light} />
          <stop offset='1' stopColor={dark} />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='543.31'
          y1='558.557'
          x2='543.31'
          y2='965.26'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={light} />
          <stop offset='1' stopColor={dark} />
        </linearGradient>
      </defs>
    </svg>
  );
};
