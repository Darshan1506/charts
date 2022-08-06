import React, { Fragment } from 'react'
import {Line} from 'react-chartjs-2'
import { Button } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import "./chartbutton.css"
const LineChart = () => {
  return (
    <Fragment>
        <Line
        data={{
            labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
            datasets:[
                {
                    label:'# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth:1
                },
                {
                   label:'Quantity' ,
                   data:[40,15,50,6,26,30],
                   backgroundColor:'orange',
                   borderColor:'red'
                }
            ]
        }}
        height={400}
        width={600}
        options={{
            maintainAspectRatio:false,
            scales: {
                yAxes:[{
                   ticks:{
                    beginAtZero:true,
                   } 
                }]
            },
            legend:{
                labels:{
                   fontSize:15
                }
            }
        }}
        
    />

    <Grid container justify="center">
    <Button href='/piechart' color='secondary' variant="contained">Pie Chart</Button>
    <Button href='/barchart' color='primary' variant="contained">Bar Chart</Button>
      </Grid>
    
    
    </Fragment>

    
    
  )
}

export default LineChart