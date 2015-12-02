use std::net::UdpSocket;
use std::str;

fn main() {
    let socket = match UdpSocket::bind("127.0.0.1:3042") {
        Err(e) => panic!("Error while binding to 3042/udp: {}", e),
        Ok(res) => res
    };
    let mut buf = [0; 10];
    match socket.recv_from(&mut buf) {
        Err(e) => panic!("Error while reading incomming packet: {}", e),
        Ok((_, _)) => {
            let str = match str::from_utf8(&buf){
                Err(e) => panic!("Error while pasing input: {}", e),
                Ok(res) => res
            };
            print!("{:?}", str);
        }
    };
}

