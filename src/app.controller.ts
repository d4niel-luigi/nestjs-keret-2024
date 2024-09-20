import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { quotes } from './quotes';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private randomquote = quotes; 

  @Get('quotes')
  @Render('quotes')
  getQuotes() {
    return {
      quotes: quotes
      }
    };


  @Get('randomQuote')
  @Render('randomQuote')
  getRandomQuotes(){
      return {
        idezet : this.randomquote.quotes[Math.floor(Math.random() * this.randomquote.quotes.length)]
      }
  }
  }
  