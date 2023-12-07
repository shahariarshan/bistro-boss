import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { FaDollarSign, FaJediOrder, FaUsers } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Sector,  ResponsiveContainer  } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users-stats')
            return res.data;
        }
    });
    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartData =chartData.map(data=>{
    return{name:data.category,value:data.revenue}
})

    return (
        <div>
            <h2 className="text-3xl text-center mx-auto mt-7"><span className="mr-3">Hi,<span className="mr-3 text-amber-300 ml-3">Welcome</span>
                {
                    user?.displayName ? user.displayName : "Back"
                }
            </span></h2>
            <div className="stats stats-vertical px-8 mt-10 grid grid-cols-1 lg:grid-cols-4">
                <div className="stat bg-orange-200 text-text">
                    <div className="stat-title text-red-500">Revenue</div>
                    <div className="stat-value flex gap-4">${stats.revenue}
                        <FaDollarSign className="text-xl"></FaDollarSign></div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat bg-orange-200 text-text">
                    <div className="stat-title text-red-500">Customers</div>
                    <div className="stat-value flex gap-4">{stats.users}
                        <FaUsers className="text-xl"></FaUsers>
                    </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat bg-orange-200 text-text">
                    <div className="stat-title text-red-500">Products</div>
                    <div className="stat-value flex gap-4">{stats.menuItems}
                        <BiSolidFoodMenu className="text-xl"></BiSolidFoodMenu>
                    </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat bg-orange-200 text-text">
                    <div className="stat-title text-red-500">Order</div>
                    <div className="stat-value flex gap-4 ">{stats.orders}
                        <FaJediOrder className="text-xl"></FaJediOrder>
                    </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
            </div>
            <div className="flex">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                <PieChart width={400} height={400}>
          <Pie
            data={PieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {PieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;