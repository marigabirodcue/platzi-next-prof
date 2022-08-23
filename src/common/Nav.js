import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  //const route = router.pathname.substring(1);
  const route = router.asPath.substring(1);
  const trueNav = ["login", "dashboard/edit"];

  for (const routePage of trueNav) {
    if (route.startsWith(routePage)) {
      return (
        <div className="dark">
          <nav className="dark:bg-gray-800 bg-white shadow">
            <div className="dark:bg-gray-800 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900 capitalize dark:text-white">
                {route}
              </h1>
            </div>
          </nav>
        </div>
      );
    }
  }
  return false;
  /* return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{route}</h1>
      </div>
    </nav>
  ); */
}
