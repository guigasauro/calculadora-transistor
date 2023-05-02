function calculate(){
    var Vbb=document.getElementById("Vbb").value;
    var Rb=document.getElementById("Rb").value;
    var Vcc=document.getElementById("Vcc").value;
    var Rc=document.getElementById("Rc").value;
    var Ganho=document.getElementById("Ganho").value;
    var Aprox=document.getElementById("aprox").value;

    if(Aprox == 'primeira'){
        var Ib = (Vbb/Rb)*(10 ** 6);
    }else{
        var Ib = ((Vbb - 0.7)/Rb)*(10 ** 6);
    }
    var Ic = (Ib * Ganho)*(10 ** -3);
    var Ie = (Ib*(10 ** -3)) + Ic;
    var Vce = Vcc - (Rc*(Ic*(10 ** -3)));
    var Pd = Vce * Ic;

    document.getElementById("text_area_Ib").innerText=Ib.toFixed(2)
    document.getElementById("text_area_Ic").innerText=Ic.toFixed(2)
    document.getElementById("text_area_Ie").innerText=Ie.toFixed(2)
    document.getElementById("text_area_Vce").innerText=Vce.toFixed(2)
    document.getElementById("text_area_Pd").innerText=Pd.toFixed(2)
}