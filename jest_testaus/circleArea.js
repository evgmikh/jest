function circleArea(r) {
  if (typeof r !== "number" || r < 0) {
    throw new Error("Virheellinen säde");
  }

  const area = Math.PI * r * r;
  return Math.round(area * 100) / 100;
}

module.exports = circleArea;
