// ShapeSpec: { shape, rotation, count, fill, scale }
// Canonicalization normalizes rotation by each shape's symmetry group so two
// specs that render identically always compare equal. Without this, a rotated
// square could ship as a "different" option that looks the same.

export const SYMMETRY = { circle: 0, square: 90, triangle: 120, arrow: 360 }

export function canonical(spec) {
  const sym = SYMMETRY[spec.shape]
  const rot = sym === 0 ? 0 : ((spec.rotation % sym) + sym) % sym
  return JSON.stringify({ s: spec.shape, r: rot, c: spec.count, f: spec.fill, k: spec.scale })
}

export function specsEqual(a, b) {
  return canonical(a) === canonical(b)
}
