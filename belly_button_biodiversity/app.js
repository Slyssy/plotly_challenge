d3.json("samples.json").then(
    data => {   
            
        // console.log("Hello")
        console.log(data)
        // console.log(data.samples.map(d => d.id))
        // console.log(data.names.map(d => d.names))
        // console.log(data.samples.map(d => d.sample_values))
        // console.log(data.samples.map(d => d.otu_ids))     
        // let trace = [{
        //     type: 'bar',
        //     x: data.samples.map(d => d.sample_values),
        //     y: data.samples.map(d => d.otu_ids),
        //     orientation: 'h'
        // }];
        // Plotly.newPlot("bar", data)
}
    )

// let var data = [{
//     type: 'bar',
//     x: data.samples.map(d => d.sample_values),
//     y: data.samples.map(d => d.otu_ids),
//     orientation: 'h'
// }]