import { Box } from '@material-ui/core';
import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/Grid";
import {Button, TextField}  from '@material-ui/core';
class News extends Component {
    constructor(props){
        super(props)
        this.state={
            news:[],
            location:''
            
        }
    }
        
    async componentDidMount(){
        const temp=new Date();
        const url=`https://newsapi.org/v2/top-headlines/sources?apiKey=36bc3dc863544cab9dfe1023da1f661d`;
        const res=await fetch(url);
        const news=await res.json();
        console.log(temp.getFullYear());
        console.log(news);
        this.setState({news:news.sources})
    }
    render() {
      const {news}=this.state;
    
     return (
      <div> <Typography variant="h4" color="#008000">Top headlines</Typography>
            {this.state.news.map(news => 
                       <div> 
                           <Grid container spacing={4}>
                            <Grid item lg={7}>
                               <Paper>
                                   <Box p={1} boxShadow={1}>
                                        <Typography variant="subtitle1" variant="h5">
                                         <b>{news.name}</b>
                                        </Typography>
                                           {/* <img src={} width={750}/><div></div> */}
                                              {news.description}
                                              <div align="center"><Button href={news.url} variant="outlined">Read More</Button></div>
                                              <Typography align="right">id:{news.id}<div></div>language:{news.language}</Typography>
                                   </Box>
                                </Paper>
                            </Grid>
                           </Grid>
                       </div> )
            }
      </div>
        );
    }
}
export default News