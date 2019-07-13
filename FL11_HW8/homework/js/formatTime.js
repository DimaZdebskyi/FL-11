function formatTime(value) {
  const day = Math.floor(value / 1440);
  const hour = Math.floor(value % 1440 / 60);
  const minutes = value % 1440 % 60;
  return `${day} day(s) ${hour} hour(s) ${minutes} minute(s).`;
}
formatTime(120);