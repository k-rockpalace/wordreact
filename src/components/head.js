import imgPcHead from '../images/pchead.jpg';
import imgSpHead from '../images/sphead.jpg';
import '../css/style.css';

const Head = ()=>{
    return (
        <section id="header">
		<div className="header__img-elem">
			<p className="header__heading-txt">Living Style Furnishings</p>
			<picture>
				<source srcset={imgPcHead} media="(min-width: 700px)" className="header__rogo images" alt="" />
				<source srcset={imgSpHead} media="(max-width: 699px)" className="header__rogo images" alt="" />
				<img src={imgPcHead} className="header__rogo images" alt="" />
			</picture>
		</div>
		<div className="header__description">
			このサイトは過去に業務で作成したサイトをリメイクしたサイトになります。本来は夜に働く女性たちを紹介したサイトになりますが家具紹介のサイトを想定して作成し直しました。
			※本来のサイトはワードプレスで作成していますがこのサイトはreact.jsを使用して作成しています。
		</div>
	</section>
    )
}

export default Head;