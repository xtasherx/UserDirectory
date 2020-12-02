
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header bg-dark">
        <div className="header-brand">
          <h6 className="text-light font-light mt-2 mb-2">The Random Company</h6>
        </div>
      </div>
      <div className="hero">
        <div className="hero-body u-flex u-flex-column u-items-center">
          <div className="content">
            <h2 className="title ">Employee Directory</h2>
            <h5 className="subtitle text-gray-300">And I am the subtitle.</h5></div>
            <div className="">
              <div className=""><input className ="input-small"type="search" style={{"width":"100%"}}placeholder="Search by Name"></input></div>
            </div>
          </div>
      </div>
      <div className="content">
          <table className="table">
      <thead>
          <tr>
              <th><abbr title="Title1">ID</abbr></th>
              <th><abbr title="Title2">Name</abbr></th>
              <th><abbr title="Title3">Email</abbr></th>
              <th><abbr title="Title4">Phone</abbr></th>
              <th><abbr title="Title5">Birthday</abbr></th>
           
              <th>Notes</th>
          </tr>
      </thead>

      <tbody>
          <tr>
              <th>1</th>
              <td>Row:1 Cell:1</td>
              <td>Row:1 Cell:2</td>
              <td>Row:1 Cell:3</td>
              <td>Row:1 Cell:4</td>

              <td>Row:1 Cell:5</td>
          </tr>
          <tr>
              <th>2</th>
              <td>Row:2 Cell:1</td>
              <td>Row:2 Cell:2</td>
              <td>Row:2 Cell:3</td>
              <td>Row:2 Cell:4</td>
              <td>Row:2 Cell:5</td>
          </tr>
          <tr className="selected">
              <th>3</th>
              <td>Row:3 Cell:1</td>
              <td>Row:3 Cell:2</td>
              <td>Row:3 Cell:3</td>
              <td>Row:3 Cell:4</td>
              <td>Row:3 Cell:5</td>
          </tr>
          <tr>
              <th>4</th>
              <td>Row:4 Cell:1</td>
              <td>Row:4 Cell:2</td>
              <td>Row:4 Cell:3</td>
              <td>Row:4 Cell:4</td>
              <td>Row:4 Cell:5</td>
          </tr>
          <tr>
              <th>5</th>
              <td>Row:5 Cell:1</td>
              <td>Row:5 Cell:2</td>
              <td>Row:5 Cell:3</td>
              <td>Row:5 Cell:4</td>
              <td>Row:5 Cell:5</td>
          </tr>
          <tr>
              <th>6</th>
              <td>Row:6 Cell:1</td>
              <td>Row:6 Cell:2</td>
              <td>Row:6 Cell:3</td>
              <td>Row:6 Cell:4</td>
              <td>Row:6 Cell:5</td>
          </tr>
      </tbody>
  </table>
  </div>
    </div>
  );
}

export default App;
