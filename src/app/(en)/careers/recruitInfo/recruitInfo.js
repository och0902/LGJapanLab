import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export const weAre = [
   { 
      policy: 'R&D focused', 
      desc: 'LG Japan Lab carries out intensive research and development activities.' 
   },
   { 
      policy: 'Best Experts', 
      desc: 'We use our major knowledge and experience to grow and develop into the best experts in the field.' 
   },
   { 
      policy: 'Collaborating Globally', 
      desc: 'We communicate and collaborate with R&D bases around the world, including Korea and Japan, to create research and development results.' 
   }, 
];

export const aboutRND = [
   'R&D tasks are largely divided into affiliate tasks and laboratory-specific tasks.',
   'The task is progressed and evaluated on the project base.',
   'We will communicate closely with researchers from inside and outside (Japan, Korea, and Global) to achieve our goals.',
   'We value open innovation activities with universities, research institutes, and affiliates outside.',
];

export const videos = [
   { url: '/videos/careers/2023LifesGoodCampaign.mp4', thumbnail: '/images/careers/careers1.png' },
   { url: '/videos/careers/LGTechConference2023.mp4', thumbnail: '/images/careers/careers2.png' },
   { url: '/videos/careers/2023LGSPPeople.mp4', thumbnail: '/images/careers/careers3.png' },
   { url: '/videos/careers/LG75thAnniversary.mp4', thumbnail: '/images/careers/careers4.png' },
];

export const recruitmentFields = [
   { 
      icon: <TvOutlinedIcon sx={{ fontSize: '2rem', mb: '-7px' }} />,
      researchArea: 'Product Technology Development',
      contents: [ 
         'Home Appliances : Washing Machines, Refrigerators, Air Conditioners, Air Purifiers',
         'Home Entertainments : Picture Quality Improvement, Software Development, Peripheral Device Evaluation for TVs',
         'Quantum Computer Application Technologies',
         'Semiconductor Packaging Technologies',
      ],
   },
   { 
      icon: <ScienceOutlinedIcon sx={{ fontSize: '2rem',  mb: '-7px' }} />,
      researchArea: 'Material Research & Development',
      contents: [
         'OLED Materials & Functional Materials Develoment for Displays',
         'Material & Manufacturing Processes Development for Rechargeable Battery',
         'Technologies for Sustainability (CT: Clean Technology - Bio Plastic, Hydrogen)',
      ],
   },
];

export const employeesWelfare = [
   { 
      item: 'Place of work',
      icon: <BusinessOutlinedIcon sx={{ fontSize: '2rem' }} />,
      contents: [
         'Yokohama R&D Center (Head Office : Nishi Ward, Yokohama City)',
         'Kyoto R&D Center (Shimokyo Ward, Kyoto City)',
      ]
   },
   { 
      item: 'Working hours',
      icon: <WatchLaterOutlinedIcon sx={{ fontSize: '2rem' }} />,
      contents: [
         '9:00~18:00 (working hours : 8 hours, 1 hour break)',
         '*Core time system (advance application system) available',
      ]
   },
   { 
      item: 'Holidays and vacations',
      icon: <HolidayVillageOutlinedIcon sx={{ fontSize: '2rem' }} />,
      contents: [
         'Full five-day work week (Saturday, Sunday and Holiday)',
         'Summer vacation (5 days)',
         'Year-end and New Year holidays (company-designated date)',
         'Special leave (anniversary of foundation, long service, congratulations and condolences)',
         'Prenatal and postnatal leave/care leave',
         '124 holidays per year (2022) *The number of holidays varies depending on the year.'
      ],
   },
   {      
      item: 'Salary', 
      icon: <WatchLaterOutlinedIcon sx={{ fontSize: '2rem' }} />,
      contents: [
         'Annual salary system', 
         'We will give you preferential treatment according to our regulations in consideration of experience and ability.' 
      ],
   },
   { 
      item: 'Benefits', 
      icon: <LoyaltyOutlinedIcon sx={{ fontSize: '2rem' }} />,
      contents: [
         'In-house product purchase assistance (50% of the purchase price is subsidized *Annual maximum amount is available)',
         'Company allocation of product groups (Internal sales based on company allocation of specific home appliances *Unscheduled)',
         'Benefits club (You can use accommodation at a discount)',
         'Congratulations and condolence money (marriage, childbirth, admission, etc.)',
         'Commendation for long service',
         'Interview with industrial doctors',
         'Stress check',
         'Support for various types of education and external training',
         'Support for participation fees for exhibitions, academic societies, and seminars',
         'Subsidy for language lessons (Korean (face-to-face) and English (online), Exclude text fee)',
         'Subsidies for club activities in the company (attendance, futsal, basketball, etc.)',
         'Support for in-house social gatherings to revitalize the organization',
      ],
   },
   { 
      item: 'Language',
      icon: <LanguageOutlinedIcon sx={{ fontSize: '2rem' }} />,
      contents: [
         `Japanese: Business level or higher is required (because the company's official language is Japanese)`,
         'English: The level at which you can read essays (not required)',
         'Korean: We welcome those who are willing to learn.',
      ]
   },
];

export const recruitmentProcess = [
   { process: 'Document Screening',  },
   { process: `1'st Interview`, },
   { process: `2'nd Interview`, desc: 'with Personal Presentation' },
   { process: 'Apitude Test', desc: 'with 15min Web Test' },
   { process: 'Final Interview', desc: 'with Personal Presentation' },
   { process: 'Decision & Notification', },
];

