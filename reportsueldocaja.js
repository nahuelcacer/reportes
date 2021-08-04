const fs = require("fs");
var fecha1= "20210531"
var fecha2= "05/31/21"
var espacio = " "
var personaldcaja = [["BIANCIOTTO MARCOS CLAUDIO","0720255113509764"],["GARCIA BORGHES CLAUDIA","0150205170112107840"],["FARIAS NORMA BEATRIZ","04402402500016556301"],["FARIAS MARIA LUISA","04402402500016556792"]]
var reporte = "*U*0110129104292067525   D"+fecha1+"S"+espacio.repeat(60)+"00000"+fecha2+"                 \n"  +                                                                                                                                      
"*M*0110229104290238985   0000000000"+"4404750"+"BIANCIOTTO MARCOS CLAUDIO".padEnd(60)+"00                \n"  +                                                                                                                                                      
"*M*0150205170112107840   0000000000"+"8428700"+"GARCIA BORGHES CLAUDIA".padEnd(60)+"00                   \n"  +                                                                                                                                                     
"*M*04402402500016556301  0000000000"+"9221435"+"FARIAS NORMA BEATRIZ".padEnd(60)+"00                     \n"  +                                                                                                                                                        
"*M*04402402500016556792  0000000000"+"8602300"+"FARIAS MARIA LUISA".padEnd(60)+"00                       \n"  +                                                                                                                                                         
"*M*0720255113509764      0000000000"+"4404750"+"BIANCIOTTO MARCOS CLAUDIO".padEnd(60)+"00                \n"                                                                                                                                                           




const name = "reportecaja.txt"
fs.appendFile(name,reporte,(error)=> {
    if (error){
        throw error;
    }
    console.log("se creo " + name)
});