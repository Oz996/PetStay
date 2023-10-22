import React from "react";

interface props {
  className?: string;
  height: string;
  width: string;
}

const Logo = ({ className, height, width }: props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5324 1.44877C14.7777 -0.149052 11.8698 -0.55992 10.1652 0.900945L0.789709 9.43788C-0.664238 10.7618 -0.0124687 12.9531 1.94284 13.4096L3.54719 13.7748C7.60822 14.7335 11.7194 12.5422 12.8224 8.89005L13.8251 5.37484C13.9755 4.87267 14.527 4.59876 15.0284 4.73572C15.5799 4.87267 15.8807 5.37484 15.7303 5.83136L14.878 8.75309C16.5826 7.88571 18.5379 7.38353 20.6436 7.38353H23L16.5324 1.44877Z"
        fill="#23C28D"
      />
      <path
        d="M44.2343 1.44877C45.9128 -0.149052 48.6942 -0.55992 50.3248 0.900945L59.2446 9.43788C60.6354 10.7618 60.0119 12.9531 58.1416 13.4096L56.607 13.7748C52.7226 14.7335 48.7902 12.5422 47.7351 8.89005L46.776 5.37484C46.6321 4.87267 46.1046 4.59876 45.625 4.73572C45.1455 4.87267 44.8098 5.37484 44.9537 5.83136L45.7689 8.75309C44.1384 7.88571 42.2681 7.38353 40.2539 7.38353H38L44.2343 1.44877Z"
        fill="#23C28D"
      />
      <path
        d="M49.5748 24.0787V19.3071C49.5748 14.2047 45.1699 10 39.8245 10H20.225C14.8796 10 10.4747 14.2047 10.4747 19.3071V24.0787C8.94038 26.0157 8 28.4724 8 31.1654V38.2047C8 44.0157 12.4049 48.8819 18.2452 49.874C18.2947 49.874 18.2947 49.874 18.3442 49.874C18.4927 49.9213 18.6412 49.9213 18.8391 49.9213C19.1361 49.9685 19.4331 49.9685 19.73 50.0157C19.829 50.0157 19.928 50.0157 19.9775 50.0157C20.0765 50.0157 20.126 50.0157 20.225 50.0157H20.4724H24.1845C25.7683 51.2913 27.748 52 29.9753 52C32.2025 52 34.1822 51.2441 35.766 50.0157H39.5276H39.775C39.874 50.0157 39.9235 50.0157 40.0225 50.0157C40.1215 50.0157 40.2205 50.0157 40.27 50.0157C40.5669 50.0157 40.8639 49.9685 41.1609 49.9213C41.3093 49.9213 41.4578 49.874 41.6558 49.874C41.7053 49.874 41.7053 49.874 41.7548 49.874C47.5456 48.8819 52 44.0157 52 38.2047V31.1654C52 28.5197 51.1091 26.063 49.5748 24.0787ZM39.1316 18.315C40.9134 18.315 42.3982 19.7323 42.3982 21.4331C42.3982 23.1339 40.9134 24.5512 39.1316 24.5512C37.3498 24.5512 35.865 23.1339 35.865 21.4331C35.9145 19.685 37.3498 18.315 39.1316 18.315ZM20.8189 18.315C22.6007 18.315 24.0855 19.7323 24.0855 21.4331C24.0855 23.1339 22.6007 24.5512 20.8189 24.5512C19.0371 24.5512 17.5523 23.1339 17.5523 21.4331C17.6018 19.685 19.0371 18.315 20.8189 18.315ZM29.9753 50.063C26.3127 50.063 23.2441 47.3228 23.0461 43.7795C25.3228 43.7795 27.4511 43.0236 29.1339 41.6535V46.6614C29.1339 47.1339 29.4803 47.5118 30.0247 47.5118C30.5692 47.5118 30.9156 47.1811 30.9156 46.6614V41.6535C32.5984 42.9764 34.7267 43.7795 37.0034 43.7795C36.7064 47.2756 33.6378 50.063 29.9753 50.063ZM46.6547 34.1417C46.6547 38.7717 42.6952 42.5512 37.8448 42.5512C34.4297 42.5512 31.5096 40.7087 30.0247 37.9685C28.5399 40.6614 25.6198 42.5512 22.2047 42.5512C17.3543 42.5512 13.3948 38.7717 13.3948 34.1417V31.4016C13.3948 30.8819 13.7908 30.4567 14.3847 30.4567C14.9786 30.4567 15.3746 30.8346 15.3746 31.4016V34.1417C15.3746 37.7323 18.4432 40.6614 22.2047 40.6614C25.6693 40.6614 28.4904 38.2047 28.9854 34.9921C28.9359 34.9449 28.9359 34.9449 28.8864 34.8976L24.9269 29.1811C24.3825 28.4252 25.0259 27.5276 26.0652 27.5276H33.9843C34.9741 27.5276 35.6175 28.4252 35.1226 29.1811L31.1631 34.8976C31.1631 34.9449 31.1136 34.9449 31.0641 34.9921C31.5591 38.2047 34.3802 40.6614 37.8448 40.6614C41.6063 40.6614 44.6749 37.7323 44.6749 34.1417V31.4016C44.6749 30.8819 45.0709 30.4567 45.6648 30.4567C46.2587 30.4567 46.6547 30.8346 46.6547 31.4016V34.1417Z"
        fill="#23C28D"
      />
    </svg>
  );
};

export default Logo;
