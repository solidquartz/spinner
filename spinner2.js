const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

let time = 100;

for (const icon of spinner) {

  setTimeout(() => {
    process.stdout.write(icon);
  }, time);
  time += 200;
}
