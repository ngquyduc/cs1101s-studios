// STUDIO S2

// Q1: Write a function named biggie_size which when given a regular combo 
// returns a biggie- sized version.

function biggie_size(meal) { 
    return meal + 4;
}

// Q2: Write a function named unbiggie_size which when given a biggie-sized 
// combo returns a non-biggie-sized version.

function unbiggie_size(meal) { 
    return meal - 4;
}

// Q3: Write a function named is_biggie_size which when given a combo, returns 
// true if the combo has been biggie-sized and false otherwise.

function is_biggie_size(meal) { 
    return meal > 4;
}

// Q4: Write a function named combo_price which takes a combo and returns the 
// price of the combo. Each patty costs $1.17, and a biggie-sized version costs 
// $0.50 extra overall.

function combo_price(meal) { 
    return is_biggie_size(meal)
        ? 0.50 + (1.17 * unbiggie_size(meal))
        : 1.17 * meal;
} 

// Q5: Write a function named empty_order which takes no arguments and returns 
// an empty order which is represented by 0.

function empty_order() { 
    return 0;
}

// Q6: Write a function named add_to_order which takes an order and a combo and 
// returns a new order which contains the contents of the old order and the new 
// combo. For example, add_to_order(1, 2) returns 12.

function add_to_order(order, combo) { 
    return order * 10 + combo;
}

// Q7: Write a function named last_combo which takes an order and returns the 
// last combo. For example, last_combo(321) returns 1.

function last_combo(order) { 
    return order % 10;
}

// Q8: Write a function named other_combos which takes an order and returns a 
// new order with- out the last combo. For example, other_combos(321) returns 32.

function other_combos(order) { 
    return math_floor(order / 10);
}
