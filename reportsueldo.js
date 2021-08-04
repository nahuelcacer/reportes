const fs = require("fs");
var fecha1= "20210531"
var fecha2= "05/31/21"
var espacio = " "
const personald = ["ZACARIAS JUAN DOMINGO","FLORENTIN NATALIA SOLEDAD", "GONZALEZ STULIC SERGIO DANIEL", "GOROSTIZU ROBERTO","TUR SPRINGER JUAN MARIANO","TUR SPRINGER MARIANO RENÉ","BARRETO SILVIA ERMINDA","TUR SPRINGER ALBERTO ARMANDO", 
"CACERES CLAUDIA","ALDERETE VICTOR ELIAS", "BARRETO ROXANA MA", "TUR SPRINGER GERARDO DANIEL", "QUIROZ ERNESTO LUIS", "ESCOBAR MARCOS ALFREDO", "CACERES GIRON NAHUEL ELOY",
"SOSA CORDERO MAIRA SOLEDAD","BARRIOS OSVALDO DAMIAN","TUR SPRINGER LEONARDO","SANCHEZ LEANDRO EXEQUIEL","DIAZ NAVARRO FRANCISCO ANDRES","URDAPILLETA JUAN MANUEL","MENDOZA DANIELA"]
var sueldo = [""]
var reporte = "*U*0110129104292065404   D"+fecha1+"S"+espacio.repeat(60)+"00000"+fecha2+"                \n"  +                                                                                                                                                                                                                                                                                                                                                                                                         
"*M*0110227304093252984".padEnd(25)+"5493700".padStart(17, "0")+ personald[0].padEnd(60)+"00             \n"  +                                                                                                                
"*M*0110229104290238947   0000000000"+"8650700"+"FLORENTIN NATALIA SOLEDAD".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*0110227304093252991   0000000000"+"6810400"+"GONZALEZ STULIC SERGIO DANIEL".padEnd(60)+"00             \n" +                                                                                                                 
"*M*0110237105481238775   0000000000"+"5959500"+"GOROSTIZU ROBERTO".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500016557861  000000000"+"10069234"+"TUR SPRINGER JUAN MARIANO".padEnd(60)+"00             \n"  +                                                                                                                  
"*M*04402402500016556633  0000000000"+"9911100"+"TUR SPRINGER MARIANO RENÉ".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500016557294  0000000000"+"9759735"+"BARRETO SILVIA ERMINDA".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500016558190  0000000000"+"9388300"+"TUR SPRINGER ALBERTO ARMANDO".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500016558376  0000000000"+"8784736"+"CACERES CLAUDIA".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500013338946  0000000000"+"5864600"+"ALDERETE VICTOR ELIAS".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500016556532  0000000000"+"6552900"+"BARRETO ROXANA MA".padEnd(60)+"00             \n"  +                                                                                                                   
"*M*04402402500016556343  0000000000"+"7031100"+"TUR SPRINGER GERARDO DANIEL".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500018210869  0000000000"+"4233600"+"QUIROZ ERNESTO LUIS".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500018844631  0000000000"+"6037800"+"ESCOBAR MARCOS ALFREDO".padEnd(60)+"00             \n"  +                                                                                                                   
"*M*04402402500029653664  0000000000"+"4877100"+"CACERES GIRON NAHUEL ELOY".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500028505034  0000000000"+"5524800"+"SOSA CORDERO MAIRA SOLEDAD".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*04402402500030341745  0000000000"+"5097000"+"BARRIOS OSVALDO DAMIAN".padEnd(60)+"00             \n"  +                                                                                                               
"*M*04402402500030454979  0000000000"+"4985200"+"TUR SPRINGER LEONARDO".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*0720252813515084      0000000000"+"6539800"+"SANCHEZ LEANDRO EXEQUIEL".padEnd(60)+"00             \n"  +                                                                                                                 
"*M*0720216413815726      0000000000"+"5142300"+"DIAZ NAVARRO FRANCISCO ANDRES".padEnd(60)+"00             \n"  +   
"*M*00702402791100716     0000000000"+"9691800"+"URDAPILLETA JUAN MANUEL".padEnd(60)+"00             \n"  

/*console.log(personald[19])
fs.appendFile("reporte.txt",reporte,(error)=> {
    if (error){
        throw error;
    }
    console.log("se creo")
});*/

module.exports.personald = personald;

