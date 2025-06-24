import React, { } from "react";

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputBox: {
    margin: 0,
    marginRight: 5,
    padding: 7,
    border: "1px solid #ccc",
  },
  btn: {
    margin: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    border: "1px solid #ccc",
  }

}


function Calculator() {

  return (
    <div style={{ margin: 10 }}>
      <h1>계산기 만들기</h1>
      <div style={styles.wrapper}>
        <input type="number" style={styles.inputBox} />
        <input type="number" style={styles.inputBox} />
        <button style={styles.btn}>첫번째 포커스</button>
      </div>
      <div>결과 값 : </div>
    </div>
  );
}

export default Calculator;