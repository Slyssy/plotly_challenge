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
        };

        // // Building Bubble Chart
        // var trace1 = {
        //     x: data.samples.map(d => d.otu_ids),
        //     y: data.samples.map(d => d.sample_values),
        //     mode: 'markers',
        //     marker: {
        //     color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        //     opacity: [1, 0.8, 0.6, 0.4],
        //     size: [40, 60, 80, 100]
        //     }
        // };
        
        // var data = [trace1];
        
        // var layout = {
        //     title: 'Marker Size and Color',
        //     showlegend: false,
        //     height: 600,
        //     width: 600
        // };
        
        // Plotly.newPlot('bubble', data, layout);
        
        dataset = data   
        // console.log("Hello")
        console.log(data)
        // console.log(data.samples.map(d => d.id))
        // console.log(data.names.map(d => d.names))
        // console.log(data.samples.map(d => d.sample_values))
        // console.log(data.samples.map(d => d.otu_ids))     
        
}
    )
    
    
    function optionChanged(value) {
        d3.json("samples.json").then(
            data => {
        //     console.log('clicked:', value);
            console.log(dataset);

        var sample = dataset.samples.find(d => d.id === value)
            console.log(sample);
        
        // Building Bar Chart
        let trace = [{
            type: 'bar',
            x: sample.sample_values.sort((a, b) => b - a).slice(0,10).reverse(),
            text: sample.otu_labels.sort((a, b) => b - a).slice(0,10).reverse(),
            y: sample.otu_ids.sort((a, b) => b - a).slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse(),
            orientation: 'h'
        }];
        Plotly.newPlot("bar", trace)

        // Building Bubble Chart
        var trace1 = {
            x: sample.otu_ids,
            y: sample.sample_values,
            mode: 'markers',
            marker: {
            color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            opacity: [1, 0.8, 0.6, 0.4],
            size: [40, 60, 80, 100]
            }
        };
        
        var data = [trace1];
        
        var layout = {
            title: 'Marker Size and Color',
            showlegend: false,
            height: 600,
            width: 600
        };
        
        Plotly.newPlot('bubble', data, layout);

        // Metadata Table
        let table = d3.select("#metadata-table")

        table.selectAll("tr").remove()

        let tableBody = table.append("tbody")
        dataset.metadata.forEach((d) => {
            let row = tableBody.append("tr")
            row.append("tr").text(d.id)
            row.append("tr").text(d.ethnicity)
            row.append("tr").text(d.gender)
            row.append("tr").text(d.age)
            row.append("tr").text(d.location)
            row.append("tr").text(d.bbtype)
            row.append("tr").text(d.wfreq)
        })

    }
    )

        }   

    