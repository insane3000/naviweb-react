import dota from "../../img/game1.webp"
import lol from "../../img/game2.webp"
import apex from "../../img/game3.webp"
import wow from "../../img/game4.webp"
import pubg from "../../img/game5.webp"
import fortnite from "../../img/game6.webp"
import csgo from "../../img/game7.webp"
import freefire from "../../img/game8.webp"


const games = [
    {   
        id:"1",
        game:"dota",
        img: dota,
        href:"https://es.dota2.com/"
    },
    {   
        id:"2",
        game:"lol",
        img: lol,
        href:"https://na.leagueoflegends.com/"
    },
    {   
        id:"3",
        game:"apex",
        img: apex,
        href:"https://www.ea.com/es-es/games/apex-legends"
    },
    {   
        id:"4",
        game:"wow",
        img: wow,
        href:"https://worldofwarcraft.com/es-es/"
    },
    {   
        id:"5",
        game:"pugb",
        img: pubg,
        href:"https://www.pubg.com/es/"
    },
    {   
        id:"6",
        game:"fortnite",
        img: fortnite,
        href:"https://www.epicgames.com/fortnite/es-ES/home"
    },
    {   
        id:"7",
        game:"csgo",
        img: csgo,
        href:"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?l=spanish"
    },
    {   
        id:"8",
        game:"freefire",
        img: freefire,
        href:"https://ffsoporte.garena.com/hc/es-419"
    },
]
export default games