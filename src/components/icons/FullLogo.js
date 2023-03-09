import React from 'react'

function FullLogo(props) {
  const { color, width, height } = props
  return (
    <svg
      width={width || 200}
      height={height || 44}
      viewBox="0 0 200 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_443_1754)">
        <path
          d="M12.232 18.4549C15.1173 17.4347 16.4686 14.3742 16.4686 11.3953C16.4686 9.08974 15.9606 4.81521 12.0695 4.81521H8.42221C8.26054 4.81521 8.1055 4.8797 7.99118 4.99449C7.87687 5.10928 7.81266 5.26498 7.81266 5.42732V19.5261C7.81461 19.5743 7.82753 19.6215 7.85042 19.6639C7.87332 19.7063 7.90558 19.7429 7.94474 19.7709C7.98521 19.7933 8.03064 19.805 8.07682 19.805C8.12299 19.805 8.16843 19.7933 8.2089 19.7709L12.232 18.4549ZM24.0679 10.6812C24.0679 17.751 19.7298 20.5055 15.6355 21.9949L8.03614 24.7392C7.97096 24.7623 7.9145 24.8051 7.87448 24.8617C7.83447 24.9183 7.8129 24.986 7.81266 25.0554V42.8064C7.81267 42.8863 7.79685 42.9654 7.76609 43.0391C7.73534 43.1128 7.69026 43.1796 7.63352 43.2357C7.57678 43.2917 7.50949 43.3358 7.43559 43.3654C7.36169 43.3951 7.28268 43.4097 7.20312 43.4083H0.609545C0.529979 43.4097 0.450975 43.3951 0.377075 43.3654C0.303174 43.3358 0.235884 43.2917 0.179143 43.2357C0.122402 43.1796 0.0773251 43.1128 0.0465685 43.0391C0.015812 42.9654 -1.1425e-05 42.8863 6.18919e-09 42.8064V1.1834C-1.1425e-05 1.1035 0.015812 1.02438 0.0465685 0.950684C0.0773251 0.876985 0.122402 0.810183 0.179143 0.754156C0.235884 0.698129 0.303174 0.654004 0.377075 0.624362C0.450975 0.594721 0.529979 0.580153 0.609545 0.581507H12.3641C20.1463 0.581507 24.0679 3.64202 24.0679 10.6812Z"
          fill={color || '#1f4d25'}
        />
        <path
          d="M45.0473 10.0895C45.0473 8.04915 44.5393 4.81521 40.9022 4.81521H37.3667C37.2871 4.8152 37.2083 4.83111 37.1349 4.86199C37.0615 4.89288 36.995 4.93812 36.9392 4.9951C36.8834 5.05208 36.8394 5.11965 36.8099 5.19385C36.7804 5.26806 36.7659 5.34742 36.7673 5.42732V16.9349C36.7653 17.0292 36.7854 17.1226 36.826 17.2077C36.8666 17.2927 36.9265 17.367 37.0009 17.4245C37.0753 17.481 37.1617 17.5195 37.2533 17.5372C37.3449 17.5549 37.4393 17.5513 37.5292 17.5266L40.9022 16.5778C43.8789 15.731 45.0473 12.8338 45.0473 10.0895ZM47.77 18.6283C47.635 18.7145 47.539 18.8504 47.5029 19.0069C47.4668 19.1634 47.4934 19.3279 47.577 19.4649C51.4579 25.8307 53.1444 37.2057 53.2663 42.786C53.2696 42.8672 53.256 42.9482 53.2262 43.0237C53.1965 43.0993 53.1513 43.1677 53.0936 43.2247C53.0374 43.284 52.9695 43.3309 52.8944 43.3625C52.8192 43.3941 52.7382 43.4097 52.6567 43.4083H46.8556C46.7051 43.4088 46.5599 43.3525 46.4488 43.2504C46.3377 43.1483 46.269 43.0081 46.2563 42.8574C45.2403 32.2884 43.2084 26.1266 41.7353 23.0049C41.5022 22.5062 41.0961 22.1099 40.5931 21.8902C40.09 21.6705 39.5245 21.6425 39.0024 21.8113L38.1591 22.0867C37.7536 22.2219 37.4009 22.4819 37.151 22.8299C36.9012 23.1778 36.7669 23.596 36.7673 24.025V42.8064C36.7673 42.8863 36.7514 42.9654 36.7207 43.0391C36.6899 43.1128 36.6449 43.1796 36.5881 43.2357C36.5314 43.2917 36.4641 43.3358 36.3902 43.3654C36.3163 43.3951 36.2373 43.4097 36.1577 43.4083H29.554C29.4745 43.4097 29.3954 43.3951 29.3215 43.3654C29.2476 43.3358 29.1803 43.2917 29.1236 43.2357C29.0668 43.1796 29.0218 43.1128 28.991 43.0391C28.9602 42.9654 28.9444 42.8863 28.9444 42.8064V1.1834C28.9444 1.1035 28.9602 1.02438 28.991 0.950684C29.0218 0.876985 29.0668 0.810183 29.1236 0.754156C29.1803 0.698129 29.2476 0.654004 29.3215 0.624362C29.3954 0.594721 29.4745 0.580153 29.554 0.581507H41.5321C48.8063 0.581507 52.4637 3.64202 52.4637 9.95689C52.5127 11.6896 52.1043 13.4044 51.28 14.9274C50.4556 16.4504 49.2447 17.7272 47.77 18.6283Z"
          fill={color || '#1f4d25'}
        />
        <path
          d="M67.1137 38.5625C67.1137 38.7248 67.1779 38.8805 67.2922 38.9953C67.4065 39.1101 67.5616 39.1746 67.7232 39.1746H77.7202C77.7998 39.1746 77.8785 39.1905 77.9519 39.2214C78.0253 39.2522 78.0919 39.2975 78.1477 39.3545C78.2035 39.4114 78.2474 39.479 78.2769 39.5532C78.3064 39.6274 78.321 39.7068 78.3197 39.7867V42.7962C78.321 42.8761 78.3064 42.9554 78.2769 43.0297C78.2474 43.1039 78.2035 43.1714 78.1477 43.2284C78.0919 43.2854 78.0253 43.3306 77.9519 43.3615C77.8785 43.3924 77.7998 43.4083 77.7202 43.4083H59.9106C59.8305 43.4083 59.7513 43.3925 59.6774 43.3617C59.6034 43.3309 59.5362 43.2858 59.4795 43.229C59.4229 43.1722 59.378 43.1047 59.3474 43.0304C59.3168 42.9562 59.301 42.8766 59.301 42.7962V1.18338C59.301 1.103 59.3168 1.0234 59.3474 0.949137C59.378 0.874873 59.4229 0.807408 59.4795 0.750569C59.5362 0.69373 59.6034 0.648641 59.6774 0.61788C59.7513 0.587119 59.8305 0.571289 59.9106 0.571289H75.5156C75.6773 0.571289 75.8323 0.635778 75.9466 0.750569C76.061 0.865361 76.1252 1.02104 76.1252 1.18338V4.19289C76.1252 4.35523 76.061 4.51092 75.9466 4.62571C75.8323 4.74051 75.6773 4.80499 75.5156 4.80499H67.7232C67.5616 4.80499 67.4065 4.86948 67.2922 4.98427C67.1779 5.09907 67.1137 5.25476 67.1137 5.4171V15.0781C67.1137 15.2405 67.1779 15.3962 67.2922 15.5109C67.4065 15.6257 67.5616 15.6902 67.7232 15.6902H76.2878C76.4494 15.6902 76.6045 15.7547 76.7188 15.8695C76.8331 15.9843 76.8973 16.14 76.8973 16.3023V19.3628C76.8973 19.5252 76.8331 19.6809 76.7188 19.7957C76.6045 19.9105 76.4494 19.9749 76.2878 19.9749H67.7232C67.5616 19.9749 67.4065 20.0394 67.2922 20.1542C67.1779 20.269 67.1137 20.4247 67.1137 20.587V38.5625Z"
          fill={color || '#1f4d25'}
        />
        <path
          d="M104.389 31.6151C104.389 39.7765 100.457 43.9898 93.7316 43.9898C89.8856 44.054 86.1403 42.7535 83.1555 40.3172C83.0368 40.2127 82.9631 40.0661 82.9498 39.9082C82.9366 39.7503 82.9848 39.5934 83.0844 39.4704L85.1773 36.869C85.2678 36.7533 85.3973 36.6749 85.5414 36.6486C85.6855 36.6223 85.8343 36.6499 85.9595 36.7262C87.138 37.4607 90.4805 39.3378 93.7316 39.3378C95.987 39.3378 97.9579 38.032 97.9579 34.6042C97.9579 27.1774 83.6127 23.9026 83.6127 10.8036C83.6127 5.18248 87.3209 0 93.7722 0C97.2863 0.0216652 100.69 1.23296 103.434 3.43799C103.556 3.53958 103.633 3.68474 103.65 3.84277C103.667 4.00079 103.623 4.1593 103.525 4.28473C103.525 4.28473 102.316 5.88639 101.422 6.96777C101.322 7.08781 101.178 7.16353 101.022 7.17878C100.867 7.19403 100.711 7.1476 100.589 7.04939C98.6649 5.54337 96.3456 4.63238 93.9144 4.42756C93.3028 4.38488 92.6892 4.47635 92.1163 4.69563C91.5434 4.9149 91.0248 5.25673 90.5966 5.69738C90.1684 6.13804 89.8408 6.66697 89.6366 7.24747C89.4323 7.82798 89.3563 8.44616 89.4138 9.05913C89.4138 15.9045 104.43 20.0362 104.43 31.6151"
          fill={color || '#1f4d25'}
        />
        <path
          d="M111.287 43.4083V0.581512H111.897H119.1V43.4083H118.49H111.287Z"
          fill={color || '#1f4d25'}
        />
        <path
          d="M144.499 22.0357C144.499 11.3851 140.892 4.8764 136.534 4.8764H134.888C134.726 4.8764 134.571 4.9409 134.457 5.05569C134.342 5.17049 134.278 5.32617 134.278 5.48851V38.5625C134.278 38.7248 134.342 38.8805 134.457 38.9953C134.571 39.1101 134.726 39.1746 134.888 39.1746H136.534C140.892 39.1746 144.499 32.6557 144.499 22.0153M151.986 22.0153C151.986 36.5017 143.635 43.4389 136.534 43.4389H127.065C126.985 43.4389 126.907 43.423 126.833 43.3921C126.76 43.3612 126.693 43.316 126.637 43.259C126.582 43.202 126.538 43.1345 126.508 43.0603C126.479 42.9861 126.464 42.9067 126.466 42.8268V1.18338C126.464 1.10349 126.479 1.02412 126.508 0.949915C126.538 0.875707 126.582 0.808138 126.637 0.751161C126.693 0.694184 126.76 0.648935 126.833 0.618051C126.907 0.587167 126.985 0.571278 127.065 0.571289H136.534C143.645 0.571289 151.986 7.50846 151.986 21.9949"
          fill={color || '#1f4d25'}
        />
        <path
          d="M157.787 43.4083V0.581512H158.397H165.6V43.4083H164.99H157.787Z"
          fill={color || '#1f4d25'}
        />
        <path
          d="M192.197 21.9745C192.197 11.2219 190.166 4.48874 185.777 4.48874C181.388 4.48874 179.315 11.2219 179.315 21.9745C179.315 32.7271 181.347 39.501 185.736 39.501C190.125 39.501 192.157 32.7373 192.157 21.9745M199.959 21.9745C199.959 36.6139 192.848 43.7041 185.736 43.7041C178.624 43.7041 171.513 36.6139 171.513 21.9745C171.513 7.33502 178.624 0.295837 185.736 0.295837C192.848 0.295837 199.959 7.32482 199.959 21.9745Z"
          fill={color || '#1f4d25'}
        />
      </g>
      <defs>
        <clipPath id="clip0_443_1754">
          <rect width="200" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FullLogo
