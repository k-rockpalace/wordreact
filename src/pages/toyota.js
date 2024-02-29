import { Link } from "react-router-dom";

const Toyota = (props)=>{
    const areaFilterData = props.productData.filter((data)=>data.dataArea === props.areaData);
    return (
        <section id="page">
			<h2 className="page__heading">{props.areaName}</h2>
		<ul className="page__contents">
            {areaFilterData && areaFilterData.map((data,index)=>(
                <li className="page__list" key={index}>
				<div className="page__girl-img">
                    <Link to="/product" className="page__img-link link">
                        <img src={data.googsImg} className="page__image images" alt="" />
                    </Link>
				</div>
				<p className="page__store-name">{data.goodsName}</p>
				<div className="page__area-wrap">
					<p className="page__area-head">商品生産エリア</p>
					<p className="page__area" data-area={data.dataArea}>{data.areaName}</p>
				</div>
				<div className="page__genre-wrap">
					<p className="page__genre-head">商品ジャンル</p>
					<p className="page__genre" data-genre={data.dataGenre}>{data.genreName}</p>
				</div>
				<div className="page__regist-btn">
                    <Link to="/product" className="page__btn-link link">カード登録はこちら</Link>
				</div>
				<div className="page__reserve-btn">
                    <Link to="/product" className="page__btn-link link">ネット予約する</Link>
				</div>
			</li>
            ))}
		</ul>
	</section>
    )
}

export default Toyota;