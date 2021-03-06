import React from "react";
import "./index.scss";
import ReactChart from "react-chartjs-2";

const Chart = ({type = "line", data, options, title, value, showYears, className}) => (
	<div className="chart_container">
		<div className="chart_title">
			<p style={{display: "flex"}}>
				{title} {showYears && <span>2016-2021</span>}
			</p>
			<p className="value">{value}</p>
		</div>
		<ReactChart
			type={type}
			data={data}
			className={className}
			responsive={true}
			options={{
				maintainAspectRatio: false,
				responsive: true,
				scales: {
					...options?.scales,
				},
				layout: {
					...options.layout,
				},
				plugins: {
					legend: {
						position: "bottom",
						align: "center",
						...options?.plugins.legend,
					},
				},
			}}
		/>
	</div>
);

export default Chart;
