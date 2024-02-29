import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Head from './components/head';
import Menu from './components/menu';
import Main from './components/main';
import Footer from './components/footer';

import Product from './pages/product';
import Nagoya from './pages/nagoya';
import Toyohashi from './pages/toyohashi';
import Toyota from './pages/toyota';
import Gifu from './pages/gifu';
import Takayama from './pages/takayama';
import Tazimi from './pages/tazimi';
import Ise from './pages/ise';
import Yokkaichi from './pages/yokkaichi';
import Tu from './pages/tu';
import Hamamatsu from './pages/hamamatsu';
import Numadu from './pages/numadu';
import Shizuoka from './pages/shizuoka';
import DiningChair from './pages/diningChair';
import Bench from './pages/bench';
import Pcdesk from './pages/pcdesk';
import Flatdesk from './pages/flatdesk';

import imgDinChair from './images/dining_chair_1.jpg';
import imgPcDesk from './images/pc_desk_1.jpg';

const productData = [
  {googsImg:imgDinChair,goodsName:"stylingダイニングチェアー",dataArea:"nagoya",areaName:"名古屋",dataGenre:"diningChair",genreName:"ダイニングチェアー"},
  {googsImg:imgPcDesk,goodsName:"stylingPCデスク",dataArea:"toyohashi",areaName:"豊橋",dataGenre:"pcdesk",genreName:"PCデスク"},
  {googsImg:imgDinChair,goodsName:"stylingベンチ",dataArea:"toyota",areaName:"豊田",dataGenre:"bench",genreName:"ベンチ"},
  {googsImg:imgPcDesk,goodsName:"stylingPCデスク",dataArea:"gifu",areaName:"岐阜",dataGenre:"pcdesk",genreName:"PCデスク"},
  {googsImg:imgDinChair,goodsName:"stylingダイニングチェアー",dataArea:"takayama",areaName:"高山",dataGenre:"diningChair",genreName:"ダイニングチェアー"},
  {googsImg:imgPcDesk,goodsName:"stylingPCデスク",dataArea:"tazimi",areaName:"多治見",dataGenre:"pcdesk",genreName:"PCデスク"},
  {googsImg:imgDinChair,goodsName:"stylingダイニングチェアー",dataArea:"ise",areaName:"伊勢",dataGenre:"diningChair",genreName:"ダイニングチェアー"},
  {googsImg:imgPcDesk,goodsName:"stylingPCデスク",dataArea:"yokkaichi",areaName:"四日市",dataGenre:"pcdesk",genreName:"PCデスク"},
  {googsImg:imgDinChair,goodsName:"stylingダイニングチェアー",dataArea:"tu",areaName:"津市",dataGenre:"diningChair",genreName:"ダイニングチェアー"},
  {googsImg:imgPcDesk,goodsName:"styling平デスク",dataArea:"numadu",areaName:"沼津",dataGenre:"flatdesk",genreName:"平デスク"},
  {googsImg:imgPcDesk,goodsName:"stylingPCデスク",dataArea:"shizuoka",areaName:"静岡",dataGenre:"pcdesk",genreName:"PCデスク"},
  {googsImg:imgDinChair,goodsName:"stylingダイニングチェアー",dataArea:"hamamatsu",areaName:"浜松",dataGenre:"diningChair",genreName:"ダイニングチェアー"}
]

function App() {
  const [areaData, setAreaData] = useState("");
  const [genreData, setGenreData] = useState("");
  const [areaName, setAreaName] = useState("");
  const [genreName, setGenreName] = useState("");

  return (
    <>
    <BrowserRouter>
    <Head />
    <Menu setAreaData={setAreaData} setGenreData={setGenreData} setAreaName={setAreaName} setGenreName={setGenreName} />
    <Routes>
      <Route exact path='/' element={<Main productData={productData} />} />
      <Route path='/product' element={<Product />} />
      <Route path='/nagoya' element={<Nagoya productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/toyohashi' element={<Toyohashi productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/toyota' element={<Toyota productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/gifu' element={<Gifu productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/takayama' element={<Takayama productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/tazimi' element={<Tazimi productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/ise' element={<Ise productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/yokkaichi' element={<Yokkaichi productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/tu' element={<Tu productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/hamamatsu' element={<Hamamatsu productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/numadu' element={<Numadu productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/shizuoka' element={<Shizuoka productData={productData} areaData={areaData} genreData={genreData} areaName={areaName} />} />
      <Route path='/diningchair' element={<DiningChair productData={productData} genreData={genreData} genreName={genreName} />} />
      <Route path='/bench' element={<Bench productData={productData} genreData={genreData} genreName={genreName} />} />
      <Route path='/pcdesk' element={<Pcdesk productData={productData} genreData={genreData} genreName={genreName} />} />
      <Route path='/flatdesk' element={<Flatdesk productData={productData} genreData={genreData} genreName={genreName} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
