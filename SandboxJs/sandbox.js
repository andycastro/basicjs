// Usando this para acessar propriedade do obj window
function lyra(){
  var larguraWind = this.innerWidth;
  var alturaWind = this.innerHeight;
  return [larguraWind, alturaWind];
}
lyra();

//

var a = 800;

function sacandoThis(){
    var result = this.a;
    return result
}
sacandoThis();

//

