import React from 'react';
import '../styles/Home.css';
import '../styles/responsive.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                // src="https://images-fe.ssl-images-amazon.com/images/G/09/Digital_Video/Ever/SVOD/Xsite/GW_DT_Hero_NP-All_Mul-EN_1500x600._CB430966605_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="98320951"
                    title="Stand Mixer Electric Mixer, Techwood 6-QT 800W high power 6-Speed Food Mixer, Tilt-Head Kitchen Electric Dough Mixer with Stainless Steel Bowl, Dough Hook, Wire Whip and Beater, Red"
                    price={134.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vlBnnNubL._AC_SY450_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="79120382"
                    title="Samsung Galaxy Watch 3 (45mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long lasting Battery - Mystic Black (US Version)"
                    price={429.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81hgNpSWBiL._AC_SY550_.jpg"
                />
                <Product
                    id="29084199"
                    title="All-new Echo Dot (4th Gen) - Charcoal - bundle with LIFX Smart Bulb (Wi-Fi)"
                    price={39.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61XJ3SmyfoL._AC_SX425_.jpg"
                />
                <Product
                    id="51792201"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                    price={279.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="18620441"
                    title="Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz, USB-C, HDMI, DP, 3 Year Warranty (LC34H890WGNXGO), Black/Titanium"
                    price={617.18}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SX450_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
