import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../reducers"
import { actions, RESET_TEXT } from "../reducers/seifReducer"

const IndexPage = () => {
  const {no, text} = useSelector((state: RootState) => state.seifReducer)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch({
          type: RESET_TEXT,
      })
  }, [])

  const addTextHandler = () => {
      const value = "world";
      dispatch(actions.addText({no: 10, text: value}));
  }

  const removeTextHandler = () => {
    dispatch(actions.removeText());
  }

  const resetTextHandler = () => {
    dispatch(actions.resetText());
  }

  return (
      <>
          <p>no: {no}</p>
          <p>text: {text || ""}</p>
          <div>
              <button onClick={addTextHandler}>
                  버튼
              </button> 
              <button onClick={removeTextHandler}>
                  삭제
              </button>
              <button onClick={resetTextHandler}>
                  리셋
              </button> 
          </div>
      </>
  )
}

export default IndexPage;