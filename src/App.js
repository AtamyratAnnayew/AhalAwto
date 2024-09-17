import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState,  createContext, useEffect} from 'react';
import ReactModal from 'react-modal';
import BizBarada from './Components/BizBarada';
import BasSahypa from './Components/BasSahypa';
import DolyOkamak from './Components/Images/doly-okamak-arrow.svg'
import logo from './Components/Images/Logo.svg'
import contactUs from './Components/Images/habarlasmak.svg'
import arrowIcon from './Components/Images/top-icon.svg'
import bizBaradaImg from "./Components/Images/biz-barada.svg"
import footerBaner from './Components/Images/baner-logo.svg'
import Kadalasdyryjy from './Components/Kadalasdyryjy';
import Gatnawlar from './Components/Gatnawlar';

import React from 'react';
import './i18n'; // Import the i18n configuration
import { useTranslation } from 'react-i18next';
import Habarlar from './Components/Habarlar';
import Kaka from './Components/Kaka'
import Baherden from './Components/Baherden';
import Sargytlar from './Components/Sargytlar';
import SargytlarTwo from './Components/SargytlarTwo';
import SargytlarThree from './Components/SargytlarThree';
import AwtobusFiziki from './Components/AwtobusFiziki';
import YukUlagyYuridiki from './Components/YukUlagyYuridiki';
import AwtobusYuridiki from './Components/AwtobusYuridiki';
import YukUlagyFiziki from './Components/YukUlagyFiziki';
import Hyzmatlarymyz from './Components/Hyzmatlarymyz';
import Modalnaya from './Components/Modalnaya';
import MasynSargytlar from './Components/MasynSargytlar';


export const SelectionContext = createContext();



function App() {

  // -------------Drop Down Show Hide ------------------------
  const [isOpen, setIsOpen] = useState(false); // State for open/closed state

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle open/closed state on click
  };

  //-------------------Active menu items-----------------------------
  const [activeIndex, setActiveIndex] = useState(0);
  const handleMenuItemClick = (index) => {
    if (index !== 3) { // Prevent changing the active item when "Karhanalarymyz" is clicked
      setActiveIndex(index);
    }
    setIsOpen(false); // Close dropdown if any other item is clicked
  };
  // ------------------------------------

  // useEffect(() => {
  //   const savedIndex = localStorage.getItem("activeMenuIndex");
  //   if (savedIndex) {
  //     setActiveIndex(parseInt(savedIndex, 10)); // Convert to integer
  //   }
  // }, []);

  // const handleMenuItemClick1 = (index) => {
  //   setActiveIndex(index);
  //   localStorage.setItem("activeMenuIndex", index); // Save to localStorage
  // };

  // ---------------------Drop Down menu's components-------

  const dropdownItems = [ // Replace with your actual dropdown content
    { name: 'Kaka', path: '/kaka', component: Kaka },
    { name: 'Baherden', path: '/baherden', component: Baherden },
    // ... other dropdown items
  ];

  // ----------------Langauge selection---------------

  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };



  const [selection, setSelection] = useState({ sargytlarTwo: '', sargytlarThree: '' });

  // =====================================================Drop down menu =================

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  
  return (
    <>
      <div className='contianer'>
        <div className='mainContainer'>

          <div className='firstChild '>
            <div className='flex felx-row justify-between items-center px-10'>

              <h1 className='text-2xl font-sans font-semibold'>{t('welcome')}<br/>{t('header')}</h1>

              <div className='logo'>
                <img src={logo}/>
              </div>
              
              <div className='flex flex-row gap-3'>
                <div onClick={openModal} className='contactUs flex flex-row items-center gap-2 cursor-pointer'>
                  <img src={contactUs}/>
                  <span>{t('description')}</span>
                </div>
                <div className='lanuages flex justify-center items-center gap-5'>
                  <button className={` rounded-[4px] w-[51px] h-[37px] ${activeLanguage === 'en' ? 'bg-[#059B36] text-white' : 'bg-gray-200'}`}
                    onClick={() => changeLanguage('en')}>EN</button>
                  <button  className={` rounded-[4px] w-[51px] h-[37px] ${activeLanguage === 'ru' ? 'bg-[#059B36] text-white' : 'bg-gray-200'}`}
                    onClick={() => changeLanguage('ru')}>RU</button>
                  <button className={` rounded-[4px] w-[51px] h-[37px] ${activeLanguage === 'tk' ? 'bg-[#059B36] text-white' : 'bg-gray-200'}`}
                    onClick={() => changeLanguage('tk')}>TM</button>
                </div>
              </div>
            </div>
          </div>

          <SelectionContext.Provider value={{ selection, setSelection }}>
          <Router>
          <div className='secondChild flex gap-10 flex-col pt-5'>
            <nav className='bg-[#E7E7E7] flex items-center justify-center h-[45px]'>
              <ul className='flex flex-row gap-5 text-lg items-center'>
                <li>
                  <Link to='/'
                  onClick={() => handleMenuItemClick(0)}
                  className={`px-3 py-2 ${activeIndex === 0 ? 'list-disc text-green-500' : 'text-black'}`}
               
                  >
                    Bas sahypa</Link>
                </li>
                <li>
                  <Link to='/bizBarada'
                   onClick={() => handleMenuItemClick(1)}
                   className={`px-3 py-2 ${activeIndex === 1 ? 'text-green-500' : 'text-black'}`}
                 
                  >
                    Biz barada</Link>
                </li>
                <li>
                  <Link to='/hyzmatlarymyz'
                  onClick={() => handleMenuItemClick(2)}
                  className={`px-3 py-2 ${activeIndex === 2 ? 'text-green-500' : 'text-black'}`}
                
                  >
                    Hyzmatlarymyz</Link>
                </li>
                <li className='relative'>
                  <span className='flex flex-row' onClick={toggleDropdown}>
                    <Link to="#"
                      className={`px-3 py-2 ${isOpen ? 'text-green-500' : 'text-black'}`}
                    >
                      Karhanalarymyz </Link>
                    <img src={arrowIcon} 
                        className={`transform transition-transform cursor-pointer ${isOpen ? 'rotate-0' : 'rotate-180'}`}/>
                  </span> 
                  {isOpen && (
                    <ul className='bg-[#ffff]  absolute top-11 w-36 z-10'>
                      {dropdownItems.map((item, index) => (
                        <li key={index} className="px-3 py-2 hover:bg-[#E7E7E7]">
                        <Link to={item.path} 
                          className="text-base block">
                            {() => handleMenuItemClick(3)}
                        {item.name}
                       </Link>
                       </li>
                      ))}
                    </ul>)}
                </li>
                <li>
                  <Link to='/kadalasdyryjy'
                   onClick={() => handleMenuItemClick(4)}
                   className={`px-3 py-2 ${activeIndex === 4 ? 'text-green-500' : 'text-black'}`}         
                  >
                    Kadalasdyryjy hukuknamalar
                  </Link>
                </li>
                <li>
                  <Link to='/habarlar'
                  onClick={() => handleMenuItemClick(5)}
                  className={`px-3 py-2 ${activeIndex === 5 ? 'text-green-500' : 'text-black'}`}
                >
                  Habarlar
                </Link>
                </li>
                <li>
                  <Link to='/gatnawlar'
                  onClick={() => handleMenuItemClick(6)}
                  className={`px-3 py-2 ${activeIndex === 6 ? 'text-green-500' : 'text-black'}`}        
                  >
                    Gatnawlar</Link>
                </li>
                <li>
                  <Link to='/sargytlar'
                  onClick={() => handleMenuItemClick(7)}
                  className={`px-3 py-2 ${activeIndex === 7 ? 'text-green-500' : 'text-black'}`}
                >
                  Sargytlar</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<BasSahypa/>} />
              <Route path="/bizBarada" element={<BizBarada/>} />
              <Route path="/Hyzmatlarymyz" element={<Hyzmatlarymyz/>} />
              {dropdownItems.map((item, index) => (
              <Route key={index} path={item.path} element={<item.component />} />
              ))}
              <Route path="/kadalasdyryjy" element={<Kadalasdyryjy/>} />
              <Route path="/gatnawlar" element={<Gatnawlar/>} />
              <Route path="/habarlar" element={<Habarlar/>} />
              <Route path="/Sargytlar" element={<Sargytlar/>}/>
              <Route path="/Sargytlar/SargytlarTwo" exact element={<SargytlarTwo/>}/>
              <Route path="/Sargytlar/SargytlarTwo/SargytlarThree" exact element={<SargytlarThree/>} />
              <Route path="/Sargytlar/SargytlarTwo/SargytlarThree/MasynSargytlar" exact element={<MasynSargytlar/>} />
              <Route path="/Sargytlar/SargytlarTwo/SargytlarThree/MasynSargytlar/AwtobusFiziki" exact element={<AwtobusFiziki/>} />
              <Route path="/Sargytlar/SargytlarTwo/SargytlarThree/YukUlagyYuridiki" exact element={<YukUlagyYuridiki/>} />
              <Route path="/Sargytlar/SargytlarTwo/SargytlarThree/AwtobusYuridiki" exact element={<AwtobusYuridiki/> } />
              <Route path="/Sargytlar/SargytlarTwo/SargytlarThree/YukUlagyFiziki" exact element={<YukUlagyFiziki/>}/>
             
            </Routes>
          </div>
          </Router>
          </SelectionContext.Provider>
          
          <div className='thirdChild border-t-2 border-[#E7E7E7] gap-2 mt-10'>
            <div className='mainContainer px-10 py-5 flex flex-row justify-between items-center'>
              <div className='flex flex-row gap-3'>
                <img src={footerBaner}/>
                <h1 className='font-semibold font-sans'>{t('welcome')} <br/> {t('header')}</h1>
              </div>
              <div className='phoneNumbers'>
                <div className='phoneFaks flex gap-3 text-lg'>
                  <span>Telefon</span>
                  <span className='border-[1px] border-black h-6'></span>
                  <span>Faks</span>
                </div>
                <div className='numbers flex flex-row gap-2'>
                  <span>(+993123)</span>
                  <span>4-09-06</span>
                </div>
                <div className='numbers flex flex-row gap-2'>
                  <span>(+993123)</span>
                  <span>4-09-06</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <span className='text-lg'>E-Mail</span>
                <span>ahalob@sanly.tm</span>
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='font-sans text-xl'>Salgymyz</h1>
                <p>Ahal welaýatynyň Gökdepe etrabynyň <br/>
                  Gökdepe şäheriniň A.Annanyýazow<br/>
                  köçesiniň 48-nji jaýy<br/>
                </p>
              </div>
            </div>
            <footer className='flex justify-center bg-[#E7E7E7]'>
              <div className='flex items-center justify-center'>© Copyright 2024, All Rights Reserved by Bereketbendi HJ</div>
            </footer>
          </div>
        </div>
        <Modalnaya isOpenModal={isOpenModal} closeModal={closeModal}/>
      </div>
    </>
  );
}

export default App;
