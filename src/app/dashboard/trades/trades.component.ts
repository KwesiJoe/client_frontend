import { Component, OnInit } from '@angular/core';
import { TradesService } from 'src/app/service/trades.service';
import { Trade } from 'src/app/interface/trade.interface'

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit{
  trades: Trade[] = [];
  mockTrades: Trade[] = this.trades;

  constructor(private tradeService: TradesService) {}

  ngOnInit(): void {
    this.tradeService.getTrades().subscribe(data => {
        console.log(data);
        this.trades = data;
        this.mockTrades = data;
      }
    );
  }

  noSort(){
    this.trades = this.mockTrades;
  }

  sortBuy(){
    this.trades = this.mockTrades;
    this.trades = this.trades.filter((trade => trade.side == "BUY"));
  }
  sortSell(){
    this.trades = this.mockTrades;
    this.trades = this.trades.filter((trade => trade.side == "SELL"));
  }

}
