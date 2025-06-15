import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useHoverContext, RawDataPoint } from '../../hooks/HoverContext';

interface HeatMapProps {
  data: RawDataPoint[];
  isLoading: boolean;
}

const HeatMapChart: React.FC<HeatMapProps> = ({ data, isLoading }) => {
  const { setHoveredData } = useHoverContext();

  useEffect(() => {
    console.log('Received heatmap data:', data);
  }, [data]);

  if (isLoading) {
    console.log('Heatmap is loading...');
    return <div>Loading heatmap...</div>;
  }

  if (!data || data.length === 0) {
    console.warn('No heatmap data available.');
    return <div>No data available for heatmap.</div>;
  }

  const rows = 2;
  const cols = 3;

  const paddedData = [...data];
  while (paddedData.length < rows * cols) {
    paddedData.push({ camera_name: '', customer_count: -1 });
  }

  console.log('Padded data:', paddedData);

  const z: (number | null)[][] = [];
  const text: (string | null)[][] = [];
  const annotations: any[] = [];

  const xLabels = ['Col 1', 'Col 2', 'Col 3'];
  const yLabels = ['Row 1', 'Row 2'];

  for (let i = 0; i < rows; i++) {
    const zRow: (number | null)[] = [];
    const textRow: (string | null)[] = [];

    for (let j = 0; j < cols; j++) {
      const index = i * cols + j;
      const item = paddedData[index];
      const isEmpty = item.customer_count === -1 || !item.camera_name;

      zRow.push(isEmpty ? null : item.customer_count);
      textRow.push(isEmpty ? '' : `${item.camera_name}<br>${item.customer_count}`);

      if (!isEmpty) {
        annotations.push({
          x: xLabels[j],
          y: yLabels[i],
          text: `${item.camera_name}<br>${item.customer_count}`,
          showarrow: false,
          font: { color: 'white', size: 12 },
          align: 'center',
        });
      }
    }

    z.push(zRow);
    text.push(textRow);
  }

  console.log('Heatmap z matrix:', z);
  console.log('Heatmap text matrix:', text);
  console.log('Annotations:', annotations);

  const handleHover = (event: any) => {
    const point = event.points?.[0];
    if (!point) return;

    const yIndex = yLabels.indexOf(point.y);
    const xIndex = xLabels.indexOf(point.x);
    const index = yIndex * cols + xIndex;
    const hovered = paddedData[index];

    console.log('Hovered point:', hovered);

    if (hovered && hovered.camera_name) {
      setHoveredData(hovered);
    }
  };

  const maxCount = Math.max(1, ...data.map((d) => d.customer_count));

  return (
    <div className="w-full h-[400px] bg-red-50 p-4 rounded-xl shadow-sm border-red-500 border-1">
      <Plot
        data={[
          {
            z,
            x: xLabels,
            y: yLabels,
            type: 'heatmap',
            text,
            hoverinfo: 'text',
            colorscale: [
              [0.0, '#bbf7d0'],
              [0.15, '#86efac'],
              [0.35, '#facc15'],
              [0.55, '#fb923c'],
              [0.75, '#f87171'],
              [0.9, '#ef4444'],
              [1.0, '#7f1d1d'],
            ],
            showscale: true,
            zmin: 0,
            zmax: maxCount,
            hoverongaps: false,
          },
        ]}
        layout={{
          autosize: true,
          title: 'Camera Customer Count Heatmap',
          annotations,
          margin: { t: 50 },
          paper_bgcolor: '#fef2f2',
          plot_bgcolor: '#fef2f2',
          yaxis: { autorange: 'reversed', showgrid: false },
          xaxis: { showgrid: false },
        }}
        config={{ responsive: true }}
        onHover={handleHover}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HeatMapChart;
