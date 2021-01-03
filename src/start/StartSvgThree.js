import React, { useEffect, useRef } from 'react'
import './StartSvgThree.css'

function StartSvgThree() {


  const StartSvgThreeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll > 350) {
        StartSvgThreeRef.current.style.transform = `translate(-60vw, 60vh)`;
      }

     
    });
  }, []);

    return (
        <svg 
        ref={StartSvgThreeRef}
        className='startSvgThree'
        viewBox="0 0 233.888 219.002">
  <defs>
    <linearGradient id="three" x1="0.926" x2="0.104" y2="0.893" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ffa41a"/>
      <stop offset="0.515" stop-color="#ff562d"/>
      <stop offset="1" stop-color="#ff562d"/>
    </linearGradient>
  </defs>
  <g id="Group_57" data-name="Group 57" transform="translate(-976.774 -450.023)">
    <g id="Group_54" data-name="Group 54" transform="translate(976.774 450.023)">
      <path id="Path_192" data-name="Path 192" d="M86.875,68.453C99.3,65.9,126.392,33.692,145.832,21.466s6.055,1.366,19.44-2.877S200.965-7.68,207.02-1.578s-37.386,38.285-22.627,40.3c10.368,1.418,46.069-34.793,50.721-28.4,5.418,3.836-30.917,40.391-38.428,54.318S221.36,38.727,220.4,49.914s-14.075,21.368-34.21,46.756-34.415,37.571-44.506,54.89,34.3-23.767,4.132,15.324-46.458,40.27-60.8,46.564-44.8,3.171-65.312-17.045S-2.675,130.464,8.8,116.719c3.568-4.275,11.439-15.654,22.533-26.378,24.2-23.4,60.644-51.741,77.215-51.614C121.854,38.828,74.446,71.011,86.875,68.453Z" transform="translate(-1.774 2.639)" fill="url(#three)"/>
      <path id="Path_198" data-name="Path 198" d="M8147.862,3353.542c2.09-4.044,7.263-7.933,11.287-10.579s9.665.208,7.315,4.148-9.562,9.8-14.212,11.408S8145.773,3357.587,8147.862,3353.542Z" transform="translate(-8036.393 -3322.162)" fill="#f47935"/>
      <path id="Path_199" data-name="Path 199" d="M8086.906,3545.608c4.6-4.252,10.091-6.24,12.593-5.159s1.2,6.5-3.4,10.751-11.194,10.521-13.936,8.829S8082.309,3549.86,8086.906,3545.608Z" transform="translate(-7920.777 -3416.824)" fill="#ff7c23"/>
    </g>
    <g id="Group_53" data-name="Group 53" transform="translate(986.23 509.777)">
      <path id="Path_193" data-name="Path 193" d="M67.645-7.032c10.68-.642,13.269-9.314,22.978-4.818S84.895,4.9,95.477,4.209c10.438-.686,15.858-15.1,22.33-9.635s-11.492,23.619-8.738,28.264c2.987,5.036,13.431,2.007,10.68,17.986S113.681,69.811,97.1,86.111,68.434,103.649,53.4,106.024C22.417,110.922.391,87.693-3.412,59.953S6.8,18.341,12.3,12.239,39.489-8.274,47.9-9.28,56.965-6.39,67.645-7.032Z" transform="translate(4.057 43.33)" fill="#fac61b"/>
      <path id="Path_195" data-name="Path 195" d="M8082.47,3452.006c1.513-3.638,2.429-5.412,6.049-7.641s7.927-2.183,9.349,0,.184,5.094-3.667,8.732-6.232,5.548-9.165,5.275S8080.958,3455.644,8082.47,3452.006Z" transform="translate(-7935.829 -3442.711)" fill="#fac61b"/>
      <path id="Path_196" data-name="Path 196" d="M8062.251,3511.682c2.612-2.865,4.719-4.548,7.515-4.548s3.758,4.184,3.3,7.459-3.345,4.821-6.782,5.821-6.049-3.093-6.049-3.093A6.8,6.8,0,0,1,8062.251,3511.682Z" transform="translate(-7931.006 -3457.453)" fill="#fac61b"/>
    </g>
    <g id="Group_52" data-name="Group 52" transform="translate(999.016 558.458)">
      <path id="Path_185" data-name="Path 185" d="M7921.862,3520.052c-6.8,5.115-8.471,1.539-11.835,8.429s-5.133,9.269-7.552,15.845,0,8.92,0,14.975-.534,6.556,2.517,13.132,5.537,8.411,10.139,13.173c4.943,5.115,13.043,6.681,13.043,6.681s8.534,4.649,18,4.649,11.17-1,19.863-4.649,9.611-6.711,15.57-12.23,5.428-4.209,8.268-9.846,5.086-4.333,5.612-10.909-1.367-9.917-2.524-17.536-1.3-9.213-4.978-13.283-5.32-4.984-10.158-8.429c-4.46-3.176-9.752-11.483-17.68-12.108s-10.78,1.569-20.35,4.6S7928.659,3514.938,7921.862,3520.052Z" transform="translate(-7901.399 -3507.837)" fill="#9b8578"/>
      <path id="Path_186" data-name="Path 186" d="M4.469-.633c2.568,0,4.055-.142,4.055,1.888A7.789,7.789,0,0,1,4.469,7.486C2.044,8.642.376,7.439-1.179,5.881s-1.983-3-.571-4.626S1.9-.633,4.469-.633Z" transform="translate(67.34 40.779)" fill="#726658"/>
      <path id="Path_188" data-name="Path 188" d="M4.022.87A1.623,1.623,0,0,1,5.951,2.758,2.959,2.959,0,0,1,3.478,5.4C2.024,5.532.488,4.363.624,3.23S2.691.988,4.022.87Z" transform="translate(12.094 48.403)" fill="#726658"/>
      <path id="Path_189" data-name="Path 189" d="M10.866-.6c2.473.991,4.709,3.588,3.615,6.892A9.391,9.391,0,0,1,6.49,12.614,5.5,5.5,0,0,1,.4,7.988C-.074,5.415,2.338,4.471,4.588,2.323S8.393-1.595,10.866-.6Z" transform="translate(48.588 65.852)" fill="#726658"/>
      <path id="Path_190" data-name="Path 190" d="M3.4-.588c1.931,0,2.664,1.651,2.664,3.567S5.328,5.439,3.4,5.439s-3.843-.187-3.843-2.1A4.206,4.206,0,0,1,3.4-.588Z" transform="translate(40.737 46.292)" fill="#726658"/>
      <path id="Path_191" data-name="Path 191" d="M11.115-1.773c2.739,2.887,3.978,5.912,2.537,9.946s-4.324,4.359-8.3,4.359-6.948.076-7.611-4.359A12.663,12.663,0,0,1,2.7-3.375C6.041-5.862,8.376-4.66,11.115-1.773Z" transform="translate(36.384 16.536)" fill="#726658"/>
      <path id="Path_187" data-name="Path 187" d="M3.2,1.735c2.006,0,3.5.551,3.5,2.133S5.207,8.06,3.2,8.06-1.325,5.449-1.325,3.867,1.2,1.735,3.2,1.735Z" transform="translate(66.035 16.694)" fill="#726658"/>
    </g>
  </g>
</svg>

    )
}

export default StartSvgThree
