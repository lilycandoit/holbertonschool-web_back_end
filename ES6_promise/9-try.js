export default function guardrail(mathFuction) {
  const queue = [];
  try {
    queue.push(mathFuction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
