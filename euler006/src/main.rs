fn pow(mut num: u64, mut pow: u64) -> u64 {
    pow -= 1;
    let dup = num;
    for _i in 0..pow {
        num = num * dup;
    }
    return num
}

fn main() {
    let limit: u64 = 100;
    let square_of_sums = pow(limit * (limit + 1) / 2, 2);
    let sum_of_squares = limit * (limit + 1) * ((limit * 2) + 1) / 6;
    let res = square_of_sums - sum_of_squares;
    println!("{}", res);
}
