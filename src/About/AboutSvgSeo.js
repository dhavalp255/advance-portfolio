import React, { useEffect, useRef } from "react";
import "./AboutSvgSeo.css";

function AboutSvgSeo() {
  const mountainSeoRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll > 250) {
        mountainSeoRef.current.style.opacity = "1";
        mountainSeoRef.current.style.transform = "translateY(-21vh)";
      }
    });
  }, []);

  return (
    <svg
      ref={mountainSeoRef}
      className="aboutSvgSeo"
      viewBox="0 0 474.373 432.479"
    >
      <defs>
        <linearGradient
          id="seo1"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#ffe748" />
          <stop offset="1" stop-color="#ff562d" />
        </linearGradient>
        <linearGradient
          id="seo9"
          x1="0.174"
          y1="0.04"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#f5ce00" />
          <stop offset="0.686" stop-color="#d91610" />
          <stop offset="1" stop-color="#ee3d11" />
        </linearGradient>
      </defs>
      <g id="Group_62" data-name="Group 62" transform="translate(0 106.537)">
        <g
          id="Group_49"
          data-name="Group 49"
          transform="translate(152.952 29.187)"
        >
          <g
            id="Path_176"
            data-name="Path 176"
            transform="translate(144.731 41.054)"
            fill="url(#seo1)"
          >
            <path
              d="M 8.132210731506348 17.91715049743652 C 7.303060531616211 17.91715049743652 6.292500495910645 17.28692054748535 5.209760665893555 16.09458160400391 C 2.546087026596069 13.16127967834473 -0.8079118728637695 2.867990970611572 -1.520704388618469 0.6152641773223877 C 0.5067451000213623 2.125841617584229 10.2055606842041 9.56488037109375 10.2055606842041 13.6093111038208 C 10.2055606842041 16.30674171447754 9.43047046661377 17.91715049743652 8.132210731506348 17.91715049743652 Z"
              stroke="none"
            />
            <path
              d="M 8.132210731506348 17.76715087890625 C 9.336550712585449 17.76715087890625 10.05556011199951 16.21282196044922 10.05556011199951 13.6093111038208 C 10.05556011199951 11.80641174316406 7.988950252532959 8.970271110534668 4.079140663146973 5.407511234283447 C 1.975172877311707 3.49029803276062 -0.1492175757884979 1.836566925048828 -1.235370278358459 1.016260862350464 C -0.2974594235420227 3.934817314147949 2.824096918106079 13.24431133270264 5.320800304412842 15.99374103546143 C 6.374340534210205 17.15391159057617 7.346510410308838 17.76715087890625 8.132210731506348 17.76715087890625 M 8.132206916809082 18.0671501159668 C 7.29088306427002 18.0671501159668 6.254321575164795 17.46800422668457 5.098710536956787 16.19542121887207 C 2.059630393981934 12.84871101379395 -1.800779461860657 0.2224713265895844 -1.800779461860657 0.2224713265895844 C -1.800779461860657 0.2224713265895844 10.35556030273438 8.986381530761719 10.35556030273438 13.6093111038208 C 10.35556030273438 16.474365234375 9.503443717956543 18.0671501159668 8.132206916809082 18.0671501159668 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_179"
            data-name="Path 179"
            transform="matrix(0.438, 0.899, -0.899, 0.438, 30.813, 44.14)"
            fill="url(#seo1)"
          >
            <path
              d="M 6.752681732177734 16.39570426940918 C 6.171701908111572 16.39570426940918 5.474442005157471 15.83337306976318 4.736291885375977 14.76952362060547 C 2.885275363922119 12.10175228118896 0.7377007007598877 2.667190074920654 0.2490402311086655 0.4413498044013977 C 1.864573240280151 1.987221240997314 8.498217582702637 8.569315910339355 8.38790225982666 12.30067348480225 C 8.312091827392578 14.86484336853027 7.700791835784912 16.39570426940918 6.752681732177734 16.39570426940918 Z"
              stroke="none"
            />
            <path
              d="M 6.752681732177734 16.24570274353027 C 7.229561805725098 16.24570274353027 7.543481826782227 15.74647331237793 7.722851753234863 15.32767295837402 C 8.021842002868652 14.62958335876465 8.199972152709961 13.58133316040039 8.237961769104004 12.29623317718506 C 8.339696884155273 8.85518741607666 2.551740884780884 2.894326686859131 0.5034343004226685 0.8957204818725586 C 1.144358277320862 3.758215188980103 3.136376619338989 12.20052719116211 4.859531879425049 14.68401336669922 C 5.558281898498535 15.69108295440674 6.230621814727783 16.24570274353027 6.752681732177734 16.24570274353027 M 6.752683639526367 16.54569816589355 C 6.14237642288208 16.54569816589355 5.410738468170166 16.00469207763672 4.613051891326904 14.85503387451172 C 2.478591918945313 11.77875328063965 1.803741497496958e-06 3.419494532863609e-06 1.803741497496958e-06 3.419494532863609e-06 C 1.803741497496958e-06 3.419494532863609e-06 8.666281700134277 7.960373401641846 8.537832260131836 12.30510330200195 C 8.457386016845703 15.0261287689209 7.775444030761719 16.54569816589355 6.752683639526367 16.54569816589355 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_184"
            data-name="Path 184"
            transform="translate(97.052 16.567) rotate(-120)"
            fill="url(#seo1)"
          >
            <path
              d="M 3.097930908203125 19.47538566589355 C 2.588600873947144 19.47538566589355 2.042360782623291 19.35999488830566 1.474370837211609 19.13241577148438 C 0.8839408159255981 18.89584541320801 0.5752907991409302 18.68837547302246 0.5307908058166504 18.49814605712891 C 0.4780508279800415 18.27267456054688 0.7666008472442627 17.95032501220703 1.165970802307129 17.50417518615723 C 1.953720808029175 16.62415504455566 3.272160768508911 15.15127563476563 3.635710716247559 12.40400505065918 C 4.206189155578613 8.093037605285645 2.963111162185669 2.740195274353027 2.442732572555542 0.7707575559616089 C 3.011058330535889 1.552958965301514 4.003385066986084 2.988943815231323 4.948660850524902 4.7002854347229 C 6.261680603027344 7.077405452728271 7.750640869140625 10.48696517944336 7.387560844421387 13.23072528839111 C 6.854671001434326 17.25765609741211 5.331250667572021 19.47538566589355 3.097930908203125 19.47538566589355 Z"
              stroke="none"
            />
            <path
              d="M 3.097930908203125 19.32538604736328 C 5.246490955352783 19.32538604736328 6.717090606689453 17.15393447875977 7.238850593566895 13.21104526519775 C 7.521890640258789 11.07217502593994 6.685290813446045 8.15561580657959 4.819490909576416 4.776665210723877 C 4.100428581237793 3.474453926086426 3.353696823120117 2.331920146942139 2.788785219192505 1.51757287979126 C 2.961004018783569 2.221133708953857 3.163221597671509 3.122186899185181 3.348320722579956 4.13700532913208 C 3.753530740737915 6.358635425567627 4.158120632171631 9.599695205688477 3.784420728683472 12.42368507385254 C 3.414800882339478 15.21683502197266 2.077030897140503 16.71130561828613 1.277740836143494 17.60421562194824 C 0.9651408195495605 17.95343589782715 0.641890823841095 18.31453514099121 0.6768507957458496 18.46397590637207 C 0.6913908123970032 18.52611541748047 0.8036308288574219 18.70207595825195 1.530160784721375 18.9931755065918 C 2.080320835113525 19.21361541748047 2.607800722122192 19.32538604736328 3.097930908203125 19.32538604736328 M 3.097927331924438 19.62538719177246 C 2.566280364990234 19.62538719177246 2.00404167175293 19.50623512268066 1.418580770492554 19.27165603637695 C -1.584609150886536 18.06835556030273 2.773480892181396 17.77631568908691 3.487010717391968 12.38432502746582 C 4.200541019439697 6.992345333099365 2.084220886230469 0.0413353331387043 2.084220886230469 0.0413353331387043 C 2.084220886230469 0.0413353331387043 8.249791145324707 7.858425140380859 7.536260604858398 13.25040531158447 C 6.961838722229004 17.59124755859375 5.293426036834717 19.62538719177246 3.097927331924438 19.62538719177246 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_182"
            data-name="Path 182"
            transform="matrix(-0.259, 0.966, -0.966, -0.259, 73.794, 8.787)"
            fill="url(#seo1)"
          >
            <path
              d="M 4.697096347808838 18.77391624450684 C 4.281576156616211 18.77391624450684 3.606906414031982 18.51898574829102 2.752436399459839 17.30448532104492 C 1.671026349067688 15.76741504669189 -0.7351837158203125 11.79374504089355 0.2747662961483002 8.101445198059082 C 1.160667181015015 4.859650611877441 4.354643821716309 1.753880977630615 5.697105884552002 0.5603839755058289 C 4.916678905487061 2.097266435623169 3.20309042930603 5.900968074798584 3.250956296920776 9.583715438842773 C 3.271476268768311 11.16361522674561 4.471416473388672 13.7548656463623 5.265436172485352 15.46954536437988 C 5.466386318206787 15.90349578857422 5.639936447143555 16.27827644348145 5.765166282653809 16.57243537902832 C 5.979746341705322 17.07651519775391 5.907406330108643 17.76467514038086 5.589246273040771 18.24591636657715 C 5.364136219024658 18.58640480041504 5.047296524047852 18.77391624450684 4.697096347808838 18.77391624450684 Z"
              stroke="none"
            />
            <path
              d="M 4.697096347808838 18.62391471862793 C 5.079286098480225 18.62391471862793 5.32516622543335 18.37336540222168 5.464126110076904 18.16318511962891 C 5.756096363067627 17.72155570983887 5.823136329650879 17.09157562255859 5.627146244049072 16.63119506835938 C 5.502836227416992 16.33917617797852 5.329746246337891 15.96538543701172 5.129316329956055 15.5325756072998 C 4.329936504364014 13.80631542205811 3.121906280517578 11.197585105896 3.100976228713989 9.585665702819824 C 3.068426370620728 7.08197546005249 3.843736410140991 4.548605442047119 4.499866485595703 2.864255428314209 C 4.745961666107178 2.232503414154053 4.991737842559814 1.673694252967834 5.209056854248047 1.211078882217407 C 3.697541475296021 2.639261722564697 1.184351086616516 5.341995716094971 0.4194463193416595 8.14101505279541 C -0.5736836791038513 11.77182579040527 1.805926322937012 15.69847583770752 2.875116348266602 17.21817588806152 C 3.512896299362183 18.12467575073242 4.159946441650391 18.62391471862793 4.697096347808838 18.62391471862793 M 4.697098731994629 18.92391586303711 C 4.130009651184082 18.92391586303711 3.417998313903809 18.51116180419922 2.629756212234497 17.39079475402832 C 1.617516279220581 15.95204544067383 -0.9129036664962769 11.87492561340332 0.1300763040781021 8.06186580657959 C 1.281256318092346 3.849345445632935 6.204196453094482 -0.07045450061559677 6.204196453094482 -0.07045450061559677 C 6.204196453094482 -0.07045450061559677 3.339166402816772 4.828405380249023 3.400946378707886 9.581765174865723 C 3.426106214523315 11.51880550384521 5.275286197662354 15.03875541687012 5.903176307678223 16.51368522644043 C 6.312501430511475 17.47521591186523 5.759185314178467 18.92391586303711 4.697098731994629 18.92391586303711 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_180"
            data-name="Path 180"
            transform="matrix(0.574, 0.819, -0.819, 0.574, 20.916, 71.879)"
            fill="url(#seo1)"
          >
            <path
              d="M 5.751869678497314 15.14550304412842 C 5.406009674072266 15.14550304412842 4.82681941986084 14.88704299926758 4.031669616699219 13.65574264526367 C 2.4541175365448 11.21285820007324 0.6703038215637207 2.605239629745483 0.2428100109100342 0.4586930572986603 C 1.7107013463974 1.964799284934998 7.310574054718018 7.94310998916626 7.188899517059326 11.35897254943848 C 7.105689525604248 13.69458293914795 6.555059432983398 15.14550304412842 5.751869678497314 15.14550304412842 Z"
              stroke="none"
            />
            <path
              d="M 5.751869678497314 14.99550342559814 C 6.285779476165771 14.99550342559814 6.943229675292969 14.04171276092529 7.038989543914795 11.35363292694092 C 7.150386810302734 8.226304054260254 2.332234382629395 2.863318204879761 0.4912430346012115 0.9325026273727417 C 1.049259781837463 3.673338413238525 2.69690465927124 11.31232070922852 4.157679557800293 13.57436275482178 C 4.956189632415771 14.81087303161621 5.499239444732666 14.99550342559814 5.751869678497314 14.99550342559814 M 5.751871585845947 15.29549789428711 C 5.221482753753662 15.29549789428711 4.590088844299316 14.79696559906006 3.905659437179565 13.7371129989624 C 2.070959568023682 10.89603328704834 -4.854583721680683e-07 3.017578137587407e-06 -4.854583721680683e-07 3.017578137587407e-06 C -4.854583721680683e-07 3.017578137587407e-06 7.48207950592041 7.341923236846924 7.338799476623535 11.36431312561035 C 7.248963356018066 13.88616943359375 6.643258571624756 15.29549789428711 5.751871585845947 15.29549789428711 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_181"
            data-name="Path 181"
            transform="matrix(-0.017, 1, -1, -0.017, 8.845, 103.629)"
            fill="url(#seo1)"
          >
            <path
              d="M 9.135631561279297 8.502593994140625 C 8.360021591186523 8.502593994140625 7.42108154296875 8.194914817810059 6.420321464538574 7.612814426422119 C 4.090463161468506 6.257632732391357 1.175023078918457 1.649419784545898 0.3538585901260376 0.2990616858005524 C 1.229838132858276 0.6448585391044617 3.386172771453857 1.517328381538391 5.520351409912109 2.545074462890625 C 10.30402183532715 4.84870433807373 11.01934146881104 6.010044574737549 11.01997184753418 6.497274398803711 C 11.02080154418945 7.143814563751221 10.83991146087646 7.667124271392822 10.49685192108154 8.010634422302246 C 10.17542171478271 8.332484245300293 9.704721450805664 8.502593994140625 9.135631561279297 8.502593994140625 Z"
              stroke="none"
            />
            <path
              d="M 9.135631561279297 8.352594375610352 C 9.671581268310547 8.352594375610352 10.09386157989502 8.201874732971191 10.39072132110596 7.904634475708008 C 10.7050313949585 7.589914321899414 10.87075138092041 7.103324413299561 10.86997127532959 6.497474193572998 C 10.8695011138916 6.133574485778809 10.34110164642334 5.033224582672119 5.456801414489746 2.680954456329346 C 3.613400936126709 1.793169379234314 1.752784252166748 1.021244049072266 0.7186840176582336 0.6058486700057983 C 1.76133131980896 2.281299591064453 4.380275726318359 6.252677917480469 6.495741367340088 7.483154296875 C 7.473621368408203 8.051944732666016 8.386481285095215 8.352594375610352 9.135631561279297 8.352594375610352 M 9.13563346862793 8.652597427368164 C 8.362425804138184 8.652597427368164 7.408617973327637 8.361191749572754 6.344901561737061 7.742474555969238 C 3.552411556243896 6.118204593658447 1.50329594816867e-06 4.404907031130278e-06 1.50329594816867e-06 4.404907031130278e-06 C 1.50329594816867e-06 4.404907031130278e-06 11.16708183288574 4.25879430770874 11.16997146606445 6.497084617614746 C 11.17176055908203 7.882757663726807 10.3922643661499 8.652597427368164 9.13563346862793 8.652597427368164 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_177"
            data-name="Path 177"
            transform="translate(159.665 73.808)"
            fill="url(#seo1)"
          >
            <path
              d="M 4.636194229125977 10.33612823486328 C 4.110714435577393 10.33612823486328 3.467194557189941 9.9786376953125 2.775214433670044 9.302298545837402 C 1.124460220336914 7.688870429992676 -0.944140613079071 2.163849115371704 -1.510191917419434 0.5927937030792236 C -0.8468767404556274 1.034566164016724 0.606742799282074 2.029637575149536 2.045684337615967 3.193358182907104 C 4.584874629974365 5.246878147125244 5.927014350891113 6.882068157196045 5.927014350891113 7.922128200531006 C 5.927014350891113 9.433697700500488 5.444464683532715 10.33612823486328 4.636194229125977 10.33612823486328 Z"
              stroke="none"
            />
            <path
              d="M 4.636194229125977 10.18612861633301 C 5.350544452667236 10.18612861633301 5.777014255523682 9.339768409729004 5.777014255523682 7.922128200531006 C 5.777014255523682 6.08315896987915 1.26310396194458 2.64640998840332 -1.213306307792664 0.9695487022399902 C -0.4916622340679169 2.928994655609131 1.376550793647766 7.725516319274902 2.880054473876953 9.195028305053711 C 3.718164443969727 10.01417827606201 4.29764461517334 10.18612861633301 4.636194229125977 10.18612861633301 M 4.636191368103027 10.48612689971924 C 4.09097957611084 10.48612689971924 3.419245958328247 10.14151668548584 2.670364379882813 9.409567832946777 C 0.7009144425392151 7.484658241271973 -1.800785541534424 0.2224681526422501 -1.800785541534424 0.2224681526422501 C -1.800785541534424 0.2224681526422501 6.077014446258545 5.26317834854126 6.077014446258545 7.922128200531006 C 6.077014446258545 9.570009231567383 5.524808406829834 10.48612689971924 4.636191368103027 10.48612689971924 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
          <g
            id="Path_178"
            data-name="Path 178"
            transform="translate(172.241 96.372)"
            fill="url(#seo1)"
          >
            <path
              d="M 7.902973651885986 12.34807682037354 C 7.084113597869873 12.34807682037354 6.091133594512939 11.91371726989746 5.031403541564941 11.09195709228516 C 2.48401951789856 9.116605758666992 -0.7154156565666199 2.266464710235596 -1.489203095436096 0.5530216693878174 C -0.5947706699371338 1.02195131778717 1.743927359580994 2.277143716812134 4.057893753051758 3.761797189712524 C 7.896193504333496 6.224467277526855 9.925013542175293 8.185007095336914 9.925013542175293 9.431467056274414 C 9.925013542175293 11.2850170135498 9.188003540039063 12.34807682037354 7.902973651885986 12.34807682037354 Z"
              stroke="none"
            />
            <path
              d="M 7.902973651885986 12.19807720184326 C 9.092683792114258 12.19807720184326 9.77501392364502 11.18968677520752 9.77501392364502 9.431467056274414 C 9.77501392364502 8.750627517700195 9.021973609924316 7.125257015228271 3.978673458099365 3.889187097549438 C 1.950780987739563 2.587976455688477 -0.09675028920173645 1.463101148605347 -1.170116066932678 0.8913593888282776 C -0.1663591861724854 3.073185682296753 2.768188238143921 9.147154808044434 5.123323440551758 10.97342681884766 C 6.156513690948486 11.77459716796875 7.117703437805176 12.19807720184326 7.902973651885986 12.19807720184326 M 7.902968883514404 12.49808025360107 C 7.081060886383057 12.49808025360107 6.068423748016357 12.08592128753662 4.939483642578125 11.21049690246582 C 1.970533609390259 8.908246994018555 -1.800776481628418 0.2224771231412888 -1.800776481628418 0.2224771231412888 C -1.800776481628418 0.2224771231412888 10.07501316070557 6.251296997070313 10.07501316070557 9.431467056274414 C 10.07501316070557 11.40238094329834 9.242560386657715 12.49808025360107 7.902968883514404 12.49808025360107 Z"
              stroke="none"
              fill="#ff562d"
            />
          </g>
        </g>
        <path
          id="Path_174"
          data-name="Path 174"
          d="M3936.9,888.815s14.762,2.579,48.628-28.833,51.234-41.4,91.179-101.062,45.373-103.185,65.129-137.58,12.157,4.246,14.762,4.246,7.346-3.772,15.63-4.246,11.858,6.171,17.5,2.35,4.142-13.2,9.319-12.728-3.835-10.687,11.385,14.625,37.123,64.968,49.5,86.624,47.543,64.331,63.39,85.775,32.721,39.289,54.708,62,33.241,28.833,33.241,28.833Z"
          transform="translate(-3936.899 -562.924)"
          fill="#3e250f"
        />
        <path
          id="Path_175"
          data-name="Path 175"
          d="M-23.006-4.107c6.467-10.038,10.263-3.53,12.756-1.086A21.049,21.049,0,0,0,8.518.781c9.97-1.7,14.342-16.4,21.113-12.763s9.914,8.2,17.7,21.347,2.4,12.113,13.454,31.246S91.54,85.9,91.54,85.9s6.3,19.825,30.966,47.66,56.375,80.291,56.375,80.291,8.133,9.947,0,12.822-18.2-15.574-35.5-34.156-5.444-12.78-33.687-40.17S68.671,99.552,55.022,85.108c-20.863-22.078,23.8,54.872,10.251,43.507-11.808-9.905,17.995,35.269,10.891,30.851-9.827-6.113,30.492,38.526,23.064,36.586-2.785-.728,3.728,17.973,1.281,17.8-10.4-.743,15.764,40.557,5.339,35.6-10.8-5.14-9.553-29.878-20.288-37.574-8.718-6.251-12.312-25.4-20.288-32.433-17.559-15.489-14.231-41.552-28.617-55.373-3.531-3.393-6.035-11.94-9.183-15.03-9.948-9.764,8.023-21.514,1.068-26.5-42.41-30.4-13.882,48.649-13.882,48.649A344.474,344.474,0,0,0,6.117,174.1C3.5,195.458,7.986,195.458,4.2,216.618S1,246.4-2.312,249.446s-8.417,2.534-6.733-20.64,7.641-42.738,6.733-62.761-12.5,5.978-12.5-2.032,8.657-30.543,9.4-39.948c2.633-33.467-5.926.049-7.261-5.142s2.1-19.9,1.495-26.5c-1.325-14.517-16.174,53.66-20.288,46.474-2.541-4.439-20.827,44.249-23.705,40.936-4.23-4.868-26.363,28.046-28.189,22.347-4.861-15.169,33.136-34.071,28.189-49.045-2.447-7.406,9.635-20.932,6.407-26.7-1.67-2.982-26.089,35.039-27.762,32.037-2.725-4.888,6.231-9.705,3.417-14.041-3.579-5.514-32.925,33.725-35.237,27.489-2.127-5.737,28.25-24.254,26.774-30.157-2.205-8.817,25.057-35.375,24.16-37.287-.609-1.3-12.69,10-21.9,19.586-4.187,4.355-8.538,12.7-9.342,11.138-2.5-4.843,11.59-35.638,21.26-50.1C-57.017,69.579-53.867,58-43.243,35.871S-29.473,5.931-23.006-4.107Z"
          transform="translate(234.043 51.883)"
          fill="url(#seo9)"
        />
        <text
          id="SEO_Adobe_Xd_Scss_Responsive"
          data-name="SEO
Adobe Xd
Scss
Responsive"
          transform="translate(244 -81.537)"
          fill="#ee3d11"
          font-size="23"
          font-family="SegoeUI-Bold, Segoe UI"
          fontWeight = '600'
        >
          <tspan x="-20.597" y="0">
            SEO
          </tspan>
          <tspan x="-50.408" y="31">
            Adobe Xd
          </tspan>
          <tspan x="-21.181" y="62">
            Scss
          </tspan>
          <tspan x="-56.63" y="93">
            Responsive
          </tspan>
         
        </text>
      </g>
    </svg>
  );
}

export default AboutSvgSeo;
