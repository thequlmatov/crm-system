import AnalyticIcon from "../assets/icons/analytics.svg?react";
import BuyurtmalarIcon from "../assets/icons/Buyurtma.svg?react";
import MoliyaIcon from "../assets/icons/Moliya.svg?react";
import TalabaIcon from "../assets/icons/student.svg?react";
import GroupIcon from "../assets/icons/guruhlar.svg?react";
import KurslarIcon from "../assets/icons/courses.svg?react";
import HrIcon from "../assets/icons/Hr.svg?react";
import SettingsIcon from "../assets/icons/Sozlamalar.svg?react";

export const sidebar = [
  {
    id: 1,
    title: "Analitika",
    icon: AnalyticIcon,
    path: "/analitika",
  },
  {
    id: 2,
    title: "Buyurtma",
    icon: BuyurtmalarIcon,
    path: "/buyurtma",
    child: [
      {
        id: "2-1",
        title: "Buyurtmalar ro’yxati",
        path: "/buyurtmalar ",
      },
      {
        id: "2-2",
        title: "Birinchi darsga yozilish",
        path: "/birinchi ",
      },
      {
        id: "2-3",
        title: "Yangi talabalar ro’yxati",
        path: "/yangi ",
      },
    ],
  },
  {
    id: 3,
    title: "Moliya",
    icon: MoliyaIcon,
    path: "/moliya",
    child: [
      {
        id: "3-1",
        title: "Tolovlar",
        path: "/tolovlar ",
      },
      {
        id: "3-2",
        title: "O`qituvchilar oyligi",
        path: "/oylik ",
      },
    ],
  },
  {
    id: 4,
    title: "Talaba",
    icon: TalabaIcon,
    path: "/talaba",
    child: [
      {
        id: "4-1",
        title: "Barcha talabalar",
        path: "/talabalar ",
      },
      {
        id: "4-2",
        title: "Birinchi darsga yozilish",
        path: "/aktive ",
      },
      {
        id: "4-3",
        title: "Yangi talabalar royxati",
        path: "/arxive ",
      },
    ],
  },
  {
    id: 5,
    title: "Guruh",
    icon: GroupIcon,
    path: "/guruhlar",
    child: [
      {
        id: "5-1",
        title: "Guruhlar",
        path: "/buyurtmalar ",
      },
      {
        id: "5-2",
        title: "Dars jadvali",
        path: "/dars",
      },
      {
        id: "5-3",
        title: "Xonalar",
        path: "/xonalar",
      },
    ],
  },
  {
    id: 6,
    title: "Kurslar",
    icon: KurslarIcon,
    path: "/kurslar",
    child: [
      {
        id: "6-1",
        title: "Kurslar ro’yxati",
        path: "/royxati ",
      },
      {
        id: "6-2",
        title: "Kurslar yo`nalishi",
        path: "/yo`nalishlar ",
      },
    ],
  },
  {
    id: 7,
    title: "HR",
    icon: HrIcon,
    path: "/hr",
    child: [
      {
        id: "2-1",
        title: "Ro`llar",
        path: "/rollar ",
      },
      {
        id: "2-2",
        title: "Birinchi darsga yozilish",
        path: "/birinchi ",
      },
      {
        id: "2-3",
        title: "Yangi talabalar ro’yxati",
        path: "/yangi ",
      },
    ],
  },
  {
    id: 8,
    title: "Sozlamalar",
    icon: SettingsIcon,
    path: "/sozlamalar",
    child: [
      {
        id: "2-1",
        title: "Buyurtmalar ro’yxati",
        path: "/buyurtmalar ",
      },
      {
        id: "2-2",
        title: "Birinchi darsga yozilish",
        path: "/birinchi ",
      },
      {
        id: "2-3",
        title: "Yangi talabalar ro’yxati",
        path: "/yangi ",
      },
    ],
  },
];
