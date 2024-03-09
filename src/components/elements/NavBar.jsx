import NavigationLink from './NavigationLink';

export default function NavBar() {
  return (
    <div className="flex justify-between">
      <div>
        <h2>Hidden Harbor</h2>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="">
            <NavigationLink text={'Home'} link={'/'} />
          </li>
          <li>
            <NavigationLink text={'Shop'} link={'shop'} />
          </li>
          <li>
            <NavigationLink text={'About'} link={'about'} />
          </li>
          <li>
            <NavigationLink text={'Cart'} link={'cart'} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
