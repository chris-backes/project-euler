use std::f64;

fn main() {
    let targ = 10001;
    
    let mut vec: Vec<u32> = vec![2, 3];

    let mut i = 5;

    while vec.len() < targ {
        let mut prime_bol: bool = true;
        let mut index = 0;
        while vec[index] <= (i as f64).sqrt() as u32 {
            if i % vec[index] == 0 {
                prime_bol = false;
                break;
            }
            index += 1
        }
        if prime_bol {
            vec.push(i)
        }
        i += 2;
    }

    println!("{}", vec.last().unwrap());
}
