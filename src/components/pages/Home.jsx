import Button from '../elements/Button';

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center bg-[url('src/assets/images/home-bg.jpg')] bg-cover bg-center">
      <h1 className="text-6xl text-slate-50 drop-shadow-lg">Hidden Harbor</h1>
      <p className="text-slate-50 text-2xl drop-shadow-lg ">
        Pristine items for the pristine shopper.
      </p>
      <Button text={'Shop Now'} link={'shop'} style="styleSecondary" />
    </div>
  );
}
