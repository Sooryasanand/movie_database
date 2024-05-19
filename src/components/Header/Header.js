function Header() {
  return (
    <div class="sm:p-3 p-4 flex flex-row bg-[#1f2324] items-center sm:h-1/10">
      <div class="flex flex-row grow">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 md:invisible"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
        <svg
          fill="#ffffff"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 356.859 356.859"
          stroke="#ffffff"
          width="25px"
          height="25px"
          class="content-center sm:mt-2 sm:mr-5 md:visible invisible"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M9.849,130.711l341.726-60.257l-1.203-6.856l-8.612-48.845L0,75.016l1.347,7.629l7.265,41.216l1.208,6.856l0.005-0.001 v188.596c0,12.534,10.255,22.794,22.794,22.794h301.445c12.534,0,22.794-10.255,22.794-22.794v-188.6H9.849z M336.174,23.606 l6.077,34.468l-40.09-28.472L336.174,23.606z M287.36,32.212l47.939,34.043l-41.216,7.265l-47.939-34.043L287.36,32.212z M230.252,42.283l47.939,34.043l-41.211,7.265l-47.939-34.043L230.252,42.283z M173.153,52.349l47.939,34.043l-41.216,7.265 l-47.939-34.043L173.153,52.349z M116.045,62.42l47.939,34.043l-41.216,7.265L74.829,69.686L116.045,62.42z M58.941,72.492 l47.939,34.043L65.664,113.8L17.725,79.757L58.941,72.492z M8.904,87.944L49.772,116.6l-34.877,6.149L8.904,87.944z M340.224,138.458l-41.298,41.851h-41.851l41.298-41.851H340.224z M282.235,138.458l-41.298,41.851h-41.851l41.298-41.851H282.235 z M224.246,138.458l-41.298,41.851h-41.846l41.298-41.851H224.246z M166.262,138.458l-41.298,41.851H83.113l41.298-41.851H166.262 z M15.857,174.472v-36.014h35.538L15.857,174.472z M66.427,138.458h41.851L66.98,180.308H25.129L66.427,138.458z M333.619,321.856 H31.846v-115.62h301.773V321.856z M350.817,180.308h-35.753l35.753-35.804V180.308z"></path>{" "}
                <rect
                  x="221.834"
                  y="216.829"
                  width="101.192"
                  stroke="#ffffff"
                  stroke-width="2"
                  height="30.346"
                ></rect>{" "}
                <rect
                  x="221.834"
                  y="258.266"
                  width="101.192"
                  stroke="#ffffff"
                  stroke-width="2"
                  height="52.997"
                ></rect>{" "}
                <rect
                  x="96.036"
                  y="216.829"
                  width="114.708"
                  stroke="#ffffff"
                  stroke-width="2"
                  height="30.346"
                ></rect>{" "}
                <rect
                  x="42.44"
                  y="216.829"
                  width="42.506"
                  stroke="#ffffff"
                  stroke-width="2"
                  height="94.433"
                ></rect>{" "}
                <rect
                  x="96.036"
                  y="258.266"
                  width="114.708"
                  stroke="#ffffff"
                  stroke-width="2"
                  height="52.997"
                ></rect>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 class="font-sans font-bold text-xl text-white text-transform:uppercase sm:text-2xl content-center">
          Movie Tracker
        </h1>
        <form class="ml-10 w-1/4 md:flex flex-row items-center rounded bg-[#303435] invisible md:visible">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400 ml-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="search"
            id="default-search"
            class="form-input w-full h-10 bg-[#303435] border-none text-white"
            placeholder="Search"
            required
          />
        </form>
      </div>
      <div class="flex flex-row hover:cursor-pointer">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Header;
