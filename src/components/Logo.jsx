
const Logo = (props) => {
  return (
    <>
      <div className="flex flex-shrink-0 items-center w-[30%]">
        <svg className="h-8 w-auto"
          width="42"
          height="33"
          viewBox="0 0 42 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.35938 17C1.95326 17 1.56378 16.8387 1.27662 16.5515C0.989453 16.2643 0.828125 15.8749 0.828125 15.4688C0.828125 15.0626 0.989453 14.6732 1.27662 14.386C1.56378 14.0988 1.95326 13.9375 2.35938 13.9375H7.71875C8.12486 13.9375 8.51434 13.7762 8.80151 13.489C9.08867 13.2018 9.25 12.8124 9.25 12.4062C9.25 12.0001 9.08867 11.6107 8.80151 11.3235C8.51434 11.0363 8.12486 10.875 7.71875 10.875H4.65625C3.43791 10.875 2.26947 10.391 1.40798 9.52952C0.546483 8.66803 0.0625 7.49959 0.0625 6.28125C0.0625 5.06291 0.546483 3.89447 1.40798 3.03298C2.26947 2.17148 3.43791 1.6875 4.65625 1.6875C4.65625 1.28139 4.81758 0.891908 5.10474 0.604743C5.39191 0.317578 5.78139 0.15625 6.1875 0.15625C6.59361 0.15625 6.98309 0.317578 7.27026 0.604743C7.55742 0.891908 7.71875 1.28139 7.71875 1.6875H9.25C9.65611 1.6875 10.0456 1.84883 10.3328 2.13599C10.6199 2.42316 10.7812 2.81264 10.7812 3.21875C10.7812 3.62486 10.6199 4.01434 10.3328 4.30151C10.0456 4.58867 9.65611 4.75 9.25 4.75H4.65625C4.25014 4.75 3.86066 4.91133 3.57349 5.19849C3.28633 5.48566 3.125 5.87514 3.125 6.28125C3.125 6.68736 3.28633 7.07684 3.57349 7.36401C3.86066 7.65117 4.25014 7.8125 4.65625 7.8125H7.71875C8.93709 7.8125 10.1055 8.29648 10.967 9.15798C11.8285 10.0195 12.3125 11.1879 12.3125 12.4062C12.3125 13.6246 11.8285 14.793 10.967 15.6545C10.1055 16.516 8.93709 17 7.71875 17C7.71875 17.4061 7.55742 17.7956 7.27026 18.0828C6.98309 18.3699 6.59361 18.5312 6.1875 18.5312C5.78139 18.5312 5.39191 18.3699 5.10474 18.0828C4.81758 17.7956 4.65625 17.4061 4.65625 17H2.35938ZM39.875 1.6875H15.375C14.9689 1.6875 14.5794 1.84883 14.2922 2.13599C14.0051 2.42316 13.8438 2.81264 13.8438 3.21875C13.8438 3.62486 14.0051 4.01434 14.2922 4.30151C14.5794 4.58867 14.9689 4.75 15.375 4.75H38.3438V10.875H16.9062C16.5001 10.875 16.1107 11.0363 15.8235 11.3235C15.5363 11.6107 15.375 12.0001 15.375 12.4062C15.375 12.8124 15.5363 13.2018 15.8235 13.489C16.1107 13.7762 16.5001 13.9375 16.9062 13.9375H27.625V20.0625H12.3125C11.9064 20.0625 11.5169 20.2238 11.2297 20.511C10.9426 20.7982 10.7812 21.1876 10.7812 21.5938C10.7812 21.9999 10.9426 22.3893 11.2297 22.6765C11.5169 22.9637 11.9064 23.125 12.3125 23.125H27.625V29.25H4.65625V21.5938C4.65625 21.1876 4.49492 20.7982 4.20776 20.511C3.92059 20.2238 3.53111 20.0625 3.125 20.0625C2.71889 20.0625 2.32941 20.2238 2.04224 20.511C1.75508 20.7982 1.59375 21.1876 1.59375 21.5938V29.25C1.59375 30.0622 1.91641 30.8412 2.49074 31.4155C3.06507 31.9898 3.84402 32.3125 4.65625 32.3125H38.3438C39.156 32.3125 39.9349 31.9898 40.5093 31.4155C41.0836 30.8412 41.4062 30.0622 41.4062 29.25V3.21875C41.4062 2.81264 41.2449 2.42316 40.9578 2.13599C40.6706 1.84883 40.2811 1.6875 39.875 1.6875Z"
            fill={props.logoBg}
          />
        </svg>

        <svg
          className="h-8 w-auto"
          width="113"
          height="60"
          viewBox="0 0 113 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.79688 28V13.7227H8.82422V28H5.79688ZM18.3848 16.877C19.5501 16.877 20.4876 17.196 21.1973 17.834C21.9069 18.4655 22.2617 19.4811 22.2617 20.8809V28H19.2832V21.623C19.2832 20.8418 19.14 20.2526 18.8535 19.8555C18.5736 19.4583 18.1309 19.2598 17.5254 19.2598C16.6139 19.2598 15.9922 19.569 15.6602 20.1875C15.3281 20.806 15.1621 21.6979 15.1621 22.8633V28H12.1836V17.082H14.459L14.8594 18.4785H15.0254C15.2598 18.1009 15.5495 17.7949 15.8945 17.5605C16.2461 17.3262 16.6335 17.1536 17.0566 17.043C17.4863 16.9323 17.929 16.877 18.3848 16.877ZM27.9258 28L23.7656 17.082H26.8809L28.9902 23.3027C29.1074 23.6673 29.1986 24.0514 29.2637 24.4551C29.3353 24.8587 29.3841 25.2201 29.4102 25.5391H29.4883C29.5078 25.194 29.5534 24.8262 29.625 24.4355C29.7031 24.0449 29.804 23.6673 29.9277 23.3027L32.0273 17.082H35.1426L30.9824 28H27.9258ZM46.6367 22.5215C46.6367 23.4329 46.513 24.2402 46.2656 24.9434C46.0247 25.6465 45.6699 26.2422 45.2012 26.7305C44.7389 27.2122 44.179 27.5768 43.5215 27.8242C42.8704 28.0716 42.1348 28.1953 41.3145 28.1953C40.5462 28.1953 39.8398 28.0716 39.1953 27.8242C38.5573 27.5768 38.0007 27.2122 37.5254 26.7305C37.0566 26.2422 36.6921 25.6465 36.4316 24.9434C36.1777 24.2402 36.0508 23.4329 36.0508 22.5215C36.0508 21.3105 36.2656 20.2852 36.6953 19.4453C37.125 18.6055 37.737 17.9674 38.5312 17.5312C39.3255 17.0951 40.2728 16.877 41.373 16.877C42.3952 16.877 43.3001 17.0951 44.0879 17.5312C44.8822 17.9674 45.5039 18.6055 45.9531 19.4453C46.4089 20.2852 46.6367 21.3105 46.6367 22.5215ZM39.0879 22.5215C39.0879 23.2376 39.166 23.8398 39.3223 24.3281C39.4785 24.8164 39.7227 25.1842 40.0547 25.4316C40.3867 25.679 40.8197 25.8027 41.3535 25.8027C41.8809 25.8027 42.3073 25.679 42.6328 25.4316C42.9648 25.1842 43.2057 24.8164 43.3555 24.3281C43.5117 23.8398 43.5898 23.2376 43.5898 22.5215C43.5898 21.7988 43.5117 21.1999 43.3555 20.7246C43.2057 20.2428 42.9648 19.8815 42.6328 19.6406C42.3008 19.3997 41.8678 19.2793 41.334 19.2793C40.5462 19.2793 39.9733 19.5495 39.6152 20.0898C39.2637 20.6302 39.0879 21.4408 39.0879 22.5215ZM52.0762 17.082V28H49.0977V17.082H52.0762ZM50.5918 12.8047C51.0345 12.8047 51.4154 12.9089 51.7344 13.1172C52.0534 13.319 52.2129 13.6999 52.2129 14.2598C52.2129 14.8132 52.0534 15.1973 51.7344 15.4121C51.4154 15.6204 51.0345 15.7246 50.5918 15.7246C50.1426 15.7246 49.7585 15.6204 49.4395 15.4121C49.127 15.1973 48.9707 14.8132 48.9707 14.2598C48.9707 13.6999 49.127 13.319 49.4395 13.1172C49.7585 12.9089 50.1426 12.8047 50.5918 12.8047ZM59.6445 28.1953C58.5638 28.1953 57.6426 28 56.8809 27.6094C56.1191 27.2122 55.5397 26.6003 55.1426 25.7734C54.7454 24.9466 54.5469 23.8887 54.5469 22.5996C54.5469 21.265 54.7715 20.1777 55.2207 19.3379C55.6764 18.4915 56.3047 17.8698 57.1055 17.4727C57.9128 17.0755 58.847 16.877 59.9082 16.877C60.6634 16.877 61.3145 16.9518 61.8613 17.1016C62.4147 17.2448 62.8965 17.4173 63.3066 17.6191L62.4277 19.9238C61.959 19.735 61.5228 19.582 61.1191 19.4648C60.7155 19.3411 60.3118 19.2793 59.9082 19.2793C59.3874 19.2793 58.9544 19.403 58.6094 19.6504C58.2643 19.8913 58.0072 20.2559 57.8379 20.7441C57.6686 21.2324 57.584 21.8444 57.584 22.5801C57.584 23.3027 57.6751 23.9017 57.8574 24.377C58.0397 24.8522 58.3034 25.207 58.6484 25.4414C58.9935 25.6693 59.4134 25.7832 59.9082 25.7832C60.5267 25.7832 61.0768 25.7018 61.5586 25.5391C62.0404 25.3698 62.5091 25.1354 62.9648 24.8359V27.3848C62.5091 27.6712 62.0306 27.8763 61.5293 28C61.0345 28.1302 60.4062 28.1953 59.6445 28.1953ZM70.0059 16.877C71.015 16.877 71.8841 17.0723 72.6133 17.4629C73.3424 17.847 73.9056 18.4069 74.3027 19.1426C74.6999 19.8783 74.8984 20.7767 74.8984 21.8379V23.2832H67.8574C67.89 24.123 68.1406 24.7839 68.6094 25.2656C69.0846 25.7409 69.7422 25.9785 70.582 25.9785C71.2786 25.9785 71.9167 25.9069 72.4961 25.7637C73.0755 25.6204 73.6712 25.4056 74.2832 25.1191V27.4238C73.7428 27.6908 73.1764 27.8861 72.584 28.0098C71.998 28.1335 71.2852 28.1953 70.4453 28.1953C69.3516 28.1953 68.3815 27.9935 67.5352 27.5898C66.6953 27.1862 66.0345 26.571 65.5527 25.7441C65.0775 24.9173 64.8398 23.8757 64.8398 22.6191C64.8398 21.3431 65.0547 20.2819 65.4844 19.4355C65.9206 18.5827 66.526 17.9447 67.3008 17.5215C68.0755 17.0918 68.9772 16.877 70.0059 16.877ZM70.0254 18.9961C69.446 18.9961 68.9642 19.1816 68.5801 19.5527C68.2025 19.9238 67.9844 20.5065 67.9258 21.3008H72.1055C72.099 20.8581 72.0176 20.4642 71.8613 20.1191C71.7116 19.7741 71.4837 19.5007 71.1777 19.2988C70.8783 19.097 70.4941 18.9961 70.0254 18.9961ZM11.2168 39.9824H16.8809V47.3848C16.1322 47.6322 15.3542 47.8307 14.5469 47.9805C13.7396 48.1237 12.8249 48.1953 11.8027 48.1953C10.3835 48.1953 9.17904 47.9154 8.18945 47.3555C7.19987 46.7956 6.44792 45.9688 5.93359 44.875C5.41927 43.7812 5.16211 42.4368 5.16211 40.8418C5.16211 39.3444 5.44857 38.0488 6.02148 36.9551C6.60091 35.8613 7.44401 35.015 8.55078 34.416C9.66406 33.8171 11.0215 33.5176 12.623 33.5176C13.3783 33.5176 14.1237 33.599 14.8594 33.7617C15.5951 33.9245 16.2624 34.1361 16.8613 34.3965L15.8555 36.8184C15.4193 36.597 14.9212 36.4115 14.3613 36.2617C13.8014 36.112 13.2155 36.0371 12.6035 36.0371C11.7246 36.0371 10.9596 36.2389 10.3086 36.6426C9.66406 37.0462 9.16276 37.6126 8.80469 38.3418C8.45312 39.0645 8.27734 39.9173 8.27734 40.9004C8.27734 41.8314 8.4043 42.6582 8.6582 43.3809C8.91211 44.097 9.3125 44.6602 9.85938 45.0703C10.4062 45.474 11.1191 45.6758 11.998 45.6758C12.4277 45.6758 12.7891 45.6562 13.082 45.6172C13.3815 45.5716 13.6615 45.526 13.9219 45.4805V42.502H11.2168V39.9824ZM24.5566 36.877C25.5658 36.877 26.4349 37.0723 27.1641 37.4629C27.8932 37.847 28.4564 38.4069 28.8535 39.1426C29.2507 39.8783 29.4492 40.7767 29.4492 41.8379V43.2832H22.4082C22.4408 44.123 22.6914 44.7839 23.1602 45.2656C23.6354 45.7409 24.293 45.9785 25.1328 45.9785C25.8294 45.9785 26.4674 45.9069 27.0469 45.7637C27.6263 45.6204 28.222 45.4056 28.834 45.1191V47.4238C28.2936 47.6908 27.7272 47.8861 27.1348 48.0098C26.5488 48.1335 25.8359 48.1953 24.9961 48.1953C23.9023 48.1953 22.9323 47.9935 22.0859 47.5898C21.2461 47.1862 20.5853 46.571 20.1035 45.7441C19.6283 44.9173 19.3906 43.8757 19.3906 42.6191C19.3906 41.3431 19.6055 40.2819 20.0352 39.4355C20.4714 38.5827 21.0768 37.9447 21.8516 37.5215C22.6263 37.0918 23.528 36.877 24.5566 36.877ZM24.5762 38.9961C23.9967 38.9961 23.515 39.1816 23.1309 39.5527C22.7533 39.9238 22.5352 40.5065 22.4766 41.3008H26.6562C26.6497 40.8581 26.5684 40.4642 26.4121 40.1191C26.2624 39.7741 26.0345 39.5007 25.7285 39.2988C25.429 39.097 25.0449 38.9961 24.5762 38.9961ZM38.0723 36.877C39.2376 36.877 40.1751 37.196 40.8848 37.834C41.5944 38.4655 41.9492 39.4811 41.9492 40.8809V48H38.9707V41.623C38.9707 40.8418 38.8275 40.2526 38.541 39.8555C38.2611 39.4583 37.8184 39.2598 37.2129 39.2598C36.3014 39.2598 35.6797 39.569 35.3477 40.1875C35.0156 40.806 34.8496 41.6979 34.8496 42.8633V48H31.8711V37.082H34.1465L34.5469 38.4785H34.7129C34.9473 38.1009 35.237 37.7949 35.582 37.5605C35.9336 37.3262 36.321 37.1536 36.7441 37.043C37.1738 36.9323 37.6165 36.877 38.0723 36.877ZM49.5176 36.877C50.5267 36.877 51.3958 37.0723 52.125 37.4629C52.8542 37.847 53.4173 38.4069 53.8145 39.1426C54.2116 39.8783 54.4102 40.7767 54.4102 41.8379V43.2832H47.3691C47.4017 44.123 47.6523 44.7839 48.1211 45.2656C48.5964 45.7409 49.2539 45.9785 50.0938 45.9785C50.7904 45.9785 51.4284 45.9069 52.0078 45.7637C52.5872 45.6204 53.1829 45.4056 53.7949 45.1191V47.4238C53.2546 47.6908 52.6882 47.8861 52.0957 48.0098C51.5098 48.1335 50.7969 48.1953 49.957 48.1953C48.8633 48.1953 47.8932 47.9935 47.0469 47.5898C46.207 47.1862 45.5462 46.571 45.0645 45.7441C44.5892 44.9173 44.3516 43.8757 44.3516 42.6191C44.3516 41.3431 44.5664 40.2819 44.9961 39.4355C45.4323 38.5827 46.0378 37.9447 46.8125 37.5215C47.5872 37.0918 48.4889 36.877 49.5176 36.877ZM49.5371 38.9961C48.9577 38.9961 48.4759 39.1816 48.0918 39.5527C47.7142 39.9238 47.4961 40.5065 47.4375 41.3008H51.6172C51.6107 40.8581 51.5293 40.4642 51.373 40.1191C51.2233 39.7741 50.9954 39.5007 50.6895 39.2988C50.39 39.097 50.0059 38.9961 49.5371 38.9961ZM62.9258 36.877C63.0755 36.877 63.248 36.8867 63.4434 36.9062C63.6452 36.9193 63.8079 36.9388 63.9316 36.9648L63.707 39.7578C63.6094 39.7253 63.4694 39.7025 63.2871 39.6895C63.1113 39.6699 62.9583 39.6602 62.8281 39.6602C62.444 39.6602 62.0697 39.709 61.7051 39.8066C61.347 39.9043 61.0247 40.0638 60.7383 40.2852C60.4518 40.5 60.224 40.7865 60.0547 41.1445C59.8919 41.4961 59.8105 41.929 59.8105 42.4434V48H56.832V37.082H59.0879L59.5273 38.918H59.6738C59.8887 38.5469 60.1556 38.2083 60.4746 37.9023C60.8001 37.5898 61.168 37.3424 61.5781 37.1602C61.9948 36.9714 62.444 36.877 62.9258 36.877ZM70.3867 36.8574C71.8516 36.8574 72.9746 37.1764 73.7559 37.8145C74.5371 38.4525 74.9277 39.4225 74.9277 40.7246V48H72.8477L72.2715 46.5156H72.1934C71.8809 46.9062 71.5618 47.2253 71.2363 47.4727C70.9108 47.7201 70.5365 47.9023 70.1133 48.0195C69.6901 48.1367 69.1758 48.1953 68.5703 48.1953C67.9258 48.1953 67.3464 48.0716 66.832 47.8242C66.3242 47.5768 65.9238 47.1992 65.6309 46.6914C65.3379 46.1771 65.1914 45.526 65.1914 44.7383C65.1914 43.5794 65.5983 42.7266 66.4121 42.1797C67.2259 41.6263 68.4466 41.3203 70.0742 41.2617L71.9688 41.2031V40.7246C71.9688 40.1517 71.819 39.7318 71.5195 39.4648C71.2201 39.1979 70.8034 39.0645 70.2695 39.0645C69.7422 39.0645 69.2246 39.1393 68.7168 39.2891C68.209 39.4388 67.7012 39.6276 67.1934 39.8555L66.207 37.8438C66.7865 37.5378 67.4342 37.2969 68.1504 37.1211C68.873 36.9453 69.6185 36.8574 70.3867 36.8574ZM71.9688 42.9414L70.8164 42.9805C69.8529 43.0065 69.1823 43.179 68.8047 43.498C68.4336 43.8171 68.248 44.237 68.248 44.7578C68.248 45.2135 68.3815 45.5391 68.6484 45.7344C68.9154 45.9232 69.2637 46.0176 69.6934 46.0176C70.3314 46.0176 70.8685 45.8288 71.3047 45.4512C71.7474 45.0736 71.9688 44.5365 71.9688 43.8398V42.9414ZM82.6035 45.8223C82.929 45.8223 83.2448 45.7897 83.5508 45.7246C83.8633 45.6595 84.1725 45.5781 84.4785 45.4805V47.6973C84.1595 47.8405 83.7624 47.9577 83.2871 48.0488C82.8184 48.1465 82.304 48.1953 81.7441 48.1953C81.0931 48.1953 80.5072 48.0911 79.9863 47.8828C79.472 47.668 79.0651 47.3001 78.7656 46.7793C78.4727 46.252 78.3262 45.5195 78.3262 44.582V39.3184H76.9004V38.0586L78.541 37.0625L79.4004 34.7578H81.3047V37.082H84.3613V39.3184H81.3047V44.582C81.3047 44.9987 81.4219 45.3112 81.6562 45.5195C81.8971 45.7214 82.2129 45.8223 82.6035 45.8223ZM96.6172 42.5215C96.6172 43.4329 96.4935 44.2402 96.2461 44.9434C96.0052 45.6465 95.6504 46.2422 95.1816 46.7305C94.7194 47.2122 94.1595 47.5768 93.502 47.8242C92.8509 48.0716 92.1152 48.1953 91.2949 48.1953C90.5267 48.1953 89.8203 48.0716 89.1758 47.8242C88.5378 47.5768 87.9811 47.2122 87.5059 46.7305C87.0371 46.2422 86.6725 45.6465 86.4121 44.9434C86.1582 44.2402 86.0312 43.4329 86.0312 42.5215C86.0312 41.3105 86.2461 40.2852 86.6758 39.4453C87.1055 38.6055 87.7174 37.9674 88.5117 37.5312C89.306 37.0951 90.2533 36.877 91.3535 36.877C92.3757 36.877 93.2806 37.0951 94.0684 37.5312C94.8626 37.9674 95.4844 38.6055 95.9336 39.4453C96.3893 40.2852 96.6172 41.3105 96.6172 42.5215ZM89.0684 42.5215C89.0684 43.2376 89.1465 43.8398 89.3027 44.3281C89.459 44.8164 89.7031 45.1842 90.0352 45.4316C90.3672 45.679 90.8001 45.8027 91.334 45.8027C91.8613 45.8027 92.2878 45.679 92.6133 45.4316C92.9453 45.1842 93.1862 44.8164 93.3359 44.3281C93.4922 43.8398 93.5703 43.2376 93.5703 42.5215C93.5703 41.7988 93.4922 41.1999 93.3359 40.7246C93.1862 40.2428 92.9453 39.8815 92.6133 39.6406C92.2812 39.3997 91.8483 39.2793 91.3145 39.2793C90.5267 39.2793 89.9538 39.5495 89.5957 40.0898C89.2441 40.6302 89.0684 41.4408 89.0684 42.5215ZM105.172 36.877C105.322 36.877 105.494 36.8867 105.689 36.9062C105.891 36.9193 106.054 36.9388 106.178 36.9648L105.953 39.7578C105.855 39.7253 105.715 39.7025 105.533 39.6895C105.357 39.6699 105.204 39.6602 105.074 39.6602C104.69 39.6602 104.316 39.709 103.951 39.8066C103.593 39.9043 103.271 40.0638 102.984 40.2852C102.698 40.5 102.47 40.7865 102.301 41.1445C102.138 41.4961 102.057 41.929 102.057 42.4434V48H99.0781V37.082H101.334L101.773 38.918H101.92C102.135 38.5469 102.402 38.2083 102.721 37.9023C103.046 37.5898 103.414 37.3424 103.824 37.1602C104.241 36.9714 104.69 36.877 105.172 36.877Z"
            fill={props.nameFill}
          />
        </svg>
      </div>
    </>
  );
};

export default Logo;
