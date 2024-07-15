import { XP } from "../objects/definitions";

export const fetchSkillData = () => {
  return [
    {
      title: "Meditation",
      level: 1,
      image: require("../images/skills/meditation.png"),
      goal: "Meditate for 30 seconds",
      frequency: 1,
      interval: "day",
      timelimit: 3,
      xp: new XP(25, 0, 0, 0, 25),
      clickable: true,
    },
    {
      title: "Meditation",
      level: 2,
      image: require("../images/skills/meditation.png"),
      goal: "Meditate for 1 minute",
      frequency: 1,
      interval: "day",
      timelimit: 7,
      xp: new XP(75, 0, 0, 0, 75),
      clickable: true,
    },
    {
      title: "Fitness",
      level: 1,
      image: require("../images/skills/fitness.png"),
      goal: "Perform simple bodyweight exercises for 5 minutes",
      frequency: 4,
      interval: "week",
      timelimit: 14,
      xp: new XP(0, 125, 0, 0, 0),
      clickable: true,
    },
    {
      title: "???",
      clickable: false,
    },
    {
      title: "Download Now!",
      level: 0,
      goal: "Download Skilltree and level up IRL",
      xp: new XP(840, 840, 840, 840, 840),
      timelimit: 365,
      interval: "day",
      frequency: 1,
      image: require("../images/logos/Gold-Logo.png"),
      clickable: true
    },
    {
      title: "???",
      clickable: false,
    },
    {
      title: "???",
      clickable: false,
    },
  ]
}