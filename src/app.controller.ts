import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { quotes } from './quotes';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  private randomquote = quotes;
  private topauthor = quotes;
  private one = quotes;
  getTopAuthors() {
    const authorMap = new Map<string, number>();

    this.topauthor.quotes.forEach((quote) => {
      authorMap.set(quote.author, (authorMap.get(quote.author) || 0) + 1);
    });

    return authorMap;
  }

  oneQuote(id: number) {
    const user = this.one.quotes.find((quote) => quote.id === id);

    return user;
  }

  @Get('/quotes')
  @Render('index')
  getQuotes() {
    return {
      quotes: quotes
    }
  };


  @Get('randomQuote')
  @Render('randomQuote')
  getRandomQuotes() {
    return {
      idezet: this.randomquote.quotes[Math.floor(Math.random() * this.randomquote.quotes.length)]
    }
  }

  @Get('topAuthors')
  @Render('topAuthors')
  topAuthor(){
    return {
      topauth: this.getTopAuthors()
    }
  }

  @Get('/quotes/:id')
  @Render('findone')
  getOne(@Param('id') id: string) {
    return {
      quotes: this.oneQuote(+id),
    };
  }

  }
