angular.module('bestAppEver').service('mainSrv', function($http){

//this.slideImgs = function(){
//  $http.get('./Imgs').then(function(response){
//    console.log(response.data);
//    return response.data;
//
//  })
//}


this.racesList = function() {
  return $http.get('carDatatbase/races.json').then(function(response){
    console.log(response.data)
    response = response.data.map(function(race){
      return {
        name: race.name,
        date: race.date,
        url: race.url,
        year: race.year,
        raceId: race.raceId,
        round: race.round,
        time: race.time
      }
    });




    // console.log(response)
    return response.slice(0,17);
  })

}







































this.sliderImages = [

  {name:'1',
    image:'../imgs/1309.jpg'
  },
  {name:'2',
    image:'../imgs/2008 HD wallpaper F1 GP Turkey_03.jpg'
  },
  {name:'3',
    image:'../imgs/2008 HD wallpaper F1 GP Turkey_06.jpg'
  },
  {name:'4',
    image:'../imgs/2008 HD wallpaper F1 GP Turkey_08.jpg'
  },
  {name:'5',
    image:'../imgs/170064_rus.jpg'
  },
  {name:'6',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Australia_15.jpg'
  },
  {name:'7',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Italy_35 (1).jpg'
  },
  {name:'8',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Italy_35.jpg'
  },
  {name:'9',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Monaco_04.jpg'
  },
  {name:'10',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Monaco_06.jpg'
  },
  {name:'11',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Monaco_15.jpg'
  },
  {name:'12',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Monaco_19.jpg'
  },
  {name:'13',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Monaco_32.jpg'
  },
  {name:'14',
    image:'../imgs/F1-Fansite.com 2002 HD wallpaper F1 GP Monaco_38.jpg'
  },
  {name:'15',
    image:'../imgs/F1-Fansite.com 2004 F1 GP Bahrain_10.jpg'
  },
  {name:'16',
    image:'../imgs/F1-Fansite.com 2004 F1 GP Bahrain_15.jpg'
  },
  {name:'17',
    image:'../imgs/F1-Fansite.com 2004 F1 GP Bahrain_17.jpg'
  },
  {name:'18',
    image:'../imgs/F1-Fansite.com 2004 HD wallpaper F1 GP Monaco_01.jpg'
  },
  {name:'20',
    image:'../imgs/F1-Fansite.com 2004 HD wallpaper F1 GP Monaco_27.jpg'
  },
  {name:'21',
    image:'../imgs/F1-Fansite.com 2007 HD wallpaper F1 GP Brazil_09.jpg'
  },
  {name:'22',
    image:'../imgs/F1-Fansite.com 2007 HD wallpaper F1 GP Canada_03.jpg'
  },
  {name:'23',
    image:'../imgs/F1-Fansite.com 2007 HD wallpaper F1 GP Canada_09.jpg'
  },
  {name:'24',
    image:'../imgs/F1-Fansite.com 2007 HD wallpaper F1 GP Italy_06.jpg'
  },
  {name:'25',
    image:'../imgs/F1-Fansite.com wallpaper - 2013 Abu Dhabi F1 GP_00024.jpg'
  },
  {name:'26',
    image:'../imgs/F1-Fansite.com wallpaper - 2013 Abu Dhabi F1 GP_00044.jpg'
  },
  {name:'27',
    image:'../imgs/F1-Fansite.com wallpaper - 2013 Abu Dhabi F1 GP_00061.jpg'
  },
  {name:'28',
    image:'../imgs/F1-Fansite.com wallpaper - 2013 Abu Dhabi F1 GP_00065.jpg'
  },
  {name:'29',
    image:'../imgs/F1-Fansite.com wallpaper - 2013 Abu Dhabi F1 GP_00076.jpg'
  },
  {name:'30',
    image:'../imgs/F1-Fansite.com wallpaper - 2013 Abu Dhabi F1 GP_00084.jpg'
  },
  {name:'31',
    image:'../imgs/ForceIndia.jpg'
  },
  {name:'32',
    image:'../imgs/ForceIndia2.jpg'
  },
  {name:'33',
    image:'../imgs/ForceIndia3.jpg'
  },
  {name:'34',
    image:'../imgs/Ham&Bottas.jpg'
  },
  {name:'35',
    image:'../imgs/M56939.jpg'
  },
  {name:'36',
    image:'../imgs/M56941.jpg'
  },
  {name:'37',
    image:'../imgs/M62230.jpg'
  },
  {name:'38',
    image:'../imgs/M62372.jpg'
  },
  {name:'39',
    image:'../imgs/M62510.jpg'
  },
  {name:'40',
    image:'../imgs/M65718.jpg'
  },
  {name:'41',
    image:'../imgs/M66139.jpg'
  },
  {name:'42',
    image:'../imgs/P-20170326-00165_HiRes-JPEG-24bit-RGB.jpg'
  },
  {name:'43',
    image:'../imgs/P-20170429-00699_HiRes-JPEG-24bit-RGB.jpg'
  },
  {name:'44',
    image:'../imgs/P-20170430-00539_HiRes-JPEG-24bit-RGB.jpg'
  },
  {name:'45',
    image:'../imgs/RedBull.jpg'
  },
  {name:'46',
    image:'../imgs/usa-1-20-06-04-1600.jpg'
  }

]




})
