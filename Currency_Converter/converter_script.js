let input_mdl = document.querySelector(".mdl");
let input_usd = document.querySelector(".usd");
let input_eur = document.querySelector(".eur");
let input_gbp = document.querySelector(".gbp");
let input_jpy = document.querySelector(".jpy");

function convertMDL(){
    let USD = 17;
    let EUR = 19.8;
    let GBP = 21.87;
    let JPY = 0.16;
    
    let resalt_usd = input_mdl.value / USD;
    let resalt_eur = input_mdl.value / EUR;
    let resalt_gbp = input_mdl.value / GBP;
    let resalt_jpy = input_mdl.value / JPY;


    input_usd.value = resalt_usd.toFixed(3) + ` $`;
    input_eur.value = resalt_eur.toFixed(3) + ` €`;
    input_gbp.value = resalt_gbp.toFixed(3) + ` £`;
    input_jpy.value = resalt_jpy.toFixed(3) + ` ¥`;

}
function convertUSD(){
    let MDL = 0.061;
    let EUR = 1.17;
    let GBP = 1.29;
    let JPY = 0.0095;
    
    let resalt_mdl = input_usd.value / MDL;
    let resalt_eur = input_usd.value / EUR;
    let resalt_gbp = input_usd.value / GBP;
    let resalt_jpy = input_usd.value / JPY;

    input_mdl.value = resalt_mdl.toFixed(3) + ` Lei`;
    input_eur.value = resalt_eur.toFixed(3) + ` €`;
    input_gbp.value = resalt_gbp.toFixed(3) + ` £`;
    input_jpy.value = resalt_jpy.toFixed(3) + ` ¥`;
}
function convertEUR(){
    let USD = 0.85;
    let MDL = 0.051;
    let GBP = 1.10;
    let JPY = 0.0081;
    
    let resalt_usd = input_eur.value / USD;
    let resalt_mdl = input_eur.value / MDL;
    let resalt_gbp = input_eur.value / GBP;
    let resalt_jpy = input_eur.value / JPY;

    input_usd.value = resalt_usd.toFixed(3) + ` $`;
    input_mdl.value = resalt_mdl.toFixed(3) + ` Lei`;
    input_gbp.value = resalt_gbp.toFixed(3) + ` £`;
    input_jpy.value = resalt_jpy.toFixed(3) + ` ¥`;
}
function convertGBP(){
    let USD = 0.77;
    let MDL = 0.046;
    let EUR = 0.91;
    let JPY = 0.0073;
    
    let resalt_usd = input_gbp.value / USD;
    let resalt_mdl = input_gbp.value / MDL;
    let resalt_eur = input_gbp.value / EUR;
    let resalt_jpy = input_gbp.value / JPY;

    input_usd.value = resalt_usd.toFixed(3) + ` $`;
    input_mdl.value = resalt_mdl.toFixed(3) + ` Lei`;
    input_eur.value = resalt_eur.toFixed(3) + ` €`;
    input_jpy.value = resalt_jpy.toFixed(3) + ` ¥`;
}
function convertJPY(){
    let USD = 105.39;
    let MDL = 6.25;
    let EUR = 123.43;
    let GBP = 136.32;
    
    let resalt_usd = input_jpy.value / USD;
    let resalt_mdl = input_jpy.value / MDL;
    let resalt_eur = input_jpy.value / EUR;
    let resalt_gbp = input_jpy.value / GBP;

    input_usd.value = resalt_usd.toFixed(3) + ` $`;
    input_mdl.value = resalt_mdl.toFixed(3) + ` Lei`;
    input_eur.value = resalt_eur.toFixed(3) + ` €`;
    input_gbp.value = resalt_gbp.toFixed(3) + ` £`;
}