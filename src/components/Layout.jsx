import React, { useContext } from "react";
import "styles/App.css";
import { ThemeContext } from "utils/context";
import { FaSun} from "react-icons/fa"
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Layout = ({children}) => {
const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <main className="flex justify-center bg-slate-500">
      <div className="layout-container bg-bg-custom1 w-full md:w-1/2 h-screen overflow-y-scroll dark:bg-black">
        
        <nav className="bg-bg-custom2 px-2 sm:px-4 py-2.5 sticky top-0">
          <div className="flex items-center justify-evenly">
            <img src="https://cdn.iconscout.com/icon/free/png-64/pokemon-pokeball-pikachu-thunder-electric-shock-32217.png" className="mr-3 h-20 sm:h-9" alt="logo" />
                <span className="text-white text-xl font-semibold whitespace-nowrap font-gemunu-libre ml-3">
                  <img width={200} src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="logo" />
                </span>

              <div>
                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick={() => setIsLight(!isLight)}>
                  <span className="ml-2">
                    <FaSun className={`text-white text-4xl ${isLight ? "" : "hidden"}`}/>
                    <FaMoon className={`text-white text-4xl ${isLight ? "hidden" : ""}`}/>
                  </span>
                </button>
              </div>
          </div>
        </nav>
        
        <div className="content">{children}</div>

        <footer className="bg-bg-custom2 px-2 sm:px-4 py-2.5 sticky bottom-0">
          <div className="flex items-center justify-evenly">
            <Link to="/">
            <img width={50} src="https://cdn.iconscout.com/icon/premium/png-64-thumb/home-930-484816.png" className="mr-3 sm:h-9" alt="logo" />
            </Link>
            <img width={50} src="https://cdn.iconscout.com/icon/premium/png-64-thumb/pokemon-ball-cartoon-game-52538.png" className="mr-3 sm:h-9" alt="logo" />
          </div>
        </footer>

      </div>
    </main>
  )
}

export default Layout;
