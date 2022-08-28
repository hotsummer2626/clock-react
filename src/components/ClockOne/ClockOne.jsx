import React from "react";
import styles from "./ClockOne.module.scss";

const numbersData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ClockOne = ({ second, minute, hour }) => {
  let secondDeg = `${(360 / 60) * second}deg`;
  let minuteDeg = `${(360 / 60) * minute + (0.5 / 60) * second}deg`;
  let hourDeg = `${(360 / 12) * hour + minute / 2}deg`;
  let ampm = hour <= 12 ? "am" : "pm";
  hour = hour % 12;
  hour = hour ? hour : 12;
  second = second.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  hour = hour.toString().padStart(2, "0");
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <ul className={styles.wallClockWrapper}>
          {numbersData.map((number, index) => (
            <li
              key={index}
              style={{ "--i": number }}
              className={styles.numberWrapper}
            >
              <span className={styles.number}>{number}</span>
            </li>
          ))}
          <div style={{ "--sec": secondDeg }} className={styles.second}></div>
          <div style={{ "--min": minuteDeg }} className={styles.minute}></div>
          <div style={{ "--hr": hourDeg }} className={styles.hour}></div>
          <div className={styles.centerDot}></div>
        </ul>
        <div className={styles.eClockWrapper}>
          <span className={styles.hour}>{hour}</span>
          <span>:</span>
          <span className={styles.minute}>{minute}</span>
          <span>:</span>
          <span className={styles.second}>{second}</span>
          <span className={styles.ampm}>{ampm}</span>
        </div>
      </div>
    </div>
  );
};

export default ClockOne;
