import "./css/App.css";

function App() {
  return (
    <div id="wrap">
      <div className="container">
        <header className="header">
          <h1 className="title">TODO LIST</h1>
        </header>
        <div className="content">
          <div className="todo_box">
            <div className="todo_form">
              <input
                type="text"
                className="todo_input"
                placeholder="오늘 할 일을 입력해 주세요."
              />
              <button type="button" className="todo_add">
                추가
              </button>
            </div>
            <div className="todo_content">
              <ul className="todo_list">
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo01" />
                    <label for="todo01">투두01</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo02" />
                    <label for="todo02">투두02</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo03" />
                    <label for="todo03">투두03</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo04" />
                    <label for="todo04">투두04</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo05" />
                    <label for="todo05">투두05</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo06" />
                    <label for="todo06">투두06</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo07" />
                    <label for="todo07">투두07</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
                <li className="todo_item">
                  <div className="check_item">
                    <input type="checkbox" id="todo08" />
                    <label for="todo08">투두08</label>
                  </div>
                  <div className="todo_modify">
                    <button type="button" className="delete_btn">
                      삭제
                    </button>
                    <button type="button" className="edit_btn">
                      수정
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>made by. 이태경</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
