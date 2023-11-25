const os =require('os')
const user=os.userInfo();
console.log(user);
console.log(`the system runs ${os.uptime()} seconds`);
const myOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    totalspace:os.freemem(),
    machine:os.machine()
}
console.log(myOs);
