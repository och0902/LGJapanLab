const histories = [
   {  
      generation: '1',
      achievement: '창업과 개척',
      chairman: '연암(蓮庵) 구인회 회장 (1947-1969)',
      events: [
         { date: '1947.01', history: '락희화학공업사(現 LG화학) 설립, 최초 국산화장품 [럭키크림] 생산', },
         { date: '1952.04', history: '동양전기화학공업사 설립', },
         { date: '1953.11', history: '락희산업㈜(現 LG상사) 설립', },
         { date: '1955.09', history: '락희화학, [럭키치약], [LUCKY] 상표, 치약 생산', },
         { date: '1956.05', history: '락희화학공업사, 국내 최초 PVC 파이프 생산', },
         { date: '1958.10', history: '금성사(現 LG전자) 설립', },
         { date: '1959.11', history: '금성사, [GoldStar] 상표로 국내 최초 국산 라디오 [A-501] 생산', },
         { date: '1960.03', history: '금성사, 국내 최초로 12인치 선풍기 생산', },
         { date: '1960.04', history: '락희유지공업, [무지개, 크로바, 비너스] 화장 및 세탁비누 생산', },
         { date: '1961.07', history: '금성사, 국내 최초 자동전화기 생산', },
         { date: '1963.11', history: '금성사, 국내 최초 적산전력량계 생산', },
         { date: '1965.04', history: '금성사, 국산 냉장고 1호 생산', },
         { date: '1966.04', history: '락희유지공업, 국내 최초 합성세제 [하이타이], [뉴히트] 생산', },
         { date: '1966.08', history: '금성사, 국내 최초 흑백TV 19인치 생산', },
         { date: '1967.05', history: '호남정유㈜(現 GS칼텍스) 설립', },
         { date: '1967.06', history: '금성사, 국내 최초 FM/AM 라디오 생산', },
         { date: '1967.07', history: '락희유지공업, 주방용 액체세제 [에이퐁], 국내 최초 [크림샴푸] 생산', },
         { date: '1968.03', history: '금성사, 국내 최초 룸에어컨 생산', },
         { date: '1969.05', history: '금성사, 반도체 생산회사 금성전자㈜ 설립', },
         { date: '1969.05', history: '금성사, 국내 최초 세탁기 개발 생산', },
         { date: '1969.10', history: '금성통신 설립', },
         { date: '1969.12', history: '락희개발(現 GS건설) 설립', },
         { date: '1969.12', history: '락희상사㈜ 설립', },
         { date: '1969.12', history: '연암문화재단(現 LG연암문화재단) 설립', },
      ],
      imgs: [
         { url: '/images/lg/history/1stgen/cream.jpg', name: 'cream', },
         { url: '/images/lg/history/1stgen/toothpaste.jpg', name: 'toothpaste', },
         { url: '/images/lg/history/1stgen/radio.jpg', name: 'radio', },
         { url: '/images/lg/history/1stgen/fan.jpg', name: 'fan', },
         { url: '/images/lg/history/1stgen/telephone.jpg', name: 'telephone', },
         { url: '/images/lg/history/1stgen/hytai.jpg', name: 'hytai', },
         { url: '/images/lg/history/1stgen/tv.jpg', name: 'tv', },
         { url: '/images/lg/history/1stgen/aircon.jpg', name: 'aircon', },
         { url: '/images/lg/history/1stgen/laundry.jpg', name: 'laundry', },
      ]
   },
   {
      generation: '2',
      achievement: '전진과 혁신',
      chairman: '상남(上南) 구자경 회장 (1970-1994)',
      events: [
         { date: '1972.12', history: '락희화학, 총 매출 100억 원 돌파', },
         { date: '1973.03', history: '금성사, 국내 최초 카세트 녹음기 개발 생산', },
         { date: '1976.02', history: '금성사, TV생산 100만대 돌파', },
         { date: '1976.02', history: '금성정밀공업㈜ 설립', },
         { date: '1976.09', history: '럭키, 국내 최초로 플라스틱 창호 <하이샤시> 생산', },
         { date: '1977.08', history: '금성사, 19인치 컬러 TV 양산', },
         { date: '1978.03', history: '럭키석유화학㈜ 설립', },
         { date: '1978.12', history: '럭키, 총 매출 1,000억 원 돌파', },
         { date: '1981.05', history: '금성사, 국내 최초 전자식 VCR 개발', },
         { date: '1981.08', history: '금성반도체, 국내 최초로 국산 미니컴퓨터 생산', },
         { date: '1982.05', history: '금성사, 국내 최초로 컬러 비디오 카메라 개발', },
         { date: '1983.01', history: '그룹명칭 변경 (럭키 → 럭키금성)', },
         { date: '1984.02', history: '금성반도체, 국내 최초로 8bit 마이크로프로세서 개발', },
         { date: '1985.02', history: '금성소프트웨어㈜ 설립', },
         { date: '1986.04', history: '럭키경제연구소(現 LG경제연구원) 설립', },
         { date: '1987.01', history: '㈜에스티엠(現 LG CNS) 설립', },
         { date: '1987.10', history: '럭키금성 트윈타워 (現 LG트윈타워) 준공', },
         { date: '1990.02', history: '‘고객을 위한 가치창조’와 ‘인간존중의 경영’ 경영이념 선포식', },
         { date: '1990.03', history: 'LG트윈스 프로야구단 창단', },
         { date: '1993.08', history: '럭키, 국내 최초 성장호르몬제 <유트로핀> 개발 및 상품화', },         
      ],
      imgs: [
         { url: '/images/lg/history/2ndgen/cassette.jpg', name: 'cassette', },
         { url: '/images/lg/history/2ndgen/chassis.jpg', name: 'chassis', },
         { url: '/images/lg/history/2ndgen/colortv.jpg', name: 'colortv', },
         { url: '/images/lg/history/2ndgen/vcr.jpg', name: 'vcr', },
         { url: '/images/lg/history/2ndgen/minicomputer.jpg', name: 'minicomputeri', },
         { url: '/images/lg/history/2ndgen/videocamera.jpg', name: 'videocamera', },
         { url: '/images/lg/history/2ndgen/microprocessor.jpg', name: 'microprocessor', },
         { url: '/images/lg/history/2ndgen/twintower.jpg', name: 'twintower', },
         { url: '/images/lg/history/2ndgen/eutropin.jpg', name: 'eutropin', },
      ]  
   },
   {
      generation: '3',
      achievement: '일등을 향하여',
      chairman: '화담(和談) 구본무 회장 (1995-2017)',
      events: [
         { date: '1995.01', history: '그룹 명칭을 LG로 변경, CI 선포', },
         { date: '1996.07', history: 'LG텔레콤(現 LG유플러스) 설립', },
         { date: '1999.08', history: 'LG LCD, 필립스사와 합작, LG. Philips LCD(現 LG디스플레이) 설립', },
         { date: '1999.11', history: 'LG전자, 세계 최경박 PDP 개발', },
         { date: '2001.04', history: 'LG화학, 3개사(LGCI, LG화학, LG생활건강)로 분할', },
         { date: '2002.08', history: 'LG생명과학 설립', },
         { date: '2003.04', history: 'LG생명과학 <팩티브>, 국내 최초 미 FDA 신약승인 획득', },
         { date: '2003.10', history: 'LG. Philips LCD, 세계 최초 55인치 HDTV용 LCD 개발', },
         { date: '2003.11', history: 'LG전선, LG니꼬동제련, LG칼텍스가스, 극동도시가스, LG산전 계열 분리', },
         { date: '2005.01', history: 'LG, GS와 계열분리 완료', },
         { date: '2005.03', history: 'LG Way 선포', },
         { date: '2005.08', history: 'LG이노텍, 세계 최소 6.4mm 휴대폰 카메라모듈 개발', },
         { date: '2006.03', history: 'LG. Philips LCD, 세계 최대 100인치 LCD 개발', },
         { date: '2007.11', history: 'LG솔라에너지 설립', },
         { date: '2009.04', history: 'LG하우시스, LG화학에서 분리하여 공식 출범', },
         { date: '2011.04', history: 'LG화학, 오창 전기차용 배터리공장 준공', },
         { date: '2013.01', history: 'LG Display 세계 최초 55인치 OLED TV 개발 생산', },
         { date: '2013.07', history: 'LG전자, 자동차부품 R&D 기지 인천캠퍼스 준공', },
         { date: '2015.07', history: 'LG전자, 트롬 트윈워시 출시', },
         { date: '2016.03', history: 'LG전자, 초프리미엄 가전 LG시그니처 국내 출시', },
         { date: '2016.04', history: 'LG생명과학, 국내 첫 개발 5가 혼합백신 <유펜타> WHO PQ 승인', },
         { date: '2017.11', history: 'LG이노텍, 세계 최고 출력 UV-C LED 개발', },
         { date: '2018.01', history: 'LG디스플레이, 세계 최초 88인치 8K OLED 디스플레이 개발', },
         { date: '2018.04', history: 'LG사이언스파크 본격 가동', },
      ],  
      imgs: [
         { url: '/images/lg/history/3rdgen/lgci.jpg', name: 'lgci', },
         { url: '/images/lg/history/3rdgen/pdptv.jpg', name: 'pdptv', },
         { url: '/images/lg/history/3rdgen/factive.jpg', name: 'factive', },
         { url: '/images/lg/history/3rdgen/cameramodule.jpg', name: 'cameramodule', },
         { url: '/images/lg/history/3rdgen/lcd100inch.jpg', name: 'lcd100inch', },
         { url: '/images/lg/history/3rdgen/oled55fhd.jpg', name: 'oled55fhd', },
         { url: '/images/lg/history/3rdgen/twinwash.jpg', name: 'twinwash', },
         { url: '/images/lg/history/3rdgen/signiture.jpg', name: 'signiture', },
         { url: '/images/lg/history/3rdgen/oled88inch8k.jpg', name: 'oled88inch8k', },
      ] 
   },
   {
      generation: '4',
      achievement: '고객을 향한 미래',
      chairman: '구광모 대표 (2018 - )',
      events: [
         { date: '2019.12', history: 'LG화학, 미국 GM과 전기차 배터리 합작법인 설립', },
         { date: '2020.10', history: "LG전자, 'LG 시그니처 올레드 R' 출시", },
         { date: '2020.12', history: "LG화학 배터리 사업 분사, 'LG에너지솔루션' 출범", },
         { date: '2020.12', history: "LG, 인공지능 싱크탱크 'LG AI연구원' 출범", },
         { date: '2021.07', history: 'LG상사, 판토스, LG하우시스, 실리콘웍스, LG MMA - LX로 계열분리', },
         { date: '2021.12', history: 'LG AI연구원, 초거대 AI ‘EXAONE(Expert AI for everyone, 엑사원)’ 공개', },
         { date: '2022.09', history: 'LG전자, 세계 최대 97형 올레드 TV 출시', },
      ],  
      imgs: [
         { url: '/images/lg/history/4thgen/rollableoled.jpg', name: 'rollableoled', },
         { url: '/images/lg/history/4thgen/washtower.jpg', name: 'washtower', },
         { url: '/images/lg/history/4thgen/tilda.jpg', name: 'tilda', },
         { url: '/images/lg/history/4thgen/exaone.jpg', name: 'exaone', },
         { url: '/images/lg/history/4thgen/strechable.jpg', name: 'fastrechablen', },
         { url: '/images/lg/history/4thgen/standbyme.jpg', name: 'standbyme', },
      ] 
   },
];

export default histories;