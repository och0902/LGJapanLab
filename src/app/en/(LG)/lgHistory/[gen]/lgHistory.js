import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const LGHistories = [
   {  
      generation: '1',
      period: '1947-1969',
      icon: <FoundationOutlinedIcon variant='h5' sx={{ mb: '-3px' }} />,
      achievement: 'Foundation and Pioneering',
      mainImg: '/images/lg/lgHistory/1stgen/1stgen.jpg',
      meaning: 'A period of pioneering for the chemical and electronics industries in Korea',
      introTitle1: 'Historic',
      introTitle2: 'First Step',
      chairman: 'In Hwoi Koo',

      events: [
         { selected: true,  date: '1947.01', history: 'LuckyChemical Co., Ltd. is established (now LG Chem), Korea’s first cosmetics product “Lucky Cream” is produced', },
         { selected: false,  date: '1953.11', history: 'Lucky Industry is established (now LG International)', },
         { selected: true,  date: '1955.09', history: 'Lucky Chemical Co., Ltd. starts to produce Lucky Toothpaste', },
         { selected: false,  date: '1956.05', history: 'Lucky Chemical Co., Ltd. produces the first PVC pipe in Korea', },
         { selected: false,  date: '1958.10', history: 'Goldstar Co., Ltd. is established (now LG Electronics)', },
         { selected: true,  date: '1959.11', history: 'Goldstar Co., Ltd. produces the first Korean radio, A-501, bearing its trademark, Goldstar', },
         { selected: false,  date: '1960.03', history: 'Goldstar Co., Ltd. produces 12-inch fans for the first time in Korea', },
         { selected: false,  date: '1960.04', history: 'Lucky Oil and Fat Co., Ltd. starts production of cosmetic and laundry soap including “Rainbow, Croba and Venus”', },
         { selected: true,  date: '1961.07', history: 'Goldstar Co., Ltd. produces the first automatic telephone in Korea', },
         { selected: false,  date: '1965.04', history: 'Goldstar Co., Ltd. produces the first domestic refrigerator', },
         { selected: true,  date: '1966.04', history: 'Lucky Oil and Fat Co., Ltd. produces and sells synthetic detergents, “HiTi” for the first time in Korea', },
         { selected: true,  date: '1966.08', history: 'Goldstar Co., Ltd. produces the first 19-inch black and white TV in Korea', },
         { selected: false,  date: '1967.05', history: 'Honam Oil Refinery (now GS Caltex) holds inaugural general meeting', },
         { selected: false,  date: '1967.06', history: 'Goldstar Co., Ltd. produces the first FM/AM radios in Korea', },
         { selected: false,  date: '1967.07', history: 'Lucky Oil and Fat Co., Ltd. develops and produces “Avon”, a liquid dishwashing detergent and “Cream Shampoo”, the first Korean shampoo', },
         { selected: false,  date: '1968.03', history: 'Goldstar Co., Ltd. produces the room air-conditioner in Korea', },
         { selected: false,  date: '1969.05', history: 'Goldstar Co., Ltd. establishes the semiconductor manufacturing company, Goldstar Electronics Co., Ltd.', },
         { selected: false,  date: '1969.05', history: 'Goldstar Co., Ltd. develops and produces the first Korean washing machine.', },
         { selected: false,  date: '1969.10', history: 'Goldstar Telecommunication is established', },
         { selected: false,  date: '1969.12', history: 'Lucky International is established', },
         { selected: false,  date: '1969.12', history: 'Yonam Culture Foundation is established (now the LG Yonam Foundation)', },
      ],
      imgs: [
         { url: '/images/lg/lgHistory/1stgen/cream.jpg', name: 'Cream', },
         { url: '/images/lg/lgHistory/1stgen/toothpaste.jpg', name: 'Toothpaste', },
         { url: '/images/lg/lgHistory/1stgen/radio.jpg', name: 'Radio', },
         { url: '/images/lg/lgHistory/1stgen/telephone.jpg', name: 'Telephone', },
         { url: '/images/lg/lgHistory/1stgen/detergent.jpg', name: 'Detergent', },
         { url: '/images/lg/lgHistory/1stgen/tv.jpg', name: 'TV', },
      ]
   },
   {
      generation: '2',
      period: '1970-1994',
      icon: <FlightTakeoffOutlinedIcon variant='h5'  sx={{ mb: '-3px' }} />,
      achievement: 'Advancement and Innovation',
      mainImg: '/images/lg/lgHistory/2ndgen/2ndgen.jpg',
      chairman: 'Cha Kyung Koo',
      meaning: 'High-growth period achieved through state-of-the-art technology development and internal management',
      introTitle1: 'Recognized as a giant in the business world',
      introTitle2: 'by steadfast management',
      events: [
         { selected: false,  date: '1972.12', history: 'Lucky Chemical Co., Ltd. reaches 10 billion won in total sales', },
         { selected: true,  date: '1973.03', history: 'Goldstar Co., Ltd. develops and produces the first Korean cassette recorder', },
         { selected: false,  date: '1976.02', history: 'Goldstar Co., Ltd.’s TV production exceeds 1 million units', },
         { selected: true,  date: '1976.09', history: 'Lucky Co., Ltd. produces the first plastic windows and doors “Hi Chassis” in Korea', },
         { selected: true,  date: '1977.08', history: 'Goldstar Co., Ltd. starts mass production of 19-inch color TVs', },
         { selected: false,  date: '1978.03', history: 'Lucky Petrochemical Co., Ltd is established.', },
         { selected: false,  date: '1978.12', history: 'Lucky Co., Ltd.’s total revenue exceeds 100 billion won', },
         { selected: true,  date: '1981.05', history: 'Goldstar Co., Ltd. develops the first electronic VCR in Korea', },
         { selected: true,  date: '1981.08', history: 'Goldstar Semiconductor produces first domestic mini computers in Korea', },
         { selected: false,  date: '1982.05', history: 'Goldstar Co., Ltd. develops first color video camera in Korea', },
         { selected: false,  date: '1983.01', history: 'Name of Lucky Group is changed to Lucky Goldstar Group', },
         { selected: true,  date: '1984.02', history: 'Goldstar Semiconductor develops the first 8-bit microprocessor in Korea.', },
         { selected: false,  date: '1986.04', history: 'Lucky Economic Research Institute (now the LG Economic Research Institute) is established', },
         { selected: false,  date: '1987.10', history: 'Lucky Goldstar Twin Towers (now the LG Twin Towers) is constructed', },
         { selected: false,  date: '1990.02', history: '‘"Creating Values for Customers" and "People-oriented Management“ are adopted as management concepts', },
         { selected: false,  date: '1990.03', history: 'The LG Twins, a professional baseball team, is established', },
         { selected: false,  date: '1993.08', history: 'First Korean growth hormone “Utropin” is developed and commercialized', },         
      ],
      imgs: [
         { url: '/images/lg/lgHistory/2ndgen/cassette.jpg', name: 'Cassette', },
         { url: '/images/lg/lgHistory/2ndgen/chassis.jpg', name: 'Chassis', },
         { url: '/images/lg/lgHistory/2ndgen/colortv.jpg', name: 'Color TV', },
         { url: '/images/lg/lgHistory/2ndgen/vcr.jpg', name: 'VCR', },
         { url: '/images/lg/lgHistory/2ndgen/minicomputer.jpg', name: 'Minicomputer', },
         { url: '/images/lg/lgHistory/2ndgen/microprocessor.jpg', name: 'Microprocessor', },
      ]  
   },
   {
      generation: '3',
      period: '1995-2017',
      icon: <AutoAwesomeOutlinedIcon variant='h5'  sx={{ mb: '-3px' }} />,
      achievement: 'Towards No.1 LG',
      mainImg: '/images/lg/lgHistory/3rdgen/3rdgen.jpg',
      chairman: 'Bon Moo Koo',
      meaning: "The 21st century signifies a leap towards 'Superior LG'",
      introTitle1: 'Innovation for',
      introTitle2: 'the 21st Century',
      events: [
         { selected: false,  date: '1995.01', history: 'Name of Lucky Goldstar Group is changed to LG', },
         { selected: false,  date: '1996.07', history: 'LG Telecom (now LG U+) is established', },
         { selected: false,  date: '1999.08', history: 'LG Philips LCD (now LG Display) is established by LG LCD and Philips', },
         { selected: false,  date: '2001.04', history: 'LG Chem splits into three companies: LGCI, LG Chem and LG Household & Health Care', },
         { selected: false,  date: '2002.08', history: 'LG Life Sciences is established', },
         { selected: true,  date: '2003.04', history: 'LG Life Sciences’ “Factive” is marked as the first Korean drug approved by the U.S. FDA', },
         { selected: false,  date: '2003.10', history: `LG Philips LCD develops the world's first 55-inch HDTV LCD`, },
         { selected: false,  date: '2005.01', history: 'LG and GS are separated into two different groups', },
         { selected: false,  date: '2005.03', history: 'LG announces the “LG Way”', },
         { selected: true,  date: '2005.08', history: `LG Innotek develops the world's smallest 6.4 mm camera module for mobile phones`, },
         { selected: false,  date: '2006.03', history: `LG Philips LCD develops the world's largest 100-inch LCD`, },
         { selected: false,  date: '2009.04', history: 'LG Hausys is separated from LG Chem and launched independently', },
         { selected: true,  date: '2013.01', history: `LG Display produces World's First 55inch OLED TV`, },
         { selected: true,  date: '2015.07', history: 'LG Electronics releases Tromm Twin Wash', },
         { selected: true,  date: '2016.03', history: 'LG Electronics releases "LG Signature", super premium household appliances, in Korea', },
         { selected: false,  date: '2016.04', history: `“Eupenta”, made by LG Life Sciences, wins WHO PQ approval as Korea's first pentavalent vaccine`, },
         { selected: false,  date: '2017.11', history: `LG Innotek develops a UV-C LED with the world's highest output`, },
         { selected: false,  date: '2018.01', history: `LG Display develops world's first 88-inch 8K OLED display`, },
         { selected: false,  date: '2018.04', history: 'LG Science Park begins full operation', },
      ],  
      imgs: [
         { url: '/images/lg/lgHistory/3rdgen/pdptv.jpg', name: 'PDP TV', },
         { url: '/images/lg/lgHistory/3rdgen/factive.jpg', name: 'Drug', },
         { url: '/images/lg/lgHistory/3rdgen/cameramodule.jpg', name: 'Camera Module', },
         { url: '/images/lg/lgHistory/3rdgen/oled55fhd.jpg', name: 'OLED TV', },
         { url: '/images/lg/lgHistory/3rdgen/twinwash.jpg', name: 'Twinwash', },
         { url: '/images/lg/lgHistory/3rdgen/signiture.jpg', name: 'SIGNATURE', },
      ] 
   },
   {
      generation: '4',
      period: '2018-',
      icon: <TrendingUpIcon variant='h5'  sx={{ mb: '-3px' }} />,
      achievement: 'The Future towards Customers',
      mainImg: '/images/lg/lgHistory/4thgen/4thgen.jpg',
      chairman: 'Kwang Mo Koo',
      meaning: 'A Welcome Challenge that puts Customer Experience first',
      introTitle1: 'A Bold Challenge for',
      introTitle2: 'a New Leap Forward',
      events: [
         { selected: false,  date: '2019.12', history: 'LG Chem establishes an electric vehicle battery joint venture with GM of USA', },
         { selected: true,  date: '2020.10', history: "LG Electronics launches 'LG SIGNATURE OLED R', the world’s first rollable TV", },
         { selected: false,  date: '2020.12', history: "LG Chem Launches 'LG Energy Solution', a spin-off of Energy Solutions Company", },
         { selected: true,  date: '2020.12', history: "LG Launches 'LG AI Research', an artificial intelligence think tank", },
         { selected: false,  date: '2021.07', history: 'LG International, Pantos, LG Hausys, Silicon Works, LG MMA is separated from affiliates', },
         { selected: true,  date: '2021.12', history: `LG AI Research unveils the super-giant artificial intelligence(AI) model 'EXAONE'`, },
         { selected: false,  date: '2022.09', history: `LG Electronics Launches World's Largest 97 Type OLED TV`, },
      ],  
      imgs: [
         { url: '/images/lg/lgHistory/4thgen/rollableoled.jpg', name: 'Rollable TV', },
         { url: '/images/lg/lgHistory/4thgen/washtower.jpg', name: 'Washtower', },
         { url: '/images/lg/lgHistory/4thgen/tilda.jpg', name: 'TILDA', },
         { url: '/images/lg/lgHistory/4thgen/exaone.jpg', name: 'EXAONE', },
         { url: '/images/lg/lgHistory/4thgen/strechable.jpg', name: 'Strechable Display', },
         { url: '/images/lg/lgHistory/4thgen/standbyme.jpg', name: 'Standbyme', },
      ] 
   },
];

export default LGHistories;
