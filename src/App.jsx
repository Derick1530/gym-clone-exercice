import headerImage from "./assets/images/header.png";
import whatWeDoImage from "./assets/images/what-we-do.png";
import magicboxImage from "./assets/images/magicbox.png";
import globalImage from "./assets/images/global.png";
import NetflixImage from "./assets/images/Netflix-Logo.png";
import RedditImage from "./assets/images/Reddit-Logo.png";
import DiscordImage from "./assets/images/Discord-Logo.png";
import AmazonImage from "./assets/images/Amazon-Logo.png";
import SpotifyImage from "./assets/images/Spotify-Logo.png";
import SmillImage from "./assets/images/smill.jpg";

function App() {
  return (
    <div className="bg-[#F6F6F6] lg:px-0 pt-8">
      <nav className="flex px-6 lg:px-0 mx-auto max-w-5xl items-center">
        <div className="flex space-x-2 items-center">
          <div>
            <svg
              width="35"
              height="37"
              viewBox="0 0 35 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53257 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.5571 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z"
                fill="#F53838"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg">
              Lasles<span className="font-bold text-xl">VPN</span>
            </p>
          </div>
        </div>

        <ul className="flex-grow hidden lg:flex space-x-20 justify-center  text-gray-600">
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>

        <div className=" hidden lg:flex space-x-5">
          <button className="font-medium">Sign In</button>
          <button className="font-medium px-6 lg:px-0 py-2 border-primary text-primary border-2 rounded-full">
            Sign Up
          </button>
        </div>
      </nav>
      <header className="flex px-6 lg:px-0 flex-col-reverse lg:flex-row mx-auto max-w-5xl space-x-5 mt-12 items-center">
        <div className="space-y-10 lg:pt-0 pt-10">
          <div className="space-y-3">
            <h1 className="text-[50px] leading-normal max-w-[550px]">
              Want anything to be easy with
              <span className="font-bold">LaslesVPN</span>.
            </h1>

            <p className="flex-1 text-brand-text">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
          </div>

          <div className="max-w-[250px] w-full">
            <button className="text-center w-full rounded-[10px] bg-primary px-6 lg:px-0 py-4 text-white font-bold shadow-2xl shadow-primary/70">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full max-w-[600px]">
          <div className="">
            <img
              alt="what-we-do"
              loading="lazy"
              src={headerImage}
              className="object-cover w-full h-full"
              width="500px"
              height="414px"
            />
          </div>
        </div>
      </header>
      <section className="bg-[#f7f7f7] px-6 mx-auto max-w-5xl mt-[100px] shadow-[0_25px_60px_-15px_rgba(197,197,197,0.6)] hidden justify-between lg:px-24 py-12 rounded-[10px] lg:flex">
        <div className="flex items-center space-x-7">
          <div className="rounded-full flex place-content-center items-center w-[45px] h-[45px] bg-primary/30">
            <span className="material-symbols-outlined text-primary">
              {" "}
              person{" "}
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-[25px] font-bold">30+</p>
            <p className="text-brand-text text-[20px]">Locations</p>
          </div>
        </div>
        <div className="w-[2px] bg-slate-300/40"></div>

        <div className="flex items-center space-x-7">
          <div className="rounded-full flex place-content-center items-center w-[45px] h-[45px] bg-primary/10">
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-[25px] font-bold">30+</p>
            <p className="text-brand-text text-[20px]">Locations</p>
          </div>
        </div>
        <div className="w-[2px] bg-slate-300/40"></div>
        <div className="flex space-x-7 items-center relative before:h-[100px]">
          <div>
            <div className="rounded-full flex place-content-center items-center w-[45px] h-[45px] bg-primary/30">
              <span className="material-symbols-outlined text-primary">
                {" "}
                dns{" "}
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[25px] font-bold">30+</p>
            <p className="text-brand-text text-[20px]">Locations</p>
          </div>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col mx-auto max-w-5xl mt-20 justify-between items-center">
        <div className="w-full">
          <img
            alt="what-we-do"
            loading="lazy"
            src={whatWeDoImage}
            width="500px"
            height="414px"
          />
        </div>
        <div className="lg:max-w-[50%] px-6 lg:px-0 lg:pt-0 pt-10 space-y-6">
          <h1 className="text-[35px] font-bold leading-normal">
            We Provide Many Features You Can Use
          </h1>
          <p className="text-brand-text">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li className="flex space-x-5">
              <div className="rounded-full bg-green-600 w-7 flex items-center justify-center h-7">
                <span className="material-symbols-outlined text-white">
                  {" "}
                  done{" "}
                </span>
              </div>
              <p>Powerfull online protection.</p>
            </li>
            <li className="flex space-x-5">
              <div className="rounded-full bg-green-600 w-7 flex items-center justify-center h-7">
                <span className="material-symbols-outlined text-white">
                  {" "}
                  done{" "}
                </span>
              </div>
              <p>Internet without borders.</p>
            </li>
            <li className="flex space-x-5">
              <div className="rounded-full bg-green-600 w-7 flex items-center justify-center h-7">
                <span className="material-symbols-outlined text-white">
                  {" "}
                  done{" "}
                </span>
              </div>
              <p>Supercharged VPN.</p>
            </li>
            <li className="flex space-x-5">
              <div className="rounded-full bg-green-600 w-7 flex items-center justify-center h-7">
                <span className="material-symbols-outlined text-white">
                  {" "}
                  done{" "}
                </span>
              </div>
              <p>No specific time limits.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="space-y-10 px-6 lg:px-0 container mx-auto max-w-5xl py-20 mt-20">
        <div className="flex py-12 flex-col space-y-5 items-center justify-center">
          <h1 className="font-bold text-[35px]">Choose Your Plan</h1>
          <p className="text-brand-text">
            Let&apos;s choose the package that is best for you and explore it
            happily and cheerfully.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-8 lg:gap-x-20">
          <div className="space-y-8 border-2 border-gray-500/40 flex justify-start items-center flex-col min-h-[760px] rounded-[12px]">
            <div className="grow flex flex-col items-center justify-start space-y-10">
              <div className="flex space-y-10 flex-col mt-12 items-center">
                <div>
                  <img
                    src={magicboxImage}
                    alt="magicbox"
                    width="144px"
                    height="165px"
                    loading="lazy"
                  />
                </div>
                <p className="text-[18px] font-bold">Free Plan</p>
              </div>

              <ul className="space-y-4  text-gray-600">
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Unlimited Bandwitch</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Encrypted Connection</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>No Traffic Logs</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Works on All Devices</p>
                </li>
              </ul>
            </div>

            <div className="w-full pb-10 space-y-5 items-center flex flex-col justify-center">
              <p className="text-[25px] font-bold">Free</p>
              <button className="px-20 py-2 border-2 text-primary font-bold rounded-full border-primary">
                Select
              </button>
            </div>
          </div>
          <div className="space-y-8 border-2 border-gray-500/40 flex justify-start items-center flex-col min-h-[760px] rounded-[12px]">
            <div className="grow flex flex-col items-center justify-start space-y-10">
              <div className="flex space-y-10 flex-col mt-12 items-center">
                <div>
                  <img
                    src={magicboxImage}
                    alt="magicbox"
                    width="144px"
                    height="165px"
                    loading="lazy"
                  />
                </div>
                <p className="text-[18px] font-bold">Standard Plan</p>
              </div>

              <ul className="space-y-4 text-gray-600">
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Unlimited Bandwitch</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Encrypted Connection</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Yes Traffic Logs</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Works on All Devices</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Connect Anyware</p>
                </li>
              </ul>
            </div>

            <div className="w-full pb-10 space-y-5 items-center flex flex-col justify-center">
              <p className="text-[25px] text-brand-text">
                <span className="font-bold text-black">$9</span> / mo
              </p>
              <button className="px-20 py-2 border-2 text-primary font-bold rounded-full border-primary">
                Select
              </button>
            </div>
          </div>
          <div className="space-y-8 border-2 border-gray-500/40 flex justify-start items-center flex-col min-h-[760px] rounded-[12px]">
            <div className="grow flex flex-col items-center justify-start space-y-10">
              <div className="flex space-y-10 flex-col mt-12 items-center">
                <div>
                  <img
                    src={magicboxImage}
                    alt="magicbox"
                    width="144px"
                    height="165px"
                    loading="lazy"
                  />
                </div>
                <p className="text-[18px] font-bold">Premium Plan</p>
              </div>

              <ul className="space-y-4 text-gray-600">
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Unlimited Bandwitch</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Encrypted Connection</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Yes Traffic Logs</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Works on All Devices</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Connect Anyware</p>
                </li>
                <li className="flex space-x-4 text-sm">
                  <div>
                    <span className="material-symbols-outlined text-green-500">
                      done
                    </span>
                  </div>
                  <p>Get New Features</p>
                </li>
              </ul>
            </div>

            <div className="w-full pb-10 space-y-5 items-center flex flex-col justify-center">
              <p className="text-[25px] text-brand-text">
                <span className="font-bold text-black">$12</span> / mo
              </p>
              <button className="px-20 bg-primary py-2 border-2 shadow-xl shadow-primary/30 text-white font-bold rounded-full border-primary">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl mt-24">
        <div className="flex px-6 lg:px-0 w-full py-12 flex-col space-y-5 items-center justify-center">
          <h1 className="font-bold max-w-[360px] leading-normal text-[35px] text-center">
            Huge Global Network of Fast VPN
          </h1>
          <p className="text-brand-text max-w-[560px] text-center">
            Let&apos;s choose the package that is best for you and explore it
            happily and cheerfully.
          </p>
        </div>
        <div className="mt-12">
          <img src={globalImage} alt="globe" width="1060px" height="540px" />
        </div>
      </section>
      <section className="mt-20 mx-auto max-w-5xl grayscale opacity-40 py-12 justify-between items-center flex">
        <div className="w-[190px] h-[60px]">
          <img src={NetflixImage} className="object-cover w-full h-full" />
        </div>
        <div className="w-[190px] h-[60px]">
          <img src={RedditImage} className="object-cover w-full h-full" />
        </div>
        <div className="w-[190px] h-[60px]">
          <img src={DiscordImage} className="object-cover w-full h-full" />
        </div>
        <div className="w-[190px] h-[60px]">
          <img src={AmazonImage} className="object-cover w-full h-full" />
        </div>
        <div className="w-[190px] h-[60px]">
          <img src={SpotifyImage} className="object-cover w-full h-full" />
        </div>
      </section>
      <section className="mt-20b-[14rem] relative">
        <div className="flex w-full py-12 flex-col space-y-5 items-center justify-center">
          <h1 className="font-bold px-6 lg:px-0 max-w-[360px] leading-normal text-[35px] text-center">
            Trusted by Thousands of Happy Customer
          </h1>
          <p className="px-6 lg:px-0 text-brand-text max-w-[560px] text-center">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div className="relative min-h-[350px] w-full w0f h-full overflow-x-scroll no-scrollbar">
            <div className="flex absolute left-0 right-0 mx-auto max-w-5xl h-full py-16 bottom-3 space-x-20">
              <div className="border-2 p-10 rounded-[10px] border-primary">
                <div className="flex">
                  <div className="max-w-[60px] rounded-full overflow-hidden max-h-[60px] w-full h-full">
                    <img src={SmillImage} width="40px" height="40px" />
                  </div>
                  <div className="flex-1 text-brand-text">
                    <p className="text-[18px]">Viezh Robert</p>
                    <p className="text-[14px]">Warsaw, Poland</p>
                  </div>
                  <div className="flex space-x-3">
                    <p>4.5</p>
                    <span className="material-symbols-outlined"> star </span>
                  </div>
                </div>
                <div className="w-[400px] mt-3">
                  <p>
                    Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best
                  </p>
                </div>
              </div>
              <div className="border-2 p-10 rounded-[10px] border-gray-400/50">
                <div className="flex">
                  <div className="max-w-[60px] rounded-full overflow-hidden max-h-[60px] w-full h-full">
                    <img src={SmillImage} width="40px" height="40px" />
                  </div>
                  <div className="flex-1 text-brand-text">
                    <p className="text-[18px]">Viezh Robert</p>
                    <p className="text-[14px]">Warsaw, Poland</p>
                  </div>
                  <div className="flex space-x-3">
                    <p>4.5</p>
                    <span className="material-symbols-outlined"> star </span>
                  </div>
                </div>
                <div className="w-[400px] mt-3">
                  <p>
                    Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best
                  </p>
                </div>
              </div>
              <div className="border-2 p-10 rounded-[10px] border-gray-400/50">
                <div className="flex">
                  <div className="max-w-[60px] rounded-full overflow-hidden max-h-[60px] w-full h-full">
                    <img src={SmillImage} width="40px" height="40px" />
                  </div>
                  <div className="flex-1 text-brand-text">
                    <p className="text-[18px]">Viezh Robert</p>
                    <p className="text-[14px]">Warsaw, Poland</p>
                  </div>
                  <div className="flex space-x-3">
                    <p>4.5</p>
                    <span className="material-symbols-outlined"> star </span>
                  </div>
                </div>
                <div className="w-[400px] mt-3">
                  <p>
                    Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-6 lg:px-0 mx-auto max-w-5xl w-full items-center justify-between">
            <div className="flex relative space-x-2 justify-between">
              <div className="h-4 w-12 bg-primary rounded-full"></div>
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex space-x-3">
              <div className="border border-primary w-12 h-12 flex justify-center items-center rounded-full">
                <span className="material-symbols-outlined"> arrow_back </span>
              </div>
              <div className="bg-primary text-white w-12 h-12 flex justify-center items-center rounded-full">
                <span className="material-symbols-outlined">
                  {" "}
                  arrow_forward{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:max-w-5xl mx-6 lg:px-0 flex my-5 lg:hidden space-y-4 lg:space-y-0 left-0 right-0 -top-1/4 bg-white rounded-xl justify-between shadow-xl lg:flex-row flex-col p-12">
        <div className="space-y-3">
          <p className="lg:text-3xl text-xl font-bold">
            Subscribe Now for Get Special Features!
          </p>
          <p className="text-sm">
            Let&apos;s subscribe with us and find the fun.
          </p>
        </div>
        <div>
          <button className="text-center w-full rounded-[10px] bg-primary px-6 lg:px-0 py-4 text-white font-bold shadow-2xl shadow-primary/70">
            Subscribe Now
          </button>
        </div>
      </div>
      <footer className="bg-neutral-200 lg:p-24 p-6 relative">
        <div className="lg:max-w-5xl px-6 lg:px-12 lg:flex absolute hidden left-0 right-0 -top-1/4 bg-white rounded-xl justify-between mx-auto shadow-xl lg:flex-row flex-col p-12">
          <div className="space-y-3">
            <p className="lg:text-3xl text-xl font-bold">
              Subscribe Now for Get Special Features!
            </p>
            <p className="text-sm">
              Let&apos;s subscribe with us and find the fun.
            </p>
          </div>
          <div>
            <button className="text-center w-full rounded-[10px] bg-primary px-6 py-4 text-white font-bold shadow-2xl shadow-primary/70">
              Subscribe Now
            </button>
          </div>
        </div>
        <main className="flex px-6 lg:px-0 lg:flex-row flex-col lg:max-w-5xl lg:p-12 mx-auto justify-between gap-10">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2 items-center">
              <div>
                <svg
                  width="35"
                  height="37"
                  viewBox="0 0 35 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53257 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.5571 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z"
                    fill="#F53838"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg">
                  Lasles<span className="font-bold text-xl">VPN</span>
                </p>
              </div>
            </div>
            <div className="max-w-md">
              <p>
                LaslesVPN is a private virtual network that has unique features
                and has high security.
              </p>
            </div>
            <div className="flex space-x-4">
              <a className="rounded-full text-primary bg-white w-12 h-12 flex justify-center items-center shadow-xl">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="rounded-full text-primary bg-white w-12 h-12 flex justify-center items-center shadow-xl">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="rounded-full text-primary bg-white w-12 h-12 flex justify-center items-center shadow-xl">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
            <div>
              <p className="text-gray-500">©2020LaslesVPN</p>
            </div>
          </div>

          <div className="lg:basis-3/6 flex flex-col lg:flex-row justify-between">
            <ul className="list-none text-gray-600">
              <li className="py-1 text-xl font-bold text-black">
                <a>Product</a>
              </li>
              <li className="py-1">
                <a>Projects</a>
              </li>
              <li className="py-1">
                <a>Services</a>
              </li>
              <li className="py-1">
                <a>About Us</a>
              </li>
              <li className="py-1">
                <a>Careers</a>
              </li>
              <li className="py-1">
                <a>Blog</a>
              </li>
            </ul>
            <ul className="list-none text-gray-600">
              <li className="py-1 text-xl font-bold text-black">
                <a>Engage</a>
              </li>
              <li className="py-1">
                <a>Projects</a>
              </li>
              <li className="py-1">
                <a>Services</a>
              </li>
              <li className="py-1">
                <a>About Us</a>
              </li>
              <li className="py-1">
                <a>Careers</a>
              </li>
              <li className="py-1">
                <a>Blog</a>
              </li>
            </ul>
            <ul className="list-none text-gray-600">
              <li className="py-1 text-xl font-bold text-black">
                <a>Earn Money</a>
              </li>
              <li className="py-1">
                <a>Affiliate</a>
              </li>
              <li className="py-1">
                <a>Affiliate</a>
              </li>
            </ul>
          </div>
        </main>
      </footer>
    </div>
  );
}

export default App;
