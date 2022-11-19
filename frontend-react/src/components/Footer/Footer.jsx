import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

export default function Footer({ currentAccount, chain, setChain }) {
  return (
    <footer>
      <div className="footer-dark">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Hosting</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>OnTheFILEd</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
          <div
            className="col item social"
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="#"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Icon icon="ion-social-facebook" />
            </a>
            <a
              href="#"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Icon icon="ion-social-twitter" />
            </a>
            <a
              href="#"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Icon
                icon="ion-social-instagram"
                style={{
                  fontSize: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </a>
          </div>
        </div>
        <p className="copyright"> OnTheFILEd © 2022 </p>
      </div>
    </footer>
  );
}
