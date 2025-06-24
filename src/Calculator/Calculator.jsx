import React, { useCallback, useMemo, useState, useRef, useEffect } from "react";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
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
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const inputRef = useRef(null);

  const result = useMemo(() => {
    return number1 + number2;
  }, [number1, number2]);

  const handleChange1 = useCallback((e) => setNumber1(Number(e.target.value)), []);
  const handleChange2 = useCallback((e) => setNumber2(Number(e.target.value)), []);

  useEffect(() => {
    console.log('입력값이 변경', number1, number2);
  }, [number1, number2]);

  
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ margin: 10 }}>
      <h1>계산기 만들기</h1>
      <div style={styles.wrapper}>
        <input ref={inputRef} type="number" style={styles.inputBox} value={number1} onChange={handleChange1} />
        <input type="number" style={styles.inputBox} value={number2} onChange={handleChange2} />
        <button style={styles.btn} onClick={focusInput}>첫번째 포커스</button>
      </div>
      <div>결과 값 : {result}</div>
    </div>
  );
}

export default Calculator;