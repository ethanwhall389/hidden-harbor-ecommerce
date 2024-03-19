import Button from '../elements/Button';

export default function Home() {
  return (
    <div className="p-3 h-full flex flex-col gap-6 items-center justify-center bg-[url('src/assets/images/home-bg.jpg')] bg-cover bg-center">
      <h1 className="text-5xl md:text-6xl text-center text-slate-50 drop-shadow-lg">
        Hidden Harbor
      </h1>
      <p className="text-slate-50 text-center text-2xl drop-shadow-lg ">
        Pristine items for the pristine shopper.
      </p>
      <Button text={'Shop Now'} link={'shop'} style="styleSecondary" />
    </div>
  );
}
