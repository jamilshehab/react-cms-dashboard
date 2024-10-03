
import './pieChartBox.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const PieChartBox = () => {
  const data = [
    { name: 'Group A', value: 400 , color:'#0088FE' },
    { name: 'Group B', value: 300, color: "#00C49F" },
    { name: 'Group C', value: 300 , color:'#FFBB28'},
    { name: 'Group D', value: 200 , color:'#FF8042'},
  ];
 
  return (
    <div className='pieChartBox'>
      <h1>Leads by Source</h1>
      <div className='chart'>
      <ResponsiveContainer width={"99%"} height={300}>
        <Tooltip contentStyle={{background:"white",borderRadius:"5px"}}/>
      <PieChart>
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
        
      </PieChart>
      </ResponsiveContainer>
      </div>
      <div className='options'>
        {data.map((item)=>(
          <div className='option' key={item.name}>
          <div className="title">
            <div className="dot" style={{backgroundColor:item.color}}/>
              <span className=''>{item.name}</span>
           </div>
           <span className=''>{item.value}</span>

          </div>
        ))}
        
      </div>
    </div>
  )
}

export default PieChartBox
