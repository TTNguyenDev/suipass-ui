import { Button, Header, SpotLightBg } from '@/components';
import { Link } from '@tanstack/react-router';
import SuipassLogo from '@/assets/logo.png';

export function HomeLogged() {
  return (
    <>
      <div className="min-h-[800px] min-w-[375px] relative">
        <SpotLightBg />
        <div className="relative">
          <Header />
          <main className="container mx-auto relative">
            <section className="grid grid-cols-5 gap-16 py-32 text-white">
              <div className="col-span-5 md:col-span-3">
                <h1 className="text-6xl mb-12 font-bold md:text-8xl">Welcome back to Suipass</h1>
                <p className="max-w-xl mb-16 text-xl font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo adipiscing
                  faucibus nunc amet convallis posuere diam nulla. Pellentesque vulputate dui
                  posuere orci tellus dolor, semper convallis sed.
                </p>
                <Link to="/dashboard">
                  <Button size="lg" className="w-full md:w-auto">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
              <div className="hidden md:col-span-2 md:block rounded-full overflow-hidden">
                <img src={SuipassLogo} className="object-cover w-full" />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
