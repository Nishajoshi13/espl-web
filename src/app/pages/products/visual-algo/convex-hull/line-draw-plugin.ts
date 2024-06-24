// tslint:disable-next-line: class-name
export class slopeLinePlugin {
  public verticalLinePlugin = {
    id: "linedraw",
    cvHullPoints: [] as number[],
    n: 0,
    getLinePosition(chart: { getDatasetMeta: (arg0: number) => any; }, pointIndex: string | number) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return { x: data[pointIndex]._model.x, y: data[pointIndex]._model.y };
    },
    renderVerticalLine(chartInstance:any, pointIndex:any, index:any) {
      /* console.log(
        pointIndex + " helo " + this.cvHullPoints[(pointIndex + 1) % this.n]
      ); */
      const initPoint = this.getLinePosition(chartInstance, pointIndex);

      const finalPoint = this.getLinePosition(
        chartInstance,
        // @ts-ignore
        this.cvHullPoints[(index + 1) % this.n]
      );
      const scale = chartInstance.scales["y-axis-0"];
      const context = chartInstance.chart.ctx;

      // render vertical line
      context.beginPath(); //#22cf4a
      context.strokeStyle = "#000000";
      context.setLineDash([10, 5]);
      context.moveTo(initPoint.x, initPoint.y);
      context.lineTo(finalPoint.x, finalPoint.y);
      context.stroke();
    },

    afterRender(chart:any, click:any) {
      this.cvHullPoints = chart.config.options.plugins.linedraw.lineAtIndex;
      // @ts-ignore
      this.n = this.cvHullPoints.length;
      console.log(chart.config);
      if (this.cvHullPoints) {
        this.cvHullPoints.forEach((pointIndex: any, index: any) =>
          this.renderVerticalLine(chart, pointIndex, index)
        );
      }
    }
  };
}
