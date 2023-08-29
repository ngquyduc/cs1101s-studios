import {show, square, ribbon, blank, circle, stack, stack_frac, 
beside, beside_frac} from "rune";



// Kristia and Zachary
function moony_1(bottom_right) {
    const left_column = stack(circle, square);
    const right_column = stack(blank, bottom_right);
    
    return beside(left_column, right_column);
}

//Ke Xin and Hamzi
function moony_2(n) {
    return n === 1
        ? circle
        : moony_1(moony_2(n - 1));
}

show(moony_2(5));


//Ruijian, Daron, Ziyan
function moony(n){
    return n === 1
        ? circle
        : beside_frac(1 / n, 
            stack_frac(1 / n, circle, square), 
            stack_frac(1 / n, blank, moony(n - 1)));
}
show (moony(5));

