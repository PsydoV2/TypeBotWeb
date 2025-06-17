"use client";

import Image from "next/image";
import {FaDiscord} from "react-icons/fa";

export default function Hero() {
    return (
        <main className="heroSection">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"
                 className="transition duration-300 ease-in-out delay-150" >
                <path
                    d="M 0,700 L 0,356 C 84.19138755980862,369.1674641148325 168.38277511961724,382.334928229665 253,357 C 337.61722488038276,331.665071770335 422.6602870813397,267.82775119617224 523,221 C 623.3397129186603,174.17224880382776 738.976076555024,144.35406698564594 838,147 C 937.023923444976,149.64593301435406 1019.4354066985647,184.755980861244 1117,175 C 1214.5645933014353,165.244019138756 1327.2822966507176,110.622009569378 1440,56 L 1440,700 L 0,700 Z"
                    stroke="none" stroke-width="0" fill="#c4d9f7" fill-opacity="0.4"
                    className="transition-all duration-300 ease-in-out delay-150 path-0"
                    data-darkreader-inline-stroke="" ></path>
                <path
                    d="M 0,700 L 0,531 C 127.23444976076556,498.57894736842104 254.4688995215311,466.1578947368421 330,478 C 405.5311004784689,489.8421052631579 429.3588516746411,545.9473684210527 522,517 C 614.6411483253589,488.05263157894734 776.0956937799043,374.05263157894734 897,335 C 1017.9043062200957,295.94736842105266 1098.2583732057415,331.8421052631579 1182,327 C 1265.7416267942585,322.1578947368421 1352.8708133971293,276.57894736842104 1440,231 L 1440,700 L 0,700 Z"
                    stroke="none" stroke-width="0" fill="#c4d9f7" fill-opacity="0.53"
                    className="transition-all duration-300 ease-in-out delay-150 path-1"
                    data-darkreader-inline-stroke=""></path>
                <path
                    d="M 0,700 L 0,706 C 113.73205741626793,676.7655502392345 227.46411483253587,647.5311004784689 323,650 C 418.53588516746413,652.4688995215311 495.87559808612446,686.6411483253589 578,683 C 660.1244019138755,679.3588516746411 747.0334928229664,637.9043062200956 834,596 C 920.9665071770336,554.0956937799044 1007.9904306220096,511.7416267942584 1109,480 C 1210.0095693779904,448.2583732057416 1325.0047846889952,427.1291866028708 1440,406 L 1440,700 L 0,700 Z"
                    stroke="none" stroke-width="0" fill="#c4d9f7" fill-opacity="1"
                    className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
            </svg>

            <div>
                <Image
                    src="/typebotguy/typebotsummer.png"
                    alt="TypeBot Logo"
                    width={400}
                    height={400}
                    priority
                />

                <div className="heroTextSide">
                    <h2>
                        TypeBot – Your All-in-One Discord Sidekick
                    </h2>
                    <p>
                        Moderate, schedule, develop & have fun – all right from your chat.
                    </p>


                    <button id="inviteBtn">
                        <FaDiscord/>
                        <a
                            href="https://discord.com/oauth2/authorize?client_id=1383532014267007046&permissions=564445071895638&integration_type=0&scope=bot"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Add to Discord
                        </a>
                    </button>

                    <button id="viewFuncsBtn">
                        <a href="#functions">
                            See features
                        </a>
                    </button>
                </div>
            </div>
        </main>
    );
}
