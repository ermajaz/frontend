// components/bike-showcase/data.ts
export type Hotspot = {
  id: string;
  leftPct: number; // percentage from left (0-100)
  topPct: number;  // percentage from top (0-100)
  title: string;
  description?: string;
};

export type BikeSpec = {
  key: string;
  label: string;
  content: string;
  hotspots?: Hotspot[]; // show on image for this spec
};

export type Bike = {
  id: string;
  uiName: string; // shown in tabs (SEROW)
  bgWord: string;
  image: string;
  logo: string;
  description: string;
  colors: {
    gradient: string;
    cta: string;
  };
  specs: BikeSpec[];
  techSpec: { label: string; value: string }[]; // full technical table
};


export const BIKES: Bike[] = [
  {
    id: "serow",
    uiName: "Serow",
    bgWord: "SEROW",
    image: "/images/dummy-cycle.png",
    logo: "/icons/Serow-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#C6B783, #806D2A", // top → bottom
      cta: "var(--color-sandstorm)",
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content:
          "Alloy full-suspension frame. Lightweight and durable with 140mm travel.",
        hotspots: [
          {
            id: "h1",
            leftPct: 47,
            topPct: 32,
            title: "Reach adjust headset cups",
            description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain.",
          },
        ],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "Fox Float 36 fork + DPX2 rear shock. Tuned for mixed trails.",
        hotspots: [
          { id: "h2", leftPct: 68, topPct: 36, title: "Fork travel 150mm" },
        ],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "12-speed Shimano XT with wide-range cassette.",
        hotspots: [{ id: "h3", leftPct: 38, topPct: 60, title: "Crankset" }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "Hydraulic disc brakes with 203mm rotors.",
        hotspots: [{ id: "h4", leftPct: 82, topPct: 56, title: "Front rotor" }],
      },
    ],
    techSpec: [
      { label: "Wheel Size", value: "29\"" },
      { label: "Fork Travel", value: "150 mm" },
      { label: "Weight", value: "13.6 kg" },
    ],
  },
  {
    id: "saola",
    uiName: "Saola",
    bgWord: "SAOLA",
    image: "/images/dummy-cycle.png",
    logo: "/icons/saola-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#0046D7, #FFFFFF",
      cta: "var(--color-airforce)",
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content: "Carbon monocoque frame focused on agility.",
        hotspots: [{ id: "h1", leftPct: 46, topPct: 34, title: "Carbon downtube" }],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "140mm trail tuned.",
        hotspots: [{ id: "h2", leftPct: 70, topPct: 38, title: "Rear shock tuning" }],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "12 speed SRAM GX.",
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "Hydraulic discs 180/160.",
      },
    ],
    techSpec: [
      { label: "Wheel Size", value: "27.5\"" },
      { label: "Fork Travel", value: "140 mm" },
      { label: "Weight", value: "12.4 kg" },
    ],
  },
  {
    id: "takin",
    uiName: "Takin",
    bgWord: "TAKIN",
    image: "/images/dummy-cycle.png",
    logo: "/icons/takin-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#516316, #F1FFC3",
      cta: "var(--color-army)",
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content: "Robust alloy frame for hardpack and enduro.",
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "160 / 150 mm travel setup.",
        hotspots: [{ id: "h2", leftPct: 72, topPct: 36, title: "Long travel fork" }],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "SRAM Eagle 12-speed.",
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "4-piston hydraulic brakes.",
      },
    ],
    techSpec: [
      { label: "Wheel Size", value: "29\"" },
      { label: "Fork Travel", value: "160 mm" },
      { label: "Weight", value: "14.2 kg" },
    ],
  },
];



export const variants = [
  {
    model: "Model-1",
    colors: ["#6F7B12", "#D7CB8B", "#A84545"],
    productLink: "/products/serow/model-1",
  },
  {
    model: "Model-2",
    colors: ["#556B2F", "#C9C18C", "#9B3E3E"],
    productLink: "/products/serow/model-2",
  },
  {
    model: "Model-3",
    colors: ["#4D5C1D", "#DAC888", "#8E2F2F"],
    productLink: "/products/serow/model-3",
  },
];
