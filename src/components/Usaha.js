import React from 'react';
import './Usaha.css';

function Usaha() {
    const services = [
        {
            title: "Tarik / Setor Tunai & Transfer Semua Bank",
            items: [
                { name: "Bank BRI", logo: "https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/website/img/merchant_logos/idn_bri.png" },
                { name: "Bank BNI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShne_g0DhrXLV1yNO6k48XQuzfkn6QNtQcOg&s" },
                { name: "Bank Mandiri", logo: "https://cdn.worldvectorlogo.com/logos/bank-mandiri-2.svg" },
                { name: "Bank BCA", logo: "https://logowik.com/content/uploads/images/bca-bank-central-asia1235.jpg" },
                { name: "Bank Syariah Indonesia", logo: "https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/website/img/merchant_logos/idn_bsi.png" },
                { name: "CIMB Niaga", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR44yVRBko8M0hU7JiiOtbMbDIrIp2swtbPg&s" }
            ]
        },
        {
            title: "Pulsa, Paket Data, & Token Listrik",
            items: [
                { name: "PLN Token Listrik", logo: "https://cdn.antaranews.com/cache/1200x800/2016/09/20160914logo-pln-001xx.jpg.webp" },
                { name: "Smartfren", logo: "https://media.suara.com/pictures/970x544/2019/12/10/14889-logo-smartfren.jpg" },
                { name: "Telkomsel", logo: "https://i.pinimg.com/originals/5d/3f/68/5d3f68c7b27860ca5fe393fa678f759b.png" },
                { name: "Indosat", logo: "https://logowik.com/content/uploads/images/indosat-ooredoo-20175131.logowik.com.webp" },
                { name: "XL Axiata", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59HZHPGL5ZJMHtWrcIdZs5oxJckWx32hwQw&s" },
                { name: "Axis", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8G2Yat6UzrK6aUPEOLeXBGZo7OrNW5oIm4A&s" },
                { name: "3 (Tri)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUZV_K3R6a_aF5TVFjSTp0ibFIkVEizilEQ&s" }
            ]
        },
        {
            title: "Top-Up E-Wallet",
            items: [
                { name: "OVO", logo: "https://bucket.utua.com.br/img/2021/05/27718b01-design-sem-nome-442x332.png" },
                { name: "ShopeePay", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSXS05PhtTaRg7GRru7TWZx2NegYbIi9hYw&s" },
                { name: "DANA", logo: "https://i.pinimg.com/originals/f5/8c/a3/f58ca3528b238877e9855fcac1daa328.jpg" },
                { name: "GoPay", logo: "https://i.pinimg.com/1200x/fe/ce/b2/feceb2ca508603b06c2f7ba18a5d018d.jpg" },
                { name: "e-Money", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0DJuOYcLchTglrWZfTd6yhBCAoyIn3Lh9A&s" },
                { name: "TapCash", logo: "https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/1/16/5cf6c009-b8ff-49a1-af2b-26a99b6709fb.jpg" },
                { name: "Flazz", logo: "https://www.bca.co.id/-/media/Feature/Promo/Icon/2022/01/20220112-flazz-logo.jpg" },
                { name: "LinkAja!", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhr56ZmR2kCZ0alHZ95es-TFnyZeELzF6Cw&s " },
                { name: "BRIZZI", logo: "https://i.pinimg.com/736x/ed/61/93/ed6193b0af58af8dff04193b23664a65.jpg" }
            ]
        },
        {
            title: "Terima Pembayaran",
            items: [
                { name: "IndiHome", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCwJiffS-_RGuJM94X7j_pL5DBoN2ubcSTQ&s" },
                { name: "PLN", logo: "https://mpp.palembang.go.id/static/logo/1661781006.png" },
                { name: "BPJS Kesehatan", logo: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/72/2024/08/13/WhatsApp-Image-2024-08-13-at-132334-3205517864.jpeg" },
                { name: "PDAM", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfLVWRYiO9reHW0rq7fFE1ELdDDecE3K83w&s" },
                { name: "Tokopedia", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkT52rz1mgpFLdeQstJiSZ9lJ4_6OQvOMiTg&s" },
                { name: "Shopee", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17I_nNotTG9CiWE-EmwQNz0dJOSL_mgsyHQ&s" },
                { name: "Bukalapak", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xgSxOP1MTUWdnfj0XEp2XHLkAUd1N8Y2og&s" },
                { name: "Blibli", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNJbnlE5Jr-hBJOaxcpFP7Qs2g88-tMosgg&s" },
                { name: "Lazada", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAFYBuw2Yx1NLq7PSk6r7Zr4S9lkesMMxcg&s" },
                { name: "Mobile Legends", logo: "https://esports.id/img/article/964320200914081250.png" },
                { name: "PUBG", logo: "https://cdn.pixabay.com/photo/2020/06/21/00/17/pubg-logo-5322826_1280.png" },
                { name: "Free Fire", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYWHAleugl2e4TA4iLtCP3wYfqfuvQEIJBw&s" }
            ]
        }
    ];

    return (
        <div className="usaha-container">
            <h1>Layanan Kami</h1>
            <div className="cards-container">
                {services.map((service, index) => (
                    <div key={index} className="card">
                        <h2>{service.title}</h2>
                        <div className="logos-container">
                            {service.items.map((item, i) => (
                                <div key={i} className="logo-item">
                                    <img src={item.logo} alt={item.name} className="logo-image" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Usaha;
