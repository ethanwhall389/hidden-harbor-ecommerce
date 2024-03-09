import Button from '../elements/Button';

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center">
      <h1 className="text-3xl">Hidden Harbor</h1>
      <p>Pristine items for the pristine shopper.</p>
      <Button text={'Shop Now'} link={'shop'} />
    </div>
  );
}
