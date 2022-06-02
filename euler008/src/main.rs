use std::fs;

fn main() {
    let num: String = fs::read_to_string("data.txt").unwrap();
    let chars: Vec<u32> = num.chars().flat_map(|ch| ch.to_digit(10)).collect();

    let steps = 13;

    let mut max = 1;

    for i in 0..chars.len() - steps {
        let mut prod: u64 = 1;
        for j in 0..steps {
            prod = prod * chars[i + j] as u64;
        }
        if prod > max {
            max = prod
        }
    }
    println!("{}", max)
}
