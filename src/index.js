

const swapi = new SwapiService()

swapi.getStarship(3).then((p) => {
  
    console.log(p.name)
  
  
})
