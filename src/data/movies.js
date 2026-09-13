import jurassicWorld from "../assets/1.png";
import allOfUsAreDeadLandscape from "../assets/2.png";
import theTomorrowWar from "../assets/3.png";
import guardiansOfTheGalaxy from "../assets/4.png";
import dontLookUp from "../assets/5.png";
import suzume from "../assets/7.png";
import aManCalledOtto from "../assets/8.png";
import blueLock from "../assets/9.png";
import allOfUsAreDeadPortrait from "../assets/10.png";
import dutyAfterSchool from "../assets/11.png";

export const continueWatching = [
    { id: "c1", title: "Don't Look Up", rating: "4.5/5", image: dontLookUp, gradient: "bg-gradient-to-br from-slate-700 to-slate-900" },
    { id: "c2", title: "The Batman", rating: "4.2/5", image: allOfUsAreDeadLandscape, gradient: "bg-gradient-to-br from-gray-800 to-black" },
    { id: "c3", title: "Blue Lock", rating: "4.6/5", image: blueLock, gradient: "bg-gradient-to-br from-sky-600 to-blue-900" },
    { id: "c4", title: "A Man Called Otto", rating: "4.4/5", image: aManCalledOtto, gradient: "bg-gradient-to-br from-cyan-700 to-slate-900" },
];

export const topRating = [
    { id: "t1", title: "Suzume", badge: "Episode Baru", image: suzume, gradient: "bg-gradient-to-br from-indigo-600 to-purple-900" },
    { id: "t2", title: "Jurassic World", image: jurassicWorld, gradient: "bg-gradient-to-br from-amber-700 to-orange-950" },
    { id: "t3", title: "Sonic the Hedgehog", gradient: "bg-gradient-to-br from-blue-500 to-blue-900" },
    {
        id: "t4",
        title: "All of Us Are Dead",
        preview: true,
        ageRating: "13+",
        episodes: "16 Episode",
        genres: ["Misteri", "Kriminal", "Fantasi"],
        image: allOfUsAreDeadPortrait,
        gradient: "bg-gradient-to-br from-zinc-700 to-zinc-950",
    },
    { id: "t5", title: "Big Hero 6", badge: "Top 10", gradient: "bg-gradient-to-br from-red-600 to-red-950" },
];

export const trending = [
    { id: "tr1", title: "The Tomorrow War", badge: "Top 10", image: theTomorrowWar, gradient: "bg-gradient-to-br from-emerald-700 to-teal-950" },
    { id: "tr2", title: "Ant-Man: Quantumania", badge: "Top 10", gradient: "bg-gradient-to-br from-violet-600 to-fuchsia-950" },
    { id: "tr3", title: "Guardians of the Galaxy Vol. 3", badge: "Top 10", image: guardiansOfTheGalaxy, gradient: "bg-gradient-to-br from-pink-600 to-rose-950" },
    { id: "tr4", title: "A Man Called Otto", badge: "Top 10", image: aManCalledOtto, gradient: "bg-gradient-to-br from-gray-700 to-slate-950" },
    { id: "tr5", title: "The Little Mermaid", badge: "Top 10", gradient: "bg-gradient-to-br from-teal-600 to-cyan-950" },
];

export const newReleases = [
    { id: "n1", title: "The Little Mermaid", badge: "Top 10", gradient: "bg-gradient-to-br from-teal-600 to-cyan-950" },
    { id: "n2", title: "Duty After School", badge: "Episode Baru", image: dutyAfterSchool, gradient: "bg-gradient-to-br from-gray-700 to-gray-950" },
    { id: "n3", title: "Big Hero 6", badge: "Top 10", gradient: "bg-gradient-to-br from-red-600 to-red-950" },
    { id: "n4", title: "All of Us Are Dead", badge: "Episode Baru", image: allOfUsAreDeadPortrait, gradient: "bg-gradient-to-br from-lime-700 to-green-950" },
    { id: "n5", title: "Missing", gradient: "bg-gradient-to-br from-slate-600 to-slate-950" },
];
