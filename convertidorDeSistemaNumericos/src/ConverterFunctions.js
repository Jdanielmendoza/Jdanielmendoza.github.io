export function DecToBinary(NumDec){
    let Binario = ""
    
    let dividendo = NumDec; 
    let residuo;
    let cociente; 
    while(dividendo != 0){
        residuo = dividendo % 2;
        cociente = Math.floor(dividendo / 2);  //division entera 
        Binario = residuo + Binario; 
        dividendo = cociente; 
    }
    return Binario;
}




export function DecToHexa(NumDec){
    let Hexadecimal = "";
    let dividendo = NumDec; 
    let residuo;
    let cociente; 
    const LetraHexa = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F',
    }

    while(dividendo != 0){
        residuo = dividendo % 16;
        cociente = Math.floor(dividendo / 16);  //division entera 

        residuo = LetraHexa[residuo] || residuo;

        Hexadecimal = residuo + Hexadecimal; 
        dividendo = cociente; 
    }
    return "0x" + Hexadecimal;
}




export function BinToDecimal(Binario){
    let Decimal =0 ;
    let n = 0
    for (let i = Binario.length-1; i >= 0; i--) {
        const bit = Binario[i];
        if (bit == '1'){
            Decimal += Math.pow(2,n);
        }
        n++; 
    }
    return Decimal;
}




export function BinToHexa(Binario){
    let Hexadecimal = "0x";
    let decimal = BinToDecimal(Binario); 
    Hexadecimal = DecToHexa(decimal);
    return Hexadecimal;
}




export function HexaToDecimal(StringHexa){
    let Decimal = 0;
    let n = 0
    for (let i = StringHexa.length-1; i >= 0; i--) {
        const bit = StringHexa[i];
        Decimal = Decimal + (bit*Math.pow(16,n));
        n++; 
    }
    return Decimal;
}




export function HexaToBinary(StringHexa){
    let Binario = ""
    let dec = HexaToDecimal(StringHexa);
    Binario = DecToBinary(dec);
    return Binario;
}


