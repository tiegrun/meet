import React, {useEffect, useState}  from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


export default function EventGenre({events}) {

  const [data, setData] = useState([]);

  useEffect(() => { setData(() => getData()); }, [events]);
  

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

  const singleEvent = events.map((event) => {

    return event.summary.split(" ");

  });

  const singleEventofWords = [].concat(...singleEvent);

  const singleEventofWordsMatching = singleEventofWords.filter(element => genres.includes(element));

  const uniqueEvent = [...new Set(singleEventofWordsMatching)].map((value) => {
    
    return [value, singleEventofWordsMatching.filter(str => str === value).length]
  
  });

  const getData = function(){
    const data = uniqueEvent.map((unique) => {
   
      return {
        name: unique[0],
        value: unique[1]/singleEvent.length
      }
  
    });

    return data
  }

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
          label = {({ name, percent}) =>`${name} ${(percent * 100).toFixed(0)}%`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}