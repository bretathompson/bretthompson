
function sub_values(prev_value, next_value) {
    return (prev_value - next_value);
}
let nums = [2, 4, 8, 16, 32];
let the_result = nums.reduce(sub_values);
window.alert(the_result);
the_result = nums.reduceRight (sub_values);
window.alert(the_result);



