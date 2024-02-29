import '../css/style.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Menu = (props)=>{
	const [areaBool, setAreaBool] = useState(true);
	const [genreBool, setGenreBool] = useState(false);
	
	const menuClick = ()=>{
		setAreaBool(!areaBool);
		setGenreBool(!genreBool);
	}
    const areaClick = (e)=>{
        const areaData = e.currentTarget.dataset.menuarea;
		const areaName = e.currentTarget.innerText;
        props.setAreaData(areaData);
		props.setAreaName(areaName);
    }
    const genreClick = (e)=>{
        const genreData = e.currentTarget.dataset.menugenre;
		const genreName = e.currentTarget.innerText;
        props.setGenreData(genreData);
		props.setGenreName(genreName);
    }
    return (
        <section id="menu">
		<div className="menu__wrap">
			<div className={areaBool?"menu__left-menu active":"menu__left-menu"} onClick={menuClick}>生産エリアから探す</div>
			<div className={genreBool?"menu__right-menu active":"menu__right-menu"} onClick={menuClick}>ジャンルから探す</div>
			<div className={areaBool?"menu__area-wrap active-menu":"menu__area-wrap"}>
				<div className="menu__area">
					<div className="menu__area-name"><span>愛知県</span></div>
					<ul className="menu__area-ul">
						<li className="menu__area-list"><Link to="/nagoya" className="menu__link link" data-menuarea="nagoya" onClick={areaClick}>名古屋</Link></li>
						<li className="menu__area-list"><Link to="/toyohashi" className="menu__link link" data-menuarea="toyohashi" onClick={areaClick}>豊橋・豊川</Link></li>
						<li className="menu__area-list"><Link to="/toyota" className="menu__link link" data-menuarea="toyota" onClick={areaClick}>豊田・岡崎</Link></li>
					</ul>
				</div>
				<div className="menu__area">
					<div className="menu__area-name"><span>岐阜県</span></div>
					<ul className="menu__area-ul">
						<li className="menu__area-list"><Link to="/gifu" className="menu__link link" data-menuarea="gifu" onClick={areaClick}>岐阜周辺・金津園</Link></li>
						<li className="menu__area-list"><Link to="/takayama" className="menu__link link" data-menuarea="takayama" onClick={areaClick}>高山・飛騨</Link></li>
						<li className="menu__area-list"><Link to="/tazimi" className="menu__link link" data-menuarea="tazimi" onClick={areaClick}>多治見・恵那</Link></li>
					</ul>
				</div>
				<div className="menu__area">
					<div className="menu__area-name"><span>三重県</span></div>
					<ul className="menu__area-ul">
						<li className="menu__area-list"><Link to="/ise" className="menu__link link" data-menuarea="ise" onClick={areaClick}>伊勢・志摩</Link></li>
						<li className="menu__area-list"><Link to="/yokkaichi" className="menu__link link" data-menuarea="yokkaichi" onClick={areaClick}>四日市・鈴鹿</Link></li>
						<li className="menu__area-list"><Link to="/tu" className="menu__link link" data-menuarea="tu" onClick={areaClick}>津・松阪</Link></li>
					</ul>
				</div>
				<div className="menu__area">
					<div className="menu__area-name"><span>静岡県</span></div>
					<ul className="menu__area-ul">
						<li className="menu__area-list"><Link to="/numadu" className="menu__link link" data-menuarea="numadu" onClick={areaClick}>沼津・伊豆半島</Link></li>
						<li className="menu__area-list"><Link to="/shizuoka" className="menu__link link" data-menuarea="shizuoka" onClick={areaClick}>静岡・焼津</Link></li>
						<li className="menu__area-list"><Link to="/hamamatsu" className="menu__link link" data-menuarea="hamamatsu" onClick={areaClick}>浜松・掛川</Link></li>
					</ul>
				</div>
			</div>
			<div className={genreBool?"menu__genre-wrap active-menu":"menu__genre-wrap"}>
				<div className="menu__genre">
					<div className="menu__genre-name"><span>チェアー</span></div>
					<ul className="menu__genre-ul">
						<li className="menu__genre-list"><Link to="/diningchair" className="menu__link link" data-menugenre="diningChair" onClick={genreClick}>ダイニングチェアー</Link></li>
						<li className="menu__genre-list"><Link to="/bench" className="menu__link link" data-menugenre="bench" onClick={genreClick}>ベンチ</Link></li>
					</ul>
				</div>
				<div className="menu__genre">
					<div className="menu__genre-name"><span>デスク</span></div>
					<ul className="menu__genre-ul">
						<li className="menu__genre-list"><Link to="/pcdesk" className="menu__link link" data-menugenre="pcdesk" onClick={genreClick}>パソコンデスク</Link></li>
						<li className="menu__genre-list"><Link to="/flatdesk" className="menu__link link" data-menugenre="flatdesk" onClick={genreClick}>平デスク</Link></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="menu__home-btn">
            <Link to="/" className="menu__top-link link">TOPに戻る</Link>
		</div>
	</section>
    )
}

export default Menu;