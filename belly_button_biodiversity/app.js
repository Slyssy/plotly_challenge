var dataset;

d3.json("samples.json").then(
    data => {  
        var names = data.names;
        var ele = document.getElementById("selDataset");
        for(var i = 0; i < names.length; i++) {
          var opt = names[i];

          var el = document.createElement("option");
          el.text = opt;
          el.value = opt;

          ele.add(el);
        } 
        dataset = data   
        // console.log("Hello")
        
        // console.log(data.samples.map(d => d.id))
        // console.log(data.names.map(d => d.names))
        // console.log(data.samples.map(d => d.sample_values))
        // console.log(data.samples.map(d => d.otu_ids))     
        
}
    )

    function optionChanged(value) {
            console.log('clicked:', value);
            console.log(dataset);

        var sample = dataset.samples.find(d => d.id === value)
            console.log(sample)

        let trace = [{
            type: 'bar',
            x: sample.sample_values,
            y: sample.otu_ids,
            orientation: 'h'
        }];
        Plotly.newPlot("bar", trace)
        }   
        
        