import { GrTextWrap } from "react-icons/gr";
import { LuKeyRound, LuPhoneCall } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBuildings, BiCodeAlt } from "react-icons/bi";
import { FiPlayCircle } from "react-icons/fi";
import { BsBagHeart, BsShield } from "react-icons/bs";
import { LiaListAltSolid } from "react-icons/lia";
import * as Icon from "@/components/SVGs/menu";

export const headerLeftNavs = [
  {
    label: "Solutions",
    to: "",
    subMenu: [
      {
        label: "Teams",
        to: "/",
        subMenu: [
          {
            label: "Marketing Teams",
            desc: "CRM software to boost your marketing",
            to: "/solution/team/marketing",
            icon: <Icon.MarketingIcon />,
            hoverIcon: <Icon.MarketingIcon className="hovered" />,
          },
          {
            label: "Registrars",
            desc: "From admissions to finance",
            to: "/solution/team/register",
            icon: <Icon.RegistrarsIcon />,
            hoverIcon: <Icon.RegistrarsIcon className="hovered" />,
          },
          {
            label: "Administrators",
            desc: "Effective student performance tracking",
            to: "/solution/team/administrator",
            icon: <Icon.AdministratorsIcon />,
            hoverIcon: <Icon.AdministratorsIcon className="hovered" />,
          },
          {
            label: "Teachers",
            desc: "Make learning fun and interactive",
            to: "/solution/team/teacher",
            icon: <Icon.TeachersIcon />,
            hoverIcon: <Icon.TeachersIcon className="hovered" />,
          },
          {
            label: "CFOs",
            desc: "Online financial management",
            to: "/solution/team/cfo",
            icon: <Icon.CFOIcon />,
            hoverIcon: <Icon.CFOIcon className="hovered" />,
          },
          {
            label: "CTOs",
            desc: "CTO-focused platform",
            to: "/solution/team/it",
            icon: <Icon.CTOIcon />,
            hoverIcon: <Icon.CTOIcon className="hovered" />,
          },
          {
            label: "Business Leaders",
            desc: "Performance-optimizing tech",
            to: "/solution/team/business",
            icon: <Icon.BusinessIcon />,
            hoverIcon: <Icon.BusinessIcon className="hovered" />,
          },
        ],
      },
      {
        label: "Organizations",
        to: "/",
        subMenu: [
          {
            label: "Academies",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/academies",
            icon: <Icon.AcademiesIcon />,
            hoverIcon: <Icon.AcademiesIcon className="hovered" />,
          },
          {
            label: "Schools",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/school",
            icon: <Icon.SchoolsIcon />,
            hoverIcon: <Icon.SchoolsIcon className="hovered" />,
          },
          {
            label: "Universities & Higher Education",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/universities",
            icon: <Icon.UniversitiesIcon />,
            hoverIcon: <Icon.UniversitiesIcon className="hovered" />,
          },
          {
            label: "Corporate Learining",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/corporate",
            icon: <Icon.CorporateIcon />,
            hoverIcon: <Icon.CorporateIcon className="hovered" />,
          },
        ],
      },
      {
        label: "Features",
        to: "",
        subMenu: [
          {
            label: "Pre-Admission & Enrolment",
            to: "/solution/features/pre",
            image: "/assets/images/shapes/Preadmission.png",
          },
          {
            label: "Customer Relationship Management",
            to: "/solution/features/customer",
            image: "/assets/images/shapes/CRM.png",
          },
          {
            label: "Learning Management System",
            to: "/solution/features/learning",
            image: "/assets/images/shapes/LMS.png",
          },
          {
            label: "Finance & Accounting",
            to: "/solution/features/finance",
            image: "/assets/images/shapes/Finance.png",
          },
          {
            label: "Alumni Module",
            to: "/solution/features/alumni",
            image: "/assets/images/shapes/Alumni.png",
          },
          {
            label: "Apps & Integrations",
            to: "/solution/features/apps",
            image: "/assets/images/shapes/Integrations.png",
          },
          {
            label: "Student Information System",
            to: "/solution/features/student",
            image: "/assets/images/shapes/SIS.png",
          },
          {
            label: "Analytics",
            to: "/solution/features/analytics",
            image: "/assets/images/shapes/Analytics.png",
          },
          {
            label: "White Label Module",
            to: "/solution/features/white",
            image: "/assets/images/shapes/White label.png",
          },
          {
            label: "E-commerce Module",
            to: "/solution/features/ecommerce",
            image: "/assets/images/shapes/E-commerce.png",
          },
          {
            label: "Fee & Donation Module",
            to: "/solution/features/fee",
            image: "/assets/images/shapes/Donations.png",
          },
        ],
      },
    ],
  },

  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Free Resources",
    to: "/free",
  },
  {
    label: "More",
    to: "/",
    subMenu: [
      {
        label: "Resources",
        to: "/",
        subMenu: [
          {
            label: "Help Docs",
            to: "/help",
            icon: <Icon.HelpIcon />,
            hoverIcon: <Icon.HelpIcon className="hovered" />,
          },
          {
            label: "Demo & Webinars",
            to: "/demo",
            icon: <Icon.DemoIcon />,
            hoverIcon: <Icon.DemoIcon className="hovered" />,
          },
          {
            label: "APIs",
            to: "/apis",
            icon: <Icon.APIIcon />,
            hoverIcon: <Icon.APIIcon className="hovered" />,
          },
          {
            label: "Blog",
            to: "/blog",
            icon: <Icon.BlogIcon />,
            hoverIcon: <Icon.BlogIcon className="hovered" />,
          },
          {
            label: "Testimonials",
            to: "/testimonials",
            icon: <Icon.CareersIcon />,
            hoverIcon: <Icon.CareersIcon className="hovered" />,
          },
        ],
      },
      {
        label: "Company",
        to: "/",
        subMenu: [
          {
            label: "About Us",
            to: "/about",
            icon: <Icon.AboutIcon />,
            hoverIcon: <Icon.AboutIcon className="hovered" />,
          },
          {
            label: "Careers",
            to: "/careers",
            icon: <Icon.CareersIcon />,
            hoverIcon: <Icon.CareersIcon className="hovered" />,
          },
          {
            label: "Contact",
            to: "/contact",
            icon: <Icon.ContactIcon />,
            hoverIcon: <Icon.ContactIcon className="hovered" />,
          },
          {
            label: "Privacy Policy",
            to: "/privacy",
            icon: <Icon.PrivacyIcon />,
            hoverIcon: <Icon.PrivacyIcon className="hovered" />,
          },
          {
            label: "Terms & Conditions",
            to: "/terms",
            icon: <Icon.TermsIcon />,
            hoverIcon: <Icon.TermsIcon className="hovered" />,
          },
          {
            label: "Data Security",
            to: "/security",
            icon: <Icon.SecurityIcon />,
            hoverIcon: <Icon.SecurityIcon className="hovered" />,
          },
        ],
      },
    ],
  },
];

export const headerRightNavs = [
  {
    label: "Contact Sales",
    to: "/contact",
  },
  {
    label: "Log in",
    to: "/login",
  },
];
