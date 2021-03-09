const args = process.argv;
let alart = args.slice(2);
for (let i = 0; i < alart.length; i++) {
  if (alart[i] >= 0) {
    setTimeout(()=>{
      process.stdout.write('\x07');
    },(i * 1000));
  }
}