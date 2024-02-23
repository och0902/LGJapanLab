const jpn = {
   pageTitle : [ 'メディア', 'LGグループ チャンネル' ],
   videos : [
      '/videos/root/LGJL1.mp4',
      '/videos/root/LGJL2.mp4',
      '/videos/root/LGJL3.mp4',
   ],
   mediaList : [
      { title: 'CES 2024', url: 'https://youtu.be/2QaJi4tWXk8?si=zL7vRDhwRFaX864Z', thumbnail: '/images/root/media/CES2024.jpg' },
      { title: 'Champion LG Twins', url: 'https://youtu.be/H8nzf3BGbwE?si=7kZUTF9MUdKEbZXI', thumbnail: '/images/root/media/LGTwins.jpg' }, 
      { title: 'LG SUPERSTART', url: 'https://youtu.be/DG8FYSMyEKM?si=fDpiZM64FnWyYbDc', thumbnail: '/images/root/media/SuperStart.jpg' },
      { title: 'LG OLED 10 Year', url: 'https://youtu.be/7FzMEtMG8hA?si=rqju8cRSgZeb89Kn', thumbnail: '/images/root/media/OLED10thAnniversary.jpg' },
      // { title: 'CES 2023', url: 'https://youtu.be/yZfUtO_SpQM', thumbnail: '/images/root/media/CES2023.jpg' },
   ],
   relatedList : [
      // { company: 'LG Group', url: 'https://www.lgcorp.com/', thumbnail: '/images/root/channel/lg.jpg', youtubeChannel: 'https://www.youtube.com/@LGSTORY/videos' },
      { company: 'LG Science Park', url: 'https://www.lgsciencepark.com/EN', thumbnail: '/images/root/channel/lgsp.jpg', youtubeChannel: 'https://www.youtube.com/@LG_Sciencepark' },
      { company: 'LG Electronics', url: 'https://www.lg.com/global', thumbnail: '/images/root/channel/lge.jpg', youtubeChannel: 'https://www.youtube.com/@LGGlobal' },
      { company: 'LG Display', url: 'https://www.lgdisplay.com/eng', thumbnail: '/images/root/channel/lgd.jpg', youtubeChannel: 'https://www.youtube.com/user/mylgdisplay' },
      { company: 'LG Innotek', url: 'https://www.lginnotek.com/main/main.do?locale=en', thumbnail: '/images/root/channel/lgit.jpg', youtubeChannel: 'https://www.youtube.com/@LGInnotekpr' },
      { company: 'LG Chem', url: 'https://www.lgchem.com', thumbnail: '/images/root/channel/lgc.jpg', youtubeChannel: 'https://www.youtube.com/@LGChemTube' },
      { company: 'LG Energy Solution', url: 'https://www.lgensol.com/en', thumbnail: '/images/root/channel/lges.jpg', youtubeChannel: 'https://www.youtube.com/@LGEnergySolution' },
   ],
};

const eng = {
   pageTitle : [ 'Media', 'LG Group Channel' ],
   videos : [
      '/videos/root/LGJL1.mp4',
      '/videos/root/LGJL2.mp4',
      '/videos/root/LGJL3.mp4',
   ],
   mediaList : [
      { title: 'CES 2024', url: 'https://youtu.be/2QaJi4tWXk8?si=zL7vRDhwRFaX864Z', thumbnail: '/images/root/media/CES2024.jpg' },
      { title: 'Champion LG Twins', url: 'https://youtu.be/H8nzf3BGbwE?si=7kZUTF9MUdKEbZXI', thumbnail: '/images/root/media/LGTwins.jpg' }, 
      { title: 'LG SUPERSTART', url: 'https://youtu.be/DG8FYSMyEKM?si=fDpiZM64FnWyYbDc', thumbnail: '/images/root/media/SuperStart.jpg' },
      { title: 'LG OLED 10 Year', url: 'https://youtu.be/7FzMEtMG8hA?si=rqju8cRSgZeb89Kn', thumbnail: '/images/root/media/OLED10thAnniversary.jpg' },
      // { title: 'CES 2023', url: 'https://youtu.be/yZfUtO_SpQM', thumbnail: '/images/root/media/CES2023.jpg' },
   ],
   relatedList : [
      // { company: 'LG Group', url: 'https://www.lgcorp.com/', thumbnail: '/images/root/channel/lg.jpg', youtubeChannel: 'https://www.youtube.com/@LGSTORY/videos' },
      { company: 'LG Science Park', url: 'https://www.lgsciencepark.com/EN', thumbnail: '/images/root/channel/lgsp.jpg', youtubeChannel: 'https://www.youtube.com/@LG_Sciencepark' },
      { company: 'LG Electronics', url: 'https://www.lg.com/global', thumbnail: '/images/root/channel/lge.jpg', youtubeChannel: 'https://www.youtube.com/@LGGlobal' },
      { company: 'LG Display', url: 'https://www.lgdisplay.com/eng', thumbnail: '/images/root/channel/lgd.jpg', youtubeChannel: 'https://www.youtube.com/user/mylgdisplay' },
      { company: 'LG Innotek', url: 'https://www.lginnotek.com/main/main.do?locale=en', thumbnail: '/images/root/channel/lgit.jpg', youtubeChannel: 'https://www.youtube.com/@LGInnotekpr' },
      { company: 'LG Chem', url: 'https://www.lgchem.com', thumbnail: '/images/root/channel/lgc.jpg', youtubeChannel: 'https://www.youtube.com/@LGChemTube' },
      { company: 'LG Energy Solution', url: 'https://www.lgensol.com/en', thumbnail: '/images/root/channel/lges.jpg', youtubeChannel: 'https://www.youtube.com/@LGEnergySolution' },
   ],
};

const pageData = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default pageData;