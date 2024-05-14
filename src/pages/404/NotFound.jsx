import Button from '../../global-components/UI/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="font-mont text-3xl">
        Uh oh, looks like that page doesn&apos;t exist :(
      </h1>
      <Button text={'Go home'} link={'/'} />
    </div>
  );
}
