var contenu, gacuhe, droite, variableAv, variableAr, btnD, btnG, tabul, iterant, abtul, add1, add2, soustr1, soustr2, divis1, divis2, mdl1, mdl2, dvs1, mtl1, mtl2, sp, sp1, sp2, sp3, sp4, sp5, eff1, eff2, eff3, eff4, eff5, eff6, e1, e1_1, e2, e2_2, e3, e3_3, e4, e4_4, e5, e6, e6_6, lt1, lt2, iter, iter1, compteur1, vl1, iter2, iter3, compteur2, vl2, texte, texte1, tb1, inv_tb1, tb2, inv_tb2, rp, dv_i

contenu = document.getElementsByClassName('card-items')[0];
variableAv = -260;
variableAr = 200;
btnD = document.getElementById("ilm2");
btnG = document.getElementById("ilm1");
iterant = 0;
tabul = [];
abtul = [-10, -250, -490, -730, -970];

//Afficheur
sp = document.getElementById("sp");
sp1 = document.getElementById("sp1");
sp2 = document.getElementById("sp2");
sp3 = document.getElementById("sp3");
sp4 = document.getElementById("sp4");
sp5 = document.getElementById("sp5");

//Addition
add1 = document.getElementById("add1");
add2 = document.getElementById("add2");

//Soustraction
soustr1 = document.getElementById("soustr1");
soustr2 = document.getElementById("soustr2");

//Division
divis1 = document.getElementById("divis1");
divis2 = document.getElementById("divis2");

//Modulo
mdl1 = document.getElementById("mdl1");
mdl2 = document.getElementById("mdl2");

//Divisieur
dvs1 = document.getElementById("dvs1");

//Multipication
mtl1 = document.getElementById("mtl1");
mtl2 = document.getElementById("mtl2");



// Fonction
function droite() {
    /*variableAv = -670*/
    btnG.style.display = 'block';
    if (variableAv > -270) {
        iterant += 1;
        contenu.style.transition = '0.2s';
        contenu.style.position = 'relative';
        contenu.style.left = variableAv + 'px';
        variableAv -= 260;
        tabul.push(variableAv);
        console.log(iterant);

    }

    else if (variableAv == -520) {
        iterant += 1;
        console.log(iterant);
        variableAv = -500;
        contenu.style.left = variableAv + 'px';
        contenu.style.transition = '0.2s';
        variableAv = -640;
        tabul.push(variableAv);


    }

    else if (variableAv == -640) {
        iterant += 1;
        variableAv = -730;
        contenu.style.left = variableAv + 'px';
        contenu.style.transition = '0.2s';
        tabul.push(variableAv);
        console.log(iterant);

    }

    else if (variableAv == -730) {
        iterant += 1;
        variableAv = -970;
        contenu.style.left = variableAv + 'px';
        contenu.style.transition = '0.2s';
        tabul.push(variableAv);
        console.log(iterant);
    }

    else if (variableAv == -970) {
        variableAv = -1224;
        btnD.style.display = 'none';
        contenu.style.left = variableAv + 'px';
        contenu.style.transition = '0.2s';
        tabul.push(variableAv);
        console.log(iterant);
    }

}

function gauche() {
    if (abtul[iterant] == -10) {
        contenu.style.left = abtul[iterant] + 'px';
        variableAv = -260;
        iterant = 0;
        btnG.style.display = 'none';
    }
    else {
        btnD.style.display = 'block';
        contenu.style.left = abtul[iterant] + 'px';
        switch (abtul[iterant]) {
            case -970:
                variableAv = -970;
            case -730:
                variableAv = -730;
            case -490:
                variableAv = -640;
            case -250:
                variableAv = -520;
        }
        iterant -= 1;
        console.log(iterant)
    }
}

//Addition
function addt() {
    e1 = add1.value;
    e1_1 = add2.value;
    if (e1 > 0 && e1_1 > 0 || e1 < 0 && e1_1 < 0) {
        sp.innerHTML = 'Réponse = ' + (Number(e1)*10 + Number(e1_1)*10)/10;
        sp.style.color = 'rgb(1, 77, 77)';
        sp.style.left = '30px';
    }

    else if (e1 == '' || e1_1 == '') {
        sp.style.color = 'red';
        sp.innerHTML = 'Nombre invalide';
        sp.style.left = '30px';
    }

    else {
        sp.style.color = 'red';
        sp.style.left = '30px';
        sp.innerHTML = "Incorrecte";
    }
}

//Effaceur
function eff1(){
    add1.value = '';
    add2.value = '';
    sp.innerHTML = '';
}

//Soustraction
function soustr() {
    e2 = soustr1.value;
    e2_2 = soustr2.value;
    if (e2 > 0 && e2_2 > 0 || e2 < 0 && e2_2 < 0) {
        sp1.innerHTML = 'Réponse = ' + (Number(e2)*10 - Number(e2_2)*10)/10;
        sp1.style.color = 'rgb(1, 77, 77)';
        sp1.style.left = '30px';

    }

    else if (e2 == '' || e2_2 == '') {
        sp1.style.color = 'red';
        sp1.innerHTML = 'Nombre invalide';
        sp1.style.left = '30px';
    }

    else {
        sp1.style.color = 'red';
        sp1.style.position = 'relative';
        sp1.style.left = '30px';
        sp1.innerHTML = "Incorrecte";
    }
}

//Effaceur
function eff2(){
    soustr1.value = '';
    soustr2.value = '';
    sp1.innerHTML = '';
}

//division
function divis() {
    e3 = divis1.value;
    e3_3 = divis2.value;
    
    if (e3_3 == 0 ){
        sp3.style.color = 'red';
        sp3.style.left = '30px';
        sp3.innerHTML = "division par 0";
     }
    
    if ((e3 > 0 && e3_3 > 0) || (e3 < 0 && e3_3 < 0) || (e3 > 0 && e3_3 < 0) || (e3 < 0 && e3_3 > 0)) {
        sp2.innerHTML = 'Réponse = ' + (Number(e3)/Number(e3_3));
        sp2.style.color = 'rgb(1, 77, 77)';
        sp2.style.left = '30px';
    }

    else if (e3 == '' || e3_3 == '') {
        sp2.style.color = 'red';
        sp2.innerHTML = 'Nombre invalide';
        sp2.style.left = '30px';
    }

    else if (e3 > 0 || e3_3 == 0) {
        sp2.style.color = 'red';
        sp2.innerHTML = 'Erreur';
        sp2.style.top = '20px';
        sp2.style.left = '-30px';

    }

    else {
        sp2.style.color = 'red';
        sp2.style.left = '30px';
        sp2.innerHTML = "Incorrecte";
    }
}

//Effaceur
function eff3(){
    divis1.value = '';
    divis2.value = '';
    sp2.innerHTML = '';
}

//Modulo
function mod() {
    e4 = mdl1.value;
    e4_4 = mdl2.value;

    if (e4_4 == 0 ){
        sp3.style.color = 'red';
        sp3.style.left = '30px';
        sp3.innerHTML = "division par 0";
     }

    if (e4 == 0 && e4_4 == 0 ) {
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.innerHTML = 'Réponse = ' + 0;
        sp3.style.left = '30px';
    }

    else if (e4 == 0 && e4_4 > 0) {
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.innerHTML = 'Réponse = ' + 0;
        sp3.style.left = '30px';
    }

    else if (((e4).includes('.') && e4_4 > 0) || ((e4) == 0 && e4_4.includes('.'))) {
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.innerHTML = 'Réponse = ' + 1;
        sp3.style.left = '30px';
    }


    if(!(e4.includes('.')) || !(e4_4.includes('.'))){
        if (e4 == '' || e4_4 == '') {
        sp3.style.color = 'red';
        sp3.innerHTML = 'Nombre invalide';
        sp3.style.left = '30px';
    }

        else if (e4 % e4_4 == 0) {
        sp3.innerHTML = 'Réponse = ' + 0;
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.style.left = '30px';
    }

        else if ((e4 < e4_4) || (e4 > e4_4)) {
            sp3.innerHTML = 'Réponse = ' + 1;
            sp3.style.color = 'rgb(1, 77, 77)';
            sp3.style.left = '30px';
    }

        else if ((typeof(Number(e4)) != typeof(e4_4))){
        sp3.style.color = 'red';
        sp3.style.left = '30px';
        sp3.innerHTML = "Incorrecte";
    }

        else if ((e4 % -e4_4 == 0) || (-e4 % e4_4 == 0) || (e4 % e4_4 == 0) || (-e4 % -e4_4 == 0)) {
            sp3.innerHTML = 'Réponse = ' + 0;
            sp3.style.color = 'rgb(1, 77, 77)';
            sp3.style.left = '30px';
    }

        else if ((e4 % e4_4 == 1) || (-e4 % e4_4 == 1) || (e4 % -e4_4 == 1) || (-e4 % -e4_4 == 1)) {
            sp3.innerHTML = 'Réponse = ' + 1;
            sp3.style.color = 'rgb(1, 77, 77)';
            sp3.style.left = '30px';

    }}

    else if((e4 < e4_4) || (e4 > e4_4)){
        sp3.innerHTML = 'Réponse = ' + 1;
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.style.left = '30px';
    }

    else if((e4.includes('.') % e4_4.includes('.')) == 0){
        sp3.innerHTML = 'Réponse = ' + 0;
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.style.left = '30px';
    }

    else if((e4.includes('.') % e4_4.includes('.')) == 1){
        sp3.innerHTML = 'Réponse = ' + 1;
        sp3.style.color = 'rgb(1, 77, 77)';
        sp3.style.left = '30px';
    }

    else{
        sp3.style.color = 'red';
        sp3.style.left = '30px';
        sp3.innerHTML = "Incorrecte";
    }
}

//Effaceur
function eff4(){
    mdl1.value = '';
    mdl2.value = '';
    sp3.innerHTML = '';
}


//Diviseur
function dvs_d() {
    element_liste = [];
    e5 = dvs1.value;
    dv_i = 2;
    if(e5 == 0){
        sp4.innerHTML = "[nombre]";
        sp4.style.color = 'rgb(1, 77, 77)';
        sp4.style.left = '30px';
    }

    else if(e5 < 0){
        sp4.style.color = 'red';
        sp4.style.left = '30px';
        sp4.innerHTML = "Incorrecte";
    }

    else if (e5 >= 0 ){
        if(e5.includes('.')){
            sp5.style.color = 'rgb(1, 77, 77)';
            sp4.style.left = '30px';
            sp4.innerHTML = "[" + e5 + "]";
        }
        else{
        while (Number(e5) != 1) {
            while (Number(e5) % dv_i != 0) {
                dv_i += 1;
            }
            e5 = Number(e5) / dv_i;
            element_liste.push(dv_i);
            }
        sp4.innerHTML = "[" + element_liste + "]";
        sp4.style.color = 'rgb(1, 77, 77)';
        sp4.style.left = '30px';
        }
        }

    else{
        sp4.style.color = 'red';
        sp4.style.left = '30px';
        sp4.innerHTML = "Incorrecte";
        }
}

//Effaceur
function eff5(){
    dvs1.value = '';
    sp4.innerHTML = '';
}

//Multiplication
function mtl(){
    tb1 = [];
    inv_tb1 = [];
    tb2 = [];
    inv_tb2 = [];
    texte = '';
    texte1 = '';
    e6 = mtl1.value;
    e6_6 = mtl2.value;
    lt1 = toString(e6).length;
    lt2 = toString(e6_6).length;
    iter = 0;
    iter1 = 0;
    compteur1 = 0;
    iter2 = 0;
    iter3 = 0;
    compteur2 = 0;
    if((e6 > 0 && e6_6 > 0) || (e6 < 0 && e6_6 < 0) || (e6 > 0 && e6_6 < 0) || (e6 < 0 && e6_6 > 0)){

        //Multipliant 1
        //Voir le contenu
        for(iter; iter<lt1; iter++){
            if(e6[iter] == undefined){
                break;
            }
            texte += e6[iter];
        };

        //Ajout de liste
        for(iter1; iter1 < texte.length; iter1++){
            compteur1 += 1
            tb1.push(e6[iter1]);
        };
        compteur1 = ((compteur1) - 1);

        //inversement
        for(; compteur1 >= 0; compteur1--){
            inv_tb1.push(e6[compteur1]);
        };
        inv_tb1.push(e6[0]);
        inv_tb1 = inv_tb1.slice(0, compteur1);

        iter1 = 0;
        compteur1 = 0;
        tb1 = [];

        //Nouveau table sans '.'
        for(iter1; iter1 < inv_tb1.length; iter1++){
            if(inv_tb1[iter1] == '.'){
                break;
            }
            tb1.push(inv_tb1[iter1]);
        }

        vl1 = tb1.length;

        //Multipliant 2
        //Voir le contenu
        for(iter2; iter2<lt2; iter2++){
            if(e6_6[iter2] == undefined){
                break;
            }
            texte1 += e6_6[iter2];
        };

        //Ajout de liste
        for(iter3; iter3 < texte1.length; iter3++){
            compteur2 += 1
            tb2.push(e6_6[iter3]);
        };
        compteur2 = ((compteur2) - 1);

        //inversement
        for(; compteur2 >= 0; compteur2--){
            inv_tb2.push(e6_6[compteur2]);
        };
        inv_tb2.push(e6_6[0]);
        inv_tb2 = inv_tb2.slice(0, compteur2);


        iter2 = 0;
        compteur2 = 0;
        tb2 = [];

        //Nouveau table sans '.'
        for(iter2; iter2 < inv_tb2.length; iter2++){
            if(inv_tb2[iter2] == '.'){
                break;
            }
            tb2.push(inv_tb2[iter2]);
        }

        vl2 = tb2.length;

        if(vl1 < vl2 && (e6.includes('.') || e6_6.includes('.'))){
            sp5.innerHTML = 'Réponse = ' + (((Number(e6)*10) * (Number(e6_6)*10))/100).toFixed(vl2+vl1);
            sp5.style.color = 'rgb(1, 77, 77)';
            sp5.style.left = '-10px';
        }

        else if(vl1 > vl2 && (e6.includes('.') || e6_6.includes('.'))){
            sp5.innerHTML = 'Réponse = ' + (((Number(e6)*10) * (Number(e6_6)*10))/100).toFixed(vl1+vl2);
            sp5.style.color = 'rgb(1, 77, 77)';
            sp5.style.left = '-10px';
        }

        else if(vl1 == vl2 && (e6.includes('.') || e6_6.includes('.'))){
            sp5.innerHTML = 'Réponse = ' + (((Number(e6)*10) * (Number(e6_6)*10))/100).toFixed(vl1+vl2);
            sp5.style.color = 'rgb(1, 77, 77)';
            sp5.style.left = '-10px';
        }

        else if(vl1 > 0 && vl2 == 0){
            sp5.innerHTML = 'Réponse = ' + (((Number(e6)*10) * (Number(e6_6)*10))/100).toFixed(vl1);
            sp5.style.color = 'rgb(1, 77, 77)';
            sp5.style.left = '-10px';
        }

        else if(vl1 == 0  && vl2 > 0){
            sp5.innerHTML = 'Réponse = ' + (((Number(e6)*10) * (Number(e6_6)*10))/100).toFixed(vl2);
            sp5.style.color = 'rgb(1, 77, 77)';
            sp5.style.left = '-10px';
        }

        else{
            sp5.innerHTML = 'Réponse = ' + parseInt(((Number(e6)*10) * (Number(e6_6)*10))/100);
            sp5.style.color = 'rgb(1, 77, 77)';
            sp5.style.left = '-10px';
        }
    }

    else if (e6 == '' || e6_6 == '') {
        sp5.style.color = 'red';
        sp5.innerHTML = 'Nombre invalide';
        sp5.style.left = '30px';
    }

    else{
        sp5.style.color = 'red';
        sp5.style.left = '30px';
        sp5.innerHTML = "Incorrecte";
        }
}

//Effaceur
function eff6(){
    mtl1.value = '';
    mtl2.value = '';
    sp5.innerHTML = '';
}




