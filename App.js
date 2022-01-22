const airline=(name,first_date,last_date,first_time,last_time,price,image) =>({name,first_date,last_date,first_time,last_time,price,image})

const airlines=[

    airline('Air Astana','25 нояб','26 нояб','23:25','03:45','590 000','Image/KC.png'),
    airline('Bek Air','25 нояб','26 нояб','22:25','04:45','550 000','Image/HY.png'),
    airline('Fly Arystan','23 нояб','24 нояб','23:25','03:45','600 000','Image/FZ.png'),
    airline('SCAT Airlines','25 нояб','26 нояб','00:25','08:45','510 000','Image/DV.png'),
    airline('Lufthansa','24 нояб','25 нояб','11:25','22:45','570 000','Image/LH.png'),
    airline('Turkish Airlines','20 нояб','21 нояб','23:25','03:45','400 000','Image/TK.png'),
    airline('China Southern Air','25 нояб','26 нояб','11:25','03:45','450 000','Image/CZ.png'),

]


new Vue({
    el: '#app',
    data: {
        airlines: airlines,
        airline: airlines[0],
        selectAirlineIndex: 0,
        search: ''
    },
    methods: {
        selectAirline: function (index){this.airline=airlines[index]
        this.selectAirlineIndex=index}
    },
    computed:{
      filteredAirlines(){
          var self=this
          const filtered=this.airlines.filter(function (airline){
              return airline.name.indexOf(self.search)>-1
          })
          return filtered}
    }
})