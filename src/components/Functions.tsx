"use client"

import {MdDeveloperBoard} from "react-icons/md";
import {RiCalendarScheduleLine} from "react-icons/ri";
import {IoGameControllerOutline} from "react-icons/io5";
import {VscTools} from "react-icons/vsc";
import {GoLaw} from "react-icons/go";
import {TbRobot} from "react-icons/tb";

export default function Functions() {
    return <section id="functions" className="functionSection">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"
             className="transition duration-300 ease-in-out delay-150">
            <path
                d="M 0,700 L 0,356 C 75.09090909090907,376.6602870813397 150.18181818181813,397.3205741626794 259,398 C 367.81818181818187,398.6794258373206 510.3636363636364,379.37799043062205 612,328 C 713.6363636363636,276.62200956937795 774.3636363636364,193.16746411483254 856,151 C 937.6363636363636,108.83253588516746 1040.1818181818182,107.95215311004785 1141,99 C 1241.8181818181818,90.04784688995215 1340.909090909091,73.02392344497608 1440,56 L 1440,700 L 0,700 Z"
                stroke="none" stroke-width="0" fill="#c4d9f7" fill-opacity="0.4"
                className="transition-all duration-300 ease-in-out delay-150 path-0" data-darkreader-inline-stroke=""
                transform="rotate(-180 720 350)"></path>
            <path
                d="M 0,700 L 0,531 C 75.79904306220098,504.45454545454544 151.59808612440196,477.9090909090909 237,468 C 322.40191387559804,458.0909090909091 417.4066985645933,464.81818181818187 531,444 C 644.5933014354067,423.18181818181813 776.7751196172247,374.8181818181818 884,360 C 991.2248803827753,345.1818181818182 1073.4928229665072,363.9090909090909 1162,348 C 1250.5071770334928,332.0909090909091 1345.2535885167463,281.54545454545456 1440,231 L 1440,700 L 0,700 Z"
                stroke="none" stroke-width="0" fill="#c4d9f7" fill-opacity="0.53"
                className="transition-all duration-300 ease-in-out delay-150 path-1" data-darkreader-inline-stroke=""
                transform="rotate(-180 720 350)"></path>
            <path
                d="M 0,700 L 0,706 C 117.30143540669857,680.1244019138755 234.60287081339715,654.2488038277512 330,658 C 425.39712918660285,661.7511961722488 498.88995215311,695.1291866028708 578,692 C 657.11004784689,688.8708133971292 741.8373205741627,649.2344497607656 853,621 C 964.1626794258373,592.7655502392344 1101.760765550239,575.9330143540669 1204,542 C 1306.239234449761,508.0669856459331 1373.1196172248806,457.03349282296654 1440,406 L 1440,700 L 0,700 Z"
                stroke="none" stroke-width="0" fill="#c4d9f7" fill-opacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-2"
                transform="rotate(-180 720 350)"></path>
        </svg>

        <h2>Features</h2>
        <div className="functionGrid">
            <div className="functionCard">
                <GoLaw/>
                <div>
                    <h3>Moderation Tools</h3>
                    <br/>
                    <p>Keep your server safe and organized. Kick, ban, mute users, clear chats, lock channels, or send
                        warnings – all in one place.</p>
                </div>
            </div>
            <div className="functionCard"></div>
            <div className="functionCard hideMobile"></div>
            <div className="functionCard">
                <RiCalendarScheduleLine/>
                <div>
                    <h3>Time & Scheduling</h3>
                    <br/>
                    <p>Plan events or stay focused. Set personal reminders, start timers, check timezones, or create
                        countdowns.</p>
                </div>
            </div>
            <div className="functionCard showMobile"></div>
            <div className="functionCard">
                <VscTools/>
                <div>
                    <h3>Server Utilities</h3>
                    <br/>
                    <p>Organize your community. Create polls, manage suggestions, save notes, and track personal or
                        shared to-do lists.</p>
                </div>
            </div>
            <div className="functionCard"></div>
            <div className="functionCard hideMobile"></div>
            <div className="functionCard">
                <MdDeveloperBoard/>
                <div>
                    <h3>Developer Tools</h3>
                    <br/>
                    <p>Useful commands for devs. Format JSON, encode/decode Base64, generate UUIDs, or check website
                        response times and headers.</p>
                </div>
            </div>
            <div className="functionCard showMobile"></div>
            <div className="functionCard">
                <IoGameControllerOutline/>
                <div>
                    <h3>Gaming & Fun</h3>
                    <br/>
                    <p>Handy features for gamers. Get Steam stats, Minecraft server info, Valorant ranks, or roll dice
                        for TTRPGs.</p>
                </div>
            </div>
            <div className="functionCard"></div>
            <div className="functionCard hideMobile"></div>
            <div className="functionCard">
                <TbRobot/>
                <div>
                    <h3>Bot Utilities</h3>
                    <br/>
                    <p>All about the bot and users. View avatars, user and server info, measure latency, get bot stats,
                        or grab the invite link.</p>
                </div>
            </div>
        </div>
    </section>

}