fn get_gauss_sum(limit: u32, multiple: u32) -> u32 {
    let res: u32 = (limit - 1) / multiple;
    return res * (res + 1) /2 * multiple;
}

fn main() {
    let first: u32 = 3;
    let second: u32 = 5;
    let third = first * second;
    let limit: u32 = 1000;
    let res = get_gauss_sum(limit, first) + get_gauss_sum(limit,  second) - get_gauss_sum(limit, third);

    println!("the answer is {}", res);
}
