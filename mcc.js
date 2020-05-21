class Star extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 200"
          preserveAspectRatio="xMidYMid meet"
        >
          <path fill="#F8D64E" d="m48,234 73-226 73,226-192-140h238z" />
          <text font-size="80px" fill="navy" x="90" y="150">
            {this.props.label}
          </text>
        </svg>
      </div>
    );
  }
}

class Lock extends React.Component {
  render() {
    return (
      <svg class="lock" viewBox="0 0 96 96" preserveAspectRatio="xMidYMid meet">
          <path 
            d="M66.8,48c1,0,1.9,0.4,2.7,1.1s1.1,1.6,1.1,2.7v22.5c0,1-0.4,1.9-1.1,2.7S67.8,78,66.8,78H29.3
          c-1,0-1.9-0.4-2.7-1.1s-1.1-1.6-1.1-2.7V51.8c0-1,0.4-1.9,1.1-2.7s1.6-1.1,2.7-1.1h1.3V35.5c0-4.8,1.7-8.9,5.1-12.4
          C39.1,19.7,43.2,18,48,18s8.9,1.7,12.4,5.1s5.1,7.5,5.1,12.4c0,0.7-0.2,1.3-0.7,1.8S63.7,38,63,38h-2.5c-0.7,0-1.3-0.2-1.8-0.7
          S58,36.2,58,35.5c0-2.8-1-5.1-2.9-7.1s-4.3-2.9-7.1-2.9s-5.1,1-7.1,2.9S38,32.7,38,35.5V48H66.8z"
          />
      </svg>
    );
  }
}

class Grid extends React.Component {
  innergrid = (size, content) => {
    let cells = [];

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        cells.push(<span>{content[i][j] || ""}</span>);
      }
    }

    return cells;
  };

  render() {
    return (
      <div class={`grid grid${this.props.index} gx${this.props.size}`}>
        {this.innergrid(this.props.size, this.props.content)}
      </div>
    );
  }
}

class RawGrid extends React.Component {
  render() {
    let grid = [];
    for (let i = 0; i < this.props.arr.length; i++) {
      for (let j = 0; j < this.props.arr[i].length; j++) {
        grid.push(
          <span className={this.props.arr[i][j] === 1 ? "box" : "not-box"}>
            {typeof this.props.arr[i][j] == "string" && this.props.arr[i][j]}
          </span>
        );
      }
    }
    return <div className={`poly grid gx${this.props.arr.length}`}>{grid}</div>;
  }
}

class Houston extends React.Component {
  constructor() {
    super();
    this.state = {
      stars: []
    };
  }

  validHoustonGrid = (grid, rows, columns, randomValues, randomStars) => {
    // make sure there are the right number cells set
    if (
      !this.props.validateCount(grid, rows, columns, randomValues, randomStars)
    ) {
      return false;
    }

    // make sure all numbers are spread out
    if (!this.props.validateSpacing(grid, rows, columns, 2)) {
      return false;
    }

    // make sure no numbers are on the edges
    for (var r = 0; r < rows; r++) {
      if (grid[r][0] !== 0 || grid[r][columns - 1] !== 0) {
        return false;
      }
    }
    for (var c = 0; c < columns; c++) {
      if (grid[0][c] !== 0 || grid[rows - 1][c] !== 0) {
        return false;
      }
    }

    return true;
  };
  randomHoustonGeneration = (rows, columns, randomValues, randomStars) => {
    let grid = [];
    do {
      grid = this.props.randomGridGeneration(rows, columns, randomValues);
    } while (!this.validHoustonGrid(grid, rows, columns, randomValues));

    do {
      for (let i = 0; i < randomStars; i++) {
        let r;
        let c;
        do {
          r = Math.floor(Math.random() * rows);
          c = Math.floor(Math.random() * columns);
        } while (grid[r][c]);

        grid[r][c] = <Star label={this.props.stars[i]} />;
      }
    } while (
      !this.props.validateSpacing(grid, rows, columns, 1, false) &&
      this.removeStars(grid, rows, columns)
    );

    for (let i = 0; i < 6; i++) {
      let r;
      let c;
      do {
        r = Math.floor(Math.random() * rows);
        c = Math.floor(Math.random() * columns);
      } while (grid[r][c]);

      grid[r][c] = <span className="blocked"></span>;
    }
       
    return grid;
  };
  removeStars(grid, rows, columns) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (!Number.isInteger(grid[r][c])) grid[r][c] = 0;
      }
    }
    return true;
  }
  render() {
    return (
      <div class="houston">
        <Grid
          index={0}
          size={9}
          content={this.randomHoustonGeneration(9, 9, 5, 8)}
        />
        <div className="houston-polys">
          <RawGrid
            arr={[
              ["Z", 1, 1],
              [1, 1, 0]
            ]}
          />
          <RawGrid
            arr={[
              [1, 1, "S"],
              [0, 1, 1]
            ]}
          />
          <RawGrid
            arr={[
              [0, 1],
              ["J", 1],
              [1, 1]
            ]}
          />
          <RawGrid
            arr={[
              [1, 0],
              [1, "L"],
              [1, 1]
            ]}
          />
          <RawGrid
            arr={[
              [1, 1, 1],
              ["T", 1, 0]
            ]}
          />
        </div>
      </div>
    );
  }
}

class Orlando extends React.Component {
  constructor() {
    super();

    this.state = {
      config: [4, 4, 5, 5]
    };
  }

  validOrlandoGrid = (grid, rows, columns, randomValues) => {
    // make sure there are the right number cells set
    if (!this.props.validateCount(grid, rows, columns, randomValues)) {
      return false;
    }

    // make sure all numbers are spread out
    if (!this.props.validateSpacing(grid, rows, columns, 1)) {
      return false;
    }

    // make sure no column or row has the same number
    var maxLine = 1;
    for (var r = 0; r < rows; r++) {
      var map = {};
      map[1] = 0;
      map[2] = 0;
      map[3] = 0;
      map[4] = 0;
      map[5] = 0;
      map[6] = 0;
      var count = 0;

      for (var c = 0; c < columns; c++) {
        if (grid[r][c] !== 0) {
          map[grid[r][c]]++;
          count++;
        }
      }
      if (count > maxLine) {
        return false;
      }
      for (var x = 1; x <= 6; x++) {
        if (map[x] > 1) {
          return false;
        }
      }
    }
    for (var c = 0; c < columns; c++) {
      var map = {};
      map[1] = 0;
      map[2] = 0;
      map[3] = 0;
      map[4] = 0;
      map[5] = 0;
      map[6] = 0;
      var count = 0;

      for (var r = 0; r < rows; r++) {
        if (grid[r][c] !== 0) {
          map[grid[r][c]]++;
          count++;
        }
      }
      if (count > maxLine) {
        return false;
      }
      for (var x = 1; x <= 6; x++) {
        if (map[x] > 1) {
          return false;
        }
      }
    }

    return true;
  };
  randomOrlandoGeneration = (rows, columns, randomValues, randomStars) => {
    var grid = [];
    do {
      grid = [];
      grid = this.props.randomGridGeneration(rows, columns, randomValues);
    } while (!this.validOrlandoGrid(grid, rows, columns, randomValues));

    for (let i = 0; i < randomStars; i++) {
      let r;
      let c;
      do {
        r = Math.floor(Math.random() * rows);
        c = Math.floor(Math.random() * columns);
      } while (grid[r][c]);

      grid[r][c] = <Star label={this.props.stars.pop()} />;
    }

    return grid;
  };

  render() {
    return (
      <div class="orlando">
        {this.state.config.map((size, index) => (
          <Grid
            index={index}
            size={size}
            content={this.randomOrlandoGeneration(
              size,
              size,
              size == 4 ? 2 : 4,
              2
            )}
          />
        ))}
      </div>
    );
  }
}

class Washington extends React.Component {
  constructor() {
    super();

    this.state = {
      distr: [0, 0, 8, 6, 4, 4],
      bubbles: [0, 0,
      0,
      0,
      1, // 5
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      1
    ]
    };
  }

  printWashingtonBubbles = () => {
    return (
      <div className="bubbles grid gx24">
        {this.state.bubbles.map((bubble, index) => (
          <span className="circ">{bubble !== 0 ? <Lock /> : ''}</span>
        ))}
      </div>
    );
  };

  displayMeter = (circles, squares, showStar) => {
    let meter = [];
    if (5 - circles > 0) {
      new Array(5 - circles).fill(0).forEach(() => {
        meter.push(<span className=""></span>);
      });
    }
    let starCirc;
    if (showStar) {
      starCirc = this.randomIntFromInterval(0, circles - 1);
    }
    new Array(circles).fill(0).forEach((x, index) => {
      meter.push(
        <span className="sqr">
          {showStar && index - starCirc === 0 ? (
            <Star label={this.props.stars.pop()} />
          ) : (
            ""
          )}
        </span>
      );
    });
    new Array(squares).fill(0).forEach((square, index) => {
      meter.push(<span className="circ">{index + 1}</span>);
    });

    return <div className="grid gx30">{meter}</div>;
  };

  generateMeters = () => {
    let meters = [];
    this.state.distr.forEach((circles, index) => {
      let starRow = new Array(circles);
      if (starRow.length) {
        starRow[this.randomIntFromInterval(0, circles - 1)] = true;
        //if (index < 4) {
        let y = this.randomIntFromInterval(0, circles - 1);
        while (starRow[y] === true) {
          y = this.randomIntFromInterval(0, circles - 1);
        }
        starRow[y] = true;
        //}
      }
      for (let c = 0; c < circles; c++) {
        let squares = this.randomIntFromInterval(index * 2, index * 5);
        meters.push(this.displayMeter(index, squares, !!starRow[c]));
      }
    });
    return meters;
  };

  randomIntFromInterval = (min, max) => {
    return max === 0 ? 0 : Math.floor(Math.random() * (max - min + 1) + min);
  };

  render() {
    return (
      <div className="washington">
        {this.generateMeters()}
        {this.printWashingtonBubbles()}
      </div>
    );
  }
}

class Langley extends React.Component {
  constructor() {
    super();
    const config = [];
    let blank = 0;

    for (let e = 0; e < 5; e++) {
      ["+", "-", "*"].forEach((op) =>
        config.push([`_${op}_=_`, blank++ === 0 ? 0 : 1])
      );
    }

    for (let e = 0; e < 15; e++) {
      config.push(["_+_+_=_+_", 2]);
    }

    this.state = { config };
  }

  validateEquation = (equation) => {
    var parts = equation.split("=");
    var left1 = eval(parts[0].split("_").join("1"));
    var right1 = eval(parts[1].split("_").join("1"));

    var left6 = eval(parts[0].split("_").join("6"));
    var right6 = eval(parts[1].split("_").join("6"));

    // make sure its possible
    if (left6 < right1) {
      return false;
    }
    if (right6 < left1) {
      return false;
    }

    return true;
  };

  convertEquationParts = (part) => {
    switch (part) {
      case "=":
      case "+":
      case "-":
      case "x":
      case "/":
        return <div className="box eq">{part}</div>;
      case "_":
        return <div className="box empty"></div>;
      case "*":
        return <div className="box eq">&times;</div>;
      default:
        return <div className="box">{part}</div>;
    }
  };

  randomWashingtonGeneration = (equation, randomValues) => {
    var s = equation;
    do {
      var s = equation;
      for (var i = 0; i < randomValues; i++) {
        var count = (s.match(/_/g) || []).length;
        var nth = 0;
        var target = Math.floor(Math.random() * count) + 1;
        var x = Math.floor(Math.random() * 6) + 1;
        s = s.replace(/_/g, function (match, i, original) {
          nth++;
          return nth === target ? x + "" : match;
        });
      }
    } while (!this.validateEquation(s));

    console.log(s.split(""));
    return s.split("");
  };

  printWashingtonBubbles = () => {
    const bubbles = [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ];
    return (
      <div className="bubbles">
        {bubbles.map((bubble) => (
          <div className="bubble box">{bubble !== 0 && "$"}</div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div class="langley">
        {this.state.config.map((equation, index) => (
          <div
            className={`${index < 15 ? "first" : "secon"} grid gx${
              equation[0].length
            }`}
          >
            {this.randomWashingtonGeneration(
              equation[0],
              equation[1]
            ).map((part_arry) => this.convertEquationParts(part_arry))}
          </div>
        ))}
        {this.printWashingtonBubbles()}
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sheet: "houston",
      forceRefresh: 0
    };
  }

  generateRandomLocations = (myLocation) => {
    return ["H", "H", "H", "O", "O", "O", "W", "W", "W", "A", "A"]
      .filter((location) => location !== myLocation)
      .sort(() => Math.random() - 0.5);
  };

  randomGridGeneration = (rows, columns, randomValues) => {
    let grid = [];
    for (let r = 0; r < rows; r++) {
      grid.push(new Array(columns).fill(0));
    }

    for (let i = 0; i < randomValues; i++) {
      let r;
      let c;
      let x = Math.floor(Math.random() * 6) + 1;
      do {
        r = Math.floor(Math.random() * rows);
        c = Math.floor(Math.random() * columns);
      } while (grid[r][c]);

      grid[r][c] = x;
    }

    return grid;
  };

  validateCount = (grid, rows, columns, randomValues) => {
    // var count = 0;
    // for (var r = 0; r < rows; r++) {
    //   for (var c = 0; c < columns; c++) {
    //     if (grid[r][c] !== 0) {
    //       count++;
    //     }
    //   }
    // }
    // if (count !== randomValues) {
    //   return false;
    // }
    return true;
  };
  validateSpacing = (grid, rows, columns, space, number = true) => {
    for (var r1 = 0; r1 < rows; r1++) {
      for (var c1 = 0; c1 < columns; c1++) {
        // only compare numbers to numbers and other to other
        if (
          (number && Number.isInteger(grid[r1][c1]) && grid[r1][c1] !== 0) ||
          (!number && !Number.isInteger(grid[r1][c1]))
        ) {
          for (
            var r2 = Math.max(0, r1 - space);
            r2 <= Math.min(r1 + space, rows - 1);
            r2++
          ) {
            for (
              var c2 = Math.max(0, c1 - space);
              c2 <= Math.min(c1 + space, columns - 1);
              c2++
            ) {
              if (
                (number && (r1 !== r2 || c1 !== c2) && grid[r2][c2] !== 0) ||
                (!number &&
                  (r1 !== r2 || c1 !== c2) &&
                  !Number.isInteger(grid[r1][c1]) &&
                  !Number.isInteger(grid[r2][c2]))
              ) {
                return false;
              }
            }
          }
        }
      }
    }

    return true;
  };

  selector = (event) => {
    this.setState({ sheet: event.target.value });
  };

  _sheet = (value) => {
    switch (value) {
      case "houston":
        return (
          <Houston
            validateCount={this.validateCount}
            validateSpacing={this.validateSpacing}
            randomGridGeneration={this.randomGridGeneration}
            stars={this.generateRandomLocations("H")}
          />
        );
      case "orlando":
        return (
          <Orlando
            validateCount={this.validateCount}
            validateSpacing={this.validateSpacing}
            randomGridGeneration={this.randomGridGeneration}
            stars={this.generateRandomLocations("O")}
          />
        );
      case "washington":
        return <Washington stars={this.generateRandomLocations("W")} />;
      case "langley":
        return <Langley />;
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <div className="controls">
          <div className="select">
            <select onChange={this.selector} value={this.state.sheet}>
              <option value="">Choose a Location</option>
              <option value="houston">Houston</option>
              <option value="orlando">Orlando</option>
              <option value="washington">Washington</option>
              <option value="langley">Langley (Old)</option>
            </select>
          </div>
          <div className="buttons">
            <button
              className="myButton"
              onClick={() =>
                this.setState({ forceRefresh: this.state.forceRefresh + 1 })
              }
            >
              Reload
            </button>
            <button className="myButton" onClick={() => window.print()}>
              Print
            </button>
          </div>
        </div>
        {this._sheet(this.state.sheet)}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
