function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Star extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      React.createElement("div", { class: "star" },
      React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 250 200",
        preserveAspectRatio: "xMidYMid meet" },

      React.createElement("path", { fill: "#F8D64E", d: "m48,234 73-226 73,226-192-140h238z" }),
      React.createElement("text", { "font-size": "80px", fill: "navy", x: "90", y: "150" },
      this.props.label))));




  }}


class Lock extends React.Component {
  render() {
    return (
      React.createElement("svg", { class: "lock", viewBox: "0 0 96 96", preserveAspectRatio: "xMidYMid meet" },
      React.createElement("path", {
        d: "M66.8,48c1,0,1.9,0.4,2.7,1.1s1.1,1.6,1.1,2.7v22.5c0,1-0.4,1.9-1.1,2.7S67.8,78,66.8,78H29.3 c-1,0-1.9-0.4-2.7-1.1s-1.1-1.6-1.1-2.7V51.8c0-1,0.4-1.9,1.1-2.7s1.6-1.1,2.7-1.1h1.3V35.5c0-4.8,1.7-8.9,5.1-12.4 C39.1,19.7,43.2,18,48,18s8.9,1.7,12.4,5.1s5.1,7.5,5.1,12.4c0,0.7-0.2,1.3-0.7,1.8S63.7,38,63,38h-2.5c-0.7,0-1.3-0.2-1.8-0.7 S58,36.2,58,35.5c0-2.8-1-5.1-2.9-7.1s-4.3-2.9-7.1-2.9s-5.1,1-7.1,2.9S38,32.7,38,35.5V48H66.8z" })));






  }}


class Grid extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "innergrid",
    (size, content) => {
      let cells = [];

      for (let i = 0; i < size; i++) {if (window.CP.shouldStopExecution(38)) break;if (window.CP.shouldStopExecution(36)) break;if (window.CP.shouldStopExecution(0)) break;
        for (let j = 0; j < size; j++) {if (window.CP.shouldStopExecution(39)) break;if (window.CP.shouldStopExecution(37)) break;if (window.CP.shouldStopExecution(1)) break;
          cells.push(React.createElement("span", null, content[i][j] || ""));
        }window.CP.exitedLoop(39);window.CP.exitedLoop(37);window.CP.exitedLoop(1);
      }window.CP.exitedLoop(38);window.CP.exitedLoop(36);window.CP.exitedLoop(0);

      return cells;
    });}

  render() {
    return (
      React.createElement("div", { class: `grid grid${this.props.index} gx${this.props.size}` },
      this.innergrid(this.props.size, this.props.content)));


  }}


class RawGrid extends React.Component {
  render() {
    let grid = [];
    for (let i = 0; i < this.props.arr.length; i++) {if (window.CP.shouldStopExecution(2)) break;
      for (let j = 0; j < this.props.arr[i].length; j++) {if (window.CP.shouldStopExecution(3)) break;
        grid.push(
        React.createElement("span", { className: this.props.arr[i][j] === 1 ? "box" : "not-box" },
        typeof this.props.arr[i][j] == "string" && this.props.arr[i][j]));


      }window.CP.exitedLoop(3);
    }window.CP.exitedLoop(2);
    return React.createElement("div", { className: `poly grid gx${this.props.arr.length}` }, grid);
  }}


class Houston extends React.Component {
  constructor() {
    super();_defineProperty(this, "validHoustonGrid",





    (grid, rows, columns, randomValues, randomStars) => {
      // make sure there are the right number cells set
      if (
      !this.props.validateCount(grid, rows, columns, randomValues, randomStars))
      {
        return false;
      }

      // make sure all numbers are spread out
      if (!this.props.validateSpacing(grid, rows, columns, 2)) {
        return false;
      }

      // make sure no numbers are on the edges
      for (var r = 0; r < rows; r++) {if (window.CP.shouldStopExecution(40)) break;if (window.CP.shouldStopExecution(4)) break;
        if (grid[r][0] !== 0 || grid[r][columns - 1] !== 0) {
          return false;
        }
      }window.CP.exitedLoop(40);window.CP.exitedLoop(4);
      for (var c = 0; c < columns; c++) {if (window.CP.shouldStopExecution(41)) break;if (window.CP.shouldStopExecution(5)) break;
        if (grid[0][c] !== 0 || grid[rows - 1][c] !== 0) {
          return false;
        }
      }window.CP.exitedLoop(41);window.CP.exitedLoop(5);

      return true;
    });_defineProperty(this, "randomHoustonGeneration",
    (rows, columns, randomValues, randomStars) => {
      let grid = [];
      do {if (window.CP.shouldStopExecution(42)) break;if (window.CP.shouldStopExecution(6)) break;
        grid = this.props.randomGridGeneration(rows, columns, randomValues);
      } while (!this.validHoustonGrid(grid, rows, columns, randomValues));window.CP.exitedLoop(42);window.CP.exitedLoop(6);

      do {if (window.CP.shouldStopExecution(43)) break;if (window.CP.shouldStopExecution(7)) break;
        for (let i = 0; i < randomStars; i++) {if (window.CP.shouldStopExecution(44)) break;if (window.CP.shouldStopExecution(8)) break;
          let r;
          let c;
          do {if (window.CP.shouldStopExecution(45)) break;if (window.CP.shouldStopExecution(9)) break;
            r = Math.floor(Math.random() * rows);
            c = Math.floor(Math.random() * columns);
          } while (grid[r][c]);window.CP.exitedLoop(45);window.CP.exitedLoop(9);

          grid[r][c] = React.createElement(Star, { label: this.props.stars[i] });
        }window.CP.exitedLoop(44);window.CP.exitedLoop(8);
      } while (
      !this.props.validateSpacing(grid, rows, columns, 1, false) &&
      this.removeStars(grid, rows, columns));window.CP.exitedLoop(43);window.CP.exitedLoop(7);


      for (let i = 0; i < 6; i++) {if (window.CP.shouldStopExecution(46)) break;if (window.CP.shouldStopExecution(10)) break;
        let r;
        let c;
        do {if (window.CP.shouldStopExecution(47)) break;if (window.CP.shouldStopExecution(11)) break;
          r = Math.floor(Math.random() * rows);
          c = Math.floor(Math.random() * columns);
        } while (grid[r][c]);window.CP.exitedLoop(47);window.CP.exitedLoop(11);

        grid[r][c] = React.createElement("span", { className: "blocked" });
      }window.CP.exitedLoop(46);window.CP.exitedLoop(10);

      return grid;
    });this.state = { stars: [] };}
  removeStars(grid, rows, columns) {
    for (let r = 0; r < rows; r++) {if (window.CP.shouldStopExecution(12)) break;
      for (let c = 0; c < columns; c++) {if (window.CP.shouldStopExecution(13)) break;
        if (!Number.isInteger(grid[r][c])) grid[r][c] = 0;
      }window.CP.exitedLoop(13);
    }window.CP.exitedLoop(12);
    return true;
  }
  render() {
    return (
      React.createElement("div", { class: "houston" },
      React.createElement(Grid, {
        index: 0,
        size: 9,
        content: this.randomHoustonGeneration(9, 9, 5, 8) }),

      React.createElement("div", { className: "houston-polys" },
      React.createElement(RawGrid, {
        arr: [
        ["S", 1, 1],
        [1, 1, 0]] }),


      React.createElement(RawGrid, {
        arr: [
        [1, 1, "Z"],
        [0, 1, 1]] }),


      React.createElement(RawGrid, {
        arr: [
        [0, 1],
        ["J", 1],
        [1, 1]] }),


      React.createElement(RawGrid, {
        arr: [
        [1, 0],
        [1, "L"],
        [1, 1]] }),


      React.createElement(RawGrid, {
        arr: [
        [1, 1, 1],
        ["T", 1, 0]] }))));





  }}


class Orlando extends React.Component {
  constructor() {
    super();_defineProperty(this, "validOrlandoGrid",






    (grid, rows, columns, randomValues) => {
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
      for (var r = 0; r < rows; r++) {if (window.CP.shouldStopExecution(48)) break;if (window.CP.shouldStopExecution(14)) break;
        var map = {};
        map[1] = 0;
        map[2] = 0;
        map[3] = 0;
        map[4] = 0;
        map[5] = 0;
        map[6] = 0;
        var count = 0;

        for (var c = 0; c < columns; c++) {if (window.CP.shouldStopExecution(49)) break;if (window.CP.shouldStopExecution(15)) break;
          if (grid[r][c] !== 0) {
            map[grid[r][c]]++;
            count++;
          }
        }window.CP.exitedLoop(49);window.CP.exitedLoop(15);
        if (count > maxLine) {
          return false;
        }
        for (var x = 1; x <= 6; x++) {if (window.CP.shouldStopExecution(50)) break;if (window.CP.shouldStopExecution(16)) break;
          if (map[x] > 1) {
            return false;
          }
        }window.CP.exitedLoop(50);window.CP.exitedLoop(16);
      }window.CP.exitedLoop(48);window.CP.exitedLoop(14);
      for (var c = 0; c < columns; c++) {if (window.CP.shouldStopExecution(51)) break;if (window.CP.shouldStopExecution(17)) break;
        var map = {};
        map[1] = 0;
        map[2] = 0;
        map[3] = 0;
        map[4] = 0;
        map[5] = 0;
        map[6] = 0;
        var count = 0;

        for (var r = 0; r < rows; r++) {if (window.CP.shouldStopExecution(52)) break;if (window.CP.shouldStopExecution(18)) break;
          if (grid[r][c] !== 0) {
            map[grid[r][c]]++;
            count++;
          }
        }window.CP.exitedLoop(52);window.CP.exitedLoop(18);
        if (count > maxLine) {
          return false;
        }
        for (var x = 1; x <= 6; x++) {if (window.CP.shouldStopExecution(53)) break;if (window.CP.shouldStopExecution(19)) break;
          if (map[x] > 1) {
            return false;
          }
        }window.CP.exitedLoop(53);window.CP.exitedLoop(19);
      }window.CP.exitedLoop(51);window.CP.exitedLoop(17);

      return true;
    });_defineProperty(this, "randomOrlandoGeneration",
    (rows, columns, randomValues, randomStars) => {
      var grid = [];
      do {if (window.CP.shouldStopExecution(54)) break;if (window.CP.shouldStopExecution(20)) break;
        grid = [];
        grid = this.props.randomGridGeneration(rows, columns, randomValues);
      } while (!this.validOrlandoGrid(grid, rows, columns, randomValues));window.CP.exitedLoop(54);window.CP.exitedLoop(20);

      for (let i = 0; i < randomStars; i++) {if (window.CP.shouldStopExecution(55)) break;if (window.CP.shouldStopExecution(21)) break;
        let r;
        let c;
        do {if (window.CP.shouldStopExecution(56)) break;if (window.CP.shouldStopExecution(22)) break;
          r = Math.floor(Math.random() * rows);
          c = Math.floor(Math.random() * columns);
        } while (grid[r][c]);window.CP.exitedLoop(56);window.CP.exitedLoop(22);

        grid[r][c] = React.createElement(Star, { label: this.props.stars.pop() });
      }window.CP.exitedLoop(55);window.CP.exitedLoop(21);

      return grid;
    });this.state = { config: [4, 4, 5, 5] };}

  render() {
    return (
      React.createElement("div", { class: "orlando" },
      this.state.config.map((size, index) =>
      React.createElement(Grid, {
        index: index,
        size: size,
        content: this.randomOrlandoGeneration(
        size,
        size,
        size == 4 ? 2 : 4,
        2) }))));





  }}


class Washington extends React.Component {
  constructor() {
    super();_defineProperty(this, "printWashingtonBubbles",






























    () => {
      return (
        React.createElement("div", { className: "bubbles grid gx24" },
        this.state.bubbles.map((bubble, index) =>
        React.createElement("span", { className: "circ" }, bubble !== 0 ? React.createElement(Lock, null) : ""))));



    });_defineProperty(this, "displayMeter",

    (circles, squares, showStar) => {
      let meter = [];
      if (5 - circles > 0) {
        new Array(5 - circles).fill(0).forEach(() => {
          meter.push(React.createElement("span", { className: "" }));
        });
      }
      let starCirc;
      if (showStar) {
        starCirc = this.randomIntFromInterval(0, circles - 1);
      }
      new Array(circles).fill(0).forEach((x, index) => {
        meter.push(
        React.createElement("span", { className: "sqr" },
        showStar && index - starCirc === 0 ?
        React.createElement(Star, { label: this.props.stars.pop() }) :

        ""));



      });
      new Array(squares).fill(0).forEach((square, index) => {
        meter.push(React.createElement("span", { className: "circ" }, index + 1));
      });

      return React.createElement("div", { className: "grid gx30" }, meter);
    });_defineProperty(this, "generateMeters",

    () => {
      let meters = [];
      this.state.distr.forEach((circles, index) => {
        let starRow = new Array(circles);
        if (starRow.length) {
          starRow[this.randomIntFromInterval(0, circles - 1)] = true;
          //if (index < 4) {
          let y = this.randomIntFromInterval(0, circles - 1);
          while (starRow[y] === true) {if (window.CP.shouldStopExecution(57)) break;if (window.CP.shouldStopExecution(23)) break;
            y = this.randomIntFromInterval(0, circles - 1);
          }window.CP.exitedLoop(57);window.CP.exitedLoop(23);
          starRow[y] = true;
          //}
        }
        for (let c = 0; c < circles; c++) {if (window.CP.shouldStopExecution(58)) break;if (window.CP.shouldStopExecution(24)) break;
          let squares = this.randomIntFromInterval(index * 2, index * 5);
          meters.push(this.displayMeter(index, squares, !!starRow[c]));
        }window.CP.exitedLoop(58);window.CP.exitedLoop(24);
      });
      return meters;
    });_defineProperty(this, "randomIntFromInterval",

    (min, max) => {
      return max === 0 ? 0 : Math.floor(Math.random() * (max - min + 1) + min);
    });this.state = { distr: [0, 0, 8, 6, 4, 4], bubbles: [0, 0, 0, 0, 1, // 5
      0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1] };}
  render() {
    return (
      React.createElement("div", { className: "washington" },
      this.generateMeters(),
      this.printWashingtonBubbles()));


  }}


class Langley extends React.Component {
  constructor() {
    super();_defineProperty(this, "validateEquation",
















    equation => {
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
    });_defineProperty(this, "convertEquationParts",

    part => {
      switch (part) {
        case "=":
        case "+":
        case "-":
        case "x":
        case "/":
          return React.createElement("div", { className: "box eq" }, part);
        case "_":
          return React.createElement("div", { className: "box empty" });
        case "*":
          return React.createElement("div", { className: "box eq" }, "\xD7");
        default:
          return React.createElement("div", { className: "box" }, part);}

    });_defineProperty(this, "randomWashingtonGeneration",

    (equation, randomValues) => {
      var s = equation;
      do {if (window.CP.shouldStopExecution(59)) break;if (window.CP.shouldStopExecution(25)) break;
        var s = equation;
        for (var i = 0; i < randomValues; i++) {if (window.CP.shouldStopExecution(60)) break;if (window.CP.shouldStopExecution(26)) break;
          var count = (s.match(/_/g) || []).length;
          var nth = 0;
          var target = Math.floor(Math.random() * count) + 1;
          var x = Math.floor(Math.random() * 6) + 1;
          s = s.replace(/_/g, function (match, i, original) {
            nth++;
            return nth === target ? x + "" : match;
          });
        }window.CP.exitedLoop(60);window.CP.exitedLoop(26);
      } while (!this.validateEquation(s));window.CP.exitedLoop(59);window.CP.exitedLoop(25);

      console.log(s.split(""));
      return s.split("");
    });_defineProperty(this, "printWashingtonBubbles",

    () => {
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
      1];

      return (
        React.createElement("div", { className: "bubbles" },
        bubbles.map((bubble) =>
        React.createElement("div", { className: "bubble box" }, bubble !== 0 && "$"))));



    });const config = [];let blank = 0;for (let e = 0; e < 5; e++) {if (window.CP.shouldStopExecution(27)) break;["+", "-", "*"].forEach((op) => config.push([`_${op}_=_`, blank++ === 0 ? 0 : 1]));}window.CP.exitedLoop(27);for (let e = 0; e < 15; e++) {if (window.CP.shouldStopExecution(28)) break;config.push(["_+_+_=_+_", 2]);}window.CP.exitedLoop(28);this.state = { config };}

  render() {
    return (
      React.createElement("div", { class: "langley" },
      this.state.config.map((equation, index) =>
      React.createElement("div", {
        className: `${index < 15 ? "first" : "secon"} grid gx${
        equation[0].length
        }` },

      this.randomWashingtonGeneration(
      equation[0],
      equation[1]).
      map(part_arry => this.convertEquationParts(part_arry)))),


      this.printWashingtonBubbles()));


  }}


class App extends React.Component {
  constructor() {
    super();_defineProperty(this, "generateRandomLocations",






    myLocation => {
      return ["H", "H", "H", "O", "O", "O", "W", "W", "W", "A", "A"].
      filter(location => location !== myLocation).
      sort(() => Math.random() - 0.5);
    });_defineProperty(this, "randomGridGeneration",

    (rows, columns, randomValues) => {
      let grid = [];
      for (let r = 0; r < rows; r++) {if (window.CP.shouldStopExecution(61)) break;if (window.CP.shouldStopExecution(29)) break;
        grid.push(new Array(columns).fill(0));
      }window.CP.exitedLoop(61);window.CP.exitedLoop(29);

      for (let i = 0; i < randomValues; i++) {if (window.CP.shouldStopExecution(62)) break;if (window.CP.shouldStopExecution(30)) break;
        let r;
        let c;
        let x = Math.floor(Math.random() * 6) + 1;
        do {if (window.CP.shouldStopExecution(63)) break;if (window.CP.shouldStopExecution(31)) break;
          r = Math.floor(Math.random() * rows);
          c = Math.floor(Math.random() * columns);
        } while (grid[r][c]);window.CP.exitedLoop(63);window.CP.exitedLoop(31);

        grid[r][c] = x;
      }window.CP.exitedLoop(62);window.CP.exitedLoop(30);

      return grid;
    });_defineProperty(this, "validateCount",

    (grid, rows, columns, randomValues) => {
      return true;
    });_defineProperty(this, "validateSpacing",
    (grid, rows, columns, space, number = true) => {
      for (var r1 = 0; r1 < rows; r1++) {if (window.CP.shouldStopExecution(64)) break;if (window.CP.shouldStopExecution(32)) break;
        for (var c1 = 0; c1 < columns; c1++) {if (window.CP.shouldStopExecution(65)) break;if (window.CP.shouldStopExecution(33)) break;
          // only compare numbers to numbers and other to other
          if (
          number && Number.isInteger(grid[r1][c1]) && grid[r1][c1] !== 0 ||
          !number && !Number.isInteger(grid[r1][c1]))
          {
            for (
            var r2 = Math.max(0, r1 - space);
            r2 <= Math.min(r1 + space, rows - 1);
            r2++)
            {if (window.CP.shouldStopExecution(66)) break;if (window.CP.shouldStopExecution(34)) break;
              for (
              var c2 = Math.max(0, c1 - space);
              c2 <= Math.min(c1 + space, columns - 1);
              c2++)
              {if (window.CP.shouldStopExecution(67)) break;if (window.CP.shouldStopExecution(35)) break;
                if (
                number && (r1 !== r2 || c1 !== c2) && grid[r2][c2] !== 0 ||
                !number && (
                r1 !== r2 || c1 !== c2) &&
                !Number.isInteger(grid[r1][c1]) &&
                !Number.isInteger(grid[r2][c2]))
                {
                  return false;
                }
              }window.CP.exitedLoop(67);window.CP.exitedLoop(35);
            }window.CP.exitedLoop(66);window.CP.exitedLoop(34);
          }
        }window.CP.exitedLoop(65);window.CP.exitedLoop(33);
      }window.CP.exitedLoop(64);window.CP.exitedLoop(32);

      return true;
    });_defineProperty(this, "selector",

    event => {
      this.setState({ sheet: event.target.value });
    });_defineProperty(this, "_sheet",

    value => {
      switch (value) {
        case "houston":
          return (
            React.createElement(Houston, {
              validateCount: this.validateCount,
              validateSpacing: this.validateSpacing,
              randomGridGeneration: this.randomGridGeneration,
              stars: this.generateRandomLocations("H") }));


        case "orlando":
          return (
            React.createElement(Orlando, {
              validateCount: this.validateCount,
              validateSpacing: this.validateSpacing,
              randomGridGeneration: this.randomGridGeneration,
              stars: this.generateRandomLocations("O") }));


        case "washington":
          return React.createElement(Washington, { stars: this.generateRandomLocations("W") });
        default:
          return null;}

    });this.state = { sheet: "", forceRefresh: 0 };}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("div", { className: "controls" },
      React.createElement("div", { className: "select" },
      React.createElement("select", { onChange: this.selector, value: this.state.sheet },
      React.createElement("option", { value: "" }, "Choose a Location"),
      React.createElement("option", { value: "houston" }, "Houston"),
      React.createElement("option", { value: "orlando" }, "Orlando"),
      React.createElement("option", { value: "washington" }, "Washington"))),


      React.createElement("div", { className: "buttons" },
      React.createElement("button", {
        className: "myButton",
        onClick: () =>
        this.setState({ forceRefresh: this.state.forceRefresh + 1 }) }, "Reload"),




      React.createElement("button", { className: "myButton", onClick: () => window.print() }, "Print"))),




      this._sheet(this.state.sheet)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
