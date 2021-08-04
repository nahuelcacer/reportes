const fs = require("fs");
var fechap1 = "20210531"
var fechap2 = "05/31/21"
var fecha = " 05-2021"
var reporte = "*U*0110129104292067525   D"+fechap1+"S                                                             00000"+fechap2+"              \n"  +                                                        
"*M*0110229104290256325   0000000000"+"4517113"+"SARDA DE BAXTER ELDA"+fecha+"                                        00                        \n"   +                                                     
"*M*0110229104290205440   0000000000"+"4517113"+"GONGORA ESTHER ANSELMA"+fecha+"                                      00                        \n"   +                          
"*M*0110229104290256103   0000000000"+"4517113"+"NOZIGLIA MARINA ESPERANZA LUC"+fecha+"                               00                        \n"   +                                     
"*M*0110229104290256271   0000000000"+"3336449"+"BINAGHI MARIA YOLANDA"+fecha+"                                       00                        \n"   +                                
"*M*0110229104290256202   0000000000"+"2706539"+"LEVY GLORIA EDITH"+fecha+"                                           00                        \n"   +                   
"*M*0110211661361366491   0000000000"+"4273851"+"CAMODECA CARMEN"+fecha+"                                             00                        \n"   +                  
"*M*0110229104290306082   0000000000"+"3846024"+"LAFUENTE JORGE MANUEL"+fecha+"                                       00                        \n"   +                 
"*M*0110227304092728947   0000000000"+"1989187"+"PASQUALI MARIA ELVIRA"+fecha+"                                       00                        \n"   +                  
"*M*0110215252041086766   0000000000"+"4517113"+"BERGIA ELDA MARGARITA"+fecha+"                                       00                        \n"   +                
"*M*0110214402300819520   0000000000"+"4517113"+"HERRERO LOLA"+fecha+"                                                00                        \n"   +                 
"*M*0110229104290256233   0000000000"+"3738843"+"MANGINI ALFREDO"+fecha+"                                             00                        \n"   +       
"*M*0110227304093259770   0000000000"+"4517113"+"VILLANUEVA CLORINDA"+fecha+"                                         00                        \n"   +                   
"*M*0110227304092728947   0000000000"+"4517113"+"PASQUALI ELVIRA"+fecha+"                                             00                        \n"   +
"*M*0110229104290256240   0000000000"+"4517113"+"DIESSLER OLGA"+fecha+"                                               00                        \n"   +              
"*M*0110227304090950294   0000000000"+"4517113"+"TORNERO WILMA IRENE"+fecha+"                                         00                        \n"   +  
"*M*0110229104290256295   0000000000"+"4517113"+"JOVANOVICH WLADIMIR"+fecha+"                                         00                        \n"   +              
"*M*0110237105481049294   0000000000"+"4517113"+"ASEF MIRIAM ETHELL MARIA"+fecha+"                                    00                        \n"   +                 
"*M*0110222053260127629   0000000000"+"4517113"+"RODRIGUEZ MARTA"+fecha+" AZUCENA"+fecha+"                                     00                        \n"   +              
"*M*0110237105480956528   0000000000"+"4517113"+"GONZALEZ ESTHER CORINA FELISA"+fecha+"                               00                        \n"   +             
"*M*28502401509402685563  0000000000"+"4517113"+"VIDANA MARIA ELENA"+fecha+"                                          00                        \n"   +         
"*M*0720255110015112      0000000000"+"4517113"+"CASAVECCHIA GLORIA NOEMI"+fecha+"                                    00                        \n"   +                    
"*M*017022180123362       0000000000"+"4517113"+"HARDY     ESTELA SUS"+fecha+"                                        00                        \n"   +                   
"*M*311020003000008377706 0000000000"+"4134813"+"MARINICH LUCIA"+fecha+"                                              00                        \n"   +                          
"*M*0720216410100014      0000000000"+"4517113"+"LIMBERTI GUILLERMO A"+fecha+"                                        00                        \n"                   

fs.appendFile("reporte.txt",reporte,(error)=> {
    if (error){
        throw error;
    }
    console.log("se creo")
});