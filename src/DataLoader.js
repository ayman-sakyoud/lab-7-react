export default function DataLoader({ render }) {
  const data = ['Ayman', 'Mohammed', 'Ali'];

  return <div>{render(data)}</div>;
}