import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';

const affilated = [
   {  
      field: 'Holding Company',
      icon:  <BusinessOutlinedIcon variant='h5' />,
      company: [
         {
            name: 'LG Corp.',
            desc: `LG Corporation, launched in March 2003 as the first holding company in Korea, manages equity investment portfolios on a corporate level, and efficiently allocates resources to subsidiaries in order to foster quality products and services to lead the global market.`,
            href: 'https://www.lgcorp.com/',   
         },
         {
            name: 'LG Management Development Institute',
            desc: `The LG Management Development Institute operates the LG Business Research, which specializes in management consulting and research, and the LG Academy, which fosters the human resources needed for current and future LG businesses.
            - The LG Business Research is a private think tank that provides services in economic analysis, countermeasure preparation, and industrial research and corporate management consulting services, satisfying the various needs of customers in Korea.
            - As a strategic partner of the LG Group, the LG Academy fosters human resources to lead present and future LG businesses. The academy provides differentiated education services for organizational leaders, executives, and employees to develop their job competences.`,
            href: 'https://www.lgbr.co.kr/en/index.do',
         },
      ]
   },
   {
      field: 'Eleconics',
      icon: <MemoryOutlinedIcon variant='h5' />,
      company: [
         {
            name: 'LG Electons',
            desc: `With B2C businesses, such as home appliances and TVs, and B2B businesses, such as commercial air conditioners and car parts, LG Electronics is a global leader in the IT market, developing its businesses in more than 130 locations around the world.
            LG Electronics consists of four business divisions: H&A (Home Appliance & Air Solution), HE (Home Entertainment), VS (Vehicle Component Solutions) and BS(Business Solutions).`,
            href: 'https://www.lg.com/global',
         },
         {
            name: 'LG Display',
            desc: `LG Display is a global display company that develops and sells innovative displays and related products created using differentiated technologies such as OLED and IPS.
            LG Display is pioneering the market with diverse TV, mobile, IT, automobile, and commercial display products. As a global leader in display industry, LG Display is well known for its advanced technology, stable production capacities, and market insights.`,
            href: 'https://www.lgdisplay.com/eng',
         },
         {
            name: 'LG Innotek',
            desc: `LG Innotek, with a vision of “helping customers become winners in the materials parts engineering industry”, specializes in the fields of vehicles, mobile devices, IoT, displays, semiconductors, and LEDs.
            Out of all of LG Innotek’s superior products, its camera modules, photomasks, and tape substrates, in particular, are leading the global markets. LG Innotek is preparing to meet the needs of future-oriented businesses by developing innovative products in the automotive and IoT fields.`,
            href: 'https://www.lginnotek.com/main/main.do?locale=en'
         },
      ],
   },
   {
      field: 'Chemicals',
      icon: <ScienceOutlinedIcon variant='h5' />,
      company: [
         {
            name: 'LG Chem',
            desc: `Since its establishment in 1947, LG Chem has continuously achieved growth through endless challenges and innovations as Korea’s leading chemical company.
            LG Chem will again endeavor to become a 'Global Top 5 Chemical Company' with a balanced business portfolio that has a competitive advantage across the globe, including business divisions in petrochemicals, advanced materials, life sciences, and a subsidiary specializing in batteries.
            "We connect science to life for a better future."
            LG Chem will become a world-class corporation that creates new value for our customers based on "science," beyond "chemistry."`,
            href: 'https://www.lgchem.com/main/index',
         },
         {
            name: 'LG Energy Solution',
            desc: `As the world's number one battery company, our business covers advanced automotive batteries, mobility & IT batteries, and ESS (Energy Storage System) batteries, and we are also securing differentiated competitiveness in the E-Platform field that provides various services throughout the life of the battery and in the next generation battery technology including solid-state batteries and lithium sulfur batteries.`,
            href: 'https://www.lgensol.com/en/index',
         },
         {
            name: 'https://www.lgensol.com/en/index',
            desc: `Since its foundation in 1947, LG Household & Health Care has promoted a convenient lifestyle and culture for its customers, making their lives healthier and more beautiful.
            Established as the first cosmetics and toothpaste manufacturer in Korea, LG Household & Health Care strives to provide consumers with healthy, appealing, and dynamic values ​​through diverse products such as daily necessities, cosmetics, and beverages.`,
            href: 'http://www.lghnh.com/global/',
         },
      ],
   },
   {
      field: 'Communication & Services',
      icon: <SatelliteAltOutlinedIcon variant='h5' />,
      company: [
         {
            name: 'LG U+',
            desc: `LG U+ is a telecommunications service company that has sought to make meaningful changes in customers' lives ever since its establishment in 1996.
            LG U+ is divided into mobile, home, electronic device, and corporate divisions. Each business division focuses on developing high-quality content to provide differentiated values for customers’ lives by commercializing innovative services with a combination of wired and wireless connections based on optimized networks.`,
            href: 'https://www.lguplus.com/',
         },
         {
            name: 'LG HelloVision Corp.',
            desc: `LG HelloVision is a leading cable TV company that has pioneered the broadcasting and telecommunication industry since its launch in 2002.
            LG Hellovision is creating customer value in various areas, including innovative cable TV and internet services; MVNO(Mobile Virtual Network Operator), a competitive and reasonable mobile service; localTV channel that realizes regional values via media; new businesses driving future growth.`,
            href: 'https://corp.lghellovision.net/eng/main.do',
         },
         {
            name: 'HS Ad',
            desc: `HS Ad began with the launch of the Advertising Office of Lucky Chemical Industrial Corp. in 1962 (currently LG Chem)
            Since its launch as LG Ad Co., Ltd. in 1984, it has developed into a representative advertising company in Korea with a high growth rate every year.`,
            href: 'https://www.hsad.co.kr/en/00_main/index.asp',
         },
         {
            name: 'LG CNS',
            desc: `LG CNS is a global IT service company that uses Smart Technologies & Services to provide support that far exceeds customers’ expectations.
            With the expertise of a highly skilled and professional workforce, LG CNS provides customers with the best IT solutions and services in various industrial and public sectors such as customized system development, strategic consulting, and the total outsourcing of IT services.`,
            href: 'https://www.lgcns.com/en/',
         },
         {
            name: 'D&O',
            desc: `D&O is a total space solution company that offers a better future space to clients. With unrivaled expertise and technological capacity in space construction, D&O supports the business success of its corporate clients and offers distinctly new and enjoyable time to its individual clients.`,
            href: 'http://www.dnocorp.com/main/main.do',
         },
         {
            name: 'LG Sports',
            desc: `LG Sports was established in 1983 as the first professional sports management company in Korea. LG Sports works in cooperation with the LG Twins, a professional baseball team, and the LG Sakers, a professional basketball team, contributing to the development of Korean sports and facilitating the leisure lives of the Korean people.
            - The LG Twins is a professional baseball team, founded in 1990, based in Seoul.
            - The LG Sakers is a professional basketball team, founded in 1994, based in Changwon.`,
            href: 'https://www.lgtwins.com/service/html.ncd?view=/pc_twins/twins_main/twins_main',
            href2: 'https://sakers.kbl.or.kr/',
         },
      ],
   },

];

export default affilated;