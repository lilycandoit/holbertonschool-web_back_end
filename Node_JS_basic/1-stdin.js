process.stdout.write('Welcome to Holberton School, what is your name? ');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const input = data.trim();
  process.stdout.write(`Your name is: ${input}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
