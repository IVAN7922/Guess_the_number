const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let phraseRandom;
let gameRun;

let num0 = 0;
let num1 = 'один';
let num2 = 'два';
let num3 = 'три';
let num4 = 'четыре';
let num5 = 'пять';
let num6 = 'шесть';
let num7 = 'семь';
let num8 = 'восемь';
let num9 = 'девять';
let num10 = 'десять';
let num11 = 'одинадцать';
let num12 = 'двенадцать';
let num13 = 'тринадцать';
let num14 = 'четырнадцать';
let num15 = 'пятнадцать';
let num16 = 'шестнадцать';
let num17 = 'семнадцать';
let num18 = 'восемнадцать';
let num19 = 'девятнадцать';
let num20 = 'двадцать';
let num30 = 'тридцать';
let num40 = 'сорок';
let num50 = 'пятьдесят';
let num60 = 'шестьдесят';
let num70 = 'семьдесят';
let num80 = 'восемьдесят';
let num90 = 'девяносто';
let num100 = 'сто';
let num200 = 'двести';
let num300 = 'триста';
let num400 = 'четыреста';
let num500 = 'пятьсот';
let num600 = 'шестьсот';
let num700 = 'семьсот';
let num800 = 'восемьсот';
let num900 = 'девятьсот';
let param0;
let param1;
let param2;
let param3;
let param4;
let param_sign;

function Reply(form1, form2, form3) {
    phraseRandom = Math.round(Math.random() * 2);
    switch (phraseRandom) {
        case 0: return form1;
        case 1: return form2;
        case 2: return form3;
    }
}

function Text_Value(input_number) {
    param_sign = (input_number < 0) ? 'минус ' : '';
    if (Math.abs(input_number) >= 0 && Math.abs(input_number) < 20) {
        switch (Math.abs(input_number)) {
            case 0: return 0;
            case 1: return (param_sign + ' ' + num1);
            case 2: return (param_sign + ' ' + num2);
            case 3: return (param_sign + ' ' + num3);
            case 4: return (param_sign + ' ' + num4);
            case 5: return (param_sign + ' ' + num5);
            case 6: return (param_sign + ' ' + num6);
            case 7: return (param_sign + ' ' + num7);
            case 8: return (param_sign + ' ' + num8);
            case 9: return (param_sign + ' ' + num9);
            case 10: return (param_sign + ' ' + num10);
            case 11: return (param_sign + ' ' + num11);
            case 12: return (param_sign + ' ' + num12);
            case 13: return (param_sign + ' ' + num13);
            case 14: return (param_sign + ' ' + num14);
            case 15: return (param_sign + ' ' + num15);
            case 16: return (param_sign + ' ' + num16);
            case 17: return (param_sign + ' ' + num17);
            case 18: return (param_sign + ' ' + num18);
            case 19: return (param_sign + ' ' + num19);
        }
    } else if (Math.abs(input_number) >= 20 && Math.abs(input_number) < 100) {
        param0 = (input_number / 10 | 0);
        switch (Math.abs(param0)) {
            case 2: param2 = num20; break;
            case 3: param2 = num30; break;
            case 4: param2 = num40; break;
            case 5: param2 = num50; break;
            case 6: param2 = num60; break;
            case 7: param2 = num70; break;
            case 8: param2 = num80; break;
            case 9: param2 = num90; break;
        }
        param0 = input_number % 10;
        switch (Math.abs(param0)) {
            case 0: param3 = ''; break;
            case 1: param3 = num1; break;
            case 2: param3 = num2; break;
            case 3: param3 = num3; break;
            case 4: param3 = num4; break;
            case 5: param3 = num5; break;
            case 6: param3 = num6; break;
            case 7: param3 = num7; break;
            case 8: param3 = num8; break;
            case 9: param3 = num9; break;
        }
        return (param_sign + ' ' + param2 + ' ' + param3);
    } else if (Math.abs(input_number) >= 100 && Math.abs(input_number) < 1000) {
        param0 = (input_number / 100 | 0);
        switch (Math.abs(param0)) {
            case 1: param1 = num100; break;
            case 2: param1 = num200; break;
            case 3: param1 = num300; break;
            case 4: param1 = num400; break;
            case 5: param1 = num500; break;
            case 6: param1 = num600; break;
            case 7: param1 = num700; break;
            case 8: param1 = num800; break;
            case 9: param1 = num900; break;
        }
        param0 = input_number % 100;
        if (Math.abs(param0) >= 0 && Math.abs(param0) < 20) {
            switch (Math.abs(param0)) {
                case 0: return (param_sign + ' ' + param1 + ' ');
                case 1: return (param_sign + ' ' + param1 + ' ' + num1);
                case 2: return (param_sign + ' ' + param1 + ' ' + num2);
                case 3: return (param_sign + ' ' + param1 + ' ' + num3);
                case 4: return (param_sign + ' ' + param1 + ' ' + num4);
                case 5: return (param_sign + ' ' + param1 + ' ' + num5);
                case 6: return (param_sign + ' ' + param1 + ' ' + num6);
                case 7: return (param_sign + ' ' + param1 + ' ' + num7);
                case 8: return (param_sign + ' ' + param1 + ' ' + num8);
                case 9: return (param_sign + ' ' + param1 + ' ' + num9);
                case 10: return (param_sign + ' ' + param1 + ' ' + num10);
                case 11: return (param_sign + ' ' + param1 + ' ' + num11);
                case 12: return (param_sign + ' ' + param1 + ' ' + num12);
                case 13: return (param_sign + ' ' + param1 + ' ' + num13);
                case 14: return (param_sign + ' ' + param1 + ' ' + num14);
                case 15: return (param_sign + ' ' + param1 + ' ' + num15);
                case 16: return (param_sign + ' ' + param1 + ' ' + num16);
                case 17: return (param_sign + ' ' + param1 + ' ' + num17);
                case 18: return (param_sign + ' ' + param1 + ' ' + num18);
                case 19: return (param_sign + ' ' + param1 + ' ' + num19);
            }
        } else if (Math.abs(param0) >= 20 && Math.abs(param0) < 100) {
            param0 = (param0 / 10 | 0);
            switch (Math.abs(param0)) {
                case 2: param2 = num20; break;
                case 3: param2 = num30; break;
                case 4: param2 = num40; break;
                case 5: param2 = num50; break;
                case 6: param2 = num60; break;
                case 7: param2 = num70; break;
                case 8: param2 = num80; break;
                case 9: param2 = num90; break;
            }
            param0 = input_number % 10;
            switch (Math.abs(param0)) {
                case 0: param3 = ''; break;
                case 1: param3 = num1; break;
                case 2: param3 = num2; break;
                case 3: param3 = num3; break;
                case 4: param3 = num4; break;
                case 5: param3 = num5; break;
                case 6: param3 = num6; break;
                case 7: param3 = num7; break;
                case 8: param3 = num8; break;
                case 9: param3 = num9; break;
            }
            param4 = param_sign + ' ' + param1 + ' ' + param2 + ' ' + param3;
            if (param4.length < 20) {
                return param4;
            } else {
                return input_number;
            }
        }
    }
}

function StartGame() {
    minValue = parseInt(document.getElementById('minimum').value) || 0;
    maxValue = parseInt(document.getElementById('maximum').value) || 100;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    document.getElementById('minimum').value = minValue;
    document.getElementById('maximum').value = maxValue;
    answerNumber = ((minValue + maxValue) / 2 | 0);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;

    answerField.innerText = 'Вы загадали число ' + Text_Value(answerNumber) + ' ?';
}

document.getElementById('btnStart').addEventListener('click', StartGame);  

document.getElementById('btnOver').addEventListener('click', function () { 
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = Reply('Вы загадали неправильное число!\n\u{1F624}', 'Я сдаюсь...\n\u{1F92F}', 'Что-то пошло не так...\n\u{1F9D0}');
            gameRun = false;
        } else {
            minValue = ++answerNumber;
            answerNumber = ((minValue + maxValue) / 2 | 0);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = Reply('Вы загадали число ', 'Наверное, это число ', 'Ваше число ') + Text_Value(answerNumber) + ' ?';
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { 
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = Reply('Вы загадали неправильное число!\n\u{1F624}', 'Я сдаюсь...\n\u{1F92F}', 'Что-то пошло не так...\n\u{1F9D0}');
            gameRun = false;
        } else {
            maxValue = --answerNumber;
            answerNumber = ((minValue + maxValue) / 2 | 0);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = Reply('Вы загадали число ', 'Наверное, это число ', 'Ваше число ') + Text_Value(answerNumber) + ' ?';
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = Reply('Я всегда угадываю!\n\u{1F607}', 'У меня невозможно выиграть!\n\u{1F60E}', 'Я опять угадал!\n\u{1F973}');
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    window.location.reload();
});
