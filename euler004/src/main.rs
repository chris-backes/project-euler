fn get_reverse(mut num: u64) -> u64 {
    let mut reverse = 0;
    while num > 0 {
        reverse = (10 * reverse) + (num % 10);
        num = num / 10;
    }
    return reverse
}

fn main() {
    let mut i: u64 = 999;
    let mut j: u64 = 999;
    let floor: u64 = 100;
    let mut res: u64 = 0;
    while i > floor {
        let mut prod: u64 = i * j;
        if prod == get_reverse(prod) && res < prod {
            res = prod;
        }
        while j > floor {
            prod = i * j;
            if prod == get_reverse(prod) && res < prod {
                res = prod;
            }
            j -= 1;
        }
        i -= 1;
        j = i;
    }
    println!("The largest palindrome that is a product of two three digit numbers {}", res)
}
