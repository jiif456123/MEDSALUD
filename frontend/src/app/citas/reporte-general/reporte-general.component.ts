import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { MovimientoCaja } from '../models/movimientoCaja.model';
import { MovimientoCajaService } from '../services/movimiento-caja.service';

@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.css']
})
export class ReporteGeneralComponent implements OnInit {
  mesSelect = new FormControl();
  movimientos: MovimientoCaja[] = [];

  meses = [
    { numeroMes: 0, mes: 'Enero' },
    { numeroMes: 1, mes: 'Febrero' },
    { numeroMes: 2, mes: 'Marzo' },
    { numeroMes: 3, mes: 'Abril' },
    { numeroMes: 4, mes: 'Mayo' },
    { numeroMes: 5, mes: 'Junio' },
    { numeroMes: 6, mes: 'Julio' },
    { numeroMes: 7, mes: 'Agosto' },
    { numeroMes: 8, mes: 'Septiembre' },
    { numeroMes: 9, mes: 'Octubre' },
    { numeroMes: 10, mes: 'Noviembre' },
    { numeroMes: 11, mes: 'Diciembre' },
  ]

  //Grafico de barras
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType: any = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Citas' },
  ];

  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return 'S/.' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return 'S/.' + value;
            }
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return  'S/.' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        }
      }
    }
  }


  optionsCir = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return  'S/.' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        }
      }
    }
  }
  //Grafico Circular
  public barChartLabels_Cir: Label[] = [];
  public barChartType_Cir: any = 'pie';
  public barChartLegend_Cir = true;

  public barChartData_Cir: number[] = []

  constructor(
    private movCajaService: MovimientoCajaService,
  ) { }

  async ngOnInit(): Promise<void> {
    var dataMovimientoCaja = await this.movCajaService.listar().toPromise();
    this.movimientos = dataMovimientoCaja.data;
    this.distribuirDatos();
    this.motivoDistinct()
    this.mesSelect.setValue((new Date()).getMonth())
  }

  //Distribuyendo data grafico Barras
  distribuirDatos() {
    const anioActual = (new Date()).getFullYear();
    let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.movimientos.forEach(item => {
      const itemfecha = new Date(item.fechaHora)
      const itemAnio = itemfecha.getFullYear()
      if (anioActual == itemAnio) {
        array[(itemfecha).getMonth()] += item.precio;
      }
    })

    this.barChartData[0].data = array
  }

  //Sacando motivos
  motivoDistinct() {
    let motivos = [];
    this.movimientos.forEach(item => {
      let motivoValidar = motivos.find(it => it == item.motivo.descripcion)
      if (!motivoValidar) {
        motivos.push(item.motivo.descripcion)
      }
    })
    this.barChartLabels_Cir = motivos;
  }

  distribuirDatosCircular(mes: number) {
    const anioActual = (new Date()).getFullYear();
    let array = Array(this.barChartLabels_Cir.length).fill(0).map((x, i) => i);

    this.movimientos.forEach(item => {
      const itemfecha = new Date(item.fechaHora)
      const itemAnio = itemfecha.getFullYear()
      const itemMes = itemfecha.getMonth();
      if (anioActual == itemAnio && itemMes == mes) {
        let indexMotivo = this.barChartLabels_Cir.findIndex(item_Mot => item.motivo.descripcion == item_Mot)
        if (indexMotivo != -1) {
          array[indexMotivo] += item.precio
        }
      }
    })

    this.barChartData_Cir = array
  }
}
