import React from 'react'

export default function Footer({ color, width = 60, height = 60 }) {
  return (
    <svg width={`${width}`} height={height} viewBox={`0 0 ${width} ${height}`} fill="white" xmlns="http://www.w3.org/2000/svg">
      <path fill={color || ''} d="M20.6971 45.0274L14.3911 55.1757C14.2819 55.3474 14.0477 55.4099 13.8604 55.3006C12.1279 54.1921 10.5045 52.8962 9.03732 51.4599C8.88123 51.3193 8.88123 51.0695 9.03732 50.9134L17.4973 42.4825C17.6378 42.342 17.8875 42.342 18.028 42.4825C18.8084 43.2319 19.6669 43.9189 20.5878 44.5122C20.7439 44.6215 20.8064 44.84 20.6971 45.0274Z"/>
      <path fill={color || ''} d="M7.82005 38.4079L13.2519 36.347C13.4392 36.2689 13.6577 36.3782 13.7358 36.5656C14.1572 37.596 14.6567 38.5796 15.2654 39.5164C15.3747 39.6881 15.3279 39.9223 15.1562 40.0316L10.6608 43.0605C10.4892 43.1854 10.4423 43.4196 10.5672 43.5913C11.0355 44.2627 11.5506 44.9184 12.0812 45.5429C12.2217 45.6991 12.2061 45.9333 12.05 46.0738L7.92931 49.7428C7.77322 49.8833 7.52348 49.8677 7.383 49.7116C6.02504 48.1503 4.83877 46.4641 3.8242 44.6686C3.71494 44.4813 3.79298 44.2471 3.98029 44.1534L8.50684 41.7022C8.69414 41.6085 8.75658 41.3743 8.66293 41.187C8.27271 40.4376 7.92931 39.6881 7.61714 38.9075C7.52348 38.7045 7.63275 38.486 7.82005 38.4079Z"/>
      <path fill={color || ''} d="M34.0425 47.2134L36.7585 58.8449C36.8053 59.0479 36.6804 59.2508 36.4775 59.2977C34.464 59.7348 32.4036 59.9846 30.3433 60.0002C30.1247 60.0002 29.953 59.8285 29.953 59.6255L29.9686 47.6817C29.9686 47.4788 30.1403 47.307 30.3433 47.307C31.4359 47.2914 32.5129 47.1665 33.5899 46.9323C33.7928 46.8855 33.9957 47.0104 34.0425 47.2134Z"/>
      <path fill={color || ''} d="M20.2758 51.6319L22.664 46.3391C22.742 46.1518 22.9761 46.0737 23.1634 46.1518C24.178 46.5889 25.2394 46.9168 26.3164 47.151C26.5193 47.1978 26.6442 47.3852 26.613 47.5881L25.5828 52.9121C25.536 53.1151 25.6765 53.318 25.8794 53.3649C26.691 53.5054 27.5027 53.6147 28.3299 53.6771C28.5329 53.6927 28.6889 53.8645 28.6889 54.0831L28.3768 59.5944C28.3612 59.7974 28.1895 59.9691 27.9709 59.9535C25.9106 59.813 23.8814 59.4539 21.8835 58.8918C21.6806 58.8294 21.5713 58.6264 21.6182 58.4234L23.0698 53.4898C23.1322 53.2868 23.023 53.0838 22.82 53.0214C22.024 52.7716 21.2279 52.4749 20.4631 52.1471C20.2602 52.0534 20.1822 51.8192 20.2758 51.6319Z"/>
      <path fill={color || ''} d="M45.0307 39.2973L55.1764 45.6049C55.3481 45.7141 55.4105 45.9483 55.3012 46.1357C54.193 47.8687 52.8975 49.4924 51.4615 50.9601C51.321 51.1162 51.0713 51.1162 50.9152 50.9601L42.4864 42.4979C42.3459 42.3574 42.3459 42.1076 42.4864 41.9671C43.2356 41.1864 43.9224 40.3277 44.5156 39.4066C44.6248 39.2504 44.859 39.188 45.0307 39.2973Z"/>
      <path fill={color || ''} d="M38.4124 52.1779L36.352 46.7446C36.274 46.5573 36.3832 46.3387 36.5705 46.2606C37.6007 45.8391 38.5841 45.3395 39.5206 44.7306C39.6923 44.6213 39.9264 44.6681 40.0357 44.8399L43.0638 49.3364C43.1887 49.5081 43.4228 49.5549 43.5945 49.43C44.2657 48.9617 44.9212 48.4464 45.5456 47.9156C45.7017 47.7751 45.9358 47.7907 46.0763 47.9468L49.76 52.0686C49.9004 52.2247 49.8848 52.4745 49.7287 52.6151C48.1679 53.9734 46.4821 55.1599 44.6871 56.1748C44.4998 56.2841 44.2657 56.206 44.172 56.0187L41.7214 51.4909C41.6278 51.3036 41.3937 51.2411 41.2063 51.3348C40.4571 51.7251 39.7079 52.0686 38.9275 52.3809C38.7089 52.4745 38.4904 52.3653 38.4124 52.1779Z"/>
      <path fill={color || ''} d="M39.3032 14.9725L45.6092 4.82419C45.7185 4.65245 45.9526 4.59 46.1399 4.69929C47.8725 5.8078 49.4958 7.10366 50.963 8.54004C51.1191 8.68056 51.1191 8.93036 50.963 9.08649L42.503 17.5174C42.3626 17.6579 42.1128 17.6579 41.9723 17.5174C41.1919 16.768 40.3334 16.081 39.4125 15.4877C39.2564 15.3785 39.194 15.1599 39.3032 14.9725Z"/>
      <path fill={color || ''} d="M52.1648 21.5926L46.733 23.6535C46.5457 23.7315 46.3272 23.6222 46.2491 23.4349C45.8277 22.4044 45.3282 21.4208 44.7195 20.4841C44.6102 20.3123 44.657 20.0781 44.8287 19.9688L49.324 16.94C49.4957 16.8151 49.5426 16.5809 49.4177 16.4091C48.9494 15.7378 48.4343 15.082 47.9036 14.4575C47.7632 14.3014 47.7788 14.0672 47.9349 13.9267L52.0556 10.2577C52.2117 10.1172 52.4614 10.1328 52.6019 10.2889C53.9599 11.8502 55.1461 13.5364 56.1607 15.3318C56.27 15.5192 56.1919 15.7534 56.0046 15.8471L51.4781 18.2983C51.2908 18.392 51.2283 18.6261 51.322 18.8135C51.7122 19.5629 52.0556 20.3123 52.3678 21.093C52.477 21.2959 52.3678 21.5145 52.1648 21.5926Z"/>
      <path fill={color || ''} d="M25.9578 12.7869L23.2419 1.15534C23.195 0.952377 23.3199 0.749412 23.5228 0.702573C25.5363 0.265414 27.5967 0.0312214 29.6415 -3.8147e-06C29.86 -3.8147e-06 30.0317 0.171736 30.0317 0.374702L30.0161 12.3185C30.0161 12.5215 29.8444 12.6932 29.6415 12.6932C28.5488 12.7088 27.4718 12.8337 26.3948 13.0679C26.1919 13.1148 26.0046 12.9899 25.9578 12.7869Z"/>
      <path fill={color || ''} d="M39.7246 8.36852L37.3364 13.6613C37.2584 13.8486 37.0242 13.9267 36.8369 13.8486C35.8224 13.4115 34.761 13.0836 33.684 12.8494C33.481 12.8026 33.3562 12.6152 33.3874 12.4122L34.4176 7.08827C34.4644 6.8853 34.3239 6.68234 34.121 6.6355C33.3093 6.49498 32.4977 6.38569 31.6704 6.32324C31.4675 6.30763 31.3114 6.13589 31.3114 5.91731L31.6236 0.405984C31.6392 0.203018 31.8109 0.0312786 32.0294 0.0468912C34.0898 0.187407 36.1189 0.546499 38.1168 1.10856C38.3198 1.17101 38.429 1.37398 38.3822 1.57694L36.9306 6.51059C36.8681 6.71356 36.9774 6.91653 37.1803 6.97898C37.9764 7.22878 38.7724 7.52543 39.5372 7.85329C39.7245 7.94697 39.8182 8.18116 39.7246 8.36852Z" />
      <path fill={color || ''} d="M14.9693 20.7027L4.82355 14.3951C4.65185 14.2858 4.58942 14.0516 4.69868 13.8643C5.8069 12.1313 7.10243 10.5075 8.53844 9.03993C8.67892 8.8838 8.92866 8.8838 9.08475 9.03993L17.5135 17.5021C17.654 17.6426 17.654 17.8924 17.5135 18.0329C16.7643 18.8135 16.0775 19.6722 15.4843 20.5934C15.3751 20.7495 15.141 20.812 14.9693 20.7027Z" />
      <path fill={color || ''} d="M21.5872 7.82214L23.6476 13.2554C23.7256 13.4428 23.6163 13.6613 23.429 13.7394C22.3989 14.1609 21.4155 14.6606 20.479 15.2695C20.3073 15.3787 20.0731 15.3319 19.9639 15.1602L16.9202 10.6637C16.7953 10.4919 16.5612 10.4451 16.3895 10.57C15.7183 11.0384 15.0627 11.5536 14.4384 12.0844C14.2823 12.225 14.0482 12.2093 13.9077 12.0532L10.2396 7.93144C10.0991 7.77531 10.1147 7.5255 10.2708 7.38499C11.8317 6.02667 13.5175 4.8401 15.3125 3.82527C15.4998 3.71598 15.7339 3.79404 15.8276 3.9814L18.2781 8.50911C18.3718 8.69647 18.6059 8.75892 18.7932 8.66524C19.5424 8.27492 20.2917 7.93144 21.0721 7.61918C21.2906 7.5255 21.5091 7.63479 21.5872 7.82214Z" />
      <path fill={color || ''} d="M12.7836 34.0205L1.15506 36.7371C0.952147 36.784 0.749234 36.6591 0.702408 36.4561C0.265362 34.442 0.03123 32.3811 1.23978e-05 30.3359C1.23978e-05 30.1173 0.171708 29.9456 0.374622 29.9456L12.3153 29.9612C12.5183 29.9612 12.69 30.1329 12.69 30.3359C12.7056 31.4288 12.8304 32.5061 13.0646 33.5833C13.1114 33.7707 12.9865 33.9737 12.7836 34.0205Z" />
      <path fill={color || ''} d="M8.36642 20.2501L13.6578 22.6389C13.8451 22.7169 13.9231 22.9511 13.8451 23.1385C13.408 24.1533 13.0803 25.215 12.8461 26.2923C12.7993 26.4952 12.612 26.6201 12.4091 26.5889L7.08649 25.5585C6.88358 25.5116 6.68067 25.6521 6.63384 25.8551C6.49336 26.667 6.3841 27.4788 6.32166 28.3063C6.30605 28.5093 6.13436 28.6654 5.91583 28.6654L0.405934 28.3531C0.20302 28.3375 0.0313206 28.1658 0.0469294 27.9472C0.187408 25.8863 0.546413 23.8567 1.10833 21.8582C1.17076 21.6553 1.37368 21.546 1.57659 21.5928L6.50897 23.0448C6.71188 23.1072 6.91479 22.998 6.97723 22.795C7.22697 21.9987 7.52354 21.2025 7.85132 20.4375C7.94497 20.2501 8.17911 20.1564 8.36642 20.2501Z" />
      <path fill={color || ''} d="M47.2164 25.9804L58.845 23.2637C59.0479 23.2169 59.2508 23.3418 59.2976 23.5448C59.7347 25.5588 59.9688 27.6197 60 29.665C60 29.8836 59.8283 30.0553 59.6254 30.0553L47.6847 30.0397C47.4818 30.0397 47.3101 29.8679 47.3101 29.665C47.2944 28.5721 47.1696 27.4948 46.9354 26.4175C46.8886 26.2302 47.0135 26.0272 47.2164 25.9804Z" />
      <path fill={color || ''} d="M51.6336 39.7504L46.3422 37.3616C46.1549 37.2835 46.0769 37.0493 46.1549 36.862C46.592 35.8472 46.9198 34.7855 47.1539 33.7082C47.2007 33.5052 47.388 33.3803 47.5909 33.4116L52.9135 34.442C53.1165 34.4888 53.3194 34.3483 53.3662 34.1454C53.5067 33.3335 53.6159 32.5216 53.6784 31.6942C53.694 31.4912 53.8657 31.3351 54.0842 31.3351L59.5941 31.6473C59.797 31.6629 59.9687 31.8347 59.9531 32.0532C59.8126 34.1141 59.4536 36.1438 58.8917 38.1422C58.8293 38.3452 58.6264 38.4545 58.4234 38.4077L53.4911 36.9557C53.2881 36.8932 53.0852 37.0025 53.0228 37.2055C52.7731 38.0017 52.4765 38.798 52.1487 39.563C52.0551 39.7504 51.8209 39.844 51.6336 39.7504Z" />
    </svg>
  );
}
