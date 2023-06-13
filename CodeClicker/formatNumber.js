function formatNumber(number) {
  if (number >= 1000000000000) {
    console.log((number / 1000000000000).toFixed(1) + ' trillion');
    return (number / 1000000000000).toFixed(1) + ' trillion';
  } else if (number >= 1000000000) {
    console.log((number / 1000000000).toFixed(1) + ' billion');
    return (number / 1000000000).toFixed(1) + ' billion';
  } else if (number >= 1000000) {
    console.log((number / 1000000).toFixed(1) + ' million');
    return (number / 1000000).toFixed(1) + ' million';
  } else {
    return number;
  }
}