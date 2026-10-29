// EngFinite Learning — Writing Task 1 (Academic) questions, by category
// Upload to cPanel public_html alongside index.html (it loads after data-writing.js)
// Add questions to each "questions" list.
// A question with numbers looks like:
//   { n: 1, title: "Cars sold", lines: ["The graph below shows ...", "Summarise the information by selecting and reporting the main features, and make comparisons where relevant."],
//     chart: { type: "line", title: "...", unit: "%", xLabel: "Year", yLabel: "Percentage", x: ["2000","2005"], series: [{name: "A", values: [10, 20]}] },
//     facts_extra: "Optional extra facts for the AI, one per line." }
// chart types: "line", "bar" (use categories + series), "pie" (use pies: [{label, slices:[{name, value}]}]), "table" (columns + rows),
// or "image" ({type:"image", src:"/task1/name.png"}) for processes and maps (then facts_extra must describe the picture in words).
WRITING_DATA.task1 = {
  categories: {
    "line-graph": { name: "Line graphs",  icon: "📈", questions: [
      { n: 1, title: "Australian exports",
        lines: ["The graph below shows the percentage of Australian exports to 4 countries from 1990 to 2012.", "Summarise the information by selecting and reporting the main features, and make comparisons where relevant."],
        chart: { type: "line", title: "Percentage of Australian exports to four countries", unit: "%", xLabel: "Year", yLabel: "Percentage (%)",
          x: ["1990", "1995", "2000", "2005", "2010", "2012"],
          series: [
            { name: "Japan",  values: [26, 20, 18, 18, 17, 17] },
            { name: "US",     values: [11, 8, 11, 8, 5, 7] },
            { name: "China",  values: [2, 3, 5, 11, 25, 28] },
            { name: "India",  values: [1, 1, 1, 5, 7, 5] }
          ] } },
      { n: 2, title: "Population living in cities",
        lines: ["The graph below gives information about the percentage of the population in 4 Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.", "Summarise the information by selecting and reporting the main features, and make comparisons where relevant."],
        chart: { type: "line", title: "Percentage of the population living in cities", unit: "%", xLabel: "Year", yLabel: "Percentage (% of total population)",
          x: ["1970", "1980", "1990", "2000", "2010", "2020", "2030", "2040"],
          series: [
            { name: "Philippines", values: [32, 34, 48, 46, 42, 45, 50, 56] },
            { name: "Malaysia",    values: [30, 40, 45, 60, 71, 76, 81, 83] },
            { name: "Thailand",    values: [18, 23, 30, 30, 32, 33, 40, 49] },
            { name: "Indonesia",   values: [14, 17, 25, 30, 43, 52, 61, 64] }
          ] },
        facts_extra: "Note: the figures were read from a graph, so treat them as approximate (within about 2 points). The values for 2030 and 2040 are predictions." },
      { n: 3, title: "Consumption of spreads",
        lines: ["The graph below shows the consumption of 3 spreads from 1981 to 2007.", "Summarise the information by selecting and reporting the main features, and make comparisons where relevant."],
        chart: { type: "line", title: "Consumption of spreads", unit: "grams", xLabel: "Year", yLabel: "Grams",
          x: ["1981", "1986", "1991", "1996", "2001", "2007"],
          series: [
            { name: "Margarine",                  values: [90, 80, 100, 100, 85, 40] },
            { name: "Low fat & reduced spreads",  values: [null, null, null, 10, 85, 70] },
            { name: "Butter",                     values: [143, 158, 100, 70, 60, 50] }
          ] },
        facts_extra: "Note: the figures were read from a graph, so treat them as approximate (within about 5 grams). Low fat and reduced spreads have no data before 1996." }
    ] },
    "bar-chart":  { name: "Bar charts",   icon: "📊", questions: [] },
    "pie-chart":  { name: "Pie charts",   icon: "🥧", questions: [] },
    "table":      { name: "Tables",       icon: "🗂️", questions: [] },
    "mixed":      { name: "Mixed charts", icon: "🧩", questions: [] },
    "process":    { name: "Processes",    icon: "🔄", questions: [] },
    "map":        { name: "Maps",         icon: "🗺️", questions: [] }
  }
};
