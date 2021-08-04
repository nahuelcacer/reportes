const express = require('express')
const app = express()
const Personal = require('./models/personal').Personal;
const bodyParser = require("body-parser")
const fs = require("fs");
const personald = require('./reportsueldo').personald;
 

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("./"));


app.set('view engine', 'pug') /*Integracion de pug en Express*/
app.get("/", async (req,res)=>{
    var personals = await Personal.find({});
        console.log(personals)
    
        res.render("registros" , {personals});   
});
app.get("/ver", async (req,res)=>{
    


});

app.get("/colegio", (req,res) =>{
    
 

    res.render("colegio")
})
app.get("/caja", (req,res) =>{
    
 

    res.render("caja")
})
app.get("/jubilaciones", (req,res) =>{
    
 

    res.render("jubilaciones")  
})
app.get("/perfil/:id" ,  async (req,res) =>{
    const personal1 = await Personal.findById(req.params.id)
    console.log(personal1);

    return res.render('perfil', {
            personal1
        })
}); 
app.post("/perfil/guardar", (req,res)=>{
    let update = {nombre:req.body.nombre}

    Personal.findOneAndUpdate({id:req.params.id}, update)   
    res.end();
});
            /**app.post("/perfil/guardar", (req,res)=>{
                const idJubi = req.body.id
                console.log(idJubi)
                
                Personal.findByIdAndUpdate(idJubi, {
                    nombre:req.body.nombre,noe
                    import:req.body.import,
                    fecha:req.body.fecha,
                    cbu:req.body.cbu
                }, function(err,result){
                    if (err){
                        res.send(err);
                    }
                    else{
                        res.send(result)
                    }
                });
                return res.redirect("/")

            });*/
/**SUELDO CAJA NOTARIAL */
app.post("/caja" , function(req,res){
    /**FECHA */
    var date = req.body.datecaja
    function convert (string){
        var info = string.split("-");
        return info[1] + "/" + info[2] + "/" + info[0]
    }
    function convert1 (string){
        var info = string.split("-");
        return info[0] + info[1] + info[2]
    }
    var date2 = convert1(date);
    var date1 = convert(date);
    /**FEHCA */
    /**REEMPLAZO CADENA */
    function rep (pers){
        var rep1 = pers.replace(".","")
        var rep2 = rep1.padStart(17,"0")
        return rep2
     }
    /**REEMPLAZO CADENA */
    /**BANCO */
    var banco = req.body.bancocaja
    /**BANCO */
    /**PERSONAL */
    var pers0 = req.body.marcosb
    var pers1 = req.body.mari
    var pers2 = req.body.norma
    var pers3 = req.body.claudia

    const personaldcaja = ["0720255113509764"/*marcos bianciotto */,"0150205170112107840"/*claudia borghes */
    ,"04402402500016556301"/*farias norma beatris */,"04402402500016556792"/**farias maria luisa */]
    /**PERSONAL */
    
    /**REPORTE */
    var reporte = "*U*"+banco.padEnd(22)+"D"+date2+"S"+" ".repeat(60)+" "+"00000"+date1+" ".padEnd(60)+"     \n" +
    "*M*"+ personaldcaja[0].padEnd(22)+rep(pers0)+"MARCOS BIANCIOTTO".padEnd(60)+"00              \n" +
    "*M*"+ personaldcaja[1].padEnd(22)+rep(pers3)+"CLAUDIA GARCIA BORGHES".padEnd(60)+"00              \n" +
    "*M*"+ personaldcaja[2].padEnd(22)+rep(pers2)+"FARIAS NORMA BEATRIZ".padEnd(60)+"00              \n" +
    "*M*"+ personaldcaja[3].padEnd(22)+rep(pers1)+"FARIAS MARIA LUISA".padEnd(60)+"00              \n" 

    /**FECHA PARA NOMBRE REPORTE */
    function filen(string){
        var info = string.split("-");
        return info[2] +"-"+ info[1] +"-"+ info[0]
    }
    var namefile = filen(date) + " reporte sueldo caja notarial.txt"
    /**FECHA PARA NOMBRE REPORTE */
    fs.appendFile(namefile,reporte,(error)=> {
        if (error){
            throw error;
        }
        console.log("se creo")
        
    });
    
    res.redirect("/caja")
    /*res.send("Se creo reporte txt")*/
    /**REPORTE */
});
/**SUELDO CAJA NOTARIAL */
/**JUBILADOS Y PENSIONADOS */
app.post("/", function(req,res){
    var jub0 = req.body.Nahuel

    res.send(jub0)
});

/**JUBILADOS Y PENSIONADOS */
app.post("/jubilaciones", (req,res) =>{
   /*DATOS Y ARREGLSO*/
   var date = req.body.datecaja
    function convert (string){
        var info = string.split("-");
        return info[1] + "/" + info[2] + "/" + info[0]
    }
    function convert1 (string){
        var info = string.split("-");
        return info[0] + info[1] + info[2]
    }
    var date2 = convert1(date);
    var date1 = convert(date);
    /**FEHCA */
    /**REEMPLAZO CADENA */
    function rep (pers){
        var rep1 = pers.replace(".","")
        var rep2 = rep1.padStart(17,"0")
        return rep2
     }
    /**REEMPLAZO CADENA */
    /**BANCO*/
    var banco = req.body.bancocaja
    var periodo = req.body.periodo 
    function Comentario(periodo, jubilado){
        var comentario = jubilado + " " + periodo
        return comentario

    }
    /*INPUT DE IMPORTE SUELDO*/
    jub0 = req.body.sarda
    jub1 = req.body.gongora
    jub2 = req.body.noziglia
    jub3 = req.body.binaghi
    jub4 = req.body.levy
    jub5 = req.body.camodeca
    jub6 = req.body.lafuente
    jub7 = req.body.pasquali
    jub8 = req.body.casavecchia
    jub9 = req.body.hardy
    jub10 = req.body.bergia
    jub11 = req.body.marinich
    jub12 = req.body.limberti
    jub13 = req.body.herrero
    jub14 = req.body.mangini
    jub15 = req.body.vidaña
    jub16 = req.body.villanueva
    jub17 = req.body.pasqualipension
    jub18 = req.body.diessler
    jub19 = req.body.tornero
    jub20 = req.body.asef
    jub21 = req.body.rodriguez
    jub22 = req.body.gorostizu

    


    const jubilado = [
        "0110229104290256325"/*Sarda (0)*/,
        "0110229104290205440"/*Gongora(1)*/,
        "0110229104290256103"/*Nozigli(2)*/,
        "0110229104290256271"/*Binaghi*(3)*/,
        "0110229104290256202"/*Levy(4)*/,
        "0110211661361366491"/*camodeca(5)*/,
        "0110229104290306082"/*lafuente(6)*/,
        "0110227304092728947"/*pasquali(7)*/,
        "0720255110015112"/*casavecchia(8)*/, 
        "017022180123362"/*hardy(9)*/, 
        "0110215252041086766"/*bergia(10)*/,
        "311020003000008377706"/*marinich(11)-------------*/,
        "0720216410100014" /*limberti(12)*/,
        "0110214402300819520"/*herrero(13)*/,
        "0110229104290256233"/*mangini(14)*/,
        "28502401509402685563"/*vidaña(15)*/,
        "0110227304093259770"/*villanueva(16)*/,
        "0110229104290256240"/*diessler(17)*/,
        "0110227304090950294"/*tornero(18)*/,
        "0110237105481049294"/*asef(19)*/,
        "0110222053260127629"/*rodriguez(20)*/,
        "0110237105480956528"/*gorostizu(21)*/






    ]

    /*REPORTE*//*
    var reporte = "*U*"+banco.padEnd(22)+"D"+date2+"S"+" ".repeat(60)+" "+"00000"+date1+" ".padEnd(60)+"     \n" +
    "*M*"+ personaldcaja[0].padEnd(22)+rep(pers0)+"MARCOS BIANCIOTTO".padEnd(60)+"00              \n" +
    "*M*"+ personaldcaja[1].padEnd(22)+rep(pers3)+"CLAUDIA GARCIA BORGHES".padEnd(60)+"00              \n" +
    "*M*"+ personaldcaja[2].padEnd(22)+rep(pers2)+"FARIAS NORMA BEATRIZ".padEnd(60)+"00              \n" +
    "*M*"+ personaldcaja[3].padEnd(22)+rep(pers1)+"FARIAS MARIA LUISA".padEnd(60)+"00              \n" */

    var reporte = "*U*"+banco.padEnd(22)+"D"+date2+"S"+" ".repeat(60)+" "+"00000"+date1+" ".padEnd(60)+"     \n" +
    "*M*"+jubilado[0].padEnd(22)+rep(jub0)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[1].padEnd(22)+rep(jub1)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[2].padEnd(22)+rep(jub2)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[3].padEnd(22)+rep(jub3)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[4].padEnd(22)+rep(jub4)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[5].padEnd(22)+rep(jub5)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[6].padEnd(22)+rep(jub6)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[7].padEnd(22)+rep(jub7)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[8].padEnd(22)+rep(jub8)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[9].padEnd(22)+rep(jub9)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[10].padEnd(22)+rep(jub10)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[11].padEnd(22)+rep(jub11)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[12].padEnd(22)+rep(jub12)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[13].padEnd(22)+rep(jub13)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[14].padEnd(22)+rep(jub14)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[15].padEnd(22)+rep(jub15)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[16].padEnd(22)+rep(jub16)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[7].padEnd(22)+rep(jub17)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[17].padEnd(22)+rep(jub18)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[18].padEnd(22)+rep(jub19)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[19].padEnd(22)+rep(jub20)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[20].padEnd(22)+rep(jub21)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n" +
    "*M*"+jubilado[21].padEnd(22)+rep(jub22)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"00              \n"

    
    function filen(string){
        var info = string.split("-");
        return info[2] +"-"+ info[1] +"-"+ info[0]
    }
    var namefile = filen(date) + " reporte jubilaciones y pensiones.txt"
    /**FECHA PARA NOMBRE REPORTE */
    fs.appendFile(namefile,reporte,(error)=> {
        if (error){
            throw error;
        }
        console.log("se creo")
        
    });
    
    res.redirect("/jubilaciones")

    
})
/*JUBILACIONES PROVEEDORES*/
app.post("/jubilacionesprov", (req,res)=>{
       /*DATOS Y ARREGLSO*/
    var date = req.body.datecaja
    function convert (string){
        var info = string.split("-");
        return info[1] + "/" + info[2] + "/" + info[0]
    }
    function convert1 (string){
        var info = string.split("-");
        return info[0] + info[1] + info[2]
    }
    var date2 = convert1(date);
    var date1 = convert(date);
    /**FEHCA */
    /**REEMPLAZO CADENA */
    function rep (pers){
        var rep1 = pers.replace(".","")
        var rep2 = rep1.padStart(17,"0")
        return rep2
        }
    /**REEMPLAZO CADENA */
    /**BANCO*/
    var banco = req.body.bancocaja
    var periodo = req.body.periodo 
    function Comentario(periodo, jubilado){
        var comentario = jubilado + " " + periodo
        return comentario

    }
    /*DATOS INPUTS*/
    jub23 = req.body.tauguinas
    jub24 = req.body.perez
    jub25 = req.body.lozina
    jub26 = req.body.della
    jub27 = req.body.sandoval
    jub28 = req.body.larroquete

    var jubiladosprov = [
        /*INGRESAR DATOS DE CUENTA 
        CODIGO BANCO + TIPO DE CUENTA + CUENTA */
        "311020000100402380302"/*tauguinas(0)*/,
        "311020003000001681104"/*perez eva(1)*/,
        "0720206413731248"/*lozina(2)*/,
        "311020003000303509408"/*della(3)*/,
        "311020003000307015504"/*sandoval(4)*/,
        "311020001300000684210"/*larroquete(5)*/

    ]


    var reporte = "*U*"+banco.padEnd(22)+"D"+date2+"N"+" ".repeat(60)+" "+"00000"+date1+" ".padEnd(60)+"     \n" +
    "*M*"+jubiladosprov[0].padEnd(22)+rep(jub23)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"FA"+" ".padEnd(40)+"0".padEnd(12,"0")+" ".padEnd(12)+"0".padEnd(10,"0")+" ".padEnd(62)+"\n" +
    "*M*"+jubiladosprov[1].padEnd(22)+rep(jub24)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"FA"+" ".padEnd(40)+"0".padEnd(12,"0")+" ".padEnd(12)+"0".padEnd(10,"0")+" ".padEnd(62)+"\n" + 
    "*M*"+jubiladosprov[2].padEnd(22)+rep(jub25)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"FA"+" ".padEnd(40)+"0".padEnd(12,"0")+" ".padEnd(12)+"0".padEnd(10,"0")+" ".padEnd(62)+"\n" + 
    "*M*"+jubiladosprov[3].padEnd(22)+rep(jub26)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"FA"+" ".padEnd(40)+"0".padEnd(12,"0")+" ".padEnd(12)+"0".padEnd(10,"0")+" ".padEnd(62)+"\n" + 
    "*M*"+jubiladosprov[4].padEnd(22)+rep(jub27)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"FA"+" ".padEnd(40)+"0".padEnd(12,"0")+" ".padEnd(12)+"0".padEnd(10,"0")+" ".padEnd(62)+"\n" + 
    "*M*"+jubiladosprov[5].padEnd(22)+rep(jub28)+Comentario(periodo, "Jubilaciones y Pensiones").padEnd(60)+"FA"+" ".padEnd(40)+"0".padEnd(12,"0")+" ".padEnd(12)+"0".padEnd(10,"0")+" ".padEnd(62)+"\n"
     

    function filen(string){
        var info = string.split("-");
        return info[2] +"-"+ info[1] +"-"+ info[0]
    }
    var namefile = filen(date) + " reporte jubilados proveedores.txt"
    /**FECHA PARA NOMBRE REPORTE */
    fs.appendFile(namefile,reporte,(error)=> {
        if (error){
            throw error;
        }
        console.log("se creo")
        
    });
    
    res.redirect("/jubilaciones")


})
/**SUELDO COLEGIO */

app.post("/colegio", function(req,res){
    var fecha1= req.body.fecha1
    var fecha2= req.body.fecha2
    var espacio = " "
    function rep (pers){
       var rep1 = pers.replace(".","")
       var rep2 = rep1.padStart(17,"0")
       return rep2
    }
    var date = req.body.date
    function convert (string){
        var info = string.split("-");
        return info[1] + "/" + info[2] + "/" + info[0]
    }
    function convert1 (string){
        var info = string.split("-");
        return info[0] + info[1] + info[2]
    }
    var date2 = convert1(date);
    var date1 = convert(date);

    var pers0 = req.body.zacarias
    var pers1 = req.body.florentin
    var pers2 = req.body.stulic
    var pers3 = req.body.gorostizu
    var pers4 = req.body.marianotur
    var pers5 = req.body.renetur
    var pers6 = req.body.barretosil
    var pers7 = req.body.albertotur
    var pers8 = req.body.caceresclau
    var pers9 = req.body.vitito
    var pers10 = req.body.barretoro
    var pers11 = req.body.gerardotur
    var pers12 = req.body.quiroz
    var pers13 = req.body.escobar
    var pers14 = req.body.yo
    var pers15 = req.body.sosamai
    var pers16 = req.body.barrios
    var pers17 = req.body.leonardotur
    var pers18 = req.body.leosanchez
    var pers19 = req.body.pancho
    var pers20 = req.body.contador
    var pers21 = req.body.mdaniela
    
    var periodo = ", SUELDO PERIODO " +req.body.periodo 
    var descripcion0 = personald[0] + periodo
    var descripcion1 = personald[1] + periodo
    var descripcion2 = personald[2] + periodo
    var descripcion3 = personald[3] + periodo
    var descripcion4 = personald[4] + periodo
    var descripcion5 = personald[5] + periodo
    var descripcion6 = personald[6] + periodo
    var descripcion7 = personald[7] + periodo
    var descripcion8 = personald[8] + periodo
    var descripcion9 = personald[9] + periodo
    var descripcion10 = personald[10] + periodo
    var descripcion11 = personald[11] + periodo
    var descripcion12 = personald[12] + periodo
    var descripcion13 = personald[13] + periodo
    var descripcion14 = personald[14] + periodo
    var descripcion15 = personald[15] + periodo
    var descripcion16 = personald[16] + periodo
    var descripcion17 = personald[17] + periodo
    var descripcion18 = personald[18] + periodo
    var descripcion19 = personald[19] + periodo
    var descripcion20 = personald[20] + periodo
    var descripcion21 = personald[21] + periodo


    
    
    var reporte = "*U*"+req.body.banco.padEnd(22)+"D"+date2+"S"+espacio.repeat(60)+" "+"00000"+date1+" ".padEnd(6)+ " \n"  +                                                                                                                                                                                                                                                                                                                                                                                                         
    "*M*0110227304093252984".padEnd(25)+rep(pers0)+ descripcion0.padEnd(60)+"00             \n" +
    "*M*0110229104290238947".padEnd(25)+rep(pers1)+ descripcion1.padEnd(60)+"00             \n" +
    "*M*0110227304093252991".padEnd(25)+rep(pers2)+ descripcion2.padEnd(60)+"00             \n" +
    "*M*0110237105481238775".padEnd(25)+rep(pers3)+ descripcion3.padEnd(60)+"00             \n" +    
    "*M*04402402500016557861".padEnd(25)+rep(pers4)+ descripcion4.padEnd(60)+"00             \n" +  
    "*M*04402402500016556633".padEnd(25)+rep(pers5)+ descripcion5.padEnd(60)+"00             \n" +      
    "*M*04402402500016557294".padEnd(25)+rep(pers6)+ descripcion6.padEnd(60)+"00             \n" +     
    "*M*04402402500016558190".padEnd(25)+rep(pers7)+ descripcion7.padEnd(60)+"00             \n" + 
    "*M*04402402500016558376".padEnd(25)+rep(pers8)+ descripcion8.padEnd(60)+"00             \n" +
    "*M*04402402500013338946".padEnd(25)+rep(pers9)+ descripcion9.padEnd(60)+"00             \n" +                                                                                                            
    "*M*04402402500016556532".padEnd(25)+rep(pers10)+ descripcion10.padEnd(60)+"00             \n" +                                                                                                          
    "*M*04402402500016556343".padEnd(25)+rep(pers11)+ descripcion11.padEnd(60)+"00             \n" +                                                                                                                  
    "*M*04402402500018210869".padEnd(25)+rep(pers12)+ descripcion12.padEnd(60)+"00             \n" +                                                                                                          
    "*M*04402402500018844631".padEnd(25)+rep(pers13)+ descripcion13.padEnd(60)+"00             \n" +                                                                                                               
    "*M*04402402500029653664".padEnd(25)+rep(pers14)+ descripcion14.padEnd(60)+"00             \n" +                                                                                                                
    "*M*04402402500028505034".padEnd(25)+rep(pers15)+ descripcion15.padEnd(60)+"00             \n" +                                                                                                                 
    "*M*04402402500030341745".padEnd(25)+rep(pers16)+ descripcion16.padEnd(60)+"00             \n" +                                                                                                           
    "*M*04402402500030454979".padEnd(25)+rep(pers17)+ descripcion17.padEnd(60)+"00             \n" +                                                                                                            
    "*M*0720252813515084".padEnd(25)+rep(pers18)+ descripcion18.padEnd(60)+"00              \n" +                                                                                                                 
    "*M*0720216413815726".padEnd(25)+rep(pers19)+ descripcion19.padEnd(60)+"00              \n" + 
    "*M*00702402791100716".padEnd(25)+rep(pers20)+ descripcion20.padEnd(60)+"00              \n" +
    "*M*0110222053261376006".padEnd(25)+rep(pers21)+ descripcion21.padEnd(60)+"00                \n"



    function filen(string){
        var info = string.split("-");
        return info[2] +"-"+ info[1] +"-"+ info[0]
    }
    var namefile = filen(date) + " reporte sueldo.txt"
    fs.appendFile(namefile,reporte,(error)=> {
        if (error){
            throw error;
        }
        console.log("se creo")
    });
    
    res.redirect("/colegio")
    

    /*var personal = new Personal({nombre:req.body.nombre, cbu:req.body.cbu, import:req.body.import});
    personal.save(function(){
        res.send("Se agrego personal ");
    });*/
    
});
/**SUELDO COLEGIO */

app.listen(8080,()=>{
    console.log("Servidor iniciado en 8080")
})


 