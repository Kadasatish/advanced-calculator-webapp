export default function handler(req, res) {
  const { num } = req.query;
  const n = parseFloat(num);

  if (isNaN(n)) {
    res.status(400).json({ result: 'Invalid number' });
  } else {
    res.status(200).json({ result: n * n });
  }
}
