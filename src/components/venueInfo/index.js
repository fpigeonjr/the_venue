import React from "react";
import { Zoom } from "react-reveal";
import calendarIcon from "../../resources/images/icons/calendar.png";
import locationIcon from "../../resources/images/icons/location.png";
const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendarIcon})` }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">17 December 2018 @ 10pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${locationIcon})` }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">
                    123 Cool Street, San Antonio, TX
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
