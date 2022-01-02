import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Review.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Review = () => {
  return (
    <div className="Swiper-main" style={{ padding: "80px 0px" }}>
      <p
        style={{
          fontWeight: "bold",
          color: "#1BCBB9",
          mb: 8,
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
        }}
        variant="h5"
      >
        Happy Buyers Review
      </p>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://i.postimg.cc/Zqq99Kvy/men-talking-260nw-326140295.jpg"
              alt=""
            />
            <p className="review-name">Joz Alen</p>
            <p className=" review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://i.postimg.cc/X7cXQywC/91505714-young-asian-woman-executive-working-with-a-mobile-phone-in-office-building.webp"
              alt=""
            />
            <p className="review-name">Arian Behti</p>
            <p className="review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://i.postimg.cc/fyYk4Vp1/charming-female-executive-posing-confidently-260nw-159797027.jpg"
              alt=""
            />
            <p className="review-name">Lora martin</p>
            <p className="review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            {/* <h2>Dr. Taylor</h2>
            <p>+123456789</p> */}
            <img
              src="https://i.postimg.cc/SKtncFc1/png-clipart-businessperson-smile-graphy-businessman-people-public-relations.png"
              alt=""
            />
            <p className="review-name">Prince Roy</p>
            <p className=" review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://i.postimg.cc/9MRrp8pm/young-housewife-apron-showing-copy-260nw-428502229.jpg"
              alt=""
            />
            <p className="review-name">Rose folen</p>
            <p className="review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img src="https://i.postimg.cc/Mp9H823Z/images.jpg" alt="" />
            <p className="review-name">Arbaz Khan</p>
            <p className="review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://i.postimg.cc/NMHjTysL/Supreme-Court-Gorsuch-Moments-22084-70c71-0668.webp"
              alt=""
            />
            <p className="review-name">Jos Murti</p>
            <p className="review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%" }}>
            <img
              src="https://i.postimg.cc/m2GtYSF4/smiling-successful-man-suit-portrait-smiling-successful-bearded-businessman-formal-suit-standing-aga.jpg"
              alt=""
            />
            <p className="review-name">Safin Khandoker</p>
            <p className="review-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              tempore debitis quo odit excepturi aut sequi voluptatum alias
              error dolor eaque aspernatur magnam quasi vel neque eos, incidunt
              illo corporis amet exercitationem eligendi ad adipisci qui
              praesentium! Necessitatibus, tenetur officiis.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
